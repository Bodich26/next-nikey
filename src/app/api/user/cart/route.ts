"use server";

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/../backend/prisma/prisma-client";
import { auth } from "@clerk/nextjs/server";

export async function GET(req: NextRequest) {
  try {
    const currentUser = auth();
    const clerkUserId = (await currentUser).userId;
    const token = req.cookies.get("cartToken")?.value;

    if (!clerkUserId && !token) {
      return NextResponse.json({
        cartItems: [],
        totalAmount: 0,
        success: true,
      });
    }

    const user = await prisma.user.findUnique({
      where: { clerkId: clerkUserId! },
    });

    if (!user) {
      return NextResponse.json({
        cartItems: [],
        totalAmount: 0,
        success: true,
      });
    }

    const userCart = await prisma.cart.findFirst({
      where: {
        OR: [{ userId: user.id }, { token }],
      },
      include: {
        cartItems: {
          include: {
            sneaker: {
              include: {
                variants: {
                  include: {
                    images: true,
                    sizes: { include: { size: true } },
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

    if (!userCart) {
      return NextResponse.json({
        cartItems: [],
        totalAmount: 0,
        success: true,
      });
    }

    return NextResponse.json({
      cartItems: userCart.cartItems,
      totalAmount: 0,
      success: true,
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ error: "Error while getting Cart", item: [] });
  }
}
