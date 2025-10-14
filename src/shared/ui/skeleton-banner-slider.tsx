import { Container } from "./container";

export const SkeletonBannerSlider = () => {
  return (
    <section className="bg-[url('/bg-sliders.jpg')] bg-cover bg-center bg-no-repeat">
      <Container>
        <div className="pt-20 pb-[100px] sm:pb-[138px]">
          <div className="flex flex-col-reverse lg:flex-row justify-between mt-10  ">
            <div className="relative w-full overflow-hidden">
              <div>
                <div className="lg:flex-row flex gap-9 flex-col-reverse justify-between items-start lg:p-4 sm:mb-6 lg:mb-0 ">
                  <div className="flex flex-col gap-9 justify-between lg:max-w-[648px] md:max-w-full text-center sm:text-start">
                    <div>
                      <div className="lg:mt-8 bg-indigo-200 h-[120px] w-[648px] rounded-md" />
                      <div className="bg-indigo-200 mt-5 h-[30px] w-[648px] rounded-md" />
                      <div className="bg-indigo-200 mt-5 h-[30px] w-[648px] rounded-md" />
                      <div className="bg-indigo-200 mt-5 h-[30px] w-[550px] rounded-md" />
                    </div>
                  </div>
                  <div className="relative h-[323px] w-[100%] lg:w-[664px] lg:h-[365px]">
                    <div className="relative w-full h-full overflow-hidden rounded-md bg-indigo-300 flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-indigo-50"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 16 20"
                      >
                        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                      </svg>
                    </div>
                    <div className="absolute rounded-lg inset-0 bg-[#362F78]/50 z-10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
