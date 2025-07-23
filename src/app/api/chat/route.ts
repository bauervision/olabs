// app/api/chat/route.ts
import OpenAI from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const response = await openai.chat.completions.create({
      model: 'gpt-4o', // or 'gpt-3.5-turbo' if needed
      messages,
      temperature: 0.7,
    });

    const reply = response.choices[0]?.message?.content || 'No response.';
    return NextResponse.json({ text: reply });
  } catch (err) {
    console.error('Chat API error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
