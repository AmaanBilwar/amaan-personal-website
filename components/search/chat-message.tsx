import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";
import localFont from 'next/font/local';

const minecraft = localFont({
    src: '../../public/fonts/MinecraftRegular-Bmg3.otf',
    variable: '--font-minecraft',
});

interface ChatMessageProps {
    role: 'user' | 'assistant';
    content: string;
}

function linkify(text: string) {
    // Regex to match URLs
    const urlRegex = /(https?:\/\/[\w\-._~:/?#[\]@!$&'()*+,;=%]+)(?![^<]*>|[^\[]*\])/g;
    return text.replace(urlRegex, (url) => {
        let display = url;
        if (url.includes('github.com')) display = 'GitHub';
        else try { display = new URL(url).hostname; } catch { }
        return `<a href="${url}" target="_blank" rel="noopener noreferrer" style="text-decoration:underline;">${display}</a>`;
    });
}

export default function ChatMessage({ role, content }: ChatMessageProps) {
    return (
        <div className={`px-4 py-3 text-sm bg-[#1a1a1a] ${minecraft.variable} font-minecraft`}>
            {role === 'assistant' ? (
                <div className="flex items-start gap-1">
                    <span className="text-stone-400 text-sm select-none w-3 text-center">●</span>
                    <p className="text-stone-300 whitespace-pre-wrap leading-relaxed flex-1 text-xs" dangerouslySetInnerHTML={{ __html: linkify(content) }} />
                </div>
            ) : (
                <div className="flex items-center gap-1">
                    <span className="text-stone-400 text-sm select-none w-3 text-center">{'>'}</span>
                    <p className="text-stone-300 whitespace-pre-wrap leading-relaxed text-xs">{content}</p>
                </div>
            )}
        </div>
    );
}
