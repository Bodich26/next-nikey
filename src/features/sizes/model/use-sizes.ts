"use client";
import React from "react";

export const useSizes = (
  sizes: Array<{
    id: number;
    quantity: number;
    colorVariantId: string;
    sizeId: number;
    size: {
      value: number;
    };
  }>
) => {
  const [activeSize, setActiveSize] = React.useState<(typeof sizes)[0] | null>(
    null
  );

  React.useEffect(() => {
    if (sizes && sizes.length > 0) {
      setActiveSize(sizes[0]);
    }
  }, [sizes]);

  return { activeSize, setActiveSize };
};
