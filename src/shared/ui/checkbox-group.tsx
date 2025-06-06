"use client";
import React from "react";

import { Checkbox, Label } from "flowbite-react";

type Option = {
  id: string;
  label: string;
  desc?: string;
};

type CheckboxGroupProps = {
  options: Option[];
  checkboxTheme: object;
  labelTheme: object;
};

export const CheckboxGroup = ({
  options,
  checkboxTheme,
  labelTheme,
}: CheckboxGroupProps) => {
  return (
    <fieldset className="flex flex-col gap-3">
      {options.map((option) => {
        return (
          <div key={option.id} className={`flex  items-center gap-2 `}>
            <Checkbox id={option.id} theme={checkboxTheme} />
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
