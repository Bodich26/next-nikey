"use client";
import React from "react";
import Link from "next/link";

import { SneakerGallery } from "./sneakers-gallery";
import { Eye, MoveLeft, ShoppingCart } from "lucide-react";
import { GenderCorrect, SneakersPrice, StarsRating } from "@/shared";
import { Button } from "flowbite-react";
import { ButtonToggleFavorites, SelectSize } from "@/features";
import Image from "next/image";
import { SneakerSlug } from "@/entities";
import clsx from "clsx";

type Props = {
  sneaker: SneakerSlug;
  rating: number;
};

export const SneakersVariantSelection = ({ sneaker, rating }: Props) => {
  const [mainVariants, setMainVariants] = React.useState(sneaker.variants[0]);

  const prices = mainVariants.price;
  const discounts = mainVariants.discount;
  const galleryImages = mainVariants?.images?.map((img) => img.url) || [];

  return (
    <div className="flex flex-wrap md:flex-nowrap justify-between items-start gap-8 mt-8">
      <SneakerGallery images={galleryImages} />

      <div className="w-[42%] min-w-0 rounded-lg border border-indigo-300 p-4 max-md:w-[100%] flex justify-between flex-col max-sm:gap-5 gap-8">
        <div className="flex justify-between items-center text-xl font-medium text-indigo-900 ">
          <Link href="/" className="flex items-center gap-3">
            <MoveLeft /> back
          </Link>
          <span className=" inline-flex items-center gap-1">
            <Eye /> {sneaker.views}
          </span>
        </div>
        <div className="flex justify-between items-start text-indigo-900 capitalize gap-1 flex-col">
          <h3 className="max-sm:text-4xl text-5xl font-bold">
            {sneaker.model}
          </h3>
          <p className=" text-xl font-medium">
            {<GenderCorrect gender={sneaker.gender} type="normal" />} Shoes
          </p>

          <div className="mt-1">
            <StarsRating rating={rating} />
          </div>
        </div>

        <div className="flex justify-between items-start text-indigo-900 capitalize gap-1 flex-col">
          <SneakersPrice price={prices} discount={discounts} variant="page" />
        </div>

        <div className="flex justify-between items-start text-indigo-900 capitalize gap-2 flex-col">
          <p className="text-xl font-bold">Colors</p>
          <div className="flex flex-wrap gap-2">
            {sneaker.variants.map((variant) => (
              <div
                key={variant.id}
                onClick={() => setMainVariants(variant)}
                className={clsx(
                  "relative w-[100px] h-[100px] overflow-hidden rounded-lg cursor-pointer border-1 border-transparent",
                  variant === mainVariants ? "!border-indigo-700" : ""
                )}
              >
                <Image
                  className="rounded-lg object-cover"
                  fill
                  src={variant.images[0].url}
                  alt="Nike Air 90"
                />
              </div>
            ))}
          </div>
        </div>

        <SelectSize sizes={mainVariants.sizes} />

        <div className="w-full flex justify-between max-sm:gap-4 gap-8 items-center">
          <Button
            className="uppercase w-full cursor-pointer transition-colors duration-300 gap-2"
            size="lg"
            onClick={() => console.log(mainVariants.id)}
          >
            <ShoppingCart />
            Add to cart
          </Button>
          <ButtonToggleFavorites sneakersId={sneaker.id} />
        </div>
      </div>
    </div>
  );
};
