"use client"
import React from 'react';

export default function BlogsPage() {
    const [openHowIStarted, setOpenHowIStarted] = React.useState(false);
    return (
        <main className="min-h-screen max-w-2xl mt-20 mx-auto p-8 text-white">
            <h1 className="text-3xl font-bold mb-8">Blogs</h1>
            <ul className="space-y-4">
                {/* How I Started Section */}
                <div className="mt-12 mb-4">
                    <div className="border border-stone-700 rounded-md">
                        <button
                            className="w-full flex justify-start items-center px-4 py-2 font-mono text-sm text-stone-200 focus:outline-none text-left"
                            onClick={() => setOpenHowIStarted((prev) => !prev)}
                        >
                            <span className="flex-1 text-left">Doing Things Differently</span>
                            <span className="text-xs font-mono hover:underline cursor-pointer ml-auto">{openHowIStarted ? 'CLOSE' : 'OPEN'}</span>
                        </button>
                        {openHowIStarted && (
                            <div className="px-4 pb-4 text-stone-400 font-mono text-[9px] leading-tight mb-2">
                                <p className="px-4 pb-4 text-stone-400 font-mono text-sm mt-2">
                                    At the University of Waterloo, I never really did things the "normal" way.
                                    I came from an arts background, not your typical pre-engineering track, so I
                                    already felt like an outsider. I thought joining design teams would help me
                                    find my place, but they never felt right—I just couldn't get into the structure,
                                    the meetings, the pace. Everyone else seemed to be grinding classes, chasing
                                    co-op positions, and going to parties. Me? I skipped most lectures, didn't
                                    really show up to events, and I definitely wasn't at Clarke on a Thursday.
                                    Instead, I spent my time learning things on my own—watching tutorials, messing
                                    around with side projects, teaching myself stuff I actually cared about.
                                </p>
                                <p className="px-4 pb-4 text-stone-400 font-mono text-sm">
                                    I'd study in the most random corners of campus—empty classrooms,
                                    tucked-away staircases, places where no one would notice me—because
                                    I didn't want to run into people and have to explain why I wasn't in
                                    class. It wasn't that I didn't care; I just found that I learned way
                                    more when I could do it my own way. What really changed things for me
                                    was social media. I started posting what I was building—projects, ideas,
                                    little wins—and slowly people started noticing. I made real friends
                                    through TikTok and Twitter (X now, I guess), people who were also
                                    doing their own thing and didn't totally fit the mold. Some of my
                                    closest friends in engineering didn't come from my classes—they
                                    came from DMs and comment sections.
                                </p>
                                <p className="px-4 pb-4 text-stone-400 font-mono text-sm">
                                    Eventually, one of my tweets about a project I built
                                    went semi-viral, and that led to my first real job offer.
                                    That's when it hit me: I didn't need to do things the "right"
                                    way to get where I wanted. I just needed to keep learning,
                                    building, and showing up online. Looking back, I'm glad
                                    I didn't force myself to fit into a system that didn't work
                                    for me. I learned more from failing fast, experimenting, and
                                    being honest about my journey than I ever did from a lecture.
                                    Doing things differently wasn't just my strategy—it became who I am.
                                </p>
                                <p className="px-4 pb-4 text-stone-400 font-mono text-sm">
                                    And honestly, as much as I love doing things my own way,
                                    know I'm going to miss the late night Harvey's runs and
                                    those marathon study sessions until 3am with my buddies in CMH.
                                    Those moments—half delirious, laughing over fries, or cramming
                                    for an exam together—are some of the best memories I'll take
                                    with me. It's those little things that made the journey special.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </ul>
        </main>
    );
} 