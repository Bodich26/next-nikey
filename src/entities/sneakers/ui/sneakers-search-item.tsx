import { ArrowRightIcon, Badge, Button } from "flowbite-react";
import Image from "next/image";

import clsx from "clsx";
import { SneakersPrice } from "@/shared";
import { SearchSneakers } from "../model/type-sneakers";

export const SneakersSearchItem = ({
  sneaker,
}: {
  sneaker: SearchSneakers;
}) => {
  const firstVariant = sneaker.variants[0];
  const hasDiscount = firstVariant?.discount && firstVariant.discount > 0;

  return (
    <div className="rounded-lg relative h-[160px] max-sm:h-[200px] flex justify-between">
      <div className="flex items-center justify-between w-full gap-2 absolute pt-2 px-2">
        <p className={clsx("opacity-0", hasDiscount && "opacity-100")}>
          <Badge color="indigo" size="sm" className="uppercase py-1 inline">
            Sale
          </Badge>
          <b className="font-bold text-base leading-none text-indigo-600 ml-2">
            {`${firstVariant.discount}%`}
          </b>
        </p>
      </div>
      <div className="flex justify-between max-sm:flex-col w-full">
        <div className=" relative basis-[60%] overflow-hidden rounded-lg">
          <Image
            src={
              firstVariant.mainImage ??
              "https://ik.imagekit.io/pfbn9k04m/no-sneaker-main.png?updatedAt=1745404988293"
            }
            alt={sneaker.model}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-3 w-full flex-grow flex flex-col justify-between ">
          <span className="uppercase font-bold text-base leading-none text-indigo-600 flex items-center justify-between">
            NIKE
            <Image src="/nike-brand.svg" width={32} height={11} alt="nike" />
          </span>
          <h4 className="font-bold text-xl leading-none capitalize text-indigo-900 mt-3">
            {sneaker.model}
          </h4>
          <span className="font-bold text-base leading-none text-indigo-600 lowercase">
            {sneaker.gender}
          </span>
          <div className="flex justify-between items-center mt-2.5">
            <SneakersPrice
              price={firstVariant.price}
              discount={firstVariant.discount}
              variant="main"
            />

            <Button
              className="rounded-full cursor-pointer transition-colors duration-300 px-1 py-1 w-20 h-7 gap-2"
              href={`/sneakers/${sneaker.slug}`}
            >
              View <ArrowRightIcon width={14} height={14} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
