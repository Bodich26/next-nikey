import { ColorVariant, ColorVariantSize, Sneaker } from "@prisma/client";

type SneakersWithVariants = Sneaker & {
  variants: ColorVariant[];
};

type SneakerInCart = {
  sneaker: Sneaker & {
    variants: (ColorVariant & {
      images: { url: string }[];
      sizes: (ColorVariantSize & {
        size: { value: number };
      })[];
    })[];
  };
};

type SneakerInFavorites = {
  sneaker: Sneaker & {
    variants: (ColorVariant & {
      images: { url: string }[];
    })[];
  };
};

type PopularSneakersResponse = {
  popularSneakersData: SneakersWithVariants[];
  success: boolean;
  error?: string;
};

export type {
  SneakersWithVariants,
  SneakerInCart,
  PopularSneakersResponse,
  SneakerInFavorites,
};
