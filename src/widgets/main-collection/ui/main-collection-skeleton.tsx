import { Container } from "@/shared";

export const MainCollectionSkeleton = () => {
  return (
    <section className="bg-[url('/bg-main.jpg')] bg-cover bg-center bg-no-repeat">
      <Container>
        <div
          className="pt-20 pb-[100px] sm:pb-[175px] animate-pulse"
          role="status"
        >
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center mt-20">
            <div className="lg:max-w-[500px] mt-9 md:max-w-full text-center sm:text-start">
              <div className="flex flex-col justify-center sm:justify-start items-stretch">
                <div className="bg-indigo-300 w-[320px] h-[60px] rounded-md" />
                <div className="bg-indigo-300 w-[500px] h-[60px] rounded-md mt-2" />
              </div>
              <div className="bg-indigo-300 mt-5 w-[420px] h-[25px] rounded-md" />
              <div className="bg-indigo-300 mt-2 w-[500px] h-[25px] rounded-md" />
              <div className="bg-indigo-300 mt-2 w-[500px] h-[25px] rounded-md" />
              <div className="bg-indigo-300 mt-2 w-[250px] h-[25px] rounded-md" />
              <div className="flex justify-center sm:justify-start mt-9">
                <div className="uppercase w-[225px] h-[48px] bg-indigo-700 rounded-md" />
              </div>
            </div>
            <div className="relative w-full overflow-hidden">
              <div className="relative w-full flex justify-center items-center">
                <div className="slider-bg-card w-[280px] h-[480px] sm:h-[600px] sm:w-[350px] md:w-[410px] md:h-[745px] rounded-xl bg-indigo-900 p-6 flex flex-col justify-between">
                  <div className="w-[60px] h-[60px] rounded-md bg-indigo-300" />
                  <div>
                    <div className="h-[46px] bg-indigo-300 rounded-md w-[230px] mb-3" />
                    <div className="h-[50px] bg-indigo-300 rounded-md w-[290px] mb-2" />
                  </div>
                </div>
                <div className="w-[520px] h-[355px] absolute slider-xs-bottom slider-xs-left sm:left-[13%] lg:left-[-3%] lg:w-[814px] md:w-[70%] sm:w-[65%] md:bottom-[35%] bottom-[40%] rotate-[-21.51deg] z-10" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
