import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CartRes } from "../model/type-cart";

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
  }),
});

export const { useGetCartQuery } = cartApi;
