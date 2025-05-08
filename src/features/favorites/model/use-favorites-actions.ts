import {
  useAddToFavoritesMutation,
  useRemoveFavoritesMutation,
} from "../api/favorites-api";

export const useFavoriteActions = () => {
  const [addToFavorites, { isLoading: adding }] = useAddToFavoritesMutation();
  const [removeFromFavorites, { isLoading: removing }] =
    useRemoveFavoritesMutation();

  const toggleFavorite = async (
    sneakerId: string,
    isFavorite: boolean
  ): Promise<{ success: boolean; error?: unknown }> => {
    try {
      if (isFavorite) {
        await removeFromFavorites({ sneakerId }).unwrap();
      } else {
        await addToFavorites({ sneakerId }).unwrap();
      }
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "API request failed",
      };
    }
  };

  return { toggleFavorite, isLoading: adding || removing };
};
