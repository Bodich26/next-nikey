import { Sneaker, ColorVariant, FavoritesOnProducts } from "@prisma/client";

type FavoritesItem = FavoritesOnProducts & {
  sneaker: Sneaker & {
    variants: (ColorVariant & {
      images: {
        url: string;
      }[];
    })[];
  };
};

type FavoritesResponse = {
  favoriteItems: FavoritesItem[];
  success: boolean;
};

export type { FavoritesItem, FavoritesResponse };
