import { BlogsResponse } from "../model/type-blog";

export async function getBlogs(): Promise<BlogsResponse> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`, {
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return {
      blogsData: data.blogs || [],
      success: data.success,
      error: data.error,
    };
  } catch (error) {
    return {
      blogsData: [],
      success: false,
      error: `Fetching blogs error: ${error}`,
    };
  }
}
