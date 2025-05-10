import { useRemoveFromCartMutation } from "../api/cart-api";

export const useRemoveCart = () => {
  const [removeFromCart, { isLoading }] = useRemoveFromCartMutation();

  const removeFromSneakerCart = async (
    sneakerId: string,
    variantId: string,
    sizeId: number
  ): Promise<{ success: boolean; error?: unknown }> => {
    try {
      await removeFromCart({
        sneakerId,
        variantId,
        sizeId,
      }).unwrap();
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "API request failed",
      };
    }
  };

  return { removeFromSneakerCart, isLoading };
};
