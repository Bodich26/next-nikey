import { PriceFormat, useCalcDiscountPrice } from "@/shared";
import clsx from "clsx";

type PriceProductProps = {
  price: number;
  discount?: number;
  variant: "main" | "page";
};

export const SneakersPrice = ({
  price,
  discount,
  variant,
}: PriceProductProps) => {
  const hasDiscount = typeof discount === "number" && discount > 0;
  const discountedPrice = useCalcDiscountPrice(price, discount);

  const priceElement = (
    <b
      className={clsx(
        "font-bold text-xl leading-none",
        variant === "main" ? "text-indigo-600" : "text-indigo-900 !text-4xl"
      )}
    >
      <PriceFormat price={discountedPrice} />
    </b>
  );

  const oldPriceElement = hasDiscount ? (
    <span
      className={clsx(
        "font-medium text-base line-through text-indigo-600",
        variant === "main" ? "text-indigo-600" : "text-indigo-900 !text-2xl "
      )}
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

  if (variant === "page") {
    return (
      <p className="inline-flex items-center gap-3">
        {priceElement}
        {oldPriceElement}
        {discount! > 0 && (
          <b className="text-2xl font-bold text-indigo-700">{discount}%</b>
        )}
      </p>
    );
  }

  return null;
};
