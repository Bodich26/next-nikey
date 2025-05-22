"use client";
import React from "react";
import { Pagination } from "flowbite-react";
import { parseAsInteger, useQueryState } from "nuqs";

type PaginationControlProps = {
  totalCount: number;
  limit: number;
  paramName: string;
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
    <div className="flex overflow-x-auto sm:justify-center mt-6 ">
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        showIcons
        previousLabel={""}
        nextLabel={""}
        theme={{
          base: "!border-indigo-300 ",
          layout: {
            table: {
              base: "text-sm text-gray-700 dark:text-gray-400 ",
              span: "font-semibold !text-gray-300 dark:text-white ",
            },
          },
          pages: {
            base: "xs:mt-0 mt-2 inline-flex items-center -space-x-px cursor-pointer",
            showIcon: "inline-flex",
            previous: {
              base: "cursor-pointer ml-0 rounded-l-lg border !border-indigo-300 !bg-transparent px-3 py-2 leading-tight !text-indigo-300 hover:bg-indigo-300 hover:text-indigo-700",
              icon: "text-indigo-500 h-5 w-5",
            },
            next: {
              base: "cursor-pointer rounded-r-lg border !border-indigo-300 !bg-transparent px-3 py-2 leading-tight !text-indigo-300 !hover:bg-indigo-300 !hover:text-indigo-700",
              icon: "text-indigo-500 h-5 w-5",
            },
            selector: {
              base: "cursor-pointer w-12 border !border-indigo-300 !bg-transparent py-2 leading-tight !text-indigo-500 !hover:bg-indigo-300 !hover:text-indigo-500",
              active: "!bg-indigo-200 !text-indigo-500",
              disabled: "cursor-not-allowed opacity-50",
            },
          },
        }}
      />
    </div>
  );
};
