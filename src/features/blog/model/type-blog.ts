import { Blog } from "@prisma/client";

type BlogsResponse = {
  blogsData: Blog[];
  success: boolean;
  error?: string;
};

export type { BlogsResponse };
