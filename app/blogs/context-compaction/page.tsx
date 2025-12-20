'use client';
import Link from 'next/link';
export default function ContextCompactionBlog() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] text-stone-300 py-12 px-4 md:px-8">
      <article className="max-w-lg mx-auto">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-100 hover:bg-stone-800/80 transition-colors mb-4 text-sm px-2 py-1 -ml-2 rounded-md"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 12L6 8L10 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          back
        </Link>
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-medium text-white mb-2">context compaction</h1>
        <p className="text-stone-500 text-sm mb-6">
          nicholas chen · december 16, 2025 · 8 min read
        </p>
        <img
          src="/blogs/context/too-much-context.png"
          alt="Context Compaction"
          className="w-full h-72 object-cover mb-6 shadow-lg"
        />
        <hr className="border-stone-700 mb-8" />
        {/* Content */}
        <div className="space-y-8 text-xs md:text-sm leading-relaxed" style={{ fontWeight: 400 }}>
          <section>
            <p>
              large language models have a fundamental limitation: they can only process a fixed
              amount of text at once. this context window determines how much conversation history,
              code, or documents the model can "see" when generating a response. as we push ai
              systems to handle longer conversations and more complex tasks, we hit this wall
              constantly. context compaction is the technique that helps us break through it.
            </p>
          </section>
          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              the context window problem
            </h2>
            <p>
              imagine trying to debug a large codebase with an ai assistant. you need the model to
              see the error message, the relevant code files, the test cases, and the conversation
              history about what you've tried. that's easily tens of thousands of tokens. most
              models max out at 128k tokens, and some are much smaller.
            </p>
            <p className="mt-4">
              the naive solution is to just use a bigger context window. but this has problems:
              longer contexts are slower and more expensive to process, attention degrades over long
              sequences (models lose focus), and most importantly, you eventually hit the hard limit
              no matter how large the window is.
            </p>
            <p className="mt-4">
              context compaction gives us a smarter approach: compress the information we need into
              a smaller representation that preserves what matters.
            </p>
          </section>
          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              how context compaction works
            </h2>
            <p>
              the core idea is simple: use the model itself to summarize and compress information.
              instead of keeping every message in a conversation, you periodically compress older
              messages into a condensed summary.
            </p>
            <p className="mt-4">
              here's a typical flow: you keep the most recent messages in full detail, compress the
              middle section of the conversation into a summary, and potentially discard or archive
              very old information that's no longer relevant.
            </p>
            <p className="mt-4">
              the key insight is that not all information has equal value. recent context usually
              matters more than old context. specific technical details matter more than casual
              conversation. the compaction strategy should preserve what's important and compress
              what isn't.
            </p>
          </section>
          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              different compaction strategies
            </h2>
            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3 mt-6">
              sliding window
            </h3>
            <p>
              the simplest approach: keep only the last n tokens. this works for many chat
              applications where old conversation doesn't matter. but you lose all historical
              context, which breaks down for complex multi-turn tasks.
            </p>
            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3 mt-6">
              summarization
            </h3>
            <p>
              use the llm to generate a summary of older messages. for example, compress the last 20
              messages into a 200-word summary of key points and decisions made. this preserves
              important information while dramatically reducing token count.
            </p>
            <p className="mt-4">
              the challenge is deciding what to summarize. you want to preserve: decisions and
              outcomes from the conversation, important context about the task or codebase, specific
              technical details that might be referenced later, and user preferences or constraints.
            </p>
            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3 mt-6">
              semantic compression
            </h3>
            <p>
              instead of text summaries, encode information into embeddings. you can store large
              amounts of context as vectors and retrieve relevant pieces when needed. this is
              essentially rag (retrieval-augmented generation) applied to conversation history.
            </p>
            <p className="mt-4">
              this works well for coding assistants: embed all the code files, functions, and
              documentation. when the user asks a question, retrieve the most relevant pieces. store
              conversation history as embeddings and pull in relevant past exchanges.
            </p>
            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3 mt-6">
              hierarchical compression
            </h3>
            <p>
              compress at multiple levels of detail. keep recent messages verbatim, compress
              medium-old messages into summaries, and compress very old messages into one-line
              takeaways or key facts.
            </p>
            <p className="mt-4">
              this mimics how human memory works - recent events are vivid, older memories are
              summarized, and very old memories are just key facts.
            </p>
          </section>
          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              practical implementation
            </h2>
            <p>
              implementing context compaction requires careful engineering. you need to monitor
              token usage in real-time, trigger compaction before hitting the context limit, and
              preserve critical information that must not be lost.
            </p>
            <p className="mt-4">
              a typical implementation might work like this: track current token count after each
              exchange. when you hit 80% of the context limit, identify the oldest "compactable"
              messages (usually skip the system prompt and recent messages). send those messages to
              the llm with a prompt like "summarize these messages preserving all important
              decisions, technical details, and context." replace the original messages with the
              summary.
            </p>
            <p className="mt-4">
              one critical detail: you need to preserve message structure. if you're building a
              coding assistant, don't compress code changes or function definitions - those need to
              stay exact. compress the conversational reasoning instead.
            </p>
          </section>
          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              when compaction fails
            </h2>
            <p>
              context compaction isn't magic. it has real failure modes that you need to handle.
            </p>
            <p className="mt-4">
              information loss is inevitable. summarization is lossy compression. you will lose
              details, and sometimes those details matter. a user might reference something from 50
              messages ago that got compressed away.
            </p>
            <p className="mt-4">
              compaction costs tokens too. every time you summarize, you're running an llm call. for
              very long conversations, you might spend more tokens on summarization than you save.
            </p>
            <p className="mt-4">
              timing matters. compress too early and you lose useful context. compress too late and
              you hit the context limit. finding the right trigger point requires experimentation.
            </p>
            <p className="mt-4">
              the solution is to be strategic: identify what absolutely cannot be compressed (system
              prompts, current task context, recent code changes) and what can safely be summarized
              (conversational back-and-forth, explanations that led to a decision, exploratory
              questions). give users control - let them mark important messages as "don't compress"
              or manually trigger compaction.
            </p>
          </section>
          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              advanced techniques
            </h2>
            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3 mt-6">
              learned compression
            </h3>
            <p>
              train a specialized model to compress context. instead of using the llm itself for
              summarization, train a smaller, faster model specifically for this task. this can be
              much more efficient and preserve task-specific information better.
            </p>
            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3 mt-6">
              selective attention
            </h3>
            <p>
              some newer architectures support "sparse attention" where the model only pays
              attention to relevant parts of the context. this is built into the model rather than
              requiring explicit compression, but achieves similar goals.
            </p>
            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3 mt-6">
              external memory
            </h3>
            <p>
              store information in a structured database rather than as text. for coding assistants,
              maintain a graph of the codebase structure, function calls, and dependencies. pull in
              only the relevant subgraph for each query.
            </p>
            <p className="mt-4">
              this is more complex but can be dramatically more efficient than text-based
              approaches.
            </p>
          </section>
          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              context compaction project ideas
            </h2>
            <p>
              context compaction (reducing input length while preserving meaning) is a fascinating
              area! here are some compelling projects:
            </p>

            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3 mt-6">
              1. smart document summarizer with controllable compression
            </h3>
            <p>
              build a system that compresses documents by different ratios (2x, 5x, 10x) while
              maintaining key information. add user controls to specify what to preserve (technical
              details, dates, names, etc.).
            </p>

            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3 mt-6">
              2. long conversation memory system
            </h3>
            <p>
              create a chatbot that uses compaction to maintain context over extremely long
              conversations. old messages get progressively compressed while recent ones stay
              detailed. think "hierarchical memory" where distant context is lossy but recent is
              lossless.
            </p>

            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3 mt-6">
              3. meeting notes → action items pipeline
            </h3>
            <p>
              compress hour-long meeting transcripts into structured outputs: decisions made, action
              items, open questions. the compaction here is semantic rather than just extractive.
            </p>

            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3 mt-6">
              4. code repository explainer
            </h3>
            <p>
              take large codebases and create compact representations that capture architecture, key
              functions, and data flow. useful for onboarding or code review. the challenge: compress
              10,000 lines into something an llm can reason about effectively.
            </p>

            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3 mt-6">
              5. multi-document research assistant
            </h3>
            <p>
              compact multiple research papers into a unified knowledge graph or structured summary.
              enable querying across papers without hitting context limits. particularly valuable
              for literature reviews.
            </p>

            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3 mt-6">
              6. sliding window compression for streaming data
            </h3>
            <p>
              process infinite streams (news feeds, social media, logs) by maintaining a compressed
              "state" that updates as new data arrives. old information gets compressed
              progressively more aggressively.
            </p>

            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3 mt-6">
              7. legal document analysis tool
            </h3>
            <p>
              compress contracts and legal documents while preserving critical clauses, obligations,
              and dates. build templates that highlight what changed between document versions.
            </p>

            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3 mt-6">
              8. retrieval-augmented generation (rag) optimizer
            </h3>
            <p>
              instead of retrieving full chunks, retrieve and compress them on-the-fly. experiment
              with: retrieve 20 chunks → compress to fit in context → generate answer.
            </p>

            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3 mt-6">
              9. textbook → flashcard generator
            </h3>
            <p>
              extreme compaction: transform chapters into spaced-repetition flashcards. the
              compaction here is pedagogical—what's the minimum information needed to test
              understanding?
            </p>

            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3 mt-6">
              10. multilingual context compaction
            </h3>
            <p>
              explore how compaction strategies differ across languages. does compacting in the
              source language vs. target language affect translation quality?
            </p>

            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3 mt-6">
              11. lossy vs lossless compaction benchmark
            </h3>
            <p>
              build a framework to measure information loss. create test sets where you know the
              "ground truth" and measure how different compaction techniques preserve different
              types of information (facts, sentiment, reasoning chains).
            </p>

            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3 mt-6">
              12. personal knowledge base with auto-compaction
            </h3>
            <p>
              a notes app that automatically compresses old notes while keeping them searchable.
              recent notes are full-fidelity, 6-month-old notes are compressed 2x, 2-year-old
              notes are 10x compressed.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              how claude code's context compaction works
            </h2>
            <p>
              claude code takes your entire conversation history and creates a summary of it, then
              starts a new chat session with this summary preloaded as the new context. this happens
              in two ways: manually when you trigger <code className="px-1 py-px bg-stone-800/50 rounded text-stone-200 text-[0.85em]">/compact</code>, or automatically when approaching the context window limit.
            </p>

            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3 mt-6">
              when auto-compaction triggers
            </h3>
            <p>
              the timing has evolved significantly. the vscode extension currently auto-compacts at
              approximately 25% remaining context (75% usage), reserving around 20% for the
              compaction process itself. as of v2.0.64, auto-compacting is now instant. this is a
              major shift from earlier versions that would wait until 90-95% capacity, often causing
              problems.
            </p>

            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3 mt-6">
              the compaction process
            </h3>
            <p>
              when your conversation approaches the context window limit, claude code automatically:
            </p>
            <ol className="mt-3 ml-4 space-y-1 text-stone-400 list-decimal">
              <li>analyzes the conversation to identify key information worth preserving</li>
              <li>creates a concise summary of previous interactions, decisions, and code changes</li>
              <li>compacts the conversation by replacing old messages with the summary</li>
              <li>continues seamlessly with the preserved context</li>
            </ol>

            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3 mt-6">
              what gets preserved
            </h3>
            <p>
              according to the sdk documentation, the built-in summary structure includes:
            </p>
            <ul className="mt-3 ml-4 space-y-1 text-stone-400">
              <li>• <span className="text-stone-200">task overview</span>: core request, success criteria, constraints</li>
              <li>• <span className="text-stone-200">current state</span>: completed work, modified files, produced artifacts</li>
              <li>• <span className="text-stone-200">important discoveries</span>: technical constraints, decisions, resolved errors, failed approaches</li>
              <li>• <span className="text-stone-200">next steps</span>: specific actions, blockers, priorities</li>
              <li>• <span className="text-stone-200">context to preserve</span>: user preferences, domain details, commitments</li>
            </ul>

            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3 mt-6">
              the technical reality
            </h3>
            <p>
              under the hood, it's simpler than you might think. the core logic involves checking a
              token threshold after each model response. if the threshold is exceeded (e.g., >75%
              of context), the system injects a summary prompt as a user turn.
            </p>
            <p className="mt-4">
              claude then generates a structured summary wrapped in tags. finally, the system
              replaces the entire message history with a single assistant message containing that
              summary, effectively "resetting" the conversation while keeping the state.
            </p>
            <p className="mt-4">
              is it hard to implement? technically, no. the core logic is about 50 lines of code.
              the challenge is the prompt engineering—deciding exactly what to ask claude to
              preserve so that the "reset" feels seamless and doesn't lose critical details like
              file context or specific user corrections.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              the future of context
            </h2>
            <p>
              context windows keep growing. we've gone from 4k tokens to 128k to experimental models
              with millions of tokens. but this doesn't make compaction obsolete - it just changes
              the trade-offs.
            </p>
            <p className="mt-4">
              longer contexts enable new use cases: analyzing entire codebases at once, processing
              hours of conversation history, and reading complete books for analysis. but they're
              still limited, and compaction techniques make them go further.
            </p>
            <p className="mt-4">
              the real breakthrough will be models that handle compression natively. imagine a model
              that automatically identifies what to "remember" in detail versus what to compress,
              learns over time what information is important for different types of tasks, and
              seamlessly retrieves compressed information when needed.
            </p>
            <p className="mt-4">
              we're moving toward ai systems with much more human-like memory - detailed short-term
              memory, compressed long-term memory, and the ability to recall specific details when
              needed. context compaction is a stepping stone toward that future.
            </p>
          </section>
          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              practical takeaways
            </h2>
            <p>if you're building with llms, here's what to implement:</p>
            <ul className="mt-3 ml-4 space-y-1 text-stone-400">
              <li>• monitor token usage and plan for compaction before hitting limits</li>
              <li>• preserve recent messages and critical context without compression</li>
              <li>• use summarization for conversational context that's less critical</li>
              <li>• consider rag/embeddings for large reference materials like documentation</li>
              <li>• give users visibility and control over what gets compressed</li>
              <li>• test compaction strategies with real usage patterns, not toy examples</li>
            </ul>
            <p className="mt-4">
              context compaction isn't sexy, but it's essential for building ai systems that
              actually work at scale. the models get smarter, but they'll always have limits. smart
              compression is how we work within those limits without sacrificing capability.
            </p>
          </section>
          <section className="border-t border-stone-700 pt-6 mt-8">
            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3">references</h3>
            <ul className="space-y-2 text-stone-400 text-sm">
              <li>
                <a
                  href="https://arxiv.org/abs/2307.06945"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  arxiv.org/abs/2307.06945 - lost in the middle: how language models use long
                  contexts
                </a>
              </li>
              <li>
                <a
                  href="https://www.anthropic.com/index/long-context-windows"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  anthropic.com - long context windows
                </a>
              </li>
              <li>
                <a
                  href="https://arxiv.org/abs/2310.06825"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  arxiv.org/abs/2310.06825 - compressing context to enhance inference efficiency
                </a>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </main>
  );
}
