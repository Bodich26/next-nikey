import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SearchSneakersRes } from "../model/type-search";

export const searchSneakersApi = createApi({
  reducerPath: "searchSneakersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_SNEAKERS_URL,
  }),
  tagTypes: ["searchSneakers"],
  endpoints: (builder) => ({
    getSearchSneakers: builder.query<SearchSneakersRes, string>({
      query: (model) => `search?model=${model}`,
      providesTags: ["searchSneakers"],
    }),
  }),
});

export const { useGetSearchSneakersQuery } = searchSneakersApi;
