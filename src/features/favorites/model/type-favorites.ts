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

type FavoritesRes = {
  favoriteItems: FavoritesItem[];
  success?: boolean;
  error?: string;
};

type AddToFavoritesReq = {
  sneakerId: string;
};

type AddToFavoritesRes = {
  error?: string;
  success?: boolean;
  message?: string;
};

type RemoveFavoritesReq = {
  sneakerId: string;
};

type RemoveFavoritesRes = {
  error?: string;
  success?: boolean;
  message?: string;
};

export type {
  FavoritesItem,
  FavoritesRes,
  AddToFavoritesReq,
  AddToFavoritesRes,
  RemoveFavoritesReq,
  RemoveFavoritesRes,
};
