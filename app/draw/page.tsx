'use client';

import { useEffect, useState, useRef } from 'react';

const stories = [
    {
        text: "Ever since I was a kid, drawing and making art has been a huge part of my life."
    },
    {
        text: "For over 13 years, it's been a constant source of inspiration and expression."
    },
    {
        text: "This blend of creativity and problem-solving is actually why Systems Design Engineering really appealed to me."
    },
    {
        text: "Even though I'm not in an art program anymore like I was in high school, I still love to make YouTube videos and create art."
    },
    {
        text: "Because, in a way, engineering involves art every single day."
    },
    {
        text: "It's about elegantly solving problems and designing intuitive, functional, and aesthetically pleasing solutions."
    },
    {
        text: "It's always sparking new ideas and helping me to see the world from different perspectives."
    },
    {
        text: "That deep connection to creativity is why I've included this little canvas here."
    },
    {
        text: "It's a piece of my journey, inviting you to doodle, design, and create something alongside me!"
    }
];

const IMAGE_WIDTH = 400;
const IMAGE_HEIGHT = 300;

export default function DrawPage() {
    const [currentText, setCurrentText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [currentIdx, setCurrentIdx] = useState(0);
    const charIndex = useRef(0);
    const animationFrame = useRef<number>(null);

    // Drawing state
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [drawing, setDrawing] = useState(false);
    const lastPos = useRef<{ x: number; y: number } | null>(null);

    // Resize canvas to fill container
    useEffect(() => {
        function resizeCanvas() {
            const canvas = canvasRef.current;
            const container = containerRef.current;
            if (canvas && container) {
                const rect = container.getBoundingClientRect();
                canvas.width = rect.width;
                canvas.height = rect.height;
            }
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        return () => window.removeEventListener('resize', resizeCanvas);
    }, []);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout | null = null;
        const typeParagraph = () => {
            const para = stories[currentIdx].text;
            if (charIndex.current < para.length) {
                setCurrentText(para.slice(0, charIndex.current + 1));
                charIndex.current++;
                timeoutId = setTimeout(typeParagraph, 40);
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
            typeParagraph();
        }
        return () => {
            if (timeoutId) clearTimeout(timeoutId);
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
                <div className="mb-8 mt-16 w-full max-w-6xl mx-auto">
                    <div className="p-4 border border-gray-700 rounded-lg min-h-[200px] md:min-h-[84px] w-full">
                        <p className="text-xl break-words">
                            {isTyping ? (
                                <span className="font-mono">{currentText}<span className="animate-pulse">|</span></span>
                            ) : (
                                <span className="font-mono">{currentText}</span>
                            )}
                        </p>
                    </div>
                </div>
                <div ref={containerRef} className="flex flex-col items-center aspect-video w-full bg-gray-800 rounded-lg overflow-hidden relative">
                    <canvas
                        ref={canvasRef}
                        className="bg-[#181e29] rounded-lg border border-gray-700 cursor-crosshair w-full h-full"
                        style={{ touchAction: 'none', display: 'block' }}
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