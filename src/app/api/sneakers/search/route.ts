"use server";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/../backend/prisma/prisma-client";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const sneakerModel = searchParams.get("model");

    if (!sneakerModel) {
      return NextResponse.json({
        error: "No sneakers found",
        success: false,
        sneakers: [],
      });
    }

    const filters: Prisma.SneakerWhereInput = {
      model: {
        contains: sneakerModel,
        mode: "insensitive",
      },
    };

    const sneakers = await prisma.sneaker.findMany({
      where: filters,
      include: {
        variants: {
          orderBy: {
            createdAt: "asc",
          },
          take: 1,
        },
      },
      orderBy: {
        views: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      sneakers,
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({
      error: "No sneakers",
      success: false,
      sneakers: [],
    });
  }
}
