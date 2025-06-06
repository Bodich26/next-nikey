import { CollectionResponse } from "../model/type-collection";

export async function getActiveCollection(): Promise<CollectionResponse> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/collections`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return {
      collectionData: data.collection || [],
      success: data.success,
      error: data.error,
    };
  } catch (error) {
    return {
      collectionData: [],
      success: false,
      error: `Fetching collection error: ${error}`,
    };
  }
}
