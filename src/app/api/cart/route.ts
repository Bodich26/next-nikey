"use server";

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/../backend/prisma/prisma-client";

export async function GET(req: NextRequest) {
  const userId = "fwer24fsdg";
  const token = req.cookies.get("cartToken")?.value;

  if (!token) {
    return NextResponse.json({ totalsAmount: 0, item: [] });
  }

  try {
    const userCart = await prisma.cart.findFirst({
      where: {
        OR: [{ userId }, { token }],
      },
      include: {
        cartItems: {
          include: {
            sneaker: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });

    return NextResponse.json({ userCart, success: true });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ error: "Error while getting Cart", item: [] });
  }
}
