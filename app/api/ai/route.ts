import { NextResponse } from 'next/server';
import { userContext } from './userContext';

export async function POST(request: Request) {
  let query: string | undefined = undefined;
  try {
    const body = await request.json();
    query = body.query;
    const language = body.language || 'en';

    if (!query) {
      return NextResponse.json({ error: 'Query is required' }, { status: 400 });
    }

    // Gemini API expects a different format
    const geminiApiKey = process.env.GEMINI_API_KEY;
    if (!geminiApiKey) {
      return NextResponse.json({ error: 'Missing Gemini API key' }, { status: 500 });
    }

    const geminiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiApiKey}`;

    // Add language instruction based on the language setting
    const languageInstruction = language === 'zh'
      ? "\n\nIMPORTANT: The user has switched their language preference to Chinese (中文). You MUST respond in Chinese regardless of what language was used in previous messages. Even if the conversation started in English, respond in Chinese from now on."
      : "\n\nIMPORTANT: The user has set their language preference to English. You MUST respond in English regardless of what language was used in previous messages. Even if the conversation started in Chinese, respond in English from now on.";

    const geminiBody = {
      contents: [
        {
          role: "user",
          parts: [
            { text:  + languageInstruction + "\nCurrent question: " + query }
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
      console.error('Gemini API error details:', errorData, 'Status:', response.status, 'Query:', query);
      throw new Error(`Gemini API error: ${response.statusText}`);
    }

    const data = await response.json();
    // Gemini's response format
    const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't generate a response.";
    return NextResponse.json({ response: aiText });
  } catch (error) {
    console.error('Error in AI route:', error, 'Query:', typeof query !== 'undefined' ? query : 'N/A');
    if (error instanceof Error) {
      console.error('Stack trace:', error.stack);
      return NextResponse.json(
        { error: 'Failed to generate AI response', details: error.message },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { error: 'Failed to generate AI response', details: String(error) },
        { status: 500 }
      );userContext
    }
  }
} 