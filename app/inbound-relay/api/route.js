import { NextResponse } from 'next/server';

export async function POST(request) {
  console.log('REQQQ', request);
  const requestBody = await request.json();
  console.log(requestBody);
  return NextResponse.json(request.body);
}

export async function OPTIONS() {
  return new Response(null, { status: 200 });
}
