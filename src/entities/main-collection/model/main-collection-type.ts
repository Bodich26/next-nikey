import { Collection, Sneaker } from "@prisma/client";

type CollectionWithSneakers = Collection & {
  sneakers: Sneaker[];
};

type CollectionResponse = {
  collectionData: CollectionWithSneakers[];
  success: boolean;
  error?: string;
};

export type { CollectionWithSneakers, CollectionResponse };
