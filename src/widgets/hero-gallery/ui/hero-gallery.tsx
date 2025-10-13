import { Container, SectionTitles } from "@/shared";
import Image from "next/image";

export const HeroGallery = () => {
  return (
    <section className="mt-20 margins-xs">
      <Container>
        <SectionTitles title="New Design 2025" as="h3" align="left" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-4 gap-4 md:gap-6 lg:gap-8 mt-8 lg:h-[690px]">
          <div className=" max-sm:h-[200px] relative lg:col-span-2 lg:row-span-2">
            <Image
              src="/gallery/gallery-1.jpg"
              className="object-cover rounded-lg w-full h-full max-w-full"
              alt="Gallery-1"
              width={420}
              height={0}
            />
            <span className="max-sm:text-sm z-15 top-2 right-4 left-4 absolute font-light text-xl leading-normal text-indigo-50">
              Step into the Future
            </span>
            <div className="absolute w-[45px] rounded-tl-lg rounded-bl-lg inset-0 bg-[#362F78]/50 z-10" />
          </div>
          <div className="max-sm:h-[200px] relative lg:col-start-1 lg:row-start-3 lg:row-span-2">
            <Image
              src="/gallery/gallery-2.jpg"
              className="object-cover rounded-lg w-full h-full max-w-full"
              alt="Gallery-2"
              width={420}
              height={0}
            />
            <span className="max-sm:text-sm z-15 top-2 right-4 left-4 absolute font-light text-xl leading-normal text-indigo-50">
              Unleash Your Energy
            </span>
            <div className="absolute w-[100%] h-[45px] top-[100%] translate-y-[-100%] rounded-bl-lg rounded-br-lg inset-0 bg-[#362F78]/50 z-10" />
          </div>
          <div className="max-sm:h-[200px] relative lg:col-start-2 lg:row-start-3 lg:row-span-2">
            <Image
              src="/gallery/gallery-3.jpg"
              className="object-cover rounded-lg w-full h-full max-w-full"
              alt="Gallery-3"
              width={420}
              height={0}
            />
            <span className="max-sm:text-sm z-15 bottom-2 right-4 left-4 absolute font-light text-xl leading-normal text-indigo-50">
              Legend Reimagined
            </span>
            <div className="absolute w-[45px] h-[100%] left-[100%] translate-x-[-100%] rounded-br-lg rounded-tr-lg inset-0 bg-[#362F78]/50 z-10" />
          </div>
          <div className="max-sm:h-[200px] relative lg:col-start-3 lg:row-start-1">
            <Image
              src="/gallery/gallery-4.jpg"
              className="object-cover rounded-lg w-full h-full max-w-full"
              alt="Gallery-4"
              width={420}
              height={0}
            />
            <span className="max-sm:text-sm z-15 top-2 right-4 left-4 absolute font-light text-xl leading-normal text-indigo-50">
              Meets Innovation
            </span>
            <div className="absolute w-[100%] h-[45px] top-[100%] translate-y-[-100%] rounded-bl-lg rounded-br-lg inset-0 bg-[#362F78]/50 z-10" />
          </div>
          <div className="max-sm:h-[200px] relative lg:col-start-3 lg:row-start-2 lg:row-span-3">
            <Image
              src="/gallery/gallery-5.jpg"
              className="object-cover rounded-lg w-full h-full max-w-full"
              alt="Gallery-5"
              width={420}
              height={0}
            />
            <span className="max-sm:text-sm z-15 top-2 right-4 left-4 absolute font-light text-xl leading-normal text-indigo-50">
              Fly Higher with Nike
            </span>
            <div className="absolute w-[100%] h-[45px] top-[100%] translate-y-[-100%] rounded-bl-lg rounded-br-lg inset-0 bg-[#362F78]/50 z-10" />
          </div>
          <div className="max-sm:h-[200px] relative lg:col-start-4 lg:row-start-1 lg:row-span-3 ">
            <Image
              src="/gallery/gallery-6.jpg"
              className="object-cover rounded-lg w-full h-full max-w-full"
              alt="Gallery-6"
              width={420}
              height={0}
            />
            <span className="max-sm:text-sm z-15 bottom-2 left-4 right-4 absolute font-light text-xl leading-normal text-indigo-50">
              Built for Speed. Designed for Style
            </span>
            <div className="absolute w-[100%] h-[45px] bottom-[100%] rounded-tl-lg rounded-tr-lg inset-0 bg-[#362F78]/50 z-10" />
          </div>
          <div className=" max-sm:h-[200px] relative max-md:col-span-2 max-lg:col-span-3 max-lg:max-h-[250px] lg:col-start-4 lg:row-start-4 lg:row-span-1">
            <Image
              src="/gallery/gallery-7.jpg"
              className="object-cover rounded-lg w-full h-full max-w-full"
              alt="Gallery-7"
              width={420}
              height={0}
            />
            <span className="max-sm:text-sm z-15 bottom-2 left-4 right-4 absolute font-light text-xl leading-normal text-indigo-50">
              Meets Innovation
            </span>
            <div className="absolute w-[45px] h-[100%] left-[100%] translate-x-[-100%] rounded-br-lg rounded-tr-lg inset-0 bg-[#362F78]/50 z-10" />
          </div>
        </div>
      </Container>
    </section>
  );
};
