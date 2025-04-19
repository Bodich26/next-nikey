"use server";

import { NextResponse } from "next/server";
import { prisma } from "@/../backend/prisma/prisma-client";

export async function GET() {
  try {
    const mainBlogs = await prisma.blog.findMany({
      where: {
        isFeatured: true,
      },
      take: 3,
      orderBy: { createdAt: "asc" },
    });

    if (!mainBlogs || mainBlogs.length === 0) {
      return NextResponse.json({
        error: "No blogs found",
        success: false,
        item: [],
      });
    }

    return NextResponse.json({ mainBlogs, success: true });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({ error: "Error while getting Blogs", item: [] });
  }
}
