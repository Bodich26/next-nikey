import { Blog } from "@prisma/client";

type GetBlogsResult = {
  blogsData: Blog[];
  success: boolean;
  error?: string;
};

export async function getBlogs(): Promise<GetBlogsResult> {
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
