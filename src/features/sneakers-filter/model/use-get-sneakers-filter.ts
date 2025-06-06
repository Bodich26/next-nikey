import { useGetSneakersFilterQuery } from "../api/sneakers-filter-api";

export const useGetSneakersFilter = (paramsString: string) => {
  const { data, isLoading, error } = useGetSneakersFilterQuery(paramsString);

  return {
    sneakers: data?.sneakers || [],
    isLoading,
    totalCount: data?.totalCount || 0,
    isError: error && "Server Error",
  };
};
