import { useGetSneakersFilterQuery } from "../api/sneakers-filter-api";

export const useGetSneakersFilter = (searchParams) => {
  const { data, isLoading, error } = useGetSneakersFilterQuery(searchParams);

  return {
    sneakers: data?.sneakers || [],
    isLoading,
    isError: error && "Server Error",
  };
};
