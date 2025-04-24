"use client";

import clsx from "clsx";
import { JSX } from "react";

type Props = {
  title: string;
  as: keyof JSX.IntrinsicElements;
  className?: string;
  align: "left" | "center" | "right";
};
export const SectionTitles = ({ title, as: Tag, className, align }: Props) => {
  const justifyClass =
    align === "left"
      ? "justify-start"
      : align === "right"
      ? "justify-end"
      : "justify-center";
  return (
    <div className={`flex items-center gap-3 ${justifyClass}`}>
      {(align === "center" || align === "right") && (
        <span className="flex-1 h-[3px] bg-indigo-900" />
      )}
      <Tag
        className={clsx(
          "text-indigo-900 font-bold text-4xl leading-none uppercase",
          className
        )}
      >
        {title}
      </Tag>

      {(align === "center" || align === "left") && (
        <span className="flex-1 h-[3px] bg-indigo-900" />
      )}
    </div>
  );
};
