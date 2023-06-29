import { NextResponse } from "next/server";
const Evervault = require("@evervault/sdk");
const evervault = new Evervault(process.env.EVERVAULT_API_KEY);

const FUNCTION_NAME = `${process.env.NEXT_PUBLIC_GITHUB_REPO}-functions-distance-to-new-york`;

export async function POST(request) {
  const requestBody = await request.json();
  const result = await evervault.run(FUNCTION_NAME, requestBody);
  return NextResponse.json(result);
}
