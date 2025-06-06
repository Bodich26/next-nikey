import { Container } from "./container";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  imageUrl: string;
};
export const HeroSectionInfo = ({ title, description, imageUrl }: Props) => {
  return (
    <section className="bg-[url('/bg-sliders.jpg')] bg-cover bg-center bg-no-repeat min-h-[657px]">
      <Container>
        <div className="pt-20 pb-[100px] sm:pb-[138px]">
          <div className="lg:flex-row flex gap-9 flex-col-reverse justify-between items-start lg:p-4 lg:pt-[41px]  sm:mb-6 lg:mb-0">
            <div className="flex flex-col gap-9 justify-between lg:max-w-[648px] md:max-w-full text-center sm:text-start">
              <div>
                <h3 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-none uppercase text-indigo-50 text-center sm:text-start">
                  {title}
                </h3>
                <p className=" text-xl font-light leading-normal text-indigo-50 mt-5">
                  {description}
                </p>
              </div>
            </div>
            <div className="relative h-[323px] w-[100%] lg:w-[664px] lg:h-[365px]">
              <Image
                className="rounded-lg object-cover"
                fill
                src={imageUrl}
                alt="Banner Image"
              />
              <div className="absolute rounded-lg inset-0 bg-[#362F78]/50 z-10" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
