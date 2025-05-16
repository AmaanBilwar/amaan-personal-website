'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import InfoCard from '@/components/info-card/info-card';

export default function About() {
  const [done, setDone] = useState(false);
  const summaryText =
    "I am currently studying Systems Design Engineering at the University of Waterloo. This fall, I'll be joining TextQL as a Software Engineer Intern in NYC. Previously, I've helped create some awesome things at Ownr, RBC, and Meta Hash Capital.";
  const summaryHtml = `I am currently studying Systems Design Engineering at the University of Waterloo. This fall, I'll be joining <a href=\"https://textql.com\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline hover:text-stone-300\">TextQL</a> as a Software Engineer Intern in NYC. Previously, I've helped create some awesome things at <a href=\"https://www.ownr.co/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline hover:text-stone-300\">Ownr</a>, <a href=\"https://www.rbc.com/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline hover:text-stone-300\">RBC</a>, and <a href=\"https://www.metahashtechnology.com\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"underline hover:text-stone-300\">Meta Hash Capital</a>.`;

  // Calculate approximate typing duration
  const typingDuration = (summaryText.length * 25) + 500; // typeSpeed * length + delaySpeed

  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true);
    }, typingDuration);

    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this runs once on mount

  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-24 pt-20 md:pt-16">
      <div className="max-w-6xl w-full">
        {/* Full-width layout */}
        <div className="w-full">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-10 mt-10">
              Hey I'm Nicholas!
            </h1>
            <div className="text-base sm:text-lg text-stone-300 min-h-[100px] md:min-h-[80px] mb-2">
              {!done ? (
                <span className="text-base sm:text-lg text-stone-400">
                  <Typewriter
                    words={[summaryText]}
                    loop={1}
                    cursor
                    typeSpeed={25}
                    deleteSpeed={50}
                    delaySpeed={500}
                  />
                </span>
              ) : (
                <div
                  className="text-base sm:text-lg text-stone-400"
                  dangerouslySetInnerHTML={{ __html: summaryHtml }}
                />
              )}
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-8 justify-center sm:justify-start">
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
        </div>
        <hr className="border-t border-stone-700 my-10" />

        {/* Grid Layout for Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <InfoCard
            title="Technical Skills"
            description="Languages, Tools, and Technologies"
            details={
              <div className="space-y-4 text-stone-300">
                <div>
                  <p className="font-medium">Languages:</p>
                  <ul className="list-disc list-inside text-sm">
                    <li>Python, Java, C++, HTML/CSS</li>
                    <li>JavaScript, TypeScript, Kotlin, SQL</li>
                    <li>MATLAB, Bash, Swift, JSON</li>
                    <li>Golang, Haskell</li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium">Developer/Design Tools:</p>
                  <ul className="list-disc list-inside text-sm">
                    <li>VS Code, Android Studio, Postico, Jupyter Notebook</li>
                    <li>Git, GitHub, Docker, Heroku</li>
                    <li>AWS, S3, Azure, CircleCI, Kubernetes</li>
                    <li>ChatGPT, Claude, Copilot, Cursor</li>
                    <li>Figma, SOLIDWORKS, AutoCAD</li>
                    <li>Apache Airflow, Dbt, XCode</li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium">Technologies/Frameworks:</p>
                  <ul className="list-disc list-inside text-sm">
                    <li>React, React Native, Node.js, Express.js, Nest.js</li>
                    <li>Supabase, Firebase, Flask, PostgreSQL, MongoDB</li>
                    <li>Redis, RabbitMQ, GraphQL, Jest, PyTorch, TensorFlow</li>
                    <li>Numpy, Pandas, REST APIs, Puppeteer, Tailwind CSS</li>
                    <li>Apache Spark, Kafka, Snowflake, Google BigQuery</li>
                    <li>Angular, Databricks, LangChain, RAG, Vite</li>
                    <li>Next.js, gRPC, Vue.js, Svelte</li>
                  </ul>
                </div>
              </div>
            }
          />

          <InfoCard
            title="Projects"
            description="Engineering & Software Projects"
            details={
              <div className="space-y-4 text-stone-300">
                <div>
                  <p className="font-medium">Featured Projects:</p>
                  <ul className="list-disc list-inside text-sm">
                    <li>Basketbin - Interactive trash bin with sensor integration and motorized arm system</li>
                    <li>Hack the 6ix Basketbin - Collaborative hardware/software project</li>
                    <li>Fernando - 2nd place at UTRA Hacks, posture-correcting robot with OpenCV</li>
                    <li>Musicmaker - Generative music project with AI composition</li>
                    <li>Customer Feedback ETL Piaeline - Data engineering and analysis system</li>
                    <li>Whiteboard - Collaborative brainstorming platform with real-time features</li>
                    <li>Diff Digest - Real-time GitHub PR diff processing with OpenAI integration</li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium">Additional Projects:</p>
                  <ul className="list-disc list-inside text-sm">
                    <li>Web applications and mobile apps</li>
                    <li>Data analysis tools and automation scripts</li>
                    <li>Various hardware/software integrations</li>
                  </ul>
                </div>

                <Link
                  href="https://github.com/nicholaschen09"
                  className="text-pink-500 hover:underline text-sm block mt-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View GitHub Portfolio
                </Link>
              </div>
            }
          />

          <InfoCard
            title="Content Creation"
            description="Social Media & Educational Content"
            details={
              <div className="space-y-2 text-stone-300">
                <p className="font-medium">Platforms:</p>
                <ul className="list-disc list-inside text-sm">
                  <li>YouTube - Tech tutorials</li>
                  <li>TikTok - Engineering life</li>
                  <li>Twitter - Tech insights</li>
                </ul>
                <p className="text-sm mt-2">30k+ followers, 8M+ views</p>
              </div>
            }
          />

          <InfoCard
            title="Creative Work"
            description="Art Portfolio & Photography"
            details={
              <div className="space-y-2 text-stone-300">
                <p className="font-medium">Portfolio:</p>
                <Link
                  href="https://nicholaschen243.wixsite.com/nicholas-chen"
                  className="text-pink-500 hover:underline text-sm block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Art Portfolio
                </Link>
                <p className="text-sm mt-2">Digital art, photography, and design work</p>
              </div>
            }
          />

          <InfoCard
            title="Education"
            description="University of Waterloo Systems Design Engineering"
            details={
              <div className="space-y-2 text-stone-300">
                <p className="font-medium">Systems Design Engineering</p>
                <p className="text-sm">Expected Graduation: 2029</p>
                <ul className="list-disc list-inside text-sm mt-2">
                  <li>President's Scholarship</li>
                  <li>Dean's Honor List</li>
                </ul>
              </div>
            }
          />

          <InfoCard
            title="Work Experience"
            description="Software Engineering/Design Internships"
            details={
              <div className="space-y-8 text-stone-300">
                <div>
                  <p className="font-medium mb-1">Upcoming:</p>
                  <p className="text-sm mb-4">Software Engineer Intern at TextQL (Fall 2025)</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Current:</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Previous:</p>
                  <div className="space-y-2">
                    <p className="text-sm">Software Engineer Intern at RBCx - Ownr (Jan 2025 - Apr 2025)</p>
                    <p className="text-sm">Software Engineer Intern at RBC (Jul 2024 - Aug 2024)</p>
                    <p className="text-sm">Software Engineer at UW Alternative Fuels Team (Sep 2024 - Dec 2024)</p>
                    <p className="text-sm">UX Design Intern at Meta Hash Capital (Mar 2023 - Aug 2023)</p>
                  </div>
                </div>
              </div>
            }
          />

          <InfoCard
            title="Languages"
            description="English, Chinese, French, Japanese"
            details={
              <div className="space-y-2 text-stone-300">
                <ul className="list-disc list-inside text-sm">
                  <li>English - Native</li>
                  <li>Chinese (Mandarin) - Fluent</li>
                  <li>French - Intermediate</li>
                  <li>Japanese - Basic</li>
                </ul>
              </div>
            }
          />

          <InfoCard
            title="Interests"
            description="Fitness, Reading, Creative Hobbies"
            details={
              <div className="space-y-2 text-stone-300">
                <ul className="list-disc list-inside text-sm">
                  <li>Gym training</li>
                  <li>Tech and business books</li>
                  <li>Sewing and fashion design</li>
                </ul>
              </div>
            }
          />
        </div>

        <section className="">
          <h2 className="text-4xl font-bold text-white mt-12 mb-4">
            Contact Me
          </h2>
          <p className="text-stone-400 text-base">
            I'd love to hear from you! Want to hire me? or simply wanna chat?
            Feel free to reach out by{' '}
            <a
              href="mailto:nicholas.chen243@gmail.com"
              className="text-pink-500 hover:underline transition-colors"
            >
              email
            </a>
            , or connect with me on{' '}
            <a
              href="https://www.linkedin.com/in/nicholas-chen-85886726a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:underline transition-colors"
            >
              linkedin
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
