import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

// Initialize the Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(request: Request) {
    try {
        const { query } = await request.json();

        if (!query) {
            return NextResponse.json({ error: 'Query is required' }, { status: 400 });
        }

        // Get the Gemini Pro model
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

        // Generate content
        const result = await model.generateContent(query);
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