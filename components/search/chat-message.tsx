import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";

interface ChatMessageProps {
    role: 'user' | 'assistant';
    content: string;
}

export default function ChatMessage({ role, content }: ChatMessageProps) {
    return (
        <div className={`flex gap-4 p-4 ${role === 'assistant' ? 'bg-white/5' : ''}`}>
            <Avatar className="h-8 w-8">
                <AvatarFallback className={role === 'assistant' ? 'bg-purple-500' : 'bg-blue-500'}>
                    {role === 'assistant' ? 'AI' : <User className="h-4 w-4" />}
                </AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-2">
                <p className="text-sm text-stone-300 whitespace-pre-line">{content}</p>
            </div>
        </div>
    );
} 