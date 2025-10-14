import { getCatalogSlider } from "@/entities/catalog-slider";
import { getSneakersSlider } from "@/entities/sneakers";

type BannerVariant = "catalog" | "sneakers";

export async function fetchBannerData(variant: BannerVariant, slug?: string) {
  switch (variant) {
    case "catalog": {
      const { catalogSlider, error } = await getCatalogSlider();
      return { slide: catalogSlider, error };
    }

    case "sneakers": {
      const { sneakerSlider, error } = await getSneakersSlider(slug!);
      return { slide: sneakerSlider, error };
    }

    default:
      throw new Error(`Unknown banner variant: ${variant}`);
  }
}
