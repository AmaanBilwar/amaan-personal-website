"use client";

import { useMemo, useState } from "react";
import Footer from "@/components/Footer";
import type { OssItem } from "@/interfaces/oss";

export default function OssClient({
  title,
  description,
  items,
}: {
  title: string;
  description?: string;
  items: OssItem[];
}) {
  const categories = useMemo(() => {
    const present = [...new Set(items.map((item) => item.category).filter(Boolean))] as string[];
    return present.sort((a, b) => a.localeCompare(b));
  }, [items]);

  const [filter, setFilter] = useState<string>("all");

  const filters = useMemo(
    () => [{ id: "all", label: "all" }, ...categories.map((id) => ({ id, label: id }))],
    [categories],
  );

  const filtered = useMemo(
    () => (filter === "all" ? items : items.filter((item) => item.category === filter)),
    [filter, items],
  );

  return (
    <main className="relative z-10 flex min-h-full flex-col items-center p-5 md:p-12">
      <div className="mx-auto w-full max-w-xl space-y-5">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal text-black">{title}</h1>
        </div>

        {filters.length > 1 && (
          <div className="flex flex-wrap gap-3" role="tablist" aria-label="Filter by project">
            {filters.map(({ id, label }) => {
              const active = filter === id;
              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(id)}
                  className={[
                    "nav-link px-0 py-1 text-sm",
                    active
                      ? "text-black underline decoration-current underline-offset-4"
                      : "text-stone-600 hover:text-black",
                  ].join(" ")}
                >
                  {label}
                </button>
              );
            })}
          </div>
        )}

        {filtered.length > 0 ? (
          <ul className="text-sm md:text-base text-stone-600 space-y-1.5 pl-2">
            {filtered.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link block -mx-2 rounded-md px-2 py-0.5 text-stone-600"
                >
                  {item.label}
                  {item.description && (
                    <span className="text-stone-400"> — {item.description}</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm md:text-base text-stone-500">nothing in this category</p>
        )}

        <Footer className="mt-10" />
      </div>
    </main>
  );
}
