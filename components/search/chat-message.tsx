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
        <div className={`flex pl-4 pr-4 py-4 items-center ${role === 'assistant' ? 'bg-white/5' : ''}`}>
            <div className="flex-1 flex items-center">
                {role === 'assistant' ? (
                    <p className="text-sm text-stone-300 whitespace-pre-line" dangerouslySetInnerHTML={{ __html: linkify(content) }} />
                ) : (
                    <p className="text-sm text-stone-300 whitespace-pre-line">{content}</p>
                )}
            </div>
        </div>
    );
}
