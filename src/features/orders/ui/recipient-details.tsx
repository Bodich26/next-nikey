"use client";

import { Label, TextInput } from "flowbite-react";
import { Mail, Phone, User } from "lucide-react";
import { ButtonConfirmOrder } from "./button-confirm-order";
import { useFormContext } from "react-hook-form";

export const RecipientDetails = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div className="flex flex-col gap-4 border border-indigo-300 p-4 bg-transparent rounded-lg text-indigo-500">
        <h4 className="uppercase text-xl font-medium text-indigo-900">
          recipient details
        </h4>
        <div>
          <div className="mb-2">
            <Label
              htmlFor="username"
              className={errors.name ? "!text-red-500" : "!text-indigo-700"}
            >
              Your name
            </Label>
          </div>
          <TextInput
            {...register("name")}
            type="text"
            id="username"
            sizing="sm"
            placeholder="Input your name"
            required
            icon={User}
            theme={{
              base: "text-indigo-500 dark:text-indigo-500",
              field: {
                base: "group !bg-transparent ",
                icon: {
                  svg: "!text-indigo-500 ",
                },
                input: {
                  base: "!text-indigo-500 !bg-transparent !placeholder-indigo-500 !border-indigo-300 !text-[14px]",
                },
              },
            }}
          />
          {errors.name && (
            <p className="text-xs font-normal text-red-500 mt-1">
              {errors.name?.message?.toString()}
            </p>
          )}
        </div>
        <div>
          <div className="mb-2">
            <Label
              htmlFor="tel"
              className={errors.phone ? "!text-red-500" : "!text-indigo-700"}
            >
              Phone number
            </Label>
          </div>
          <TextInput
            {...register("phone")}
            type="tel"
            id="tel"
            sizing="sm"
            placeholder="+3 99 123 45 67"
            required
            icon={Phone}
            theme={{
              base: "text-indigo-500 dark:text-indigo-500",
              field: {
                base: "group !bg-transparent ",
                icon: {
                  svg: "!text-indigo-500 ",
                },
                input: {
                  base: "!text-indigo-500 !bg-transparent !placeholder-indigo-500 !border-indigo-300 !text-[14px]",
                },
              },
            }}
          />
          {errors.phone && (
            <p className="text-xs font-normal text-red-500 mt-1">
              {errors.phone?.message?.toString()}
            </p>
          )}
        </div>
        <div>
          <div className="mb-2">
            <Label
              htmlFor="email"
              className={errors.email ? "!text-red-500" : "!text-indigo-700"}
            >
              Email address
            </Label>
          </div>
          <TextInput
            {...register("email")}
            type="email"
            id="email"
            sizing="sm"
            placeholder="sneakers@gmai.com"
            required
            icon={Mail}
            theme={{
              base: "text-indigo-500 dark:text-indigo-500",
              field: {
                base: "group !bg-transparent ",
                icon: {
                  svg: "!text-indigo-500 ",
                },
                input: {
                  base: "!text-indigo-500 !bg-transparent !placeholder-indigo-500 !border-indigo-300 !text-[14px]",
                },
              },
            }}
          />
          {errors.email && (
            <p className="text-xs font-normal text-red-500 mt-1">
              {errors.email?.message?.toString()}
            </p>
          )}
        </div>
      </div>
      <ButtonConfirmOrder />
    </>
  );
};
