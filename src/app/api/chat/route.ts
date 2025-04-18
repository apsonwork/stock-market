import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { verifyEnv } from '@/lib/env';

// Verify environment variables
verifyEnv();

// Initialize OpenAI with the correct configuration
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: 'https://api.openai.com/v1', // Explicitly set the base URL
});

export async function POST(request: Request) {
  try {
    const { question } = await request.json();

    if (!question) {
      return NextResponse.json(
        { error: 'Question is required' },
        { status: 400 }
      );
    }

    // Log the API key (first few characters) for debugging
    console.log('Using API key:', process.env.OPENAI_API_KEY?.substring(0, 10) + '...');

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are an expert stock market assistant specializing in the Nepali stock market (NEPSE). 
          Provide accurate, concise, and professional analysis of stocks, trading strategies, and market trends.
          Focus on:
          - Technical and fundamental analysis
          - Market trends and patterns
          - Trading strategies and risk management
          - Stock recommendations with reasoning
          - Market indicators and their interpretation
          Keep responses clear, data-driven, and actionable.`
        },
        {
          role: "user",
          content: question
        }
      ],
      temperature: 0.7,
      max_tokens: 250,
    });

    // Log the response for debugging
    console.log('ChatGPT Response:', completion.choices[0].message.content);

    return NextResponse.json({ response: completion.choices[0].message.content });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again.' },
      { status: 500 }
    );
  }
} 