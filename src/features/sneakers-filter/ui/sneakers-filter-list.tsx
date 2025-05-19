"use client";

import { ShowErrors, ShowNotify, SkeletonSneakersItem } from "@/shared";
import { useQueryState } from "nuqs";
import { useGetSneakersFilter } from "../model/use-get-sneakers-filter";
import { Select, TextInput } from "flowbite-react";
import { SneakersCatalogItem } from "@/entities";
import { Search } from "lucide-react";
import {
  checkboxAge,
  checkboxCollection,
  checkboxDiscount,
  checkboxGender,
  checkboxPurpose,
  checkboxSize,
  checkboxSneakersModel,
} from "../model/checkbox-filter-list";
import { SneakersCheckboxGroup } from "./sneakers-checkbox-group";
import { useGetSearchParams } from "../model/use-get-search-params";

const allGroups = [
  ...checkboxDiscount,
  ...checkboxPurpose,
  ...checkboxCollection,
  ...checkboxSneakersModel,
  ...checkboxGender,
  ...checkboxAge,
  ...checkboxSize,
];

export const SneakersFilterList = () => {
  const { queryString } = useGetSearchParams();
  const { sneakers, isLoading, isError } = useGetSneakersFilter(queryString);
  const [search, setSearch] = useQueryState("search", { defaultValue: "" });

  return (
    <div className="flex justify-between items-start gap-8 mt-8">
      <div className="border-1 border-indigo-300 rounded-lg text-indigo-900 p-4 w-[248px] flex flex-col gap-5 overflow-auto">
        <TextInput
          id="small"
          type="text"
          sizing="sm"
          placeholder="|Quick search for anyt..."
          onChange={(e) => setSearch(e.target.value || null)}
          value={search}
          icon={Search}
          theme={{
            base: "",
            field: {
              base: "group !bg-transparent",
              icon: {
                svg: "!text-indigo-300 ",
              },
              input: {
                base: "!bg-transparent !text-indigo-500 !border-indigo-300 !text-[14px]",
              },
            },
          }}
        />

        {allGroups.map((group) => (
          <SneakersCheckboxGroup
            key={group.name}
            title={group.title}
            name={group.name}
            options={group.options}
          />
        ))}
      </div>

      <div className="flex-1">
        <div className="flex justify-between items-center text-indigo-900 font-medium text-base leading-none">
          <span>Result: {isLoading ? "loading..." : sneakers.length}</span>
          <div className="flex justify-between items-center gap-3">
            <span className="mr-1 text-indigo-900">Sorting:</span>
            <Select
              id="byPrice"
              required
              theme={{
                base: "w-[172px]",
                field: {
                  base: "",
                  select: {
                    base: "!py-1.5 !px-2.5 border-1 !border-indigo-300 !bg-transparent !text-indigo-500 ",
                  },
                },
              }}
            >
              <option>Cheap ones first</option>
              <option>Dear ones first</option>
            </Select>
            <Select
              id="sortRating"
              required
              theme={{
                base: "w-[172px]",
                field: {
                  base: "",
                  select: {
                    base: "!py-1.5 !px-2.5 border-1 !border-indigo-300 !bg-transparent !text-indigo-500 ",
                  },
                },
              }}
            >
              <option>More popular first</option>
              <option>Less popular first</option>
            </Select>
          </div>
        </div>
        <div className="grid gap-8 grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))] mt-5 ">
          {isLoading && (
            <>
              {Array.from({ length: 12 }).map((_, index) => (
                <SkeletonSneakersItem key={index} />
              ))}
            </>
          )}

          {!isLoading && isError && <ShowErrors error={isError} type="full" />}

          {!isLoading &&
            !isError &&
            sneakers.length > 0 &&
            sneakers.map((item, index) => (
              <SneakersCatalogItem sneaker={item} key={index} />
            ))}

          {!isLoading && !isError && sneakers.length === 0 && (
            <ShowNotify notify="Not a Sneakers" />
          )}
        </div>
      </div>
    </div>
  );
};
