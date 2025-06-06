const checkboxPayment = [
  {
    title: "Payment",
    name: "payment",
    options: [
      { id: "receipt", label: "Upon receipt" },
      { id: "online", label: "Online payment" },
    ],
  },
];

const checkboxDelivery = [
  {
    title: "Delivery",
    name: "delivery",
    options: [
      {
        id: "standard",
        label: "Standard Shipping: Free ",
        desc: "3–5 business days",
      },
      {
        id: "expedited",
        label: "Expedited Shipping: $9.99",
        desc: "2–3 business days",
      },
      {
        id: "next-day",
        label: "Next-Day Shipping: $19.99",
        desc: "1 business day",
      },
    ],
  },
];

const checkboxTheme = {
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

export { checkboxTheme, labelTheme, checkboxPayment, checkboxDelivery };
