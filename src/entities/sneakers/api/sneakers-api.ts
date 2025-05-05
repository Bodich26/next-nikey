import { PopularSneakersResponse } from "../model/type-sneakers";

export async function getPopularSneakers(): Promise<PopularSneakersResponse> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SNEAKERS_URL}/popular`,
      { cache: "no-cache" }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: PopularSneakersResponse = await response.json();
    return {
      popularSneakers: data.popularSneakers || [],
      success: data.success,
      error: data.error,
    };
  } catch (error) {
    return {
      popularSneakers: [],
      success: false,
      error: `Fetching Popular Sneakers error: ${error}`,
    };
  }
}
