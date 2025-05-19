import { Sneaker, ColorVariant, ColorVariantSize } from "@prisma/client";

type Purpose = {
  purpose: string;
};

type Collection = {
  slug: string | null;
} | null;

type CartItem = Sneaker & {
  collection: Collection;
  variants: (ColorVariant & {
    sizes: ColorVariantSize[];
  })[];
  size: ColorVariantSize;
  purposes: Purpose[];
};

type SneakersFilterRes = {
  sneakers: CartItem[];
  success?: boolean;
  error?: string;
};

type Option = {
  id: string;
  label: string;
};

type CheckboxGroupProps = {
  title: string;
  name: string;
  options: Option[];
};

export type { SneakersFilterRes, CheckboxGroupProps };
