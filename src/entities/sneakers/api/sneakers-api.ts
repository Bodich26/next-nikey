import { PopularSneakersResponse } from "../model/type-sneakers";

export async function getPopularSneakers(): Promise<PopularSneakersResponse> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/sneakers/popular`,
      { cache: "no-cache" }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return {
      popularSneakersData: data.popularSneakers || [],
      success: data.success,
      error: data.error,
    };
  } catch (error) {
    return {
      popularSneakersData: [],
      success: false,
      error: `Fetching Popular Sneakers error: ${error}`,
    };
  }
}
