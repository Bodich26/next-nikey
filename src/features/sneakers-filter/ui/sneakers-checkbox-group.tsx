"use client";
import React from "react";

import { Checkbox, Label } from "flowbite-react";
import { checkboxTheme, labelTheme } from "../model/checkbox-filter-list";
import { CheckboxGroupProps } from "../model/type-sneakers-filter";
import { useSelectedCheckboxValues } from "../model/use-selected-checkbox-values";

export const SneakersCheckboxGroup = ({
  title,
  name,
  options,
}: CheckboxGroupProps) => {
  const [showAll, setShowAll] = React.useState<boolean>(false);
  const { handleCheckboxChange, isChecked } = useSelectedCheckboxValues(name);

  return (
    <fieldset className="flex flex-col gap-3">
      <legend className="font-medium text-xl text-indigo-900 mb-3">
        {title}
      </legend>

      {options.map((option) => {
        const hidden = !showAll && options.indexOf(option) >= 3;
        return (
          <div
            key={option.id}
            className={`flex items-center gap-2 ${hidden ? "hidden" : ""}`}
          >
            <Checkbox
              id={option.id}
              checked={isChecked(option.id)}
              onChange={(e) =>
                handleCheckboxChange(option.id, e.target.checked)
              }
              theme={checkboxTheme}
            />
            <Label
              htmlFor={option.id}
              theme={labelTheme}
              className="capitalize"
            >
              {option.label}
            </Label>
          </div>
        );
      })}
      {options.length > 3 && (
        <div className={showAll ? "" : ""}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-indigo-700  text-[18px] leading-0 cursor-pointer "
          >
            {showAll ? "- Hide" : "+ Show All"}
          </button>
        </div>
      )}
    </fieldset>
  );
};
