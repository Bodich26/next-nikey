import { Webhook } from "svix";
import { WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import { prisma } from "../../../../../backend/prisma/prisma-client";

export async function POST(req: Request) {
  const secret = process.env.SIGNING_SECRET;
  if (!secret) return new Response("Missing secret", { status: 500 });

  const wh = new Webhook(secret);
  const body = await req.text();
  const headerPayload = await headers();

  const event = wh.verify(body, {
    "svix-id": headerPayload.get("svix-id")!,
    "svix-timestamp": headerPayload.get("svix-timestamp")!,
    "svix-signature": headerPayload.get("svix-signature")!,
  }) as WebhookEvent;

  if (event.type === "user.created") {
    const { id, email_addresses, username, image_url } = event.data;
    await prisma.user.upsert({
      where: { clerkId: id },
      update: {},
      create: {
        clerkId: id,
        email: email_addresses[0].email_address,
        name: username || "No name",
        image: image_url,
      },
    });
  }

  return new Response("OK");
}
