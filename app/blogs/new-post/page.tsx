'use client';

import Link from 'next/link';

export default function NewPostBlog() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] text-stone-300 py-12 px-4 md:px-8">
      <article className="max-w-xl mx-auto">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-100 hover:bg-stone-800/80 transition-colors mb-8 text-sm px-2 py-1 -ml-2 rounded-md"
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
        <h1 className="text-2xl md:text-3xl font-medium text-white mb-2">
          blog post title here
        </h1>
        <p className="text-stone-500 text-sm mb-6">December 16, 2025</p>

        {/* Cover image */}
        {/* <img src="/blog/cover.png" alt="Cover" className="w-full mb-6" /> */}
        {/* <hr className="border-stone-700 mb-8" /> */}

        {/* Content */}
        <div className="space-y-8 text-xs md:text-sm leading-relaxed" style={{ fontWeight: 400 }}>
          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              section title
            </h2>
            <p>
              paragraph text goes here. this is where you write the main content of your blog post.
            </p>
            <p className="mt-4">
              another paragraph with more content.
            </p>
          </section>

          <section>
            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3">
              subsection title
            </h3>
            <p>
              subsection content goes here.
            </p>
            <ul className="mt-3 ml-4 space-y-1 text-stone-400">
              <li>• bullet point one</li>
              <li>• bullet point two</li>
              <li>• bullet point three</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-stone-100 mb-3">
              another section
            </h2>
            <p>
              more content for this section.
            </p>
            {/* Image example */}
            {/* 
            <figure className="mt-6">
              <img
                src="/blog/image.png"
                alt="Description"
                className="w-full"
              />
              <figcaption className="text-stone-500 text-xs mt-2 italic">
                image caption here
              </figcaption>
            </figure>
            */}
          </section>

          <section className="border-t border-stone-700 pt-6 mt-8">
            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3">references</h3>
            <ul className="space-y-2 text-stone-400 text-sm">
              <li>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  example.com - reference title
                </a>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </main>
  );
}

