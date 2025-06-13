import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/../backend/prisma/prisma-client";
import { getSessionUser } from "@/shared";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ draftOrderId: string }> }
) {
  const { draftOrderId } = await context.params;
  try {
    const { user, token } = await getSessionUser();

    if (!user && !token) {
      return NextResponse.json({
        success: false,
        error: "Unauthorized access",
        draftOrder: null,
      });
    }

    const draftOrder = await prisma.draftOrder.findFirst({
      where: { OR: [{ userId: user?.id }, { token }], draftOrderId },
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

    if (!draftOrder) {
      return NextResponse.json({
        success: false,
        error: "Draft order not found",
        draftOrder: null,
      });
    }

    return NextResponse.json({
      success: true,
      draftOrder,
    });
  } catch (error) {
    console.error("Error fetching draft order:", error);
    return NextResponse.json({
      success: false,
      error: "Server error",
      draftOrder: null,
    });
  }
}
