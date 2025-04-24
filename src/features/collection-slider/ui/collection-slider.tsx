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
    <div className="flex justify-between items-center mt-20">
      <div className="max-w-[500px] mt-9">
        <div className="flex gap-4 items-stretch">
          <span className="w-1.5 rounded-lg bg-indigo-50"></span>
          <h1 className="text-7xl font-bold leading-none text-start uppercase text-indigo-50">
            {collection.name}
          </h1>
        </div>
        <p className="text-xl font-light leading-normal text-indigo-50 mt-2">
          {collection.description}
        </p>
        <Button
          className="uppercase w-[225px] mt-9 cursor-pointer transition-colors duration-300"
          size="lg"
        >
          Shop Now
        </Button>
      </div>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        width={887}
        className="relative [&_.swiper-pagination]:right-[-49%] [&_.swiper-pagination]:left-auto [&_.swiper-pagination]:bottom-4 [&_.swiper-pagination]:!w-auto"
      >
        {collection?.sneakers?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="w-[410px] h-[745px] rounded-xl bg-indigo-900 p-6 flex flex-col justify-between translate-x-[65%]">
              <span className="text-6xl font-bold leading-none text-indigo-50 uppercase">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <h3 className="text-5xl font-bold leading-none text-indigo-50 uppercase w-full mb-4">
                {item.model}
              </h3>
            </div>
            <Image
              className="rotate-[-21.51deg] absolute top-[21%]"
              width={814}
              height={355}
              src={
                item.collectionImage ??
                "https://ik.imagekit.io/pfbn9k04m/no-sneaker.png?updatedAt=1745311443044"
              }
              alt={item.brand}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
