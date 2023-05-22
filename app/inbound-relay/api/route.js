import { NextResponse } from 'next/server';

export async function POST(request) {
  const requestBody = await request.json();
  console.log(requestBody);
  return NextResponse.json(request.body);
}

export async function OPTIONS() {
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
