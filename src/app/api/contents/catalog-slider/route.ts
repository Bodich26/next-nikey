"use server";
import { NextResponse } from "next/server";
import { prisma } from "../../../../../backend/prisma/prisma-client";

export async function GET() {
  try {
    const catalogSlider = await prisma.catalogSlider.findMany({
      where: {
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
      error: "Error while getting Catalog Slider",
      catalogSlider: [],
    });
  }
}
