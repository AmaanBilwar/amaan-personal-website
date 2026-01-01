'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';

export default function WaterlooCoopBlog() {
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    // Update document title for client-side
    document.title = "my thoughts on waterloo's co-op program | Nicholas Chen";
  }, [t, language]);

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
          {t('blog.back')}
        </Link>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-medium text-white mb-2">
          my thoughts on waterloo's co-op program
        </h1>
        <p className="text-stone-500 text-sm mb-6">{t('blog.waterlooCoop.date')}</p>

        {/* Cover image */}
        <img src="/blogs/waterloo-coop/1b-sankey.png" alt="Waterloo Co-op" className="w-full mb-6" />
        <hr className="border-stone-700 mb-8" />

        {/* Content */}
        <div className="space-y-6 text-xs md:text-sm leading-relaxed" style={{ fontWeight: 400 }}>
          <p className="text-stone-400 italic">
            note: this is my experience from the engineering faculty co-op so content in this blog may differ from the other faculties including math, science, etc..
          </p>

          <p>
            since studying at the university of waterloo, the most common thing i hear being talked about on campus is the school's co-op program. back in high school when i was still deciding between universities, the only school i really wanted to go to was waterloo for the sole reason that they had their own co-op program. i had heard many great things about the opportunities offered, the different countries you could work in and how all the students in every graduating class would always have jobs lined up because of the 2+ years of work experience that gave them that extra advantage. now after being the co-op program now for a bit longer than a year i want to give my thoughts on it and how it has changed me and helped me at the same time.
          </p>

          <section>
            <h2 className="text-base md:text-lg font-medium text-white mb-4 mt-8">
              exploring cities, careers, and chaotic living
            </h2>

            <div className="space-y-4">
              <p>
                during your time in waterloo engineering you will experience a ton of things and one of those will be doing 6 co-ops in 5 years every 4 months that get you 2 years of real work experience. this experience is extremely valuable because not a lot of students get to work in real work environments where they are challenged and treated like adults at such a young age. due to the fact that waterloo does a 4 month study term and 4 month co-op term that rotate between the two, it allows you to explore different career paths, live in different cities and also jump between startups and larger companies.
              </p>

              <img src="/blogs/waterloo-coop/nyc1.JPG" alt="New York City" className="w-full max-h-64 object-cover object-bottom my-6" />

              <p>
                many students i've seen have been able to travel to san francisco, new york, seattle and more. many jobs, especially in tech can be found frequently in those places. landing a co-op job there gives you a chance to leave your hometown to work, eat, sleep and explore a new city on your own for 4 months. you will also go through the thrill of finding housing, trying to make new friends and live frugal but it's all a good learning experience at the end of the day. also from personally having done this for my most recent co-op term, i had a lot of fun, learned a lot and it was definitely a term i won't ever forget.
              </p>

              <img src="/blogs/waterloo-coop/room.JPG" alt="Living space" className="w-full max-h-64 object-cover my-6" />

              <p>
                due to the fact that co-op is every 4 months its quite often that you see students jump company from company and this is where you learn the most about what you enjoy doing and the type of companies you truly want to work for. a lot of things become more clear the more you work in diverse environments and that eventually helps you choose the perfect place after graduating.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-base md:text-lg font-medium text-white mb-4 mt-8">
              learning how to get a job
            </h2>

            <div className="space-y-4">
              <p>
                the nature of waterloo's co-op is already very competitive and when you are surrounded by top talent all fighting for the same few jobs it takes a bit of agency and some hard work to get a good job nowadays.
              </p>

              <p>
                one special part about waterloo's co-op program is the network of alumni that give back internship opportunities to new students through the co-op portal. companies like tesla, snowflake, bloomberg and more all post job postings directly through the site. many fast growing startups will also be seen and chances are either the founders or engineers used to study at waterloo.
              </p>

              <p>
                recruiting for my very first job back in the fall of 2024 was pretty stressful because although i was able to return back to an old company the feeling of me going back didn't feel good. i ended up applying to every job that i saw externally and through the school's portal. i sent cover letters for every single one and even tried to personalize my resume for each specific job posting. this became very tiring and i eventually stopped doing that. although i landed a few interviews, i wasn't so good at interviewing and my technical skills weren't too strong. i think i ended up with around 14 interviews total by the end of the term but i only had one offer of which i declined. i ended up joining a startup that was acquired by the company i had worked at the summer previously. i didn't get a job i truly wanted, but i learned a lot during the 4 months through job searching, interviewing and learning to stand out.
              </p>

              <img src="/blogs/waterloo-coop/sankey.png" alt="Recruiting process" className="w-full max-h-[500px] my-6" />
            </div>
          </section>
        </div>

        <Footer className="mt-10" />
      </article>
    </main>
  );
}
