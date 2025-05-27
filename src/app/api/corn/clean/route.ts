"use server";

import { cleanExpiredGuestToken } from "@/shared";
import { NextResponse } from "next/server";

export async function GET() {
  await cleanExpiredGuestToken();
  return NextResponse.json({ status: "cleanup complete" });
}
