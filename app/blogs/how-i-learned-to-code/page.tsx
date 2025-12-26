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
              <p className="mb-4 text-stone-400 italic text-sm">
                small learnings that taught me to code from start (top) to end (bottom)
              </p>
              <li>
                • built a{' '}
                <a
                  href="https://github.com/nicholaschen09/HangmanGame"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  hangman game
                </a>{' '}
                in java{' '}
              </li>
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
                • built my first{' '}
                <a
                  href="https://github.com/nicholaschen09/PsychAI-main-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  gpt wrapper
                </a>{' '}
                during an online hackathon with friends{' '}
              </li>
              <li>
                • made a{' '}
                <a
                  href="https://github.com/nicholaschen09/StudentRegistration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  student registration
                </a>{' '}
                and{' '}
                <a
                  href="https://github.com/nicholaschen09/MobileCalculatorApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  mobile calculator app
                </a>{' '}
                using kotlin{' '}
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
                • learned a lot of what i needed from{' '}
                <a
                  href="https://www.geeksforgeeks.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  geeks for geeks
                </a>{' '}
                and{' '}
                <a
                  href="https://www.w3schools.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  w3schools
                </a>{' '}
              </li>
              <li>
                • built some random projects with javascript, html and css for the first time{' '}
              </li>

              <li>
                • built the first version of my{' '}
                <a
                  href="https://github.com/nicholaschen09/personalWebsite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  personal website
                </a>
              </li>
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
              <li>• built my resume in latex on overleaf</li>
              <li>• started to solve leetcode problems on a more regular basis</li>
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
              <li>• worked in a production codebase developing internal tools for the team </li>
              <li>• learned typescript, next.js, vite and react and used postman a lot</li>
              <li>• messed around with postgres, sql and the debugger for the first time</li>
              <li>• got more familiar with the terminal and ai and used stack overflow still</li>
              <li>• took data structures and algorithms in c++ during second semester of uni</li>
              <li>
                • hopped on{' '}
                <a
                  href="https://twitter.com/nicholaschen09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  twitter
                </a>{' '}
                where i learned a lot and met other cool cs students
              </li>
              <li>• started to take leetcode more serious and watched a ton of neetcode on yt</li>

              <li>
                • made an{' '}
                <a
                  href="https://github.com/nicholaschen09/customer-feedback-etl-pipeline"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  etl pipeline
                </a>{' '}
                that processed customer feedback
              </li>
              <li>
                • built a{' '}
                <a
                  href="https://github.com/nicholaschen09/summary-discord-bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  discord summarizer bot
                </a>{' '}
                using python for fun at 2am
              </li>
              <li>
                • used golang for the first time and built an{' '}
                <a
                  href="https://github.com/nicholaschen09/image-processor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  image processor
                </a>
              </li>
              <li>
                • made this{' '}
                <a
                  href="https://github.com/nicholaschen09/facial-recognition-neural-network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  facial recognition
                </a>{' '}
                software for fun in python and typescript
              </li>

              <li>• tried learning haskell for the first time</li>
              <li>
                • built{' '}
                <a
                  href="https://github.com/nicholaschen09/sql-query-parser"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  sql query parser
                </a>{' '}
                with typescript and svelte for parsing flat json
              </li>
              <li>
                • created{' '}
                <a
                  href="https://github.com/nicholaschen09/diff-digest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  diff digest tool
                </a>{' '}
                for fetching github pr diffs for ai summarization
              </li>
              <li>
                • landed a software engineering internship at{' '}
                <a
                  href="https://textql.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  textql
                </a>{' '}
                for the fall
              </li>
              <li>• had to learn matlab for one of my uni courses during school</li>
              <li>
                • built a{' '}
                <a
                  href="https://github.com/nicholaschen09/url-shortener"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  url shortener
                </a>{' '}
                using golang and tailwind css hosted on railway
              </li>
              <li>
                • made a{' '}
                <a
                  href="https://github.com/nicholaschen09/whiteboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  mini worse version of figma
                </a>{' '}
                because i was bored one day
              </li>
              <li>• did many takehomes and coding assignments to learn system design </li>

              <li>
                • redesigned my entire{' '}
                <a
                  href="https://nicholaschen.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  personal website
                </a>{' '}
                twice{' '}
              </li>
              <li>• coworker told me to start using iterm2 and i fell in love</li>
              <li>• used a lot of claude code, codex and cursor when programming</li>
              <li>
                • worked on the{' '}
                <a
                  href="https://textql.com/healthcare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  textql healthcare landing page
                </a>
              </li>
              <li>• learned how to use the terminal better than before</li>
              <li>• worked at a startup and used a lot of go, python, typescript and svelte</li>
              <li>• did a lot of agentic and applied ai work</li>
              <li>
                • learned rust for the first time and build some{' '}
                <a
                  href="https://github.com/tinytinyexperiments/visuals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  random things
                </a>
              </li>
              <li>
                • participated in a{' '}
                <a
                  href="https://github.com/nicholaschen09/mercor-challenge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  mercor ML model
                </a>{' '}
                challenge with friend
              </li>
              <li>
                • did some{' '}
                <a
                  href="https://github.com/nicholaschen09/llm-benchmarking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-200 transition-colors underline"
                >
                  benchmarking
                </a>{' '}
                with web search apis for the first time
              </li>
            </ul>
            <p className="mt-6 text-stone-400 italic text-sm">note: i am updating this everyday</p>
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
