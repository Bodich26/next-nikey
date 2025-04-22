import { Collection, Sneaker } from "@prisma/client";

type CollectionWithSneakers = Collection & {
  sneakers: Sneaker[];
};

export type { CollectionWithSneakers };
