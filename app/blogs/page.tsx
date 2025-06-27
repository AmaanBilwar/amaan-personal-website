'use client';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function BlogsPage() {
    const { t, language, setLanguage } = useLanguage();
    const [expandedBlogs, setExpandedBlogs] = useState<number[]>([]);

    const toggleBlog = (index: number) => {
        setExpandedBlogs(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    const blogs: Array<{
        title: string;
        url: string;
        description: string;
        fullContent?: string;
    }> = [
            {
                title: "How My Grandpa (Lao Ye) Shaped Me Into The Man I Am Today",
                url: "https://medium.com/@nicholas.chen243/how-my-grandpa-lao-ye-shaped-me-into-the-man-i-am-today-b595fc74bbc0",
                description: "A personal reflection on family influence and life lessons",
                fullContent: `usually you hear about all the fathers that have influenced their children in becoming a better man blah blah blah, but in my case, it was my grandpa or at home i call him lao ye in chinese.

my grandpa has always influenced me in many ways when it comes to money, way of life and education.

in grade 3 or 4, he would sit my little brother and i in the back of the car everyday when he picked me up from day care and make us both recite our times tables. he wouldn't take us home until we got all 1x1 to 10x10 correct with speed. i still remember hating it and crying so many times whenever we would mess up and make us redo it all again.

in grade 5 he taught me that school was very important and then proceeded to flex on me saying he got 100s in his entire life even in uni.

in grade 6 i remember him catching me throwing away an apple to fell on the kitchen floor in our house and told me to pick it up, wash it and eat it instead because wasting food is morally wrong.

in grade 8 when i was preparing to join a new school and doing the arts, he explained that the arts were very important and that he thought we needed more in our lives whenever he saw my paintings.

in grade 9 when i became less of a fetus and more of a matured teen, i was told that i needed to go to a good university so that i could get a good job and become successful when i got older. that was part of the drive that made me want to commit to uwaterloo and bust my ass throughout high school to get in. i knew that having uwaterloo on my resume would give me so many more opportunities and it stays true to this day.

in grade 10 and 11 he said to me you should build for the world not yourself. the money you make should go back into the world and the product you build should help humans grow as a species. this was also the time around where he started feeling weak and noticing his aging. the crazy part of all this was that didn't stop him from working everyday. he is still the most hardworking man ik to this day (and the only 80 year old that still wants to run his own business, make some money and change the world.)

towards the end of highschool he started to respect me and see that i was becoming the man he once was and that sparked joy in my heart for him to be proud of me for one of the few first times in a while.

my grandpa taught me a lot about life and his life is a continuation through me as i study engineering at a good school just like him.

one day, i want to be able to buy him a mechanical engineering warehouse/factory where he can mess around and build whatever he desires (and also to stop him from trying to revamp our entire house into one).`
            },
            {
                title: "You Should Always Want More",
                url: "https://medium.com/@nicholas.chen243/you-should-always-want-more-6383767c6c72",
                description: "On ambition, growth, and never settling for mediocrity",
                fullContent: `if you met me now, you might think that i'm a rather ambitious person, but i wasn't always this way.

when i realized i was pretty good at school and excelled at those one minute times tables i was given in grade 5, i fell in love with wanting more. i remember being in class so hyped whenever our teacher gave us them to be marked because i knew it was going to be an easy 100.

obviously, learning my multiplication tables wasn't super easy at first.

i do want to note that my grandpa played a huge role in this and he continued to do so for the rest of my life -> you can read more about my relationship between him and i and how he shaped the way i am today here.

even knowing my times tables in grade 5 wasn't super impressive.

i was always average.

i remember my mother trying to comfort me all the time, saying that i was doing good in everything but not super well in anything specific and how it was okay, but i didn't think so.

we had awards ceremonies during the halfway mark and at the end of every year. in my last year of elementary school, i remember not receiving anything halfway through grade 5 and being super disappointed.

after getting beaten up by school and validation, it fuelled me to work super hard and although i was in grade 5 i feel like i matured a bit faster than my other peers and worked extremely hard. fast forward a few months -> i ended up receiving one of those awards at the end of that year before graduation.

seeing my hard work pay off was mind blowing to me in grade 5 lol. after that i realized that i could do better and accomplish more goals if i tried hard enough.

this mindset carried throughout middle school where i tried to ace every test i wrote and score perfect on every assignment i handed in. the more i did well, the more i was fuelled to want more. this turned into a positive feedback loop and my parents started to see something in me finally.

in grade 8 of middle school i applied to the claude watson school of the arts at earl haig (specifically visual arts) and i just remember everyone telling me (including my parents) how difficult it was to get in and that they didn't want me to feel sad if i didn't.

i worked a good 4 months on my application portfolio.

guess what? i got in lol. it was towards the summer time after class one day that my mother called me and told me the good news. this further reinforced my drive for wanting more b/c now i thought that anything was achievable if i worked hard enough.

there is always more to chase and the fun part isn't even when you accomplish your goals, it's more of the process and grind that gets you there. i enjoyed the grind more than the result. i was addicted to the grind.

i followed through with this mindset again for when college/university applications came around.

after busting my ass for all of grade 11 and 12, attending club meetings, leading volunteer work, doing internships, hackathons and building projects, i ended up getting into my dream program, syde at uwaterloo.

i'm now studying syde at waterloo and my past co-op job wasn't the most desirable so guess what? i wanted more. i worked hard while at and outside of work to learn as much as i could, build my personal brand and network. i grinded leetcode, projects and attended as many hackathons as i could. i built my linkedin up and connected with a lot of people on the platform to get more exposure for recruiters. i even got so desperate at one point i started cold emailing.

during this time around i also started posting on social media and what actually landed me a job was x or twitter as past users call it. a founding engineer reached out to me for an interview. i was super stoked for the first time in a while. i remember spending a good chunk of time on the takehome he gave me because this was a super good opportunity. i ended up getting the offer and taking it b/c i'm ngl, the pay was unheard of to me and best of all, i would be going to nyc to do the internship!

okay, so my point of writing all this is that i'm not exactly sure if all this was just an accumulation of my hard work, luck or something else, but one thing i do know is if i wasn't so ambitious and wanted more, these opportunities would've never come to me.

basically, you should never be complacent and change is good for you (especially if you're young). you should always want more.`
            },

        ];

    return (
        <main className="flex min-h-screen flex-col items-center p-6 md:p-24 overflow-x-hidden md:ml-10 -mt-4">
            <div className="w-full max-w-full md:max-w-3xl mx-auto space-y-4 md:space-y-6 mb-10 md:mb-16 pt-24 md:pt-16">
                {/* Page Title */}
                <div className="mb-6 md:mb-8 ml-4 md:ml-8">
                    <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold text-white mb-4 font-minecraft">
                        Blogs
                    </h1>
                </div>

                <div className="bg-[#1a1a1a] text-white p-3 md:p-8 pb-8 md:pb-16 -mb-6 md:mb-10">
                    <div className="w-full md:max-w-4xl mx-auto">
                        <div className="mb-8 w-full">
                            <p className="text-stone-300 text-sm font-minecraft mb-6">
                                A collection of my thoughts, experiences, and reflections on life, growth, and learning.
                            </p>
                        </div>

                        {/* Blog Posts */}
                        <div className="space-y-4">
                            {blogs.map((blog, index) => {
                                const isExpanded = expandedBlogs.includes(index);
                                return (
                                    <div key={index} className="border border-stone-700 rounded-md">
                                        <button
                                            className="w-full flex justify-between items-center px-4 py-3 font-minecraft text-sm text-stone-200 focus:outline-none text-left hover:bg-stone-800/30 transition-colors"
                                            onClick={() => toggleBlog(index)}
                                        >
                                            <span className="flex-1 text-left pr-4">{blog.title}</span>
                                            <svg
                                                className={`w-4 h-4 transition-transform duration-200 flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        {isExpanded && (
                                            <div className="px-4 pb-4 border-t border-stone-700">
                                                <div className="text-stone-400 text-sm font-minecraft mb-4 mt-3 leading-relaxed">
                                                    {blog.fullContent ? (
                                                        <div className="whitespace-pre-line">
                                                            {blog.fullContent}
                                                        </div>
                                                    ) : (
                                                        <p>{blog.description}</p>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Language Toggle Button */}
                        <div className="mt-8 md:mt-12 mb-0 w-full">
                            <div className="flex items-center gap-3 p-3 bg-white/5 border border-stone-600 rounded-lg hover:bg-white/10 transition-colors w-fit">
                                <span className="text-stone-300 text-sm font-minecraft">{t('language.label')}</span>
                                <div className="flex items-center gap-2">
                                    <span className={`text-sm font-minecraft transition-colors duration-200 ${language === 'en' ? 'text-white' : 'text-stone-500'}`}>
                                        EN
                                    </span>
                                    <button
                                        onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
                                        className="relative inline-flex h-5 w-9 items-center rounded-full bg-stone-600 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 focus:ring-offset-[#1a1a1a] hover:bg-stone-500"
                                        role="switch"
                                        aria-checked={language === 'zh'}
                                        aria-label="Toggle language"
                                    >
                                        <span
                                            className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform duration-200 ${language === 'zh' ? 'translate-x-5' : 'translate-x-1'
                                                }`}
                                        />
                                    </button>
                                    <span className={`text-sm font-minecraft transition-colors duration-200 ${language === 'zh' ? 'text-white' : 'text-stone-500'}`}>
                                        中文
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
} 