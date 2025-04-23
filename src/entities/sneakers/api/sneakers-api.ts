export async function getPopularSneakers() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/sneakers/popular`,
      { cache: "no-cache" }
    );
    return await response.json();
  } catch (error) {
    throw Error(`Fetching popular sneakers error: ${error}`);
  }
}
