"use client";
import clsx from "clsx";
import { useSizes } from "../model/use-sizes";

type Props = {
  sizes: number[];
};
export const SelectSize = ({ sizes }: Props) => {
  const { activeSize, setActiveSize } = useSizes(sizes);
  return (
    <div className="flex justify-between items-start text-indigo-900 capitalize gap-2 flex-col">
      <p className="text-xl font-bold">Sizes</p>
      <div className="flex flex-wrap gap-2">
        {sizes.map((item, i) => (
          <div
            key={i}
            onClick={() => setActiveSize(item)}
            className={clsx(
              "flex justify-center items-center rounded-lg uppercase w-[45px] h-[45px] cursor-pointer transition-colors duration-300 gap-2  border-1 border-indigo-700 text-indigo-700",
              activeSize === item ? "bg-indigo-700 !text-indigo-50" : ""
            )}
          >
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
