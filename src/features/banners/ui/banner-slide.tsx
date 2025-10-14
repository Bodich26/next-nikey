"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

import { ShowErrors } from "@/shared";
import { CatalogSlider, ProductSlider } from "@prisma/client";

type SneakerSlideProps = {
  slide: ProductSlider[] | CatalogSlider[];
  showError?: string;
};

export const BannerSlide = ({ slide, showError }: SneakerSlideProps) => {
  if (!slide || slide.length === 0) {
    return showError ? <ShowErrors error={showError} type={"full"} /> : null;
  }

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between mt-10  ">
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="relative w-full overflow-hidden max-sm:[&_.swiper-wrapper]:pb-10
        sm:[&_.swiper-pagination]:!bottom-[0]
  sm:[&_.swiper-pagination]:flex 
  sm:[&_.swiper-pagination]:justify-start
  sm:[&_.swiper-pagination-bullets]:!left-[1%] 
  sm:[&_.swiper-pagination-bullets]:right-0 [&_.swiper-pagination]:!bottom-[0px]"
      >
        {slide.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="lg:flex-row flex gap-9 flex-col-reverse justify-between items-start lg:p-4 sm:mb-6 lg:mb-0 ">
              <div className="flex flex-col gap-9 justify-between lg:max-w-[648px] md:max-w-full text-center sm:text-start">
                <div>
                  <h3 className="lg:mt-8 text-4xl sm:text-5xl md:text-6xl font-bold leading-none uppercase text-indigo-50 text-center sm:text-start">
                    {item.title}
                  </h3>
                  <p className=" text-xl font-light leading-normal text-indigo-50 mt-5">
                    {item.text}
                  </p>
                </div>
              </div>
              <div className="relative h-[323px] w-[100%] lg:w-[664px] lg:h-[365px]">
                <Image
                  className="rounded-lg object-cover"
                  fill
                  src={item.image}
                  alt={item.title}
                />
                <div className="absolute rounded-lg inset-0 bg-[#362F78]/50 z-10" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
