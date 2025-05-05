"use client";
import clsx from "clsx";
import React from "react";

type SizeWithQuantity = {
  id: number;
  quantity: number;
  colorVariantId: string;
  sizeId: number;
  size: {
    value: number;
    id: number;
  };
};

type SelectSizeProps = {
  sizes: SizeWithQuantity[];
};

export const SelectSize = ({ sizes }: SelectSizeProps) => {
  const [activeSize, setActiveSize] = React.useState<SizeWithQuantity | null>(
    null
  );

  React.useEffect(() => {
    setActiveSize(null);
  }, [sizes]);

  const sortedSizes = React.useMemo(() => {
    return [...sizes].sort((a, b) => a.size.value - b.size.value);
  }, [sizes]);

  return (
    <div className="flex justify-between items-start text-indigo-900 capitalize gap-2 flex-col">
      <p className="text-xl font-bold">Sizes</p>
      <div className="flex flex-wrap gap-2">
        {sortedSizes.map((item, i) => (
          <div
            key={i}
            onClick={item.quantity > 0 ? () => setActiveSize(item) : undefined}
            className={clsx(
              "flex justify-center items-center rounded-lg uppercase w-[45px] h-[45px] cursor-pointer transition-colors duration-300 gap-2 border-1 border-indigo-700 text-indigo-700",
              activeSize?.size.value === item.size.value &&
                "bg-indigo-700 !text-indigo-50",
              item.quantity <= 0 && "opacity-25 !cursor-not-allowed"
            )}
          >
            <span>{item.size.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
