import { BlogItem, getBlogs } from "@/features/blog";
import { Container, SectionTitles, ShowErrors } from "@/shared";
import { Blog } from "@prisma/client";
import { ArrowRightIcon } from "flowbite-react";
import Link from "next/link";

export const NikeyBlogs = async () => {
  const { blogsData, error: blogError } = await getBlogs();

  return (
    <section className="mt-20 margins-xs">
      <Container>
        <SectionTitles title="Nikey Blogs" as="h3" align="center" />
        <div
          className="grid gap-8 mt-8 
                grid-cols-1 
                sm:grid-cols-1 
                lg:grid-cols-3"
        >
          {blogsData.map((item: Blog) => (
            <BlogItem key={item.id} blog={item} />
          ))}
        </div>
        {blogError && <ShowErrors type="full" error={blogError} />}
        <Link
          className="border-b border-transparent inline-flex items-center gap-2 mt-4 capitalize text-indigo-600 font-bold text-base hover:border-b-1 hover:border-indigo-600 transition-colors duration-300"
          href="/blogs"
        >
          See more blogs
          <ArrowRightIcon width={24} height={24} />
        </Link>
      </Container>
    </section>
  );
};
