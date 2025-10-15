import { SneakersSlugResponse } from "../model/type-sneakers";

export async function getSneakersSlug(
  slug: string
): Promise<SneakersSlugResponse> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SNEAKERS_URL}/${slug}`,
      { cache: "no-cache" }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: SneakersSlugResponse = await response.json();

    if (!data.sneakerBySlug) throw new Error("Sneaker not found");

    return {
      sneakerBySlug: data.sneakerBySlug ?? null,
      rating: data.rating,
      success: data.success,
      error: data.error,
    };
  } catch (error) {
    return {
      sneakerBySlug: null,
      success: false,
      rating: 0,
      error: `Fetching Sneakers Slug error: ${error}`,
    };
  }
}
