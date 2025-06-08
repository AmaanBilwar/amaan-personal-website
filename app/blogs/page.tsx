"use client"
import React from 'react';

export default function BlogsPage() {
    const [openHowIStarted, setOpenHowIStarted] = React.useState(false);
    return (
        <main className="flex min-h-screen flex-col items-center p-6 md:p-24 overflow-x-hidden md:ml-10 -mt-4">
            <div className="max-w-2xl w-full md:mr-8 space-y-4 md:space-y-6 mb-10 md:mb-16 pt-24 md:pt-16 px-2">
                <h1 className="text-3xl font-bold mb-8">Blogs</h1>
                <ul className="space-y-4">
                    {/* How I Started Section */}
                    <div className="mt-6 md:mt-12 mb-4">
                        <div className="border border-stone-700 rounded-md">
                            <button
                                className="w-full flex justify-start items-center px-4 py-2 font-minecraft text-sm text-stone-200 focus:outline-none text-left"
                                onClick={() => setOpenHowIStarted((prev) => !prev)}
                            >
                                <span className="flex-1 text-left">Doing Things Differently</span>
                                <span className="text-xs font-minecraft hover:underline cursor-pointer ml-auto">{openHowIStarted ? 'CLOSE' : 'OPEN'}</span>
                            </button>
                            {openHowIStarted && (
                                <div className="px-4 pb-4 text-stone-400 font-minecraft text-[9px] leading-tight mb-2">
                                    <p className="px-4 pb-4 text-stone-400 font-minecraft text-sm mt-2">
                                        At the University of Waterloo, I never really did things the "normal" way.
                                        I came from an arts background, not your typical pre-engineering track, so I
                                        already felt a little different. I thought joining design teams would help me,
                                        but they never felt right. I just couldn't get into the structure,
                                        the meetings, and the pace. Everyone else seemed to be grinding classes,
                                        and going to parties. Me? I skipped most lectures and didn't
                                        really show up to any events. Instead, I spent my time learning things
                                        on my own, messing around with side projects, learning how to use AI and
                                        teaching myself skills I actually cared and was interested in.
                                    </p>
                                    <p className="px-4 pb-4 text-stone-400 font-minecraft text-sm">
                                        I'd study in the most random corners of campus where there were empty classrooms,
                                        or places where no one would be because I didn't want to run into people. I found
                                        that I learned way more when I could do it my own way. What really changed things for me
                                        was social media. Ever since I started posting in high school, I eventually put myself
                                        onto other platforms such as X where I began sharing what I was building: Projects, ideas,
                                        little wins and slowly people started noticing. I made real friends
                                        through TikTok and Twitter (X now, I guess). People who were also
                                        doing their own thing and liked my content. Some of my
                                        closest friends in engineering didn't come from my classes, they
                                        came from DMs and comment sections of my posts online.
                                    </p>
                                    <p className="px-4 pb-4 text-stone-400 font-minecraft text-sm">
                                        Eventually, one of my tweets about a project I built and cold emailing
                                        startups in San Francisco and New York City
                                        went semi-viral, that led to my first real job offer.
                                        That's when it hit me: I didn't need to do things the "right"
                                        way to get where I wanted. I just needed to keep learning,
                                        building, and showing up online. Looking back, I'm glad
                                        I didn't force myself to fit into a system that didn't work
                                        for me. At Waterloo, the school provides you with a co-op job posting board,
                                        but I never found it really helpful.
                                        I learned more from failing fast, experimenting, and
                                        being honest about my journey than I ever did from a lecture.
                                        Doing things differently helped me get where I wanted to be quicker.
                                    </p>
                                    <p className="px-4 pb-4 text-stone-400 font-minecraft text-sm">
                                        Honestly, as much as I love doing things my own way, I
                                        know I'm going to miss the late night Harvey's runs and
                                        those super long study sessions until 3am with my buddies in CMH.
                                        Those moments where we were half delirious or cramming
                                        for an exam together are some of the best memories I'll take
                                        with me. It's those little things that made the journey special.
                                    </p>
                                    <p className="px-4 pb-4 text-stone-400 font-minecraft text-sm">
                                        I'm still doing summer term as of me writing this blog, but this fall,
                                        I'm going to be joining a startup in New York City called TextQL as a software engineer intern.
                                        I'm super excited to learn as much as I can and see what the future holds and to continue doing
                                        things differently.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </ul>
            </div>
        </main>
    );
} 