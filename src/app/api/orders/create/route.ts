"use server";

import { OrdersSchema } from "@/features/orders";
import { generateOrderId, getSessionUser } from "@/shared";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/../backend/prisma/prisma-client";

export async function POST(req: NextRequest) {
  const { user, token } = await getSessionUser();

  if (!user && !token) {
    return NextResponse.json({
      error: "User not found",
      success: false,
    });
  }

  const body = await req.json();
  const validationFailed = OrdersSchema.safeParse(body);

  if (!validationFailed.success) {
    return NextResponse.json({ error: "Invalid fields" });
  }

  try {
    const {
      name,
      phone,
      email,
      deliveryAddress,
      paymentMethod,
      shippingMethod,
      shippingCost,
    } = validationFailed.data;

    const userDraftOrder = await prisma.draftOrder.findFirst({
      where: { OR: [{ userId: user?.id }, { token }] },
      include: {
        draftItems: {
          include: {
            sneaker: true,
            colorVariant: { include: { images: false } },
            size: true,
          },
          orderBy: { createdAt: "desc" },
        },
      },
    });

    if (!userDraftOrder || userDraftOrder.draftItems.length === 0) {
      return NextResponse.json({ error: "Items is not found", success: false });
    }

    // const serverAmount = userDraftOrder.draftItems.reduce((sum, item) => {
    //   return sum + item.colorVariant.finalPrice * item.quantity;
    // }, 0);

    const serverAmount = Math.floor(
      userDraftOrder.draftItems.reduce((sum, item) => {
        const price = item.colorVariant.price;
        const discount = item.colorVariant.discount || 0;
        const priceWithDiscount = price * (1 - discount / 100);
        return sum + priceWithDiscount * item.quantity;
      }, 0)
    );

    const orderItems = userDraftOrder.draftItems.map((item) => ({
      sneakerId: item.sneakerId,
      colorVariantId: item.colorVariantId,
      sizeId: item.sizeId,
      quantity: item.quantity,
      price: item.colorVariant.finalPrice,
    }));

    const createOrder = await prisma.order.create({
      data: {
        userId: user ? user.id : null,
        orderId: generateOrderId(),
        token: user ? null : token,
        name,
        phone,
        email,
        deliveryAddress,
        status: "PENDING",
        paymentMethod,
        shippingMethod,
        shippingCost,
        orderAmount: serverAmount,
        orderItems: {
          create: orderItems,
        },
      },
    });

    if (!createOrder) {
      return NextResponse.json({
        success: false,
        error: "Order not create",
      });
    }

    await prisma.cartOnSneakers.deleteMany({
      where: {
        cart: {
          OR: [{ userId: user?.id }, { token }],
        },
      },
    });

    await prisma.draftOrder.deleteMany({
      where: {
        OR: [{ userId: user?.id }, { token }],
      },
    });

    return NextResponse.json({
      success: true,
      message: "Order create successfully",
    });
  } catch (error) {
    console.error("Order error:", error);
    return NextResponse.json({
      error: "Error while creating Order",
      success: false,
    });
  }
}
