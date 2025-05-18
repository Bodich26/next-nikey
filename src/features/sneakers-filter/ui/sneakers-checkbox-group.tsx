"use client";
import { useState } from "react";
import { Checkbox, Label } from "flowbite-react";
import { checkboxTheme, labelTheme } from "../model/checkbox-filter-list";
import { CheckboxGroupProps } from "../model/type-sneakers-filter";
import { useQueryState } from "nuqs";

export const SneakersCheckboxGroup = ({
  title,
  name,
  options,
}: CheckboxGroupProps) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const [selectedValues, setSelectedValues] = useQueryState<string[]>(name, {
    defaultValue: [],
    parse: (value: string | null) =>
      value && value.length > 0 ? value.split(",") : [],
    serialize: (value: string[]) => (value.length > 0 ? value.join(",") : ""),
  });

  const handleCheckboxChange = (id: string, checked: boolean) => {
    setSelectedValues((prev) => {
      const currentValues = Array.isArray(prev) ? prev : [];
      return checked
        ? [...currentValues, id]
        : currentValues.filter((val: string) => val !== id);
    });
  };

  const isChecked = (id: string) => selectedValues?.includes(id);

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
            <Label htmlFor={option.id} theme={labelTheme}>
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
