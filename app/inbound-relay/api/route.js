import { NextResponse } from 'next/server';

export async function POST(request) {
  const requestBody = await request.json();
  console.log('Here are the logs:');
  console.log(requestBody);
  return NextResponse.json(request.body);
}

export async function OPTIONS() {
  return new Response(null, { status: 200 });
}
