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
  const [activeSize, setActiveSize] = React.useState(
    sizes.length > 0 ? sizes[0] : null
  );

  React.useEffect(() => {
    setActiveSize(sizes[0]);
  }, [sizes]);

  return (
    <div className="flex justify-between items-start text-indigo-900 capitalize gap-2 flex-col">
      <p className="text-xl font-bold">Sizes</p>
      <div className="flex flex-wrap gap-2">
        {sizes.map((item, i) => (
          <div
            key={i}
            onClick={() => setActiveSize(item)}
            className={clsx(
              "flex justify-center items-center rounded-lg uppercase w-[45px] h-[45px] cursor-pointer transition-colors duration-300 gap-2 border-1 border-indigo-700 text-indigo-700",
              activeSize?.size.value === item.size.value
                ? "bg-indigo-700 !text-indigo-50"
                : ""
            )}
          >
            <span>{item.size.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
