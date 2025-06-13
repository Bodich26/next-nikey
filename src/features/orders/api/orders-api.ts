import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DraftOrderIdApiRes, DraftOrderApiRes } from "../model/type-orders";

export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  tagTypes: ["Orders"],
  endpoints: (builder) => ({
    getDraftOrder: builder.query<DraftOrderApiRes, string>({
      query: (id) => `/orders/${id}`,
      providesTags: ["Orders"],
    }),
    createDraftOrder: builder.mutation<DraftOrderIdApiRes, void>({
      query: () => ({
        url: "/orders",
        method: "POST",
      }),
      invalidatesTags: ["Orders"],
    }),
  }),
});

export const { useGetDraftOrderQuery, useCreateDraftOrderMutation } = ordersApi;
