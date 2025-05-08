import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  AddToFavoritesReq,
  AddToFavoritesRes,
  FavoritesRes,
  RemoveFavoritesReq,
  RemoveFavoritesRes,
} from "../model/type-favorites";

export const favoritesApi = createApi({
  reducerPath: "favoritesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_USER_URL,
  }),
  tagTypes: ["Favorites"],
  endpoints: (builder) => ({
    getFavorites: builder.query<FavoritesRes, void>({
      query: () => "/favorites",
      providesTags: ["Favorites"],
    }),
    addToFavorites: builder.mutation<AddToFavoritesRes, AddToFavoritesReq>({
      query: ({ sneakerId }) => ({
        url: "/favorites",
        method: "POST",
        body: { sneakerId },
      }),
      invalidatesTags: ["Favorites"],
    }),
    removeFavorites: builder.mutation<RemoveFavoritesRes, RemoveFavoritesReq>({
      query: ({ sneakerId }) => ({
        url: "/favorites",
        method: "DELETE",
        body: { sneakerId },
      }),
      invalidatesTags: ["Favorites"],
    }),
  }),
});

export const {
  useGetFavoritesQuery,
  useAddToFavoritesMutation,
  useRemoveFavoritesMutation,
} = favoritesApi;
