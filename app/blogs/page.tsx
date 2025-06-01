"use client"
import React from 'react';

export default function BlogsPage() {
    const [openHowIStarted, setOpenHowIStarted] = React.useState(false);
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 max-w-2xl mt-20 mx-auto p-8 text-white">
                <h1 className="text-3xl font-bold">Blogs</h1>
                <ul className="space-y-4">
                    {/* How I Started Section */}
                    <div className="mt-12 -mb-2">
                        <div className="border border-stone-700 rounded-md">
                            <button
                                className="w-full flex justify-start items-center px-4 py-2 font-mono text-sm text-stone-200 focus:outline-none text-left"
                                onClick={() => setOpenHowIStarted((prev) => !prev)}
                            >
                                <span className="flex-1 text-left">Doing Things Differently</span>
                                <span className="text-xs font-mono hover:underline cursor-pointer ml-auto">{openHowIStarted ? 'CLOSE' : 'OPEN'}</span>
                            </button>
                            {openHowIStarted && (
                                <div className="px-4 pb-4 text-stone-400 font-mono text-[9px] leading-tight mb-4">
                                    <p className="px-4 pb-4 text-stone-400 font-mono text-sm mt-2">I started coding the summer after 8th grade mostly out of curiosity. I wanted to understand how the apps I used every day actually worked, so I started building my own.</p>
                                    <br />
                                    <p className="px-4 pb-4 text-stone-400 font-mono text-sm">Early on, I built a simple app to help my immigrant parents convert their chinese money to canadian dollars. It wasn't fancy, but it solved a real problem and that's when it clicked for me, I could use tech to actually help people.</p>
                                    <br />
                                    <p className="px-4 pb-4 text-stone-400 font-mono text-sm">I've always been the kind of person who wants to build things. As a kid, it was LEGO and cardboard contraptions. Now it's robots, web apps, and tools that help others learn, create, or solve problems.</p>
                                    <br />
                                    <p className="px-4 pb-4 text-stone-400 font-mono text-sm -mb-6">Since then, I've done freelance work, internships, launched side projects, and shared everything I've learned online. I've always wanted to invent and create things that matter.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </ul>
            </main>
        </div>
    );
} 