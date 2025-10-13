import Image from "next/image";

type Props = {
  index: number;
  model: string;
  brand: string;
  slideImage: string;
};
export const MainCollectionSlide = ({
  slideImage,
  brand,
  model,
  index,
}: Props) => {
  return (
    <div className="relative w-full flex justify-center items-center">
      <div className="slider-bg-card w-[280px] h-[480px] sm:h-[600px] sm:w-[350px] md:w-[410px] md:h-[745px] rounded-xl bg-indigo-900 p-6 flex flex-col justify-between">
        <span className="text-4xl sm:text-6xl font-bold leading-none text-indigo-50 uppercase">
          {(index + 1).toString().padStart(2, "0")}
        </span>
        <h3 className="text-3xl sm:text-5xl font-bold leading-none text-indigo-50 uppercase w-full mb-7">
          {model}
        </h3>
      </div>
      <Image
        className="absolute slider-xs-bottom slider-xs-left sm:left-[13%] lg:left-[-3%] lg:w-[814px] md:w-[70%] sm:w-[65%] md:bottom-[35%] bottom-[40%] rotate-[-21.51deg] z-10"
        width={520}
        height={355}
        src={
          slideImage ??
          "https://ik.imagekit.io/pfbn9k04m/no-sneaker.png?updatedAt=1745311443044"
        }
        alt={brand ?? "Images Slide"}
      />
    </div>
  );
};
