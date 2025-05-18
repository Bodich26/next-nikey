"use server";

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/../backend/prisma/prisma-client";
import { Prisma } from "@prisma/client";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const discount = searchParams.get("discount") || "";

    const filters: Prisma.SneakerWhereInput = {};

    if (discount === "sales") {
      filters.variants = {
        some: {
          discount: { gt: 0 },
        },
      };
    }

    const sneakers = await prisma.sneaker.findMany({
      where: filters,
      include: {
        collection: {
          select: {
            slug: true,
          },
        },
        variants: {
          include: {
            sizes: true,
          },
          orderBy: {
            createdAt: "asc",
          },

          take: 1,
        },
        purposes: {
          select: {
            purpose: true,
          },
        },
      },
      orderBy: {
        views: "desc",
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
      success: false,
      sneakers: [],
    });
  }
}
