"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { OssItem } from "@/interfaces/oss";
import type { ReadingItem } from "@/interfaces/reading";
import type { SiteHome, SiteLinkItem, SiteRoleLinkItem } from "@/interfaces/site";

export type BlogCategory = "tech" | "life";
export type PostListCategory = BlogCategory | "scratchpad";

export interface BlogPostLink {
  slug: string;
  title: string;
  category: PostListCategory;
  date: string;
}

function RoleRowContent({ item }: { item: SiteRoleLinkItem }) {
  return (
    <>
      <span className="text-stone-600 transition-colors group-hover:text-black">{item.role}</span>
      <span className="inline-flex items-center gap-2 whitespace-nowrap">
        {item.icon ? (
          <img src={item.icon} alt={item.iconAlt ?? item.name} className="h-5 w-auto" />
        ) : (
          "—"
        )}
        <span className="text-stone-600 transition-colors group-hover:text-black">{item.name}</span>
      </span>
    </>
  );
}

function RoleItem({
  item,
  align = "center",
}: {
  item: SiteRoleLinkItem;
  align?: "center" | "left";
}) {
  const [open, setOpen] = useState(false);
  const justify = align === "left" ? "justify-start" : "justify-center";
  const textAlign = align === "left" ? "text-left" : "text-center";

  if (!item.detail) {
    return (
      <li>
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group -mx-2 flex flex-wrap items-center ${justify} gap-x-2 gap-y-0.5 rounded-md px-2 py-0.5 transition-colors hover:bg-stone-100`}
        >
          <RoleRowContent item={item} />
        </a>
      </li>
    );
  }

  return (
    <li className={`flex flex-col ${align === "left" ? "items-start" : "items-center"}`}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((previous) => !previous)}
        className={`group -mx-2 flex flex-wrap items-center ${justify} gap-x-2 gap-y-0.5 rounded-md px-2 py-0.5 transition-colors hover:bg-stone-100`}
      >
        <RoleRowContent item={item} />
      </button>
      <div
        className={`grid w-full transition-[grid-template-rows] duration-200 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className={`max-w-md pt-1.5 text-sm leading-relaxed text-stone-500 ${textAlign}`}>
            {item.detail}{" "}
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-stone-100 px-2 py-[3px] text-xs leading-none text-stone-600 align-middle transition-colors hover:bg-stone-200 hover:text-black"
            >
              {item.name}
            </a>
          </p>
        </div>
      </div>
    </li>
  );
}

function LinkItem({ item }: { item: SiteLinkItem }) {
  const external = /^https?:\/\//.test(item.href);
  const className =
    "group -mx-2 flex flex-wrap items-center gap-1 rounded-md px-2 py-0.5 transition-colors hover:bg-stone-100 hover:text-black";
  const content = (
    <>
      <span className="text-stone-600 transition-colors group-hover:text-black">{item.label}</span>
      {item.description && (
        <span className="hidden text-stone-400 transition-colors group-hover:inline group-hover:text-stone-600">
          — {item.description}
        </span>
      )}
    </>
  );

  return (
    <li>
      {external ? (
        <a href={item.href} rel="noopener noreferrer" className={className}>
          {content}
        </a>
      ) : (
        <Link href={item.href} className={className}>
          {content}
        </Link>
      )}
    </li>
  );
}

function ProjectItem({ item }: { item: SiteLinkItem }) {
  return (
    <li>
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="-mx-2 flex flex-wrap items-center justify-start gap-1 rounded-md px-2 py-0.5 text-stone-600 transition-colors hover:bg-stone-100 hover:text-black"
      >
        <span>{item.label}</span>
        {item.description && <span className="text-stone-400">— {item.description}</span>}
      </a>
    </li>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-2.5 text-sm font-medium text-black md:text-base">{children}</p>;
}

export default function HomeClient({
  home,
  blogPosts,
  currentlyReading = null,
}: {
  home: SiteHome;
  blogPosts: BlogPostLink[];
  readingItems?: ReadingItem[];
  currentlyReading?: ReadingItem | null;
  ossItems?: OssItem[];
}) {
  const writingPosts = blogPosts.filter((post) => post.category !== "scratchpad");
  const scratchpadPosts = blogPosts.filter((post) => post.category === "scratchpad");

  return (
    <main className="relative z-10 flex min-h-full justify-center p-5 pt-16 md:p-12 md:pt-20">
      <div className="flex w-full max-w-3xl flex-col gap-10">
        <Tabs defaultValue="about" className="w-full">
          <TabsList variant="line" className="flex h-9 self-start text-stone-500">
            <TabsTrigger value="about" className="data-[active]:text-stone-100">
              about
            </TabsTrigger>
            <TabsTrigger value="experience" className="data-[active]:text-stone-100">
              experience
            </TabsTrigger>
            <TabsTrigger value="projects" className="data-[active]:text-stone-100">
              projects
            </TabsTrigger>
            <TabsTrigger value="blog" className="data-[active]:text-stone-100">
              blog
            </TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="mt-12 text-left">
            <section
              className="flex flex-col items-start gap-5"
              aria-label="About and current work"
            >
              <h1 className="text-2xl font-normal text-black sm:text-3xl md:text-4xl">
                {home.title}
              </h1>
              {home.currently && (
                <div>
                  <SectionLabel>{home.currently.label}</SectionLabel>
                  <ul className="flex flex-col gap-1.5 pl-2 text-sm text-stone-600 md:text-base">
                    {home.currently.items.map((item, index) => (
                      <RoleItem key={`${item.href}-${index}`} item={item} align="left" />
                    ))}
                  </ul>
                </div>
              )}
              {home.currentlyReading && currentlyReading && (
                <div>
                  <SectionLabel>{home.currentlyReading.label}</SectionLabel>
                  <ul className="flex flex-col gap-1.5 pl-2 text-sm font-bold text-stone-600 md:text-base">
                    {currentlyReading.href ? (
                      <LinkItem
                        item={{
                          label: currentlyReading.title,
                          href: currentlyReading.href,
                          description: currentlyReading.author ?? currentlyReading.note,
                        }}
                      />
                    ) : (
                      <li className="-mx-2 rounded-md px-2 py-0.5 text-stone-600">
                        {currentlyReading.title}
                      </li>
                    )}
                  </ul>
                </div>
              )}
              {home.resume && (
                <div>
                  <SectionLabel>{home.resume.label}</SectionLabel>
                  <ul className="flex flex-col gap-1.5 pl-2 text-sm text-stone-600 md:text-base">
                    {home.resume.items.map((item, index) => (
                      <LinkItem key={`${item.href}-${index}`} item={item} />
                    ))}
                  </ul>
                </div>
              )}
            </section>
          </TabsContent>

          <TabsContent value="experience" className="mt-12 text-left">
            <section className="flex w-full flex-col items-start text-left" aria-label="Experience">
              {home.previously && (
                <>
                  <SectionLabel>{home.previously.label}</SectionLabel>
                  <p className="-mt-1 mb-2 text-sm text-stone-500">click an item to learn more</p>
                  <ul className="flex w-full flex-col gap-1.5 pl-2 text-sm text-stone-600 md:text-base">
                    {home.previously.items.map((item, index) => (
                      <RoleItem key={`${item.href}-${index}`} item={item} align="left" />
                    ))}
                  </ul>
                </>
              )}
            </section>
          </TabsContent>

          <TabsContent value="projects" className="mt-12 text-left">
            <section className="flex w-full flex-col items-start" aria-label="Projects">
              {home.projects && (
                <>
                  <SectionLabel>{home.projects.label}</SectionLabel>
                  <ul className="flex flex-col gap-1.5 pl-2 text-sm text-stone-600 md:text-base">
                    {home.projects.items.map((item, index) => (
                      <ProjectItem key={`${item.href}-${index}`} item={item} />
                    ))}
                  </ul>
                </>
              )}
            </section>
          </TabsContent>

          <TabsContent value="blog" className="mt-12 text-left">
            <section className="flex flex-col items-start" aria-label="Blog">
              <SectionLabel>{home.blog?.label ?? "blog posts"}</SectionLabel>
              {blogPosts.length > 0 ? (
                <div className="flex flex-col gap-4">
                  <ul className="flex flex-col gap-1.5 pl-2 text-sm text-stone-600 md:text-base">
                    {writingPosts.map((post) => (
                      <li key={post.slug}>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="-mx-2 flex items-baseline gap-2 rounded-md px-2 py-0.5 transition-colors hover:bg-stone-100 hover:text-black"
                        >
                          <span className="whitespace-nowrap text-stone-400">{post.date}</span>
                          <span>{post.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {scratchpadPosts.length > 0 && (
                    <div className="flex flex-col gap-1.5 pl-2">
                      <p className="text-sm text-stone-500">
                        {home.scratchpad?.label ?? "scratchpad"}
                      </p>
                      <ul className="flex flex-col gap-1.5 text-sm text-stone-600 md:text-base">
                        {scratchpadPosts.map((post) => (
                          <li key={post.slug}>
                            <Link
                              href={`/blog/${post.slug}`}
                              className="-mx-2 flex items-baseline gap-2 rounded-md px-2 py-0.5 transition-colors hover:bg-stone-100 hover:text-black"
                            >
                              <span className="whitespace-nowrap text-stone-400">{post.date}</span>
                              <span>{post.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <p className="pl-2 text-sm text-stone-500 md:text-base">coming soon...</p>
              )}
            </section>
          </TabsContent>
        </Tabs>
        <Footer className="mx-auto mt-8 w-fit self-center justify-center" />
      </div>
    </main>
  );
}
