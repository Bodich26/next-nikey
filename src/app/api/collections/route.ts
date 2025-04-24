"use server";
import { NextResponse } from "next/server";
import { prisma } from "@/../backend/prisma/prisma-client";

export async function GET() {
  try {
    const collection = await prisma.collection.findMany({
      where: {
        isActive: true,
      },
      include: {
        sneakers: true,
      },
    });

    if (!collection || collection.length === 0) {
      return NextResponse.json({
        error: "No active collections",
        success: false,
        collection: [],
      });
    }

    return NextResponse.json({ collection, success: true });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({
      error: "Error while getting Collection",
      collection: [],
    });
  }
}
