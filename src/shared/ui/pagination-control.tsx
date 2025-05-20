"use client";
import React from "react";
import { Pagination } from "flowbite-react";
import { parseAsInteger, useQueryState } from "nuqs";

type PaginationControlProps = {
  totalCount: number;
  limit?: number;
  paramName?: string;
};

export const PaginationControl = ({
  totalCount,
  limit = 12,
  paramName = "offset",
}: PaginationControlProps) => {
  const [offset, setOffset] = useQueryState(
    paramName,
    parseAsInteger.withDefault(0)
  );

  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(totalCount / limit);

  const handlePageChange = (page: number) => {
    const newOffset = (page - 1) * limit;
    setOffset(newOffset);
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex overflow-x-auto sm:justify-center mt-6">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        showIcons
      />
    </div>
  );
};
