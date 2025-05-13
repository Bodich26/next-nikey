"use client";

import { ShowErrors, ShowNotify } from "@/shared";
import { useGetSneakersFilter } from "../model/use-get-sneakers-filter";
import { Select, Spinner } from "flowbite-react";
import { SneakersCatalogItem } from "@/entities";

export const SneakersFilterList = () => {
  const { sneakers, isLoading, isError } = useGetSneakersFilter();
  return (
    <div className="flex justify-between items-start gap-8 mt-8">
      <div className="border-1 border-indigo-300 rounded-lg text-indigo-900 p-4 w-[248px] ">
        Filters
      </div>

      <div className="flex-1">
        <div className="flex justify-between items-center text-indigo-900 font-medium text-base leading-none">
          <span>Result: {sneakers.length}</span>
          <div className="flex justify-between items-center gap-3">
            <span className="mr-1 text-indigo-500 dark:text-indigo-300">
              Sorting:
            </span>
            <Select
              id="byPrice"
              required
              theme={{
                base: "",
                field: {
                  base: "",
                  select: {
                    base: "!py-1.5 !px-2.5",
                    sizes: {},
                  },
                },
              }}
            >
              <option className="text-indigo-500 dark:text-indigo-300">
                Cheap ones first
              </option>
              <option className="text-indigo-500 dark:text-indigo-300">
                Dear ones first
              </option>
            </Select>
            <Select id="sortRating" required>
              <option className="text-indigo-500 dark:text-indigo-300">
                More popular first
              </option>
              <option className="text-indigo-500 dark:text-indigo-300">
                Less popular first
              </option>
            </Select>
          </div>
        </div>
        <div className="grid gap-8 grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))] mt-5">
          {isLoading && (
            <div className="flex items-center gap-2 flex-row text-center font-medium text-lg text-indigo-500">
              <Spinner
                color="default"
                aria-label="Indigo spinner example"
                size="md"
              />
              <p className="text-center text-indigo-400">Loading...</p>
            </div>
          )}

          {!isLoading && isError && <ShowErrors error={isError} type="full" />}

          {!isLoading &&
            !isError &&
            sneakers.length > 0 &&
            sneakers.map((item, index) => (
              <SneakersCatalogItem sneaker={item} key={index} />
            ))}

          {!isLoading && !isError && sneakers.length === 0 && (
            <ShowNotify notify="Sneakers is not define" />
          )}
        </div>
      </div>
    </div>
  );
};
