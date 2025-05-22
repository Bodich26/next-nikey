"use server";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/../backend/prisma/prisma-client";

export async function GET(
  _: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;
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
      },
    });

    if (!sneakerBySlug || sneakerBySlug.variants.length === 0) {
      return NextResponse.json({
        error: "No sneaker or variants found",
        success: false,
        sneakerBySlug: null,
        rating: 0,
      });
    }

    const sneakersReviews = await prisma.sneaker.findUnique({
      where: { slug },
      select: {
        reviews: {
          include: {
            sneaker: true,
            user: true,
          },
        },
      },
    });

    if (!sneakersReviews || sneakersReviews.reviews.length === 0) {
      return NextResponse.json({ sneakerBySlug, rating: 0, success: true });
    }

    let rating = 0;
    const reviewsAll = sneakersReviews!.reviews.length;

    if (reviewsAll > 0) {
      const sumRatings = sneakersReviews!.reviews.reduce(
        (acc, review) => acc + review.rating,
        0
      );
      rating = sumRatings / reviewsAll;
    }

    return NextResponse.json({ sneakerBySlug, rating, success: true });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({
      error: "Error while getting Sneakers by id",
      sneakerBySlug: null,
      rating: 0,
    });
  }
}
