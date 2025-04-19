"use server";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../backend/prisma/prisma-client";

export async function GET(req: NextRequest) {
  try {
    const { sneakerId } = await req.json();

    const catalogSlider = await prisma.productSlider.findMany({
      where: {
        sneakerId,
        isActive: true,
      },
      orderBy: {
        order: "asc",
      },
    });

    return NextResponse.json({ catalogSlider, success: true });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({
      error: "Error while getting Product Slider",
      item: [],
    });
  }
}
