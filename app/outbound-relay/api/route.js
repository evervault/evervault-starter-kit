import axios from 'axios';
import { NextResponse } from 'next/server';
const Evervault = require('@evervault/sdk');
const evervault = new Evervault(process.env.EVERVAULT_API_KEY);

export async function POST(request) {
  await evervault.enableOutboundRelay();
  // The values for lat and long are encrypted
  const { lat, long } = await request.json();
  try {
    const { data } = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m`
    );
    const { hourly } = data;
    const formattedData = hourly.time
      .map((v, i) => [v, hourly.temperature_2m[i]])
      .map(([x, y]) => ({ x, y }));
    return NextResponse.json(formattedData);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message });
  }
}
