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
        <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold text-white mb-8">
          Hey, I'm Nicholas!
        </h1>
        <p className="text-stone-400 text-sm font-mono">i'm 19, from toronto.</p>
        <p className="text-stone-400 text-sm font-mono">i've been building things for 3673 days.</p>
        <div>
          <p className="mb-2 text-stone-300">A few of my achievements...</p>
          <ul className="list-disc list-inside text-sm text-stone-400 space-y-1">
            <li>30k followers on social media (x, instagram, tiktok, youtube) and over 10m views</li>
            <li>won 2nd place at the largest robotics hackathon in canada</li>
            <li>designed award winning book covers for authors</li>
          </ul>
        </div>
        <div>
          <p className="mb-4 text-stone-300">I'm currently...</p>
          <ul className="list-disc list-inside text-sm text-stone-400 space-y-1">
            <li>studying systems design engineering at the university of waterloo</li>
            <li>preparing to join textql as a software engineer intern in nyc soon</li>
            <li>building projects to help others create and invent new things</li>
            <li>sharing my journey in tech and creativity online with everyone to see</li>
          </ul>
        </div>

        <p className="mb-2 mt-2 text-sm text-stone-300">I've done pretty much everything you think of that a teenager can do to make money: tutoring, working fast food jobs, selling things, shoveling the snow off neighbour's driveways, internships, freelance work in design and coding as well as brand deals from social media.</p>

        <div className="h-auto min-h-[150px] md:min-h-[120px]">
          <div className="mt-8 space-y-6">
            <div>
              <p className="mb-2 text-stone-300">A few projects I'm working on...</p>
              <ul className="list-disc list-inside text-sm text-stone-400 space-y-1">
                <li>diff digest - website that turns git diffs into release notes </li>
                <li>sql query parser - parser that can query flat JSON objects</li>
                <li>whiteboard - app to brainstorm,create and share ideas</li>
              </ul>
            </div>
            <div>
              <p className="mb-2 text-stone-300">I'm excited about...</p>
              <ul className="list-disc list-inside text-sm text-stone-400 space-y-1">
                <li>building ai agents that surprise and delight people everywhere</li>
                <li>turning data into tools, visuals, and magic for everyone</li>
                <li>chasing creative art sparks, sketching doodles, and imagining new designs every single day</li>
                <li>engineering projects that make me say, "whoa, that's so cool!"</li>
              </ul>
            </div>
            <div>
              <p className="mb-2 text-stone-300">Previously I...</p>
              <ul className="list-disc list-inside text-sm text-stone-400 space-y-1">
                <li>was a software engineer intern at ownr, building tools for entrepreneurs worldwide</li>
                <li>was a software engineer intern at rbc, working on machine learning models</li>
                <li>was a ux design intern at meta hash capital, focusing on user experience in finance technology</li>
                <li>was a ux design intern at voluntrack, designing tools for their volunteer management platform</li>
              </ul>
            </div>

          </div>
        </div>

        <SearchBar />

        <section className="mt-10 mb-6">
          <p className="text-sm text-stone-400">
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


      </div>
    </main >
  );
}
