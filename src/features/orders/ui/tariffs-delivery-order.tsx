"use client";

import React from "react";
import { RadioGroup } from "@/shared";
import {
  radioShippingMethod,
  radioGroupTheme,
  labelTheme,
} from "../model/radio-order-list";
import { useFormContext } from "react-hook-form";
import { shippingMethodsMap } from "@/shared/constants";

export const TariffsDeliveryOrder = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const shippingMethod = watch(
    "shippingMethod"
  ) as keyof typeof shippingMethodsMap;

  React.useEffect(() => {
    if (shippingMethod && shippingMethod in shippingMethodsMap) {
      setValue("shippingCost", shippingMethodsMap[shippingMethod].cost);
    }
  }, [shippingMethod, setValue]);

  return (
    <div className="border border-indigo-300 p-4 bg-transparent  rounded-lg">
      <h4 className="uppercase text-xl font-medium text-indigo-900 mb-4">
        Shipping
      </h4>
      <div className="flex items-center gap-2">
        {radioShippingMethod.map((group) => (
          <RadioGroup
            key={group.name}
            name={group.name}
            options={group.options}
            radioGroupTheme={radioGroupTheme}
            labelTheme={labelTheme}
            inputProps={register("shippingMethod")}
          />
        ))}
      </div>
      {errors.shippingMethod && (
        <p className="text-xs font-normal text-red-500 mt-1">
          {errors.shippingMethod?.message?.toString()}
        </p>
      )}
    </div>
  );
};
