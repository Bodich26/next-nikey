"use client";

import { SneakersPrice } from "@/shared";
import { useUser } from "@clerk/nextjs";
import { Select } from "flowbite-react";
import { Tag } from "lucide-react";

type Props = {
  totalPrice: number;
};

export const SelectCouponOrder = ({ totalPrice }: Props) => {
  const { user } = useUser();
  const isGuest = !user;

  return (
    <div className="border border-indigo-300 p-4 bg-transparent  rounded-lg flex flex-col gap-4">
      <h4 className="uppercase text-xl font-medium text-indigo-900 ">Totals</h4>
      <div>
        <Select
          id="location"
          required
          disabled={isGuest}
          sizing="sm"
          icon={Tag}
          className={isGuest ? "opacity-70 cursor-not-allowed" : ""}
          theme={{
            base: "w-full  text-indigo-500 dark:text-indigo-500 ",
            field: {
              icon: {
                svg: "!text-indigo-500 ",
              },
              base: "",
              select: {
                base: "!text-indigo-500 !bg-transparent !placeholder-indigo-500 !border-indigo-300 !text-[14px]",
              },
            },
          }}
        >
          <option value="">Choose your coupon</option>
          <option value="discount10%">10% discount coupon</option>
          <option value="firstOrder20%">20% coupon for first order</option>
        </Select>
        {isGuest && (
          <p className="text-xs font-normal text-indigo-500 mt-1">
            Register to choose a promo code
          </p>
        )}
      </div>

      <div className="flex items-center gap-1">
        <p className="font-medium text-lg text-indigo-900 capitalize">
          Order amount:
        </p>
        <SneakersPrice price={totalPrice} variant={"main"} discount={0} />
      </div>
    </div>
  );
};
