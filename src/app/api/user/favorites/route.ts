"use server";

import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/../backend/prisma/prisma-client";

export async function GET(req: NextRequest) {
  try {
    const currentUser = auth();
    const clerkUserId = (await currentUser).userId;
    const token = req.cookies.get("cartToken")?.value;

    if (!clerkUserId && !token) {
      return NextResponse.json({ favoriteItems: [], success: true });
    }

    const user = await prisma.user.findUnique({
      where: { clerkId: clerkUserId! },
    });

    if (!user) {
      return NextResponse.json({ favoriteItems: [], success: true });
    }

    const userFavorites = await prisma.favorites.findFirst({
      where: {
        OR: [{ userId: user.id }, { token }],
      },
      include: {
        favoriteItems: {
          include: {
            sneaker: {
              include: {
                variants: {
                  include: {
                    images: true,
                  },
                },
              },
            },
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });

    if (!userFavorites) {
      return NextResponse.json({ favoriteItems: [], success: true });
    }

    return NextResponse.json({
      favoriteItems: userFavorites.favoriteItems,
      success: true,
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({
      error: "Error while getting Favorites",
      favoriteItems: [],
    });
  }
}
