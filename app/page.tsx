'use client';
import SearchBar from '@/components/search/search';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import Footer from '@/components/footer/footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24 overflow-x-hidden">
      {/* Hero Section */}
      <div className="max-w-6xl w-full space-y-4 md:space-y-6 mb-10 md:mb-16 pt-24 md:pt-16">
        <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold text-white">
          Nicholas Chen
        </h1>

        <div className="h-auto min-h-[150px] md:min-h-[120px]">
          <TypeAnimation
            sequence={[
              500,
              "I am currently studying Systems Design Engineering at the University of Waterloo. Previously, I've helped create some awesome things at Ownr, RBC and Meta Hash Capital.",
              1000,
            ]}
            wrapper="p"
            speed={10} // Types each character in 10ms
            className="text-base sm:text-lg md:text-xl text-stone-400"
            repeat={0}
          />
        </div>

        <SearchBar />

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
