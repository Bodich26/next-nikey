"use client";
import React from "react";
import { CircleMinus, CirclePlus } from "lucide-react";

type ButtonQuantityProps = {
  productId: number;
  quantity: number;
};

export const ButtonQuantity = ({
  productId,
  quantity,
}: ButtonQuantityProps) => {
  const handleChange = async (newQuantity: number) => {
    if (quantity < 1) return;

    // const { success, error } = await toggleQuantity(productId, newQuantity);
  };
  return (
    <div className="flex items-center gap-[6px] relative">
      <CirclePlus
        className="hover-effect-icon"
        onClick={() => handleChange(quantity + 1)}
      />
      <span className="text-lg font-bold">{quantity}</span>
      <CircleMinus
        className="hover-effect-icon"
        onClick={() => handleChange(quantity - 1)}
      />
    </div>
  );
};
