"use server";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/../backend/prisma/prisma-client";

export async function GET(
  _: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = await params;
  try {
    const sneakerBySlug = await prisma.sneaker.findUnique({
      where: { slug },
      include: {
        variants: {
          orderBy: { createdAt: "asc" },
          include: {
            images: true,
            sizes: { include: { size: true } },
          },
        },
        reviews: true,
      },
    });

    if (!sneakerBySlug || sneakerBySlug.variants.length === 0) {
      return NextResponse.json({
        error: "No sneaker or variants found",
        success: false,
        sneakerBySlug: null,
      });
    }

    return NextResponse.json({ sneakerBySlug, success: true });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({
      error: "Error while getting Sneakers by id",
      sneakerBySlug: null,
    });
  }
}
