import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { imageData, language, customPrompt } = body;

        if (!imageData) {
            return NextResponse.json({ error: 'Image data is required' }, { status: 400 });
        }

        const geminiApiKey = process.env.GEMINI_API_KEY;
        if (!geminiApiKey) {
            return NextResponse.json({ error: 'Missing Gemini API key' }, { status: 500 });
        }

        // Remove the data:image/png;base64, prefix if present
        const base64Image = imageData.replace(/^data:image\/[a-z]+;base64,/, '');

        const baseInstruction = language === 'zh'
            ? "请用中文回答。分析这张图画。"
            : "Analyze this drawing.";

        const specificInstruction = customPrompt
            ? (language === 'zh'
                ? `用户的问题：${customPrompt}`
                : `User's question: ${customPrompt}`)
            : (language === 'zh'
                ? "猜测画的是什么。提供3个最有可能的猜测，用简洁有趣的方式描述。如果图画看起来很简单或不完整，可以鼓励用户继续画或给出友善的建议。"
                : "Guess what it might be. Provide up to 3 possible guesses in a fun and engaging way. If the drawing seems simple or incomplete, feel free to encourage the user to keep drawing or give friendly suggestions.");

        const languageInstruction = `${baseInstruction} ${specificInstruction}`;

        const geminiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiApiKey}`;

        const geminiBody = {
            contents: [
                {
                    role: "user",
                    parts: [
                        { text: languageInstruction },
                        {
                            inline_data: {
                                mime_type: "image/png",
                                data: base64Image
                            }
                        }
                    ]
                }
            ]
        };

        const response = await fetch(geminiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(geminiBody),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Gemini API error details:', errorData);
            throw new Error(`Gemini API error: ${response.statusText}`);
        }

        const data = await response.json();
        const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm having trouble analyzing this drawing. Try drawing something more detailed!";

        return NextResponse.json({ response: aiResponse });
    } catch (error) {
        console.error('Error in drawing AI route:', error);
        return NextResponse.json(
            { error: 'Failed to analyze drawing', details: error instanceof Error ? error.message : String(error) },
            { status: 500 }
        );
    }
} 