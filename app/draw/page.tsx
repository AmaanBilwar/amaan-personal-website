'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const stories = [
    {
        text: "nicholas enjoys playing the piano and making music in his free time.",
        img: "/piano.png"
    },
    {
        text: "he used to make art as a kid and still loves to doodle and design.",
        img: "/art.png"
    },
    {
        text: "nicholas is passionate about building things that help people build things.",
        img: "/build.png"
    },
    {
        text: "he's curious about ai agents, data, and creative technology.",
        img: "/ai.png"
    },
    {
        text: "he loves learning, exploring new ideas, and collaborating with others.",
        img: "/explore.png"
    },
    {
        text: "when he's not coding, nicholas enjoys hiking, reading, and playing basketball.",
        img: "/hiking.png"
    }
];

export default function DrawPage() {
    const [currentText, setCurrentText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [currentIdx, setCurrentIdx] = useState(0);
    const charIndex = useRef(0);
    const animationFrame = useRef<number>();

    useEffect(() => {
        const typeParagraph = () => {
            const para = stories[currentIdx].text;
            if (charIndex.current < para.length) {
                setCurrentText(para.slice(0, charIndex.current + 1));
                charIndex.current++;
                animationFrame.current = requestAnimationFrame(typeParagraph);
            } else {
                setIsTyping(false);
                setTimeout(() => {
                    charIndex.current = 0;
                    setCurrentIdx((prev) => (prev + 1) % stories.length);
                    setIsTyping(true);
                }, 2500);
            }
        };
        if (isTyping) {
            animationFrame.current = requestAnimationFrame(typeParagraph);
        }
        return () => {
            if (animationFrame.current) {
                cancelAnimationFrame(animationFrame.current);
            }
        };
    }, [isTyping, currentIdx]);

    useEffect(() => {
        setIsTyping(true);
    }, []);

    return (
        <div className="min-h-screen bg-[#1a1a1a] text-white p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-8">auto-typing nicholas's story</h1>
                <div className="mb-8">
                    <div className="p-4 bg-gray-800 rounded-lg">
                        <p className="text-xl">
                            {isTyping ? (
                                <span className="font-mono">{currentText}<span className="animate-pulse">|</span></span>
                            ) : (
                                <span className="font-mono">{currentText}</span>
                            )}
                        </p>
                    </div>
                </div>
                <div className="flex justify-center items-center aspect-video w-full bg-gray-800 rounded-lg overflow-hidden">
                    <Image
                        src={stories[currentIdx].img}
                        alt={stories[currentIdx].text}
                        width={400}
                        height={300}
                        className="object-contain max-h-full max-w-full"
                        priority
                    />
                </div>
            </div>
        </div>
    );
} 