"use server";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/../backend/prisma/prisma-client";

export async function GET(
  _: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = await params;

    const sneakersReviews = await prisma.sneaker.findUnique({
      where: { slug },
      select: {
        reviews: {
          include: {
            sneaker: true,
            user: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });

    const reviews = sneakersReviews?.reviews;

    if (!reviews || reviews.length === 0) {
      return NextResponse.json({
        sneakerReviews: [],
        error: "No sneakers reviews found",
        success: false,
      });
    }

    return NextResponse.json({
      sneakerReviews: reviews,
      success: true,
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({
      error: "Error while getting Reviews Sneaker",
      sneakerReviews: [],
    });
  }
}
