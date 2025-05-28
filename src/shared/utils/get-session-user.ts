"use server";

import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/../backend/prisma/prisma-client";
import { getGuestToken } from "./get-guest-token";
import { migrateGuestDataToUser } from "./migrate-guest-data-to-user";
import { extendGuestSession } from "./extend-guest-session";

export async function getSessionUser() {
  const currentUser = auth();
  const clerkUserId = (await currentUser).userId;
  const token = await getGuestToken();

  let user = null;

  if (clerkUserId) {
    user = await prisma.user.findUnique({ where: { clerkId: clerkUserId } });

    if (user && token) {
      await migrateGuestDataToUser(user.id, token);
    }
  }

  if (!user && token) {
    await extendGuestSession(token);
  }

  return { user, token };
}
