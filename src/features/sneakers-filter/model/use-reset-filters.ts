import { useSearchParams } from "next/navigation";

export const useResetFilter = () => {
  const searchParams = useSearchParams();
  const hasActiveFilters = searchParams.toString().length > 0;

  const resetFilters = () => {
    const baseUrl = window.location.pathname;
    window.history.replaceState({}, "", baseUrl);
  };

  const handleResetFiltersAndSearch = (
    setSearchValue: (value: string) => void
  ) => {
    resetFilters();
    setSearchValue("");
  };
  return { hasActiveFilters, handleResetFiltersAndSearch };
};
