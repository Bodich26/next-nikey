import { useGetSearchSneakersQuery } from "../api/search-sneakers-api";

export const useGetSearchSneaker = (searchSneakers: string) => {
  const { data, isLoading, error } = useGetSearchSneakersQuery(searchSneakers);

  return {
    sneakers: data?.sneakers || [],
    isLoading,
    isError: error && "Server Error",
  };
};
