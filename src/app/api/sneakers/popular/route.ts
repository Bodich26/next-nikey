"use server";
import { prisma } from "@/../backend/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const popularSneakers = await prisma.sneaker.findMany({
      include: {
        variants: {
          orderBy: {
            createdAt: "asc",
          },
          take: 1,
        },
      },
      orderBy: {
        views: "desc",
      },
      take: 10,
    });

    if (!popularSneakers || popularSneakers.length === 0) {
      return NextResponse.json({
        error: "No sneakers found",
        success: false,
        popularSneakers: [],
      });
    }

    return NextResponse.json({ popularSneakers, success: true });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({
      error: "Error while getting Popular Sneakers",
      popularSneakers: [],
    });
  }
}
