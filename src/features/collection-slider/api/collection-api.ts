export async function getActiveCollection() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/collections`,
      {
        cache: "no-store",
      }
    );
    return await response.json();
  } catch (error) {
    throw Error(`Fetching collection error: ${error}`);
  }
}
