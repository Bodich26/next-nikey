"use client";
import { Button, Drawer, DrawerHeader, DrawerItems } from "flowbite-react";
import React from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { useDrawerState } from "../model/use-drawer-state";
import { SneakersWithVariants, SneakersCatalogItem } from "@/entities";

type Props =
  | {
      type: "favorites";
      sneakers: SneakersWithVariants[];
    }
  | {
      type: "cart";
      sneakers: SneakersWithVariants[];
    };

export const StoreDrawer = ({ sneakers, type }: Props) => {
  const { isOpen, setIsOpen } = useDrawerState();
  const handleClose = () => setIsOpen(false);

  const titles = {
    favorites: "FAVORITES",
    cart: "CART",
  } as const;

  const typeRenders = {
    favorites: sneakers.map((item) => (
      <SneakersCatalogItem sneaker={item} key={item.id} />
    )),
    cart: sneakers.map((item) => (
      <SneakersCatalogItem sneaker={item} key={item.id} />
    )),
  };

  const icons = {
    favorites: (
      <Heart
        onClick={() => setIsOpen(true)}
        cursor="Pointer"
        className="hover-effect-icon"
      />
    ),
    cart: (
      <ShoppingCart
        onClick={() => setIsOpen(true)}
        cursor="Pointer"
        className="hover-effect-icon"
      />
    ),
  };

  return (
    <>
      {icons[type] || ""}
      <Drawer
        open={isOpen}
        onClose={handleClose}
        position="right"
        theme={{
          root: {
            backdrop: "opacity-70",
            base: "max-w-[290px] !bg-indigo-50 text-indigo-500 !overflow-hidden justify-between flex flex-col",
          },
          header: {
            inner: {
              titleText: "!text-indigo-500",
              titleIcon: "hidden",
            },
          },
        }}
      >
        <DrawerHeader title={titles[type] || ""} />
        <DrawerItems className="!overflow-y-auto basis-[100%]">
          <div className="flex flex-col gap-4">{typeRenders[type]}</div>
        </DrawerItems>
        <div className="mt-4">
          <Button
            className="uppercase w-full cursor-pointer transition-colors duration-300 h-[36px] "
            size="lg"
            onClick={handleClose}
          >
            {`Close ${titles[type]}`}
          </Button>
        </div>
      </Drawer>
    </>
  );
};
