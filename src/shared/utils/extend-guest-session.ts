"use server";

import { prisma } from "@/../backend/prisma/prisma-client";

export async function extendGuestSession(token: string) {
  if (!token) return;

  const newExpiration = new Date();
  newExpiration.setHours(newExpiration.getHours() + 24);

  await prisma.cart.updateMany({
    where: {
      token,
      userId: null,
    },
    data: {
      expiresAt: newExpiration,
    },
  });

  await prisma.favorites.updateMany({
    where: {
      token,
      userId: null,
    },
    data: {
      expiresAt: newExpiration,
    },
  });
}
