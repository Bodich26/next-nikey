import { Container, SkeletonSneakersItem } from "@/shared";

export const SkeletonPopularSneakers = () => {
  return (
    <section className="mt-20 margins-xs">
      <Container>
        <div className="w-full h-[36px] bg-indigo-200 rounded-md"></div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
          {Array.from({ length: 10 }).map((_, index) => (
            <SkeletonSneakersItem key={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};
