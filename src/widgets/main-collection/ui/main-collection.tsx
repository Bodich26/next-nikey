"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Button } from "flowbite-react";

import "swiper/css";
import "swiper/css/pagination";
import { buildCatalogUrl } from "@/shared";
import { MainCollectionSlide } from "@/entities";

import { CollectionWithSneakers } from "@/entities/main-collection";

type CollectionWithSneakersProps = {
  collection: CollectionWithSneakers;
};

export const MainCollection = ({ collection }: CollectionWithSneakersProps) => {
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
            href={buildCatalogUrl({ collection: collection.slug })}
            className="uppercase w-[225px] cursor-pointer transition-colors duration-300"
            size="lg"
          >
            Shop Now
          </Button>
        </div>
      </div>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="relative w-full overflow-hidden [&_.swiper-pagination]:bottom-5"
      >
        {collection?.sneakers?.map((item, index) => (
          <SwiperSlide key={item.id} className="w-full overflow-hidden">
            <MainCollectionSlide
              index={index}
              model={item.model}
              brand={item.brand}
              slideImage={item.collectionImage!}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
