"use client";
import React from "react";

import { Label, Radio } from "flowbite-react";

type Option = {
  id: string;
  label: string;
  desc?: string;
};

type RadioGroupProps = {
  options: Option[];
  radioGroupTheme: object;
  labelTheme: object;
  name: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

export const RadioGroup = ({
  options,
  radioGroupTheme,
  labelTheme,
  name,
  inputProps,
}: RadioGroupProps) => {
  return (
    <fieldset className="flex flex-col gap-3">
      {options.map((option) => {
        return (
          <div key={option.id} className={`flex  items-center gap-2 `}>
            <Radio
              id={option.id}
              value={option.id}
              theme={radioGroupTheme}
              name={name}
              {...inputProps}
            />
            <div className="flex flex-col">
              <Label
                htmlFor={option.id}
                theme={labelTheme}
                className=" capitalize"
              >
                {option.label}
              </Label>
              {option.desc && (
                <span className="text-xs font-normal text-gray-500">
                  {option.desc}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </fieldset>
  );
};
