import { useGetFavoritesQuery } from "../api/favorites-api";

export const useGetFavorites = () => {
  const { data, isLoading, error } = useGetFavoritesQuery();

  const favoriteIds = new Set(
    data?.favoriteItems.map((p) => p.sneakerId) || []
  );

  return {
    favoritesItem: data?.favoriteItems || [],
    isLoading,
    isError: error && "Server Error",
    favoriteIds,
  };
};
