import { ShoppingCart } from "lucide-react";
import {
  Button,
  Drawer,
  DrawerHeader,
  DrawerItems,
  Spinner,
} from "flowbite-react";
import { SneakersCartItem } from "@/entities";
import { CircleQuantity, PriceFormat, ShowNotify, useUI } from "@/shared";
import { useGetCart } from "../model/use-get-cart";
import { ButtonCreateOrder } from "@/features";

export const CartDrawer = () => {
  const { isCartOpen, openCart, closeCart } = useUI();
  const { cartItems, totalAmount, isLoading, isError } = useGetCart();

  return (
    <>
      <CircleQuantity
        onClick={openCart}
        icon={<ShoppingCart className="hover-effect-icon" />}
        quantity={cartItems.length}
      />

      <Drawer
        open={isCartOpen}
        onClose={closeCart}
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
            {isLoading && (
              <div className="flex items-center gap-2 flex-row text-center font-medium text-lg text-indigo-500 absolute top-[40%] right-[50%] translate-x-[50%]">
                <Spinner
                  color="default"
                  aria-label="Indigo spinner example"
                  size="md"
                />
                <p className="text-center text-indigo-400">Loading...</p>
              </div>
            )}

            {!isLoading && isError && (
              <ShowNotify notify="Failed to load cart" />
            )}

            {!isLoading &&
              !isError &&
              cartItems.length > 0 &&
              cartItems.map((item, index) => (
                <SneakersCartItem sneaker={item} key={index} />
              ))}

            {!isLoading && !isError && cartItems.length === 0 && (
              <ShowNotify notify="Your cart is empty" />
            )}
          </div>
        </DrawerItems>
        <div className="mt-4">
          <strong className="text-base font-bold text-indigo-900 leading-none">
            Totals: <PriceFormat price={totalAmount} />
          </strong>

          {cartItems.length > 0 ? (
            <ButtonCreateOrder />
          ) : (
            <Button
              className="mt-2 uppercase w-full cursor-pointer transition-colors duration-300 h-[36px]"
              size="lg"
              onClick={closeCart}
            >
              Close Cart
            </Button>
          )}
        </div>
      </Drawer>
    </>
  );
};
