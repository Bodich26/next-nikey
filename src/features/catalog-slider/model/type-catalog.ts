import { CatalogSlider } from "@prisma/client";

type CatalogRes = {
  catalogSlider: CatalogSlider[];
  success: boolean;
  error?: string;
};

export type { CatalogRes };
