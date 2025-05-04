import {
  ColorVariant,
  ColorVariantSize,
  ProductSlider,
  Review,
  Sneaker,
} from "@prisma/client";

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
  popularSneakersData: SneakersWithVariants[];
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
  reviews: Review[];
};

type SneakersSlugResponse = {
  sneakerBySlug: SneakerSlug | null;
  success: boolean;
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
