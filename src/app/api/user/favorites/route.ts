"use server";

import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/../backend/prisma/prisma-client";
import { getGuestToken } from "@/shared";

export async function GET() {
  try {
    const currentUser = auth();
    const clerkUserId = (await currentUser).userId;
    const token = await getGuestToken();

    if (!clerkUserId && !token) {
      return NextResponse.json({ favoriteItems: [], success: true });
    }

    let user = null;

    if (clerkUserId) {
      user = await prisma.user.findUnique({
        where: { clerkId: clerkUserId },
      });

      if (!user && !token) {
        return NextResponse.json({ favoriteItems: [], success: true });
      }
    }

    const userFavorites = await prisma.favorites.findFirst({
      where: {
        OR: [{ userId: user?.id }, { token }],
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

// Add Sneakers in favorites
export async function POST(req: NextRequest) {
  const currentUser = auth();
  const clerkUserId = (await currentUser).userId;
  const token = await getGuestToken();

  if (!clerkUserId && !token) {
    return NextResponse.json({ favoriteItems: [], success: true });
  }

  let user = null;

  if (clerkUserId) {
    user = await prisma.user.findUnique({
      where: { clerkId: clerkUserId },
    });

    if (!user && !token) {
      return NextResponse.json({ favoriteItems: [], success: true });
    }
  }

  try {
    const { sneakerId } = await req.json();

    let userFavorites = await prisma.favorites.findFirst({
      where: {
        OR: [{ userId: user?.id }, { token }],
      },
    });

    if (!userFavorites) {
      const expiration = new Date();
      expiration.setHours(expiration.getHours() + 24);

      userFavorites = await prisma.favorites.create({
        data: user ? { userId: user.id } : { token, expiresAt: expiration },
      });
    }

    const existingSneaker = await prisma.favoritesOnProducts.findFirst({
      where: {
        favoritesId: userFavorites.id,
        sneakerId,
      },
    });

    if (existingSneaker) {
      return NextResponse.json({
        success: false,
        error: "Sneaker is already in the favorites",
      });
    }

    await prisma.favoritesOnProducts.create({
      data: {
        favoritesId: userFavorites.id,
        sneakerId,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Sneaker added to favorites",
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({
      error: "Internal Server Error",
      success: false,
    });
  }
}

//Remove sneaker from favorites
export async function DELETE(req: NextRequest) {
  const currentUser = auth();
  const clerkUserId = (await currentUser).userId;
  const token = await getGuestToken();

  if (!clerkUserId && !token) {
    return NextResponse.json({ favoriteItems: [], success: true });
  }

  let user = null;

  if (clerkUserId) {
    user = await prisma.user.findUnique({
      where: { clerkId: clerkUserId },
    });

    if (!user && !token) {
      return NextResponse.json({ favoriteItems: [], success: true });
    }
  }

  try {
    const { sneakerId } = await req.json();

    await prisma.favoritesOnProducts.deleteMany({
      where: {
        sneakerId,
        favorites: user ? { userId: user.id } : { token },
      },
    });

    return NextResponse.json({
      success: true,
      message: "Sneaker removed from favorites",
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" });
  }
}
