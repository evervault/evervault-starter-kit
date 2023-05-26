import { NextResponse } from 'next/server';
const Evervault = require('@evervault/sdk');
const evervault = new Evervault(process.env.EVERVAULT_API_KEY);

export async function POST(request) {
  const requestBody = await request.json();
  const result = await evervault.run('get-distance-to-new-york', requestBody);
  return NextResponse.json(result);
}
