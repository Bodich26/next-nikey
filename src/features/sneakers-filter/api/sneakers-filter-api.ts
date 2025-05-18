import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SneakersFilterRes } from "../model/type-sneakers-filter";

export const sneakersFilterApi = createApi({
  reducerPath: "sneakersFilterApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  tagTypes: ["SneakersFilter"],
  endpoints: (builder) => ({
    getSneakersFilter: builder.query<SneakersFilterRes, Record<string, string>>(
      {
        query: (params) => {
          const searchParams = new URLSearchParams(params);
          return `/sneakers?${searchParams.toString()}`;
        },
        providesTags: ["SneakersFilter"],
      }
    ),
  }),
});

export const { useGetSneakersFilterQuery } = sneakersFilterApi;
