import { useGetDraftOrderQuery } from "../api/orders-api";

export const useGetDraftOrder = (draftOrderId: string) => {
  const {
    data: apiResponse,
    isLoading,
    error,
    isError,
  } = useGetDraftOrderQuery(draftOrderId, {
    skip: !draftOrderId,
  });

  return {
    draftOrder: apiResponse?.success ? apiResponse.draftOrder : null,
    isLoading,
    isError: isError || !apiResponse?.success,
    error: error?.toString() || (apiResponse?.error ?? null),
  };
};
