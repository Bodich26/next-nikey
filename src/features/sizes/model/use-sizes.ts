"use client";
import React from "react";

export const useSizes = (size: number[]) => {
  const [activeSize, setActiveSize] = React.useState(size[0]);
  return { activeSize, setActiveSize };
};
