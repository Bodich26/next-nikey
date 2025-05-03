import { SneakersSlugResponse } from "../model/type-sneakers";

export async function getSneakersSlug(
  slug: string
): Promise<SneakersSlugResponse> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/sneakers/${slug}`,
      { cache: "no-cache" }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: SneakersSlugResponse = await response.json();

    return {
      sneakerBySlug: data.sneakerBySlug ?? null,
      success: data.success,
      error: data.error,
    };
  } catch (error) {
    return {
      sneakerBySlug: null,
      success: false,
      error: `Fetching Sneakers Slug error: ${error}`,
    };
  }
}
