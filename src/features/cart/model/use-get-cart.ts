import { useGetCartQuery } from "../api/cart-api";

export const useGetCart = () => {
  const { data, isLoading, error } = useGetCartQuery();

  const cartIds = new Set(data?.cartItems.map((p) => p.sneakerId) || []);

  return {
    cartItems: data?.cartItems || [],
    totalAmount: data?.totalAmount || 0,
    isLoading,
    isError: error && "Server Error",
    cartIds,
  };
};
