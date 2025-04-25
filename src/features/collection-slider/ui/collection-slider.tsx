"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Button } from "flowbite-react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import { CollectionWithSneakers } from "../model/type-collection";
import { ShowErrors } from "@/shared";

type CollectionWithSneakersProps = {
  collection: CollectionWithSneakers;
  showError?: string;
};

export const CollectionSlider = ({
  collection,
  showError,
}: CollectionWithSneakersProps) => {
  if (!collection) {
    return showError ? <ShowErrors error={showError} /> : null;
  }

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center mt-20">
      <div className="lg:max-w-[500px] mt-9 md:max-w-full text-center sm:text-start">
        <div className="flex gap-4 justify-center sm:justify-start items-stretch">
          <span className="hidden sm:inline w-1.5 rounded-lg bg-indigo-50"></span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-none uppercase text-indigo-50 text-center sm:text-start">
            {collection.name}
          </h1>
        </div>
        <p className="text-xl font-light leading-normal text-indigo-50 mt-2">
          {collection.description}
        </p>
        <div className="flex justify-center sm:justify-start mt-9">
          <Button
            className="uppercase w-[225px] cursor-pointer transition-colors duration-300"
            size="lg"
          >
            Shop Now
          </Button>
        </div>
      </div>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="relative w-full overflow-hidden [&_.swiper-pagination]:bottom-5"
      >
        {collection?.sneakers?.map((item, index) => (
          <SwiperSlide key={index} className="w-full overflow-hidden">
            <div className="relative w-full flex justify-center items-center">
              <div className="slider-bg-card w-[280px] h-[480px] sm:h-[600px] sm:w-[350px] md:w-[410px] md:h-[745px] rounded-xl bg-indigo-900 p-6 flex flex-col justify-between">
                <span className="text-4xl sm:text-6xl font-bold leading-none text-indigo-50 uppercase">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <h3 className="text-3xl sm:text-5xl font-bold leading-none text-indigo-50 uppercase w-full mb-7">
                  {item.model}
                </h3>
              </div>
              <Image
                className="absolute slider-xs-bottom slider-xs-left sm:left-[13%] lg:left-[-3%] lg:w-[814px] md:w-[70%] sm:w-[65%] md:bottom-[35%] bottom-[40%] rotate-[-21.51deg] z-10"
                width={520}
                height={355}
                src={
                  item.collectionImage ??
                  "https://ik.imagekit.io/pfbn9k04m/no-sneaker.png?updatedAt=1745311443044"
                }
                alt={item.brand}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
