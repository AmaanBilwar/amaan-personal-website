import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

// Initialize the Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

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

        // Get the Gemini Pro model
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

        // Generate content with context
        const result = await model.generateContent(userContext + query);
        const response = await result.response;
        const text = response.text();

        return NextResponse.json({ response: text });
    } catch (error) {
        console.error('Error in AI route:', error);
        return NextResponse.json(
            { error: 'Failed to generate AI response' },
            { status: 500 }
        );
    }
} 