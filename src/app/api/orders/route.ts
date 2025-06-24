"use server";

import { NextResponse } from "next/server";
import { prisma } from "@/../backend/prisma/prisma-client";
import { getSessionUser, generateOrderId } from "@/shared";
import { calcDiscountPriceServer, getDiscountedPrice } from "@/shared/utils";

export async function POST() {
  try {
    const { user, token } = await getSessionUser();

    if (!user && !token) {
      return NextResponse.json({
        error: "User not found",
        success: false,
      });
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

    if (!userCart || userCart.cartItems.length === 0) {
      return NextResponse.json({ error: "Cart is empty", success: false });
    }

    const orderAmount = calcDiscountPriceServer(userCart.cartItems, (item) => ({
      price: item.colorVariant.price,
      discount: item.colorVariant.discount,
      quantity: item.colorVariant.quantity,
    }));

    const draftItems = userCart.cartItems.map((item) => ({
      sneakerId: item.sneakerId,
      colorVariantId: item.colorVariantId,
      sizeId: item.sizeId,
      quantity: item.quantity,
      price: getDiscountedPrice(
        item.colorVariant.price,
        item.colorVariant.discount
      ),
    }));

    const draftOrder = await prisma.draftOrder.create({
      data: {
        userId: user ? user.id : null,
        draftOrderId: generateOrderId(),
        token: user ? null : token,
        name: "",
        phone: "",
        email: "",
        deliveryAddress: "",
        status: "PENDING",
        paymentMethod: "UPON_RECEIPT",
        shippingMethod: "STANDARD",
        shippingCost: 0,
        orderAmount,
        expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24),
        draftItems: {
          create: draftItems,
        },
      },
    });

    return NextResponse.json({
      success: true,
      draftOrderId: draftOrder.draftOrderId,
    });
  } catch (error) {
    console.error("Draft order error:", error);
    return NextResponse.json({
      error: "Error while creating draft order",
      success: false,
    });
  }
}
