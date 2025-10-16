import { Container, SkeletonBlogsItem } from "@/shared";

export const NikeyBlogsSkeleton = async () => {
  return (
    <section className="mt-20 margins-xs">
      <Container>
        <div className="w-full h-[36px] bg-indigo-200 rounded-md"></div>
        <div
          className="grid gap-8 mt-8 
                grid-cols-1 
                sm:grid-cols-1 
                lg:grid-cols-3"
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <SkeletonBlogsItem key={index} />
          ))}
        </div>
        <div className="rounded-md gap-2 mt-4 capitalize bg-indigo-200 w-[150px] h-[25px] " />
      </Container>
    </section>
  );
};
