"use client";

import clsx from "clsx";
import { ReactNode, JSX } from "react";

type Props = {
  title: string | ReactNode;
  types?: string;
  as: keyof JSX.IntrinsicElements;
  className?: string;
  align: "left" | "center" | "right";
};
export const SectionTitles = ({
  title,
  as: Tag,
  className,
  align,
  types,
}: Props) => {
  const justifyClass =
    align === "left"
      ? "justify-center sm:justify-start"
      : align === "right"
      ? "justify-center sm:justify-end"
      : "justify-center sm:justify-center";
  return (
    <div className={`flex items-center gap-3 ${justifyClass}`}>
      {(align === "center" || align === "right") && (
        <span className="hidden sm:block flex-1 h-[3px] bg-indigo-900" />
      )}
      <Tag
        className={clsx(
          "text-indigo-900 font-bold text-4xl leading-none uppercase titles-xs",
          className
        )}
      >
        {title + " " + types!}
      </Tag>

      {(align === "center" || align === "left") && (
        <span className="hidden sm:block flex-1 h-[3px] bg-indigo-900" />
      )}
    </div>
  );
};
