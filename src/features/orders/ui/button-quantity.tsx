"use client";
import React from "react";
import { CircleMinus, CirclePlus } from "lucide-react";

type ButtonQuantityProps = {
  productId: number;
  quantity: number;
};

export const ButtonQuantity = ({ quantity }: ButtonQuantityProps) => {
  return (
    <div className="flex items-center gap-[6px] relative">
      <CirclePlus className="hover-effect-icon" />
      <span className="text-lg font-bold">{quantity}</span>
      <CircleMinus className="hover-effect-icon" />
    </div>
  );
};
