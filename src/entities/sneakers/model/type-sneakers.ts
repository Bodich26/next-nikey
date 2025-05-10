import {
  CartOnSneakers,
  ColorVariant,
  ColorVariantSize,
  ProductSlider,
  Size,
  Sneaker,
} from "@prisma/client";

type SneakersWithVariants = Sneaker & {
  variants: ColorVariant[];
};

type SneakerInCart = CartOnSneakers & {
  sneaker: Sneaker;
  colorVariant: ColorVariant;
  size: Size;
};

type SneakerVarianSizes = {
  sizes: (ColorVariantSize & {
    size: {
      value: number;
      id: number;
    };
  })[];
};

type SneakerInFavorites = {
  sneaker: Sneaker & {
    variants: (ColorVariant & {
      images: { url: string }[];
    })[];
  };
};

type PopularSneakersResponse = {
  popularSneakers: SneakersWithVariants[];
  success: boolean;
  error?: string;
};

type SneakerSlug = Sneaker & {
  variants: (ColorVariant & {
    images: { url: string; colorVariantId: string }[];
    sizes: (ColorVariantSize & {
      size: { value: number; id: number };
    })[];
  })[];
  rating: number;
};

type SneakersSlugResponse = {
  sneakerBySlug: SneakerSlug | null;
  success: boolean;
  rating: number;
  error?: string;
};

type SneakersSliderResponse = {
  sneakerSlider: ProductSlider[];
  success: boolean;
  error?: string;
};

export type {
  SneakersWithVariants,
  SneakerInCart,
  PopularSneakersResponse,
  SneakerInFavorites,
  SneakersSlugResponse,
  SneakersSliderResponse,
  SneakerSlug,
  SneakerVarianSizes,
};
