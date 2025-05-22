"use server";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/../backend/prisma/prisma-client";

export async function GET(
  _: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await context.params;

    const sneakersSlider = await prisma.sneaker.findUnique({
      where: { slug },
      select: {
        productSliders: true,
      },
    });

    const sliders = sneakersSlider?.productSliders;

    if (!sliders || sliders.length === 0) {
      return NextResponse.json({
        error: "No sneaker slider found",
        success: false,
        sneakerSlider: [],
      });
    }

    return NextResponse.json({
      sneakerSlider: sliders,
      success: true,
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({
      error: "Error while getting Sneakers slide",
      sneakerSlider: [],
    });
  }
}
