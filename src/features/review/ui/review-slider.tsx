"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { ShowErrors } from "@/shared";
import { CollectionWithSneakers } from "@/features/collection-slider/model/type-collection";
import { ReviewItem } from "./review-item";

type CollectionWithSneakersProps = {
  review: CollectionWithSneakers;
  showError?: string;
};

export const ReviewSlider = ({
  review,
  showError,
}: CollectionWithSneakersProps) => {
  if (!review) {
    return showError ? <ShowErrors error={showError} /> : null;
  }

  return (
    <>
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ el: ".slider-arrow-review-pagination", clickable: true }}
        navigation={{
          nextEl: ".slider-arrow-review-next",
          prevEl: ".slider-arrow-review-prev",
        }}
        slidesPerView={2}
        spaceBetween={32}
        height={240}
        className="review-slider mt-12"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {review?.sneakers?.map((item, index) => (
          <SwiperSlide key={index}>
            <ReviewItem />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="slider-controller-review">
        <div className="swiper-button-prev slider-arrow-review slider-arrow-review-prev"></div>
        <div className="swiper-button-next slider-arrow-review slider-arrow-review-next"></div>
        <div className="swiper-pagination slider-arrow-review-pagination"></div>
      </div>
    </>
  );
};
