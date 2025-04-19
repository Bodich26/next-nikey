"use server";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/../backend/prisma/prisma-client";

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  try {
    const variant = await prisma.colorVariant.findUnique({
      where: { id },
      include: {
        images: true,
        sizes: {
          include: {
            size: true,
          },
        },
      },
    });

    if (!variant) {
      return NextResponse.json({
        error: "Variant not found",
        success: false,
        item: [],
      });
    }

    return NextResponse.json({ variant, success: true });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({
      error: "Error while getting Sneakers Variants by id",
      item: [],
    });
  }
}
