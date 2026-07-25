/**
 * Lightweight fuzzy scorer for short in-memory lists.
 * Prefers contiguous / early matches; allows a few typos via edit distance on tokens.
 */

function normalize(s: string): string {
  return s.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "");
}

/** Subsequence match score — higher is better. null = no match. */
function subsequenceScore(query: string, text: string): number | null {
  let qi = 0;
  let score = 0;
  let consecutive = 0;
  let lastMatch = -2;

  for (let ti = 0; ti < text.length && qi < query.length; ti++) {
    if (text[ti] !== query[qi]) {
      consecutive = 0;
      continue;
    }

    consecutive += 1;
    score += 1 + consecutive * 2;
    if (ti === 0 || /[\s\-_/:]/.test(text[ti - 1] ?? "")) score += 6;
    if (ti === lastMatch + 1) score += 4;
    lastMatch = ti;
    qi += 1;
  }

  if (qi < query.length) return null;
  // Prefer shorter haystacks and earlier matches.
  return score * 100 - text.length - lastMatch;
}

/** Classic Levenshtein; early-exit when distance would exceed max. */
function editDistance(a: string, b: string, max: number): number {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  const prev = new Array<number>(b.length + 1);
  const curr = new Array<number>(b.length + 1);
  for (let j = 0; j <= b.length; j++) prev[j] = j;

  for (let i = 1; i <= a.length; i++) {
    curr[0] = i;
    let rowMin = curr[0];
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      curr[j] = Math.min(curr[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost);
      if (curr[j] < rowMin) rowMin = curr[j];
    }
    if (rowMin > max) return max + 1;
    for (let j = 0; j <= b.length; j++) prev[j] = curr[j]!;
  }
  return prev[b.length]!;
}

function typoScore(query: string, text: string): number | null {
  if (query.length < 2) return null;

  const maxTypos = query.length <= 4 ? 1 : 2;
  const tokens = text.split(/[^a-z0-9]+/).filter(Boolean);
  let best: number | null = null;

  for (const token of tokens) {
    if (token.length < query.length - maxTypos) continue;
    // Compare query against sliding windows of the token for "compuer" ~ "computer".
    const window = Math.max(query.length - maxTypos, 1);
    for (let start = 0; start <= Math.max(0, token.length - window); start++) {
      const slice = token.slice(start, start + query.length + maxTypos);
      const dist = editDistance(query, slice.slice(0, query.length), maxTypos);
      if (dist > maxTypos) continue;
      const score = 40 - dist * 15 - start;
      if (best === null || score > best) best = score;
    }
    const whole = editDistance(query, token, maxTypos);
    if (whole <= maxTypos) {
      const score = 50 - whole * 15;
      if (best === null || score > best) best = score;
    }
  }

  // Also allow query as fuzzy match against the full string when close in length.
  if (text.length <= query.length + maxTypos + 8) {
    const dist = editDistance(query, text.slice(0, query.length + maxTypos), maxTypos);
    if (dist <= maxTypos) {
      const score = 30 - dist * 15;
      if (best === null || score > best) best = score;
    }
  }

  return best;
}

/** Returns a score (higher = better) or null if no match. */
export function fuzzyScore(query: string, ...parts: Array<string | undefined>): number | null {
  const q = normalize(query).trim();
  if (!q) return 0;

  const text = normalize(parts.filter(Boolean).join(" "));
  if (!text) return null;

  if (text.includes(q)) {
    const idx = text.indexOf(q);
    return 10_000 - idx - text.length + q.length * 10;
  }

  const tokens = q.split(/\s+/).filter(Boolean);
  let total = 0;

  for (const token of tokens) {
    if (text.includes(token)) {
      const idx = text.indexOf(token);
      total += 5_000 - idx + token.length * 10;
      continue;
    }

    const sub = subsequenceScore(token, text);
    const typo = typoScore(token, text);
    if (sub === null && typo === null) return null;
    total += Math.max(sub ?? Number.NEGATIVE_INFINITY, typo ?? Number.NEGATIVE_INFINITY);
  }

  return total;
}
