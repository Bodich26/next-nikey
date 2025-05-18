const checkboxDiscount = [
  {
    title: "Discount",
    name: "discount",
    options: [{ id: "sales", label: "Sales" }],
  },
];

const checkboxPurpose = [
  {
    title: "Purpose",
    name: "purpose",
    options: [
      { id: "lifestyle", label: "Lifestyle" },
      { id: "running", label: "Running" },
      { id: "training", label: "Training" },
    ],
  },
];

const checkboxCollection = [
  {
    title: "Collection",
    name: "collection",
    options: [
      { id: "summer", label: "Summer" },
      { id: "moon", label: "Moon" },
      { id: "street", label: "Street" },
    ],
  },
];

const checkboxSneakersModel = [
  {
    title: "Model",
    name: "model",
    options: [
      { id: "airMax", label: "Air Max" },
      { id: "airForce", label: "Air Force" },
      { id: "dunk", label: "Dunk" },
      { id: "leBron", label: "LeBron" },
      { id: "book", label: "Book" },
      { id: "structure", label: "Structure" },
      { id: "courtLegacy", label: "Court Legacy" },
      { id: "sonic", label: "Sonic" },
      { id: "pegasus", label: "Pegasus" },
      { id: "field", label: "Field" },
      { id: "aCG", label: "ACG" },
    ],
  },
];

const checkboxGender = [
  {
    title: "Gender",
    name: "gender",
    options: [
      { id: "men", label: "Men" },
      { id: "women", label: "Women" },
      { id: "unisex", label: "Unisex" },
    ],
  },
];

const checkboxAge = [
  {
    title: "Age",
    name: "age",
    options: [
      { id: "adult", label: "Adult" },
      { id: "kids", label: "Kids" },
    ],
  },
];

const checkboxSize = [
  {
    title: "Size",
    name: "size",
    options: Array.from({ length: 45 - 26 + 1 }, (_, i) => {
      const size = (26 + i).toString();
      return { id: size, label: size };
    }),
  },
];

const checkboxTheme = {
  base: "cursor-pointer h-5 w-5 appearance-none rounded border border-gray-300 bg-gray-100 bg-[length:0.55em_0.55em] bg-center bg-no-repeat checked:border-transparent checked:bg-current checked:bg-check-icon focus:outline-none focus:ring-2 focus:ring-offset-2 dark:border-indigo-300 dark:bg-indigo-50 dark:checked:border-transparent dark:checked:bg-current",
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

export {
  checkboxPurpose,
  checkboxDiscount,
  checkboxTheme,
  labelTheme,
  checkboxCollection,
  checkboxSneakersModel,
  checkboxGender,
  checkboxSize,
  checkboxAge,
};
