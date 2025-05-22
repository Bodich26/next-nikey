"use client";

import React from "react";
import { Search } from "lucide-react";
import { Drawer, DrawerHeader, DrawerItems, TextInput } from "flowbite-react";

import { ShowNotify, useDrawerState } from "@/shared";
import { useGetSearchSneaker } from "../model/use-get-search-sneakers";
import { SneakersSearchItem } from "@/entities";

export const SearchDrawer = () => {
  const [searchSneakers, setSearchSneakers] = React.useState("");
  const { isOpen, setIsOpen } = useDrawerState();

  const { sneakers, isError, isLoading } = useGetSearchSneaker(searchSneakers);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Search
        onClick={() => setIsOpen(true)}
        cursor="Pointer"
        className="hover-effect-icon"
      />
      <Drawer
        open={isOpen}
        onClose={handleClose}
        position="top"
        theme={{
          root: {
            backdrop: "opacity-70",
            base: "max-h-[70%] max-sm:max-h-[90%] !bg-indigo-50 text-indigo-500 !overflow-hidden flex justify-center items-center flex-col ",
          },
          header: {
            inner: {
              titleText: "!text-indigo-500 ",
              titleIcon: "hidden",
            },
          },
        }}
      >
        <DrawerHeader title={"Search Sneakers"} />
        <TextInput
          id="small"
          type="text"
          sizing="sm"
          value={searchSneakers}
          className="w-[500px] max-sm:w-[300px]"
          onChange={(e) => setSearchSneakers(e.target.value)}
        />
        <DrawerItems className="!overflow-y-auto w-[500px] max-sm:w-[300px] relative">
          <div className="flex flex-col gap-4">
            {isError && <ShowNotify notify="Failed to search sneakers" />}

            {sneakers.length === 0 && (
              <p className="mt-2">Find your new sneakers...</p>
            )}

            {!isLoading &&
              !isError &&
              sneakers.length > 0 &&
              sneakers.map((item, index) => (
                <SneakersSearchItem key={index} sneaker={item} />
              ))}
          </div>
        </DrawerItems>
      </Drawer>
    </>
  );
};
