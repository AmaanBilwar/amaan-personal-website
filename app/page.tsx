'use client';
import SearchBar from '@/components/search/search';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';
import { useState, useEffect } from 'react';

export default function Home() {
  const [done, setDone] = useState(false);
  const summaryText =
    "I am currently studying Systems Design Engineering at the University of Waterloo. This fall, I'll be joining TextQL as a Software Engineer Intern in NYC. Previously, I've helped create some awesome things at Ownr, RBC, and Meta Hash Capital.";
  const summaryHtml = `I am currently studying Systems Design Engineering at the University of Waterloo. This fall, I'll be joining <a href="https://textql.com" target="_blank" rel="noopener noreferrer" class="underline hover:text-stone-300">TextQL</a> as a Software Engineer Intern in NYC. Previously, I've helped create some awesome things at <a href="https://www.ownr.co/" target="_blank" rel="noopener noreferrer" class="underline hover:text-stone-300">Ownr</a>, <a href="https://www.rbc.com/" target="_blank" rel="noopener noreferrer" class="underline hover:text-stone-300">RBC</a>, and <a href="https://www.metahashtechnology.com" target="_blank" rel="noopener noreferrer" class="underline hover:text-stone-300">Meta Hash Capital</a>.`;

  // Calculate approximate typing duration
  const typingDuration = (summaryText.length * 25) + 500; // typeSpeed * length + delaySpeed

  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true);
    }, typingDuration);

    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this runs once on mount

  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24 overflow-x-hidden">
      {/* Hero Section */}
      <div className="max-w-6xl w-full space-y-4 md:space-y-6 mb-10 md:mb-16 pt-24 md:pt-16">
        <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold text-white">
          Nicholas Chen
        </h1>

        <div className="h-auto min-h-[150px] md:min-h-[120px]">
          <div className="mt-8 space-y-6">
            <div>
              <p className="mb-2">I'm currently...</p>
              <ul className="list-disc list-inside text-base text-stone-400 space-y-1">
                <li>studying systems design engineering at the university of waterloo</li>
                <li>sharing tech, engineering, and creative projects online</li>
              </ul>
            </div>
            <div>
              <p className="mb-2">I'm excited about ...</p>
              <ul className="list-disc list-inside text-base text-stone-400 space-y-1">
                <li>the climate cinematic universe, electrification and resilience (history, energy policy, batteries, etc)</li>
                <li>the weird and silly</li>
                <li>cultivating the potential of people, throwing life-changing events, match-making, raising baby ideas</li>
                <li>engineering that makes your heart flutter</li>
                <li>telling the history of technology, theories of civilizational prosperity, institution design</li>
              </ul>
            </div>
            <div>
              <p className="mb-2">Previously...</p>
              <ul className="list-disc list-inside text-base text-stone-400 space-y-1">
                <li>Software Engineer Intern at RBCx - Ownr</li>
                <li>Software Engineer Intern at RBC</li>
                <li>UX Design Intern at Meta Hash Capital</li>
              </ul>
            </div>
            <div>
              <p className="mb-2">Projects...</p>
              <ul className="list-disc list-inside text-base text-stone-400 space-y-1">
                <li>Basketbin - Interactive trash bin with sensor integration and motorized arm system</li>
                <li>Fernando - posture-correcting robot with OpenCV</li>
                <li>Whiteboard - Real-time collaborative brainstorming platform</li>
                <li>Diff Digest - Real-time GitHub PR diff processing with OpenAI integration</li>
                <li>SQL Query Parser - Natural language to SQL translation tool</li>
              </ul>
            </div>
          </div>
        </div>

        <SearchBar />

        <section className="mt-10 mb-6">
          <p className="text-base text-stone-400">
            I'd love to hear from you! Want to hire me? or simply wanna chat? Feel free to reach out by{' '}
            <a
              href="mailto:nicholas.chen243@gmail.com"
              className="text-stone-400 underline hover:text-stone-200 transition-colors"
            >
              email
            </a>
            , or connect with me on{' '}
            <a
              href="https://www.linkedin.com/in/nicholas-chen-85886726a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 underline hover:text-stone-200 transition-colors"
            >
              linkedin
            </a>
            .
          </p>
        </section>

        <div className="flex space-x-8 pt-1 justify-center sm:justify-start" style={{ marginTop: '5rem' }}>
          <Link
            href="https://www.linkedin.com/in/nicholas-chen-85886726a/"
            className="text-white hover:text-stone-300 transition-colors"
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <img
                src="/linkedin.png"
                alt="LinkedIn"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://github.com/nicholaschen09"
            className="text-white hover:text-stone-300 transition-colors"
          >
            <div className="w-12 h-8 flex items-center justify-center mt-1">
              <img
                src="/github1.png"
                alt="GitHub"
                className="w-10 h-10 md:w-12 md:h-12"
              />
            </div>
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="mailto:nicholas.chen243@gmail.com"
            className="text-white hover:text-stone-300 transition-colors"
          >
            <div className="w-11 h-12 flex items-center justify-center relative -top-1">
              <img
                src="/email.png"
                alt="Email"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <span className="sr-only">Email</span>
          </Link>
          <Link
            href="https://x.com/nicholaschen__"
            className="text-white hover:text-stone-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-11 h-8 flex items-center justify-center relative">
              <img
                src="/twitter.png"
                alt="Twitter"
                className="max-w-full max-h-full object-contain translate-y-1 translate-x-1"
              />
            </div>
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
