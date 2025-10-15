import { Container } from "@/shared";

export const SkeletonSneakersSection = () => {
  return (
    <section className="mt-20 margins-xs animate-pulse" role="status">
      <Container>
        <div className="w-full h-[36px] bg-indigo-300 rounded-md" />

        <div className="flex flex-wrap md:flex-nowrap justify-between items-start gap-8 mt-8">
          <div className="flex flex-col gap-8 w-[58%] h-[728px] min-w-0 max-md:w-[100%] bg-indigo-50 rounded-lg">
            <div className="relative w-full aspect-[780/563] rounded-lg bg-indigo-300 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-indigo-50"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              </svg>
            </div>
            <div className="max-md:overflow-x-auto max-h-[220px]">
              <div className="grid gap-4 grid-cols-[repeat(auto-fit,_minmax(137px,_1fr))] max-md:flex max-md:flex-nowrap max-md:min-w-max">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div
                    key={index}
                    className="relative border-1 bg-indigo-300 max-md:w-[137px] h-[153px] overflow-hidden rounded-lg flex items-center justify-center"
                  >
                    <svg
                      className="w-5 h-5 text-indigo-50"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 16 20"
                    >
                      <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-[42%] h-[688px] min-w-0 rounded-lg border border-indigo-300 p-4 max-md:w-[100%] flex justify-between flex-col max-sm:gap-5 gap-8">
            <div className="flex justify-between items-center">
              <div className="h-5 w-20 bg-indigo-300 rounded-lg" />
              <div className="h-5 w-20 bg-indigo-300 rounded-lg" />
            </div>
            <div className="flex justify-between items-start  gap-1 flex-col">
              <div className="h-[48px] w-[80%] bg-indigo-300 rounded-lg" />
              <div className="h-[28px] w-[124px] bg-indigo-300 rounded-lg" />
              <div className="h-[28px] w-[126px] bg-indigo-300 rounded-lg mt-1" />
            </div>
            <div className="flex justify-between items-start gap-1 flex-col">
              <div className="h-[36px] w-[212px] bg-indigo-300 rounded-lg" />
            </div>
            <div className="flex justify-between items-start gap-2 flex-col">
              <div className="h-[28px] w-[100px] bg-indigo-300 rounded-lg"></div>
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className="relative w-[100px] h-[100px] bg-indigo-300  flex items-center justify-center overflow-hidden rounded-lg"
                  >
                    <svg
                      className="w-5 h-5 text-indigo-50"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 16 20"
                    >
                      <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-start gap-2 flex-col">
              <div className="h-[28px] w-[100px] bg-indigo-300 rounded-lg"></div>
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 10 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center rounded-lg uppercase w-[45px] h-[45px] gap-2 bg-indigo-300"
                  >
                    <svg
                      className="w-5 h-5 text-indigo-50"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 16 20"
                    >
                      <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full flex justify-between max-sm:gap-4 gap-8 items-center">
              <div className="bg-indigo-300 h-[48px] w-[426px] rounded-lg"></div>
              <div className="bg-indigo-300 h-[48px] w-[53px] rounded-lg"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
