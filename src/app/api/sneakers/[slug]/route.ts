"use server";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/../backend/prisma/prisma-client";

export async function GET(
  _: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = await params;
  try {
    const sneakersBySlug = await prisma.sneaker.findUnique({
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

    if (!sneakersBySlug || sneakersBySlug.variants.length === 0) {
      return NextResponse.json({
        error: "No sneaker or variants found",
        success: false,
        item: [],
      });
    }

    const [firstVariant, ...otherVariants] = sneakersBySlug.variants;

    return NextResponse.json({
      sneakersBySlug: {
        ...sneakersBySlug,
        variants: [
          firstVariant, // полностью
          ...otherVariants.map((variant) => ({
            id: variant.id,
            mainImage: variant.images[0], // если mainImage — первая картинка
          })),
        ],
      },
      success: true,
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({
      error: "Error while getting Sneakers by id",
      item: [],
    });
  }
}
