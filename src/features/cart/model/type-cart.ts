import {
  CartOnSneakers,
  Sneaker,
  ColorVariant,
  ColorVariantSize,
} from "@prisma/client";

type CartItem = CartOnSneakers & {
  sneaker: Sneaker & {
    variants: (ColorVariant & {
      images: {
        url: string;
      }[];
      sizes: (ColorVariantSize & {
        size: {
          value: number;
        };
      })[];
    })[];
  };
};

type CartRes = {
  cartItems: CartItem[];
  totalAmount: number;
  success?: boolean;
  error?: string;
};

export type { CartItem, CartRes };
