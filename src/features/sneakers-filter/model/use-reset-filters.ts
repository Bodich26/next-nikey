import { useSearchParams } from "next/navigation";

export const useResetFilter = () => {
  const searchParams = useSearchParams();
  const hasActiveFilters = searchParams.toString().length > 0;

  const resetFilters = () => {
    const baseUrl = window.location.pathname;
    window.history.replaceState({}, "", baseUrl);
  };
  return { resetFilters, hasActiveFilters };
};
