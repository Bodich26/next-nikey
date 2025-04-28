import { atom } from "jotai";
import { loadable } from "jotai/utils";
import { FavoritesResponse } from "../model/type-favorites";

export const fetchUserFavoritesAtom = atom<Promise<FavoritesResponse>>(
  async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/user/favorites`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: FavoritesResponse = await response.json();
    return data;
  }
);

export const loadableUserFavoritesAtom = loadable(fetchUserFavoritesAtom);
