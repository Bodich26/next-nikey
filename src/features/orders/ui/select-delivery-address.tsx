"use client";
import { useFormContext } from "react-hook-form";
import { Select } from "flowbite-react";
import { Locate } from "lucide-react";

export const SelectDeliveryAddress = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="border border-indigo-300 p-4 bg-transparent rounded-lg">
      <h4 className="uppercase text-xl font-medium text-indigo-900 mb-4">
        Delivery Address
      </h4>
      <div>
        <Select
          {...register("deliveryAddress")}
          id="location"
          required
          sizing="sm"
          icon={Locate}
          color={errors.deliveryAddress ? "failure" : "gray"}
          className={
            errors.deliveryAddress ? "!border-red-500" : "!border-indigo-300"
          }
          theme={{
            base: "w-full  text-indigo-500 dark:text-indigo-500",
            field: {
              icon: {
                svg: "!text-indigo-500 ",
              },
              base: "",
              select: {
                base: "!text-indigo-500 !bg-transparent !placeholder-indigo-500 !border-indigo-300 !text-[14px]",
              },
            },
          }}
        >
          <option value="">Select your delivery address</option>
          <option value="cheap">Cheap ones first</option>
          <option value="dear">Dear ones first</option>
        </Select>

        {errors.deliveryAddress && (
          <p className="text-xs font-normal text-red-500 mt-1">
            {errors.deliveryAddress?.message?.toString()}
          </p>
        )}
      </div>
    </div>
  );
};
