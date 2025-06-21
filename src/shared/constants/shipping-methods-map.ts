export const shippingMethodsMap = {
  STANDARD: {
    label: "Standard Shipping: Free",
    desc: "3–5 business days",
    cost: 0,
  },
  EXPEDITED: {
    label: "Expedited Shipping: $9.99",
    desc: "2–3 business days",
    cost: 9.99,
  },
  NEXT_DAY: {
    label: "Next-Day Shipping: $19.99",
    desc: "1 business day",
    cost: 19.99,
  },
} as const;
