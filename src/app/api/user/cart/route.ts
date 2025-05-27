"use server";

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/../backend/prisma/prisma-client";
import { auth } from "@clerk/nextjs/server";
import { getGuestToken } from "@/shared";

export async function GET() {
  try {
    const currentUser = auth();
    const clerkUserId = (await currentUser).userId;
    const token = await getGuestToken();

    if (!clerkUserId && !token) {
      return NextResponse.json({
        cartItems: [],
        totalAmount: 0,
        success: true,
      });
    }

    let user = null;

    if (clerkUserId) {
      user = await prisma.user.findUnique({
        where: { clerkId: clerkUserId },
      });

      if (!user && !token) {
        return NextResponse.json({
          cartItems: [],
          totalAmount: 0,
          success: true,
        });
      }
    }

    const userCart = await prisma.cart.findFirst({
      where: { OR: [{ userId: user?.id }, { token }] },
      include: {
        cartItems: {
          include: {
            sneaker: true,
            colorVariant: { include: { images: false } },
            size: true,
          },
          orderBy: { createdAt: "desc" },
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

    const totalAmount = userCart.cartItems.reduce((sum, item) => {
      const price = item.colorVariant.price;
      const discount = item.colorVariant.discount || 0;
      const priceWithDiscount = price * (1 - discount / 100);
      return sum + priceWithDiscount * item.quantity;
    }, 0);

    return NextResponse.json({
      cartItems: userCart.cartItems,
      totalAmount,
      success: true,
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({
      error: "Error while getting Cart",
      cartItems: [],
    });
  }
}

//Add to cart
export async function POST(req: NextRequest) {
  const currentUser = auth();
  const clerkUserId = (await currentUser).userId;
  const token = await getGuestToken();

  if (!clerkUserId && !token) {
    return NextResponse.json({
      cartItems: [],
      totalAmount: 0,
      success: true,
    });
  }

  let user = null;

  if (clerkUserId) {
    user = await prisma.user.findUnique({
      where: { clerkId: clerkUserId },
    });

    if (!user && !token) {
      return NextResponse.json({
        cartItems: [],
        totalAmount: 0,
        success: true,
      });
    }
  }

  try {
    const { sneakerId, variantId, sizeId } = await req.json();

    const colorVariantSize = await prisma.colorVariantSize.findFirst({
      where: {
        id: sizeId,
        colorVariantId: variantId,
        quantity: { gt: 0 },
      },
      include: {
        size: true,
      },
    });

    if (!colorVariantSize || colorVariantSize.quantity < 1) {
      return NextResponse.json({
        success: false,
        message: "Выбранный размер отсутствует",
      });
    }

    let userCart = await prisma.cart.findFirst({
      where: {
        OR: [{ userId: user?.id }, { token }],
      },
    });

    if (!userCart) {
      const expiration = new Date();
      expiration.setHours(expiration.getHours() + 24);

      userCart = await prisma.cart.create({
        data: user ? { userId: user.id } : { token, expiresAt: expiration },
      });
    }

    const existingSneakers = await prisma.cartOnSneakers.findFirst({
      where: {
        cartId: userCart.id,
        sneakerId,
        colorVariantId: variantId,
        sizeId: colorVariantSize.sizeId,
      },
    });

    if (existingSneakers) {
      return NextResponse.json({
        success: false,
        error: "Sneaker is already in the cart",
      });
    }

    await prisma.cartOnSneakers.create({
      data: {
        cartId: userCart.id,
        sneakerId,
        colorVariantId: variantId,
        sizeId: colorVariantSize.sizeId,
        quantity: 1,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Sneaker added to cart",
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({
      error: "Error while adding Cart",
      success: false,
    });
  }
}

//Remove from cart
export async function DELETE(req: NextRequest) {
  const currentUser = auth();
  const clerkUserId = (await currentUser).userId;
  const token = await getGuestToken();

  if (!clerkUserId && !token) {
    return NextResponse.json({
      cartItems: [],
      totalAmount: 0,
      success: true,
    });
  }

  let user = null;

  if (clerkUserId) {
    user = await prisma.user.findUnique({
      where: { clerkId: clerkUserId },
    });

    if (!user && !token) {
      return NextResponse.json({
        cartItems: [],
        totalAmount: 0,
        success: true,
      });
    }
  }

  try {
    const { sneakerId, variantId, sizeId } = await req.json();

    const userCart = await prisma.cart.findFirst({
      where: {
        OR: [{ userId: user?.id }, { token }],
      },
    });

    if (!userCart) {
      return NextResponse.json({
        success: false,
        message: "Cart not found",
      });
    }

    await prisma.cartOnSneakers.deleteMany({
      where: {
        sneakerId,
        cartId: userCart.id,
        colorVariantId: variantId,
        sizeId,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Sneaker remove from cart",
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({
      error: "Internal Server Error",
      success: false,
    });
  }
}
