import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  AddToCartReq,
  AddToCartRes,
  CartRes,
  RemoveFromCartReq,
  RemoveFromCartRes,
} from "../model/type-cart";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_USER_URL,
  }),
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    getCart: builder.query<CartRes, void>({
      query: () => "/cart",
      providesTags: ["Cart"],
    }),
    addToCart: builder.mutation<AddToCartRes, AddToCartReq>({
      query: ({ sneakerId, variantId, sizeId }) => ({
        url: "/cart",
        method: "POST",
        body: { sneakerId, variantId, sizeId },
      }),
      invalidatesTags: ["Cart"],
    }),
    removeFromCart: builder.mutation<RemoveFromCartRes, RemoveFromCartReq>({
      query: ({ sneakerId }) => ({
        url: "/cart",
        method: "DELETE",
        body: { sneakerId },
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const {
  useGetCartQuery,
  useAddToCartMutation,
  useRemoveFromCartMutation,
} = cartApi;
