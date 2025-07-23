"use client";

import { useRouter } from "next/navigation";
import { useCreateDraftOrderMutation } from "../api/orders-api";
import { useUI } from "@/shared";

export const useCreateDraftOrder = () => {
  const router = useRouter();
  const [createDraftOrder, { isLoading }] = useCreateDraftOrderMutation();
  const { closeCart } = useUI();

  const handleCreateDraftOrder = async (): Promise<{
    success: boolean;
    error?: unknown;
  }> => {
    try {
      const res = await createDraftOrder().unwrap();

      if (res.draftOrderId) {
        closeCart();
        router.push(`/orders/${res.draftOrderId}`);
      }

      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "API request failed",
      };
    }
  };

  return { handleCreateDraftOrder, isLoading };
};
