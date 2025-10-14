import { SneakersReviewsResponse } from "../model/type-reviews";

export async function getSneakersReviews(
  slug: string
): Promise<SneakersReviewsResponse> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SNEAKERS_URL}/${slug}/reviews`,
      { cache: "no-cache" }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: SneakersReviewsResponse = await response.json();

    return {
      sneakerReviews: data.sneakerReviews ?? [],
      success: data.success,
      error: data.error,
    };
  } catch (error) {
    return {
      sneakerReviews: [],
      success: false,
      error: `Fetching Sneakers reviews error: ${error}`,
    };
  }
}
