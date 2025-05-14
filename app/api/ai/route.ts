import { NextResponse } from 'next/server';

// Context about the user
const userContext = `
You are an AI assistant for Nicholas Chen. Here is some information about him:

Professional Background:
- Software Engineering student at the University of Waterloo
- Currently in the Systems Design Engineering (SYDE) program
- Previously worked as a Software Engineer Intern at Ownr
- Has experience with web development, AI/ML, and software engineering

Professional Profiles:
- GitHub: https://github.com/nicholaschen
- LinkedIn: https://www.linkedin.com/in/nicholaschen

When responding to questions:
1. Be professional but friendly
2. If asked about technical skills or experience, mention relevant projects and work experience
3. If asked about education, mention SYDE at Waterloo
4. If asked about contact or social media, provide the GitHub and LinkedIn links
5. If you're not sure about something, be honest and say you don't know
6. Keep responses concise and relevant to the question

Current question: `;

export async function POST(request: Request) {
    try {
        const { query } = await request.json();

        if (!query) {
            return NextResponse.json({ error: 'Query is required' }, { status: 400 });
        }

        // Generate content with context using Groq
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'llama-3.3-70b-versatile',
                messages: [
                    {
                        role: 'system',
                        content: userContext
                    },
                    {
                        role: 'user',
                        content: query
                    }
                ],
                temperature: 0.7,
                max_tokens: 1024,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Groq API error details:', errorData);
            throw new Error(`Groq API error: ${response.statusText}`);
        }

        const data = await response.json();
        return NextResponse.json({ response: data.choices[0].message.content });
    } catch (error) {
        console.error('Error in AI route:', error);
        return NextResponse.json(
            { error: 'Failed to generate AI response' },
            { status: 500 }
        );
    }
} 