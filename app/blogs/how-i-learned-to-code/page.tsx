'use client';

import Link from 'next/link';

export default function SoftwareEngineeringLearningBlog() {
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
        <h1 className="text-2xl md:text-3xl font-medium text-white mb-2">how i learned to code</h1>
        <p className="text-stone-500 text-sm mb-6">
          nicholas chen · december 26, 2025 · 5 min read
        </p>

        {/* Cover image */}
        <img src="/blogs/code/iterm2.png" alt="How I Learned to Code" className="w-full mb-6" />
        <hr className="border-stone-700 mb-8" />

        {/* Content */}
        <div className="space-y-8 text-xs md:text-sm leading-relaxed" style={{ fontWeight: 400 }}>
          <section>
            <ul className="space-y-3 text-stone-300">
              <li>• learned the basics of c++ from my computer science teacher in high school</li>
              <li>• learned the basics of c++ from my computer science teacher in high school</li>
              <li>• joined my school's programming club and learned from better programmers</li>
              <li>
                • tried out competitive programming and did the{' '}
                <a
                  href="https://cemc.uwaterloo.ca/contests/ccc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  ccc
                </a>{' '}
                twice in c++{' '}
              </li>

              <li>
                • joined a group of other students and learned a lot building{' '}
                <a
                  href="https://github.com/VolunTrack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  voluntrack
                </a>
              </li>
              <li>
                • landed first software engineering internship at{' '}
                <a
                  href="https://www.rbc.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  RBC
                </a>{' '}
                in summer 2024
              </li>
              <li>• built an ML model on jupyter notebook using python, numpy and pandas</li>
              <li>
                • went to the{' '}
                <a
                  href="https://uwaterloo.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  university of waterloo
                </a>{' '}
                for systems design engineering
              </li>
              <li>• learned intro to programming in c++ and built projects for school</li>
              <li>• joined engineering design teams to learn how to code in organizations</li>
              <li>
                • joined{' '}
                <a
                  href="https://www.ownr.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  ownr
                </a>{' '}
                as a software engineer intern for the winter
              </li>

              <li>• built sql query parser with typescript and sveltekit for parsing flat json</li>
              <li>
                • implemented custom sql parser supporting where, limit, and logical operators in
                browser
              </li>
              <li>• created diff digest tool fetching 500+ github pr diffs for ai summarization</li>
              <li>
                • optimized openai prompts reducing token usage by 30% while improving summary
                quality
              </li>
              <li>• cached 1000+ summaries and 200+ user sessions in redis for fast pagination</li>
              <li>• built fernando - posture checking robot that won 2nd place at utra hacks</li>
              <li>• used opencv for 95% accurate posture analysis and arduino for servo control</li>
              <li>
                • programmed vision in python and motor control in c++ for real-time adjustments
              </li>
              <li>
                • developed analytics website with next.js and terraform tracking 100+ sessions
              </li>
              <li>• landed software engineering internship at textql in fall 2025</li>
              <li>
                • building ai agents for querying petabytes of structured data with natural language
              </li>
              <li>
                • developed scalable backend services in go and python handling 50k+ requests/day
              </li>
              <li>• created interactive ui in svelte and react with typescript and vite</li>
              <li>
                • used posthog to boost user activation by 25%, cloudflare for security, supabase
                for auth
              </li>
              <li>• redesigned ontology in haskell and go for complex data models</li>
              <li>• converted ai agent into slack bot enabling 500+ users to query insights</li>
              <li>
                • improved streamlit dashboards and sandbox environments for rapid prototyping
              </li>
              <li>• implemented stripe billing infrastructure for subscriptions and invoicing</li>
              <li>
                • continuously learning new technologies: golang, rust, kubernetes, langchain, rag
              </li>
              <li>
                • building projects with modern stack: next.js, tailwind, vercel, aws, cloudflare
              </li>
              <li>
                • still learning every day - from high school basics to enterprise-scale systems
              </li>
            </ul>
          </section>

          <section className="border-t border-stone-700 pt-6 mt-8">
            <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3">references</h3>
            <ul className="space-y-2 text-stone-400 text-sm">
              <li>
                <a
                  href="https://www.linkedin.com/in/nicholas-chen-85886726a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  linkedin.com/in/nicholas-chen-85886726a
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/nicholaschen09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  github.com/nicholaschen09
                </a>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </main>
  );
}
