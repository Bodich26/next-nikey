"use server";
import { prisma } from "@/../backend/prisma/prisma-client";

export async function migrateGuestDataToUser(userId: string, token: string) {
  if (!userId || !token) return;

  // Перенос корзины
  await prisma.cart.updateMany({
    where: {
      userId: null,
      token,
    },
    data: {
      userId,
      token: null, // отвязываем от токена
    },
  });

  // Перенос избранного
  await prisma.favorites.updateMany({
    where: {
      userId: null,
      token,
    },
    data: {
      userId,
      token: null, // отвязываем от токена
    },
  });

  await prisma.draftOrder.updateMany({
    where: {
      userId: null,
      token,
    },
    data: {
      userId,
      token: null, // отвязываем от токена
    },
  });
}
