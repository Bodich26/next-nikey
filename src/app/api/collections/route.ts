"use server";
import { NextResponse } from "next/server";
import { prisma } from "@/../backend/prisma/prisma-client";

export async function GET() {
  try {
    const activeCollection = await prisma.collection.findMany({
      where: {
        isActive: true,
      },
      include: {
        sneakers: true,
      },
    });

    if (!activeCollection || activeCollection.length === 0) {
      return NextResponse.json({
        error: "No active collections",
        success: false,
        item: [],
      });
    }

    return NextResponse.json({ activeCollection, success: true });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({
      error: "Error while getting Collection",
      item: [],
    });
  }
}
