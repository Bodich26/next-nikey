import { useRemoveFavoritesMutation } from "../api/favorites-api";

export const useRemoveFavorites = () => {
  const [removeFromFavorites, { isLoading: removing }] =
    useRemoveFavoritesMutation();

  const removeSneakerFromFavorites = async (
    sneakerId: string
  ): Promise<{ success: boolean; error?: unknown }> => {
    try {
      await removeFromFavorites({ sneakerId }).unwrap();
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "API request failed",
      };
    }
  };

  return { removeSneakerFromFavorites, isLoading: removing };
};
