"use server";

import { cookies } from "next/headers";
import { v4 as uuidv4 } from "uuid";

export async function getGuestToken() {
  const cookieStore = await cookies();
  let token = cookieStore.get("guestToken")?.value;

  if (!token) {
    token = uuidv4();
    cookieStore.set("guestToken", token, {
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
      secure: process.env.NODE_ENV === "production",
    });
  }

  return token;
}
