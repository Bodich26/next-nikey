import { paymentMethodsMap, shippingMethodsMap } from "@/shared/constants";

const radioPayment = [
  {
    title: "Payment",
    name: "paymentMethod",
    options: Object.entries(paymentMethodsMap).map(([key, value]) => ({
      id: key,
      label: value.label,
    })),
  },
];

const radioShippingMethod = [
  {
    title: "Shipping",
    name: "shippingMethod",
    options: Object.entries(shippingMethodsMap).map(([key, value]) => ({
      id: key,
      label: value.label,
      desc: value.desc,
    })),
  },
];

const radioGroupTheme = {
  base: "cursor-pointer min-h-5 min-w-5 appearance-none rounded border border-gray-300 bg-gray-100 bg-[length:0.55em_0.55em] bg-center bg-no-repeat checked:border-transparent checked:bg-current checked:bg-check-icon focus:outline-none focus:ring-2 focus:ring-offset-2 dark:border-indigo-300 dark:bg-indigo-50 dark:checked:border-transparent dark:checked:bg-current",
  color: {
    indigo:
      "text-indigo-700 focus:ring-indigo-700 dark:ring-offset-indigo-700 dark:focus:ring-indigo-700",
  },
  indeterminate:
    "border-transparent bg-current bg-dash-icon dark:border-transparent dark:bg-current",
};

const labelTheme = {
  root: {
    base: "cursor-pointer !text-indigo-700 !font-medium text-[18px] leading-none",
  },
};

export { radioGroupTheme, labelTheme, radioPayment, radioShippingMethod };
