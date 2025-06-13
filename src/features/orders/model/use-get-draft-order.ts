import { useGetDraftOrderQuery } from "../api/orders-api";

export const useGetDraftOrder = (draftOrderId: string) => {
  const {
    data: apiResponse, // переименовываем data в apiResponse для ясности
    isLoading,
    error,
    isError,
  } = useGetDraftOrderQuery(draftOrderId, {
    skip: !draftOrderId, // пропускаем запрос если ID отсутствует
  });

  return {
    draftOrder: apiResponse?.success ? apiResponse.draftOrder : null,
    isLoading,
    isError: isError || !apiResponse?.success,
    error: error?.toString() || (apiResponse?.error ?? null),
  };
};
