'use client';

import { useEffect, useState, useRef } from 'react';

const stories = [
    {
        text: "nicholas enjoys playing the piano and making music in his free time."
    },
    {
        text: "he used to make art as a kid and still loves to doodle and design."
    },
    {
        text: "nicholas is passionate about building things that help people build things."
    },
    {
        text: "he's curious about ai agents, data, and creative technology."
    },
    {
        text: "he loves learning, exploring new ideas, and collaborating with others."
    },
    {
        text: "when he's not coding, nicholas enjoys hiking, reading, and playing basketball."
    }
];

const IMAGE_WIDTH = 400;
const IMAGE_HEIGHT = 300;

export default function DrawPage() {
    const [currentText, setCurrentText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [currentIdx, setCurrentIdx] = useState(0);
    const charIndex = useRef(0);
    const animationFrame = useRef<number>();

    // Drawing state
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [drawing, setDrawing] = useState(false);
    const lastPos = useRef<{ x: number; y: number } | null>(null);

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

    // Drawing handlers
    const getCanvasPos = (e: React.MouseEvent | React.TouchEvent) => {
        const canvas = canvasRef.current;
        if (!canvas) return { x: 0, y: 0 };
        const rect = canvas.getBoundingClientRect();
        if ('touches' in e) {
            return {
                x: e.touches[0].clientX - rect.left,
                y: e.touches[0].clientY - rect.top,
            };
        } else {
            return {
                x: (e as React.MouseEvent).clientX - rect.left,
                y: (e as React.MouseEvent).clientY - rect.top,
            };
        }
    };

    const handlePointerDown = (e: React.MouseEvent | React.TouchEvent) => {
        setDrawing(true);
        lastPos.current = getCanvasPos(e);
    };

    const handlePointerMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!drawing) return;
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;
        const pos = getCanvasPos(e);
        if (lastPos.current) {
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 2;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(lastPos.current.x, lastPos.current.y);
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();
        }
        lastPos.current = pos;
    };

    const handlePointerUp = () => {
        setDrawing(false);
        lastPos.current = null;
    };

    const handleClear = () => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (canvas && ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    };

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
                <div className="flex flex-col items-center aspect-video w-full bg-gray-800 rounded-lg overflow-hidden relative">
                    <canvas
                        ref={canvasRef}
                        width={IMAGE_WIDTH}
                        height={IMAGE_HEIGHT}
                        className="bg-[#181e29] rounded-lg border border-gray-700 cursor-crosshair"
                        style={{ touchAction: 'none', maxWidth: '100%', maxHeight: '100%' }}
                        onMouseDown={handlePointerDown}
                        onMouseMove={handlePointerMove}
                        onMouseUp={handlePointerUp}
                        onMouseLeave={handlePointerUp}
                        onTouchStart={handlePointerDown}
                        onTouchMove={handlePointerMove}
                        onTouchEnd={handlePointerUp}
                    />
                    <button
                        onClick={handleClear}
                        className="absolute top-4 right-4 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded shadow"
                    >
                        Clear
                    </button>
                </div>
            </div>
        </div>
    );
} 