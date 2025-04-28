import { ShoppingCart } from "lucide-react";
import { loadableUserCartAtom } from "../api/cart-api-atom";
import { useAtom } from "jotai";
import {
  Button,
  Drawer,
  DrawerHeader,
  DrawerItems,
  Spinner,
} from "flowbite-react";
import { SneakersCartItem } from "@/entities";
import { PriceFormat, ShowNotify, useDrawerState } from "@/shared";

export const CartDrawer = () => {
  const [userCart] = useAtom(loadableUserCartAtom);
  const { isOpen, setIsOpen } = useDrawerState();
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <ShoppingCart
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
              titleText: "!text-indigo-500 ",
              titleIcon: "hidden",
            },
          },
        }}
      >
        <DrawerHeader title={"Cart"} />
        <DrawerItems className="!overflow-y-auto basis-[100%] relative">
          <div className="flex flex-col gap-4">
            {userCart.state === "loading" && (
              <div className="flex items-center gap-2 flex-row text-center font-medium text-lg text-indigo-500 absolute top-[40%] right-[50%] translate-x-[50%]">
                <Spinner
                  color="default"
                  aria-label="Indigo spinner example"
                  size="md"
                />
                <p className="text-center text-indigo-400">Loading...</p>
              </div>
            )}

            {userCart.state === "hasError" && (
              <ShowNotify notify="Failed to load cart" />
            )}

            {userCart.state === "hasData" &&
              userCart.data &&
              (userCart.data.cartItems.length > 0 ? (
                userCart.data.cartItems.map((item, index) => (
                  <SneakersCartItem sneaker={item.sneaker} key={index} />
                ))
              ) : (
                <ShowNotify notify="Your cart is empty" />
              ))}
          </div>
        </DrawerItems>
        <div className="mt-4">
          {userCart.state === "hasData" && userCart.data && (
            <strong className="text-base font-bold text-indigo-900 leading-none">
              Totals: <PriceFormat price={userCart.data.totalAmount} />
            </strong>
          )}
          <Button
            className="mt-2 uppercase w-full cursor-pointer transition-colors duration-300 h-[36px]"
            size="lg"
            onClick={handleClose}
          >
            Close Cart
          </Button>
        </div>
      </Drawer>
    </>
  );
};
