"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { ShowErrors } from "@/shared";
import { ReviewItem } from "./review-item";
import { sneakerReview } from "../model/type-reviews";

type sneakerReviewProps = {
  review: sneakerReview[];
  showError?: string;
};

export const ReviewSlider = ({ review, showError }: sneakerReviewProps) => {
  if (!review) {
    return showError ? <ShowErrors type="full" error={showError} /> : null;
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
            slidesPerView: review.length < 2 ? review.length : 2,
            centeredSlides: review.length < 2,
          },
          1024: {
            slidesPerView: review.length < 3 ? review.length : 3,
            centeredSlides: review.length < 3,
          },
        }}
      >
        {review.map((item, index) => (
          <SwiperSlide key={index}>
            <ReviewItem
              userIconSrc={item.user.image}
              userName={item.user.name}
              reviewGrade={item.rating}
              reviewComment={item.comment}
            />
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
