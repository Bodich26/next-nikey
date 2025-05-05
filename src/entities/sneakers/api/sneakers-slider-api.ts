import { SneakersSliderResponse } from "../model/type-sneakers";

export async function getSneakersSlider(
  slug: string
): Promise<SneakersSliderResponse> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SNEAKERS_URL}/${slug}/slider`,
      { cache: "no-cache" }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: SneakersSliderResponse = await response.json();

    return {
      sneakerSlider: data.sneakerSlider ?? [],
      success: data.success,
      error: data.error,
    };
  } catch (error) {
    return {
      sneakerSlider: [],
      success: false,
      error: `Fetching Sneakers Slug error: ${error}`,
    };
  }
}
