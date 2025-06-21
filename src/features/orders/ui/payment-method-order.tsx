"use client";

import { RadioGroup } from "@/shared";
import {
  radioPayment,
  radioGroupTheme,
  labelTheme,
} from "../model/radio-order-list";
import { useFormContext } from "react-hook-form";

export const PaymentMethodOrder = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="border border-indigo-300 p-4 bg-transparent rounded-lg">
      <h4 className="uppercase text-xl font-medium text-indigo-900 mb-4 ">
        Payment method
      </h4>
      <div className="flex items-center gap-2">
        {radioPayment.map((group) => (
          <RadioGroup
            key={group.name}
            name={group.name}
            options={group.options}
            radioGroupTheme={radioGroupTheme}
            labelTheme={labelTheme}
            inputProps={register("paymentMethod")}
          />
        ))}
      </div>
      {errors.paymentMethod && (
        <p className="text-xs font-normal text-red-500 mt-1">
          {errors.paymentMethod?.message?.toString()}
        </p>
      )}
    </div>
  );
};
