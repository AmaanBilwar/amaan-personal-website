'use client';
import { useLanguage } from '@/contexts/LanguageContext';

export default function BlogsPage() {
    const { t, language, setLanguage } = useLanguage();

    const blogs = [
        {
            title: "How My Grandpa (Lao Ye) Shaped Me Into The Man I Am Today",
            url: "https://medium.com/@nicholas.chen243/how-my-grandpa-lao-ye-shaped-me-into-the-man-i-am-today-b595fc74bbc0",
            description: "A personal reflection on family influence and life lessons"
        },
        {
            title: "You Should Always Want More",
            url: "https://medium.com/@nicholas.chen243/you-should-always-want-more-6383767c6c72",
            description: "On ambition, growth, and never settling for mediocrity"
        },
        {
            title: "You Don't Need To Fit In",
            url: "https://medium.com/@nicholas.chen243/you-dont-need-to-fit-in-61b4e02d039c",
            description: "Embracing individuality and authentic self-expression"
        },
        {
            title: "Everything I Would Tell Myself If I Was In High School Again",
            url: "https://medium.com/@nicholas.chen243/everything-i-would-tell-myself-if-i-was-in-high-school-again-5cad47571555",
            description: "Life advice and lessons learned from experience"
        },
        {
            title: "Simpson's Rule: WTF Is This And Why Is It Relevant?",
            url: "https://medium.com/@nicholas.chen243/simpsons-rule-wtf-is-this-and-why-is-it-relevant-16c6db474be8",
            description: "Making sense of mathematical concepts and their applications"
        }
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
                        <div className="space-y-6">
                            {blogs.map((blog, index) => (
                                <div key={index} className="border border-stone-500 rounded-lg p-4 md:p-6 hover:border-stone-400 transition-colors">
                                    <a
                                        href={blog.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block group"
                                    >
                                        <h2 className="text-lg md:text-xl font-minecraft text-white mb-3 group-hover:text-stone-300 transition-colors">
                                            {blog.title}
                                        </h2>
                                        <p className="text-stone-400 text-sm font-minecraft mb-4 leading-relaxed">
                                            {blog.description}
                                        </p>
                                        <div className="flex items-center text-stone-500 text-xs font-minecraft">
                                            <span>Read on Medium</span>
                                            <svg
                                                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            ))}
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

                        {/* Additional Info */}
                        <div className="mt-6 w-full">
                            <p className="text-stone-500 text-xs font-minecraft">
                                <span className="text-stone-400">Note:</span> These articles were originally published on Medium and reflect my personal thoughts and experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
} 