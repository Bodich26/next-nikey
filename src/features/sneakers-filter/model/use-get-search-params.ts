"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

export const useGetSearchParams = () => {
  const searchParams = useSearchParams();

  const queryString = React.useMemo(() => {
    const params = new URLSearchParams();
    for (const [key, value] of searchParams.entries()) {
      params.append(key, value);
    }
    return params.toString();
  }, [searchParams]);

  return { queryString };
};
