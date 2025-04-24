"use server";

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/../backend/prisma/prisma-client";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;

  const collections = searchParams.get("collections") || "all";

  try {
    const sneakers = await prisma.sneaker.findMany({
      where: {
        collection: {
          slug: collections,
        },
      },
    });

    if (!sneakers || sneakers.length === 0) {
      return NextResponse.json({
        error: "No sneakers found",
        success: false,
        sneakers: [],
      });
    }

    return NextResponse.json({ sneakers, success: true });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({
      error: "Error while getting Sneakers",
      sneakers: [],
    });
  }
}
