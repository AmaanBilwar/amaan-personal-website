import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";

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
        <div className="px-6 py-3 font-mono text-sm bg-[#1a1a1a]">
            {role === 'assistant' ? (
                <div className="flex items-start gap-2">
                    <span className="text-gray-400 font-mono text-sm select-none">●</span>
                    <p className="text-gray-200 whitespace-pre-wrap font-mono leading-relaxed flex-1" dangerouslySetInnerHTML={{ __html: linkify(content) }} />
                </div>
            ) : (
                <div className="flex items-center gap-2">
                    <span className="text-gray-500 font-mono text-sm select-none">{'>'}</span>
                    <p className="text-gray-200 whitespace-pre-wrap font-mono leading-relaxed">{content}</p>
                </div>
            )}
        </div>
    );
}
