import { useAddToCartMutation } from "../api/cart-api";

export const useAddCart = () => {
  const [addToCart, { isLoading }] = useAddToCartMutation();

  const addToSneakerCart = async (
    sneakerId: string,
    variantId: string,
    sizeId: number
  ): Promise<{ success: boolean; error?: unknown }> => {
    try {
      await addToCart({
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

  return { addToSneakerCart, isLoading };
};
