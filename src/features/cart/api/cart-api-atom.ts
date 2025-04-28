import { atom } from "jotai";
import { loadable } from "jotai/utils";
import { CartResponse } from "../model/type-cart";

export const fetchUserCartAtom = atom<Promise<CartResponse>>(async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/cart`);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data: CartResponse = await response.json();
  return data;
});

export const loadableUserCartAtom = loadable(fetchUserCartAtom);
