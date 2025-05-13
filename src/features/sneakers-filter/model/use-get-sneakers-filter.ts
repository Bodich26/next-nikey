import { useGetSneakersFilterQuery } from "../api/sneakers-filter-api";

export const useGetSneakersFilter = () => {
  const { data, isLoading, error } = useGetSneakersFilterQuery();

  return {
    sneakers: data?.sneakers || [],
    isLoading,
    isError: error && "Server Error",
  };
};
