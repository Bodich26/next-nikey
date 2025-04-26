import { StoreDrawer } from "@/widgets";

const obj = [
  {
    id: "cm9l2ovo90003tg98hpmrqxwl",
    brand: "Nike",
    model: "Air Max Plus Drift",
    gender: "MEN",
    ageCategory: "ADULT",
    views: 0,
    isAvailable: true,
    slug: "nike-air-max-plus-drift",
    collectionId: null,
    createdAt: "2025-04-17T08:02:40.857Z",
    updatedAt: "2025-04-17T08:01:42.461Z",
    collectionImage: null,
    variants: [
      {
        id: "cm9l2riw80004tg989f2491vo",
        color: "AirMaxPlusDriftWhite",
        mainImage:
          "https://ik.imagekit.io/pfbn9k04m/AirMaxPlusDrift-1.png?updatedAt=1744876872994",
        quantity: 1,
        price: 185,
        discount: 0,
        sneakerId: "cm9l2ovo90003tg98hpmrqxwl",
        createdAt: "2025-04-17T08:04:44.265Z",
        updatedAt: "2025-04-23T11:11:55.301Z",
      },
    ],
  },
  {
    id: "cm9l2ovo90003tg98hpmrqxwl",
    brand: "Nike",
    model: "Air Max Plus Drift",
    gender: "MEN",
    ageCategory: "ADULT",
    views: 0,
    isAvailable: true,
    slug: "nike-air-max-plus-drift",
    collectionId: null,
    createdAt: "2025-04-17T08:02:40.857Z",
    updatedAt: "2025-04-17T08:01:42.461Z",
    collectionImage: null,
    variants: [
      {
        id: "cm9l2riw80004tg989f2491vo",
        color: "AirMaxPlusDriftWhite",
        mainImage:
          "https://ik.imagekit.io/pfbn9k04m/AirMaxPlusDrift-1.png?updatedAt=1744876872994",
        quantity: 1,
        price: 185,
        discount: 0,
        sneakerId: "cm9l2ovo90003tg98hpmrqxwl",
        createdAt: "2025-04-17T08:04:44.265Z",
        updatedAt: "2025-04-23T11:11:55.301Z",
      },
    ],
  },
];

export const FavoritesDrawer = () => {
  return <StoreDrawer type="favorites" sneakers={obj} />;
};
