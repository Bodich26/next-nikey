import { Container } from "./container";

export const SkeletonPopularSneakers = () => {
  return (
    <section className="mt-20 margins-xs">
      <Container>
        <div className="w-full h-[36px] bg-indigo-200 rounded-md"></div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="rounded-lg h-[330px] flex flex-col justify-between pt-2 px-2 cart-gradient"
            >
              {/* Верхний блок с бейджем и полом */}
              <div className="flex items-center justify-between w-full gap-2 pt-2 px-2  ">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-12 rounded-sm bg-indigo-200" />
                  <div className="h-4 w-8 bg-indigo-200" />
                </div>
                <div className="h-4 w-10 bg-indigo-200" />
              </div>

              {/* Фото */}
              <div className="relative w-full h-[200px] overflow-hidden rounded-lg">
                <div className="w-full h-full rounded-lg bg-indigo-200 mt-3" />
              </div>

              {/* Текстовая часть */}
              <div className="p-3 flex-grow flex flex-col justify-between">
                <div>
                  <div className="h-4 w-20 mb-2 bg-indigo-200" />
                  <div className="h-6 w-3/4 mb-3 bg-indigo-200" />
                </div>
                <div className="flex justify-between items-center">
                  <div className="h-5 w-16 bg-indigo-200" />
                  <div className="h-7 w-20 rounded-full bg-indigo-200" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
