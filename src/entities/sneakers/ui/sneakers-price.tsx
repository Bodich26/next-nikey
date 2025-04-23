import { PriceFormat } from "@/shared";
import clsx from "clsx";
import { calcDiscountPrice } from "../model/calc-discount-price";

type PriceProductProps = {
  price: number;
  discount?: number;
  variant: "main";
};

export const SneakersPrice = ({
  price,
  discount,
  variant,
}: PriceProductProps) => {
  const hasDiscount = discount && discount > 0;
  const discountedPrice = calcDiscountPrice(price, discount);

  const priceElement = (
    <b className="font-bold text-xl leading-none text-indigo-600">
      <PriceFormat price={discountedPrice} />
    </b>
  );

  const oldPriceElement = hasDiscount ? (
    <span
      className={clsx("font-medium text-base line-through text-indigo-600 ")}
    >
      <PriceFormat price={price} />
    </span>
  ) : null;

  if (variant === "main") {
    return (
      <p className="inline-flex items-center gap-2">
        {priceElement}
        {oldPriceElement}
      </p>
    );
  }

  return null;
};
