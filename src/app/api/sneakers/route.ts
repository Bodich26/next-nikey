"use server";

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/../backend/prisma/prisma-client";
import { $Enums, Prisma } from "@prisma/client";
import {
  mapModelFilterToName,
  parseEnumArray,
  parseStringArray,
} from "@/shared";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const searchInput = searchParams.get("search") || "";
    const discount = searchParams.get("discount") || "";
    const purposeList = parseEnumArray<$Enums.PurposeType>(
      searchParams.get("purpose"),
      ["LIFESTYLE", "RUNNING", "TRAINING"]
    );
    const genderList = parseEnumArray<$Enums.Gender>(
      searchParams.get("gender"),
      ["MEN", "WOMEN", "UNISEX"]
    );
    const ageList = parseEnumArray<$Enums.AgeCategory>(
      searchParams.get("age"),
      ["ADULT", "KIDS"]
    );
    const collectionList = parseStringArray(searchParams.get("collection"));
    const modelFilters = parseStringArray(searchParams.get("model"));

    const sizeParam = searchParams.get("size") || "";
    const sizeList = sizeParam
      .split(",")
      .map((v) => parseFloat(v))
      .filter((v) => !isNaN(v));

    const sortParam = searchParams.get("sort");
    const sortByPrice = searchParams.get("sortByPrice");
    const sortByPopular = searchParams.get("sortByPopular");

    const offset = parseInt(searchParams.get("offset") || "0", 10);
    const limit = 12;

    const filters: Prisma.SneakerWhereInput = {};

    if (searchInput) {
      filters.model = {
        contains: searchInput,
        mode: "insensitive",
      };
    }

    if (discount === "sales") {
      filters.variants = {
        some: {
          discount: { gt: 0 },
        },
      };
    }

    if (purposeList.length > 0) {
      filters.purposes = {
        some: {
          purpose: { in: purposeList },
        },
      };
    }

    if (collectionList.length > 0) {
      filters.collection = {
        is: {
          slug: { in: collectionList },
        },
      };
    }

    if (modelFilters.length > 0) {
      filters.OR = modelFilters.map((model) => ({
        model: {
          contains: mapModelFilterToName(model),
          mode: "insensitive",
        },
      }));
    }

    if (genderList.length > 0) {
      filters.gender = { in: genderList };
    }

    if (ageList.length > 0) {
      filters.ageCategory = { in: ageList };
    }

    if (sizeList.length > 0) {
      filters.variants = {
        some: {
          AND: [
            discount === "sales" ? { discount: { gt: 0 } } : {},
            sizeList.length > 0
              ? {
                  sizes: {
                    some: {
                      size: {
                        value: { in: sizeList },
                      },
                    },
                  },
                }
              : {},
          ],
        },
      };
    }

    const sneakers = await prisma.sneaker.findMany({
      where: filters,
      skip: offset,
      take: limit,
      include: {
        collection: {
          select: {
            slug: true,
          },
        },
        variants: {
          include: {
            sizes: true,
          },
          orderBy:
            sortByPrice === "cheap" ? { price: "desc" } : { price: "asc" },
          take: 1,
        },
        purposes: {
          select: {
            purpose: true,
          },
        },
      },
      orderBy: sortByPopular
        ? { views: sortByPopular === "more" ? "desc" : "asc" }
        : sortParam === "new"
        ? { createdAt: "desc" }
        : { createdAt: "desc" },
    });

    const totalCount = await prisma.sneaker.count({ where: filters });

    if (!sneakers || sneakers.length === 0) {
      return NextResponse.json({
        error: "No sneakers found",
        success: false,
        sneakers: [],
      });
    }

    return NextResponse.json({ sneakers, success: true, totalCount });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json({
      error: "Error while getting Sneakers",
      success: false,
      sneakers: [],
    });
  }
}
