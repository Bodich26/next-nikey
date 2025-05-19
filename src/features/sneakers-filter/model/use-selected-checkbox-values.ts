import { useQueryState } from "nuqs";

export const useSelectedCheckboxValues = (name: string) => {
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
  return { handleCheckboxChange, isChecked };
};
