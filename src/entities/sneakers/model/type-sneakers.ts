import { ColorVariant, Sneaker } from "@prisma/client";

type SneakersWithVariants = Sneaker & {
  variants: ColorVariant[];
};

export type { SneakersWithVariants };
