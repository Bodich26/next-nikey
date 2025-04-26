import {
  Cart,
  CartOnSneakers,
  Sneaker,
  ColorVariant,
  ColorVariantSize,
} from "@prisma/client";

type CartSneakers = Cart & {
  cartItems: (CartOnSneakers & {
    sneaker: Sneaker & {
      variants: (ColorVariant & {
        sizes: ColorVariantSize[];
      })[];
    };
  })[];
};

export type { CartSneakers };
