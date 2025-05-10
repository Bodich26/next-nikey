import { CartOnSneakers, Sneaker, ColorVariant, Size } from "@prisma/client";

type CartItem = CartOnSneakers & {
  sneaker: Sneaker;
  colorVariant: ColorVariant;
  size: Size;
};

type CartRes = {
  cartItems: CartItem[];
  totalAmount: number;
  success?: boolean;
  error?: string;
};

type AddToCartRes = {
  error?: string;
  success?: boolean;
  message?: string;
};

type AddToCartReq = {
  sneakerId: string;
  variantId: string;
  sizeId: number;
};

type RemoveFromCartReq = {
  sneakerId: string;
  variantId: string;
  sizeId: number;
};

type RemoveFromCartRes = {
  error?: string;
  success?: boolean;
  message?: string;
};

export type {
  CartItem,
  CartRes,
  AddToCartReq,
  AddToCartRes,
  RemoveFromCartReq,
  RemoveFromCartRes,
};
