import { ColorVariant, Sneaker } from "@prisma/client";

type SearchSneakers = {
  sneaker: Sneaker & {
    variants: (ColorVariant & {
      images: { url: string }[];
    })[];
  };
};

type SearchSneakersRes = {
  sneakers: SearchSneakers[];
  success: boolean;
  error?: string;
};

export type { SearchSneakersRes };
