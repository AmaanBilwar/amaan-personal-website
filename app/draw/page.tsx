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
    const points = useRef<{ x: number; y: number }[]>([]);

    // Restore canvas from localStorage on mount
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        const dataUrl = localStorage.getItem('drawing-canvas');
        if (dataUrl) {
            const img = new window.Image();
            img.onload = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            };
            img.src = dataUrl;
        }
    }, []);

    // Save canvas to localStorage
    const saveCanvas = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        try {
            const dataUrl = canvas.toDataURL('image/png');
            localStorage.setItem('drawing-canvas', dataUrl);
        } catch (e) {
            // ignore quota errors
        }
    };

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
        points.current = [getCanvasPos(e)];
    };

    const handlePointerMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!drawing) return;
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;
        ctx.strokeStyle = '#a3a3a3';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        const pos = getCanvasPos(e);
        points.current.push(pos);
        if (points.current.length < 3) {
            // Draw a dot for the first point
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, ctx.lineWidth / 2, 0, Math.PI * 2, true);
            ctx.fillStyle = ctx.strokeStyle;
            ctx.fill();
            ctx.closePath();
            return;
        }
        // Use the last three points to draw a smooth curve
        const [p1, p2, p3] = points.current.slice(-3);
        const mid1 = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };
        const mid2 = { x: (p2.x + p3.x) / 2, y: (p2.y + p3.y) / 2 };
        ctx.beginPath();
        ctx.moveTo(mid1.x, mid1.y);
        ctx.quadraticCurveTo(p2.x, p2.y, mid2.x, mid2.y);
        ctx.stroke();
    };

    const handlePointerUp = () => {
        setDrawing(false);
        points.current = [];
        saveCanvas();
    };

    const handleClear = () => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (canvas && ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            localStorage.removeItem('drawing-canvas');
        }
    };

    const handleDownload = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const link = document.createElement('a');
        link.download = 'drawing.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    };

    return (
        <div className="max-w-3xl w-full mx-auto p-4 pt-8 pb-0">
            <div className="bg-[#1a1a1a] text-white p-8 pb-16">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-8 mt-16 w-full max-w-6xl mx-auto">
                        <div className="p-4 border border-stone-500 rounded-lg min-h-[150px] md:min-h-[84px] w-full">
                            <p className="text-sm break-words text-stone-300">
                                {isTyping ? (
                                    <span className="font-mono">{currentText}<span className="animate-pulse">|</span></span>
                                ) : (
                                    <span className="font-mono">{currentText}</span>
                                )}
                            </p>
                        </div>
                    </div>
                    <div ref={containerRef} className="flex flex-col items-center w-full border border-stone-500 rounded-lg bg-[#1a1a1a] overflow-hidden relative min-h-[350px] md:min-h-[250px]">
                        <canvas
                            ref={canvasRef}
                            className="w-full h-full cursor-crosshair"
                            style={{ touchAction: 'none', display: 'block' }}
                            onMouseDown={handlePointerDown}
                            onMouseMove={handlePointerMove}
                            onMouseUp={handlePointerUp}
                            onMouseLeave={handlePointerUp}
                            onTouchStart={handlePointerDown}
                            onTouchMove={handlePointerMove}
                            onTouchEnd={handlePointerUp}
                        />
                    </div>
                    <div className="flex items-center justify-between mt-4 w-full">
                        <p className="text-stone-400 text-sm">Draw Anything!</p>
                        <div className="flex gap-2">
                            <button
                                onClick={handleClear}
                                className="h-full px-4 py-4 text-sm bg-white/10 hover:bg-white/20 text-white rounded-md transition-colors flex items-center gap-2 flex-shrink-0"
                            >
                                Clear
                            </button>
                            <button
                                onClick={handleDownload}
                                className="h-full px-4 py-4 text-sm bg-white/10 hover:bg-white/20 text-white rounded-md transition-colors flex items-center gap-2 flex-shrink-0"
                            >
                                Download
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 