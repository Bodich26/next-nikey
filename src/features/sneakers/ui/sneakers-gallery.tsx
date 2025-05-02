"use client";

import Image from "next/image";
import { useGallery } from "../model/use-gallery";
import clsx from "clsx";

type Props = {
  images: string[];
};

export const SneakerGallery = ({ images }: Props) => {
  const { activeImage, setActiveImage } = useGallery(images);
  return (
    <div className="flex flex-col gap-8 w-[58%] min-w-0 max-md:w-[100%]">
      <div className="relative w-full aspect-[780/563] rounded-lg">
        <Image
          className="rounded-lg object-cover"
          fill
          src={activeImage}
          alt="Sneakers Image"
        />
        <Image
          src="/logo-nike.svg"
          alt="Nike Logo"
          width={70}
          height={25}
          className="absolute left-4 top-4 invert "
          priority
        />
      </div>

      <div className="max-md:overflow-x-auto h-[220px]">
        <div className="grid gap-4 grid-cols-[repeat(auto-fit,_minmax(137px,_1fr))] max-md:flex max-md:flex-nowrap max-md:min-w-max">
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setActiveImage(img)}
              className={clsx(
                "relative border-1  max-md:w-[137px] h-[153px] overflow-hidden rounded-lg cursor-pointer",
                activeImage === img ? "border-indigo-700" : "border-transparent"
              )}
            >
              <Image
                className="rounded-lg object-cover"
                fill
                src={img}
                alt={`Thumbnail ${i + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
