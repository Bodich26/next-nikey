import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  DraftOrderIdApiRes,
  DraftOrderApiRes,
  CreateOrderRes,
  CreateOrderReq,
} from "../model/type-orders";

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
    createOrder: builder.mutation<CreateOrderRes, CreateOrderReq>({
      query: (orderData) => ({
        url: "/orders/create",
        method: "POST",
        body: orderData,
      }),
    }),
  }),
});

export const {
  useGetDraftOrderQuery,
  useCreateDraftOrderMutation,
  useCreateOrderMutation,
} = ordersApi;
