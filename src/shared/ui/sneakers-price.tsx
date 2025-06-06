import { PriceFormat, useCalcDiscountPrice } from "@/shared";
import clsx from "clsx";

type PriceProductProps = {
  price: number;
  discount?: number;
  variant: "main" | "page" | "default";
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
        "font-bold leading-none",
        variant === "main"
          ? "text-indigo-600 text-xl"
          : variant === "default"
          ? "text-indigo-900 text-xl"
          : "text-indigo-900 !text-4xl"
      )}
    >
      <PriceFormat price={discountedPrice} />
    </b>
  );

  const oldPriceElement = hasDiscount ? (
    <span
      className={clsx(
        "font-medium line-through",
        variant === "main"
          ? "text-indigo-600 text-base"
          : variant === "default"
          ? "text-indigo-900 text-base"
          : "text-indigo-900 !text-2xl"
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

  if (variant === "default") {
    return (
      <p className="inline-flex items-center gap-2">
        {priceElement}
        {oldPriceElement}
        {discount! > 0 && (
          <b className="text-xl font-bold text-indigo-700">{discount}%</b>
        )}
      </p>
    );
  }

  return null;
};
