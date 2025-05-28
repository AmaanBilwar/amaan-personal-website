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

  // Previous ventures data
  const ventures = [
    {
      year: '2019',
      name: 'lemonayd',
      link: '#',
      description: 'Fundraising app for schools, youngest winner of the congressional app challenge.'
    },
    {
      year: '2021',
      name: 'book cover design',
      link: '#',
      description: 'Designed award-winning covers for indie authors.'
    },
    {
      year: '2022',
      name: 'startup hackathon',
      link: '#',
      description: 'Built MVPs and pitched at several hackathons.'
    },
  ];
  const [openVenture, setOpenVenture] = useState<number | null>(null);

  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24 overflow-x-hidden md:ml-10">
      {/* Hero Section */}
      <div className="max-w-3xl w-full mx-auto space-y-4 md:space-y-6 mb-10 md:mb-16 pt-24 md:pt-16">
        <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold text-white mb-8">
          Hey, I'm Nicholas!
        </h1>
        <div className="list-disc list-inside text-xs text-stone-400 space-y-1">
          <p className="text-stone-400">
            I'm 19, from <a href="https://www.destinationtoronto.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-200 transition-colors">toronto</a>.
          </p>
          <p>I've been building things for 3673 days.</p>
        </div>
        <div>
          <p className="mb-2 text-stone-300">A few of my achievements...</p>
          <ul className="list-disc list-inside text-sm text-stone-400 space-y-1">
            <li>30k followers on social media (x, instagram, tiktok, youtube) and over 10m views</li>
            <li>won 2nd place at <a href="https://hackathon.utra.ca/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-200 transition-colors">UTRA Hacks</a>, the largest robotics hackathon in canada</li>
            <li>designed award winning book covers for authors</li>
          </ul>
        </div>
        <div>
          <p className="mb-4 text-stone-300">I'm currently...</p>
          <ul className="list-disc list-inside text-sm text-stone-400 space-y-1">
            <li>
              studying <a href="https://uwaterloo.ca/systems-design-engineering/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-200 transition-colors">systems design engineering</a> at the <a href="https://uwaterloo.ca/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-200 transition-colors">university of waterloo</a>
            </li>
            <li>
              preparing to join <a href="https://textql.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-200 transition-colors">textql</a> as a software engineer intern in <a href="https://visitnyc.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-200 transition-colors">nyc</a> soon
            </li>
            <li>
              building projects to help others create and invent new things
            </li>
            <li>
              sharing my journey in tech and creativity online with everyone to see
            </li>
          </ul>
        </div>

        <p className="mb-2 mt-2 text-sm text-stone-300">I've done pretty much everything you think of that a teenager can do to make money: tutoring, working fast food jobs, selling things, shoveling the snow off neighbour's driveways, internships, freelance work in design and coding as well as brand deals from social media.</p>

        <div className="h-auto min-h-[150px] md:min-h-[120px]">
          <div className="mt-8 space-y-6">
            <div>
              <p className="mb-2 text-stone-300">A few projects I'm working on...</p>
              <ul className="list-disc list-inside text-sm text-stone-400 space-y-1">
                <li>
                  <a href="https://diff-digest-appp.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-200 transition-colors">diff digest</a> - website that turns git diffs into release notes
                </li>
                <li>
                  <a href="https://sql-query-parser.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-200 transition-colors">sql query parser</a> - parser that can query flat JSON objects
                </li>
                <li>
                  <a href="https://whiteboard-app-iota.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-200 transition-colors">whiteboard</a> - app to brainstorm,create and share ideas
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-2 text-stone-300">I'm excited about...</p>
              <ul className="list-disc list-inside text-sm text-stone-400 space-y-1">
                <li>building ai agents that surprise and delight people everywhere</li>
                <li>turning data into tools, visuals, and magic for everyone</li>
                <li>chasing creative art sparks, sketching doodles, and imagining new designs everyday</li>
                <li>engineering projects that make me say, "whoa, that's so cool!"</li>
              </ul>
            </div>
            <div>
              <p className="mb-2 text-stone-300">Previously I...</p>
              <ul className="list-disc list-inside text-sm text-stone-400 space-y-1">
                <li>
                  was a software engineer intern at <a href="https://www.ownr.co/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-200 transition-colors">ownr</a>, building tools for entrepreneurs worldwide
                </li>
                <li>
                  was a software engineer intern at <a href="https://www.rbc.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-200 transition-colors">rbc</a>, working on machine learning models
                </li>
                <li>
                  was a ux design intern at <a href="https://www.metahashtechnology.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-200 transition-colors">meta hash capital</a>, focusing on user experience in fintech
                </li>
                <li>
                  was a ux design intern at <a href="https://voluntracks.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-200 transition-colors">voluntrack</a>, designing tools for their volunteering platform
                </li>
              </ul>
            </div>

          </div>
        </div>

        <h2 className="mt-12 mb-4 text-xl font-bold font-mono">MY PREVIOUS VENTURES:</h2>
        <div className="space-y-2">
          {ventures.map((venture, idx) => (
            <div key={idx} className="border border-stone-700 rounded-md">
              <button
                className="w-full flex justify-between items-center px-4 py-2 font-mono text-base text-stone-200 focus:outline-none"
                onClick={() => setOpenVenture(openVenture === idx ? null : idx)}
              >
                <span>
                  <span className="font-bold">({venture.year})</span> <a href={venture.link} className="underline hover:text-stone-200" target="_blank" rel="noopener noreferrer">{venture.name}</a>
                </span>
                <span className="text-xs font-mono">{openVenture === idx ? 'CLOSE' : 'OPEN'}</span>
              </button>
              {openVenture === idx && (
                <div className="px-4 pb-4 text-stone-300 font-mono text-sm">
                  {venture.description}
                </div>
              )}
            </div>
          ))}
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
