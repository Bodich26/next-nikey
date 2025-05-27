"use server";

import { prisma } from "@/../backend/prisma/prisma-client";

export async function cleanExpiredGuestToken() {
  const now = new Date();

  // Удаление корзин
  await prisma.cart.deleteMany({
    where: {
      userId: null,
      token: { not: null },
      expiresAt: { lt: now },
    },
  });

  // Удаление избранного
  await prisma.favorites.deleteMany({
    where: {
      userId: null,
      token: { not: null },
      expiresAt: { lt: now },
    },
  });
}
