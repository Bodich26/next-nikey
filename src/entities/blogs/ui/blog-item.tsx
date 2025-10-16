import Image from "next/image";
import { Blog } from "@prisma/client";
import Link from "next/link";

type BlogsProps = {
  blog: Blog;
};

export const BlogItem = ({ blog }: BlogsProps) => {
  return (
    <div className="rounded-lg border border-indigo-300 flex flex-col h-full">
      <div className="relative w-full h-[240px] overflow-hidden rounded-t-lg">
        <Image src={blog.image} alt={blog.slug} fill className="object-cover" />
      </div>
      <div className="p-2 flex flex-col flex-1">
        <Link
          className="text-xl font-bold text-indigo-900 leading-none mb-2 mt-3"
          href={`/blogs/${blog.slug}`}
        >
          {blog.title}
        </Link>
        <p className="text-base font-light text-indigo-900 leading-normal flex-1">
          {blog.content}
        </p>
        <span className="uppercase font-bold text-base leading-none text-indigo-600 flex items-center justify-between mt-3">
          NIKE
          <Image src="/nike-brand.svg" width={32} height={11} alt="nike" />
        </span>
      </div>
    </div>
  );
};
