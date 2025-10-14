import { CatalogRes } from "../model/type-catalog";

export async function getCatalogSlider() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/contents/catalog-slider`,
      { cache: "no-cache" }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: CatalogRes = await response.json();

    return {
      catalogSlider: data.catalogSlider ?? [],
      success: data.success,
      error: data.error,
    };
  } catch (error) {
    return {
      catalogSlider: [],
      success: false,
      error: `Fetching Sneakers Slug error: ${error}`,
    };
  }
}
