import { Heart } from "lucide-react";

import { useAtom } from "jotai";
import {
  Button,
  Drawer,
  DrawerHeader,
  DrawerItems,
  Spinner,
} from "flowbite-react";
import { ShowNotify, useDrawerState } from "@/shared";
import { loadableUserFavoritesAtom } from "../api/favorites-api-atom";
import { SneakersFavoritesItem } from "@/entities";

export const FavoritesDrawer = () => {
  const [userFavorites] = useAtom(loadableUserFavoritesAtom);
  const { isOpen, setIsOpen } = useDrawerState();
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Heart
        onClick={() => setIsOpen(true)}
        cursor="Pointer"
        className="hover-effect-icon"
      />
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
        <DrawerHeader title={"Favorites"} />
        <DrawerItems className="!overflow-y-auto basis-[100%]">
          <div className="flex flex-col gap-4">
            {userFavorites.state === "loading" && (
              <div className="flex items-center gap-2 flex-row text-center font-medium text-lg text-indigo-500 absolute top-[40%] right-[50%] translate-x-[50%]">
                <Spinner
                  color="default"
                  aria-label="Indigo spinner example"
                  size="md"
                />
                <p className="text-center text-indigo-400">Loading...</p>
              </div>
            )}

            {userFavorites.state === "hasError" && (
              <ShowNotify notify="Failed to load favorites" />
            )}

            {userFavorites.state === "hasData" &&
              userFavorites.data &&
              (userFavorites.data.favoriteItems.length > 0 ? (
                userFavorites.data.favoriteItems.map((item, index) => (
                  <SneakersFavoritesItem sneaker={item.sneaker} key={index} />
                ))
              ) : (
                <ShowNotify notify="Your favorites is empty" />
              ))}
          </div>
        </DrawerItems>
        <div className="mt-4">
          <Button
            className="mt-2 uppercase w-full cursor-pointer transition-colors duration-300 h-[36px] "
            size="lg"
            onClick={handleClose}
          >
            Close Favorites
          </Button>
        </div>
      </Drawer>
    </>
  );
};
