"use server";

import { prisma } from "@/../backend/prisma/prisma-client";

export async function cleanExpiredGuestToken() {
  const now = new Date();

  await prisma.cart.deleteMany({
    where: {
      userId: null,
      token: { not: null },
      expiresAt: { lt: now },
    },
  });

  await prisma.favorites.deleteMany({
    where: {
      userId: null,
      token: { not: null },
      expiresAt: { lt: now },
    },
  });

  await prisma.draftOrder.deleteMany({
    where: {
      userId: null,
      token: { not: null },
      expiresAt: { lt: now },
    },
  });
}
