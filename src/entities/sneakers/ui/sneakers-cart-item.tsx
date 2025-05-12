import { ArrowRightIcon, Badge, Button } from "flowbite-react";
import Image from "next/image";

import clsx from "clsx";
import { SneakerInCart } from "../model/type-sneakers";
import { SneakersPrice, useGenderCapitalized } from "@/shared";
import { ButtonRemoveCart } from "@/features";

type Props = {
  sneaker: SneakerInCart;
};

export const SneakersCartItem = ({ sneaker }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="border-1 border-indigo-400 rounded-lg p-2 flex flex-col gap-2">
        <span className="uppercase font-bold text-base leading-none text-indigo-600 flex items-center justify-between">
          {sneaker.sneaker.brand}
          <Image src="/nike-brand.svg" width={32} height={11} alt="nike" />
        </span>
        <h4 className="font-bold text-xl leading-none capitalize text-indigo-900 w-full">
          {sneaker.sneaker.model}
        </h4>
        <div className="flex justify-between items-center">
          <strong className="text-base font-light leading-normal text-indigo-900">
            Gender: <span>{useGenderCapitalized(sneaker.sneaker.gender)}</span>
          </strong>
          <Button
            className="rounded-full cursor-pointer transition-colors duration-300 px-1 py-1 w-20 h-6 gap-2"
            href={`/sneakers/${sneaker.sneaker.slug}`}
          >
            View <ArrowRightIcon width={14} height={14} />
          </Button>
        </div>

        <div className="flex flex-col gap-5 mt-3">
          <div className="rounded-lg cart-gradient relative flex flex-col">
            <div className="flex items-center justify-between w-full gap-2 absolute pt-2 px-2 z-10">
              <ButtonRemoveCart
                sneakerId={sneaker.sneakerId}
                variantId={sneaker.colorVariantId}
                sizeId={sneaker.sizeId}
              />
              <p
                className={clsx(
                  "opacity-0",
                  sneaker.colorVariant.discount &&
                    sneaker.colorVariant.discount > 0 &&
                    "opacity-100"
                )}
              >
                <Badge
                  color="indigo"
                  size="sm"
                  className="uppercase py-1 inline"
                >
                  Sale
                </Badge>
                <b className="font-bold text-base leading-none text-indigo-600 ml-2">
                  {`${sneaker.colorVariant.discount}%`}
                </b>
              </p>
            </div>
            <div className="relative w-full h-[120px] overflow-hidden rounded-lg">
              <Image
                src={
                  sneaker.colorVariant.mainImage ??
                  "https://ik.imagekit.io/pfbn9k04m/no-sneaker-main.png?updatedAt=1745404988293"
                }
                alt={sneaker.sneaker.model}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-3 flex-grow flex flex-col justify-between">
              <div className=" text-base font-light leading-normal text-indigo-900">
                <ul>
                  <li className="flex items-center gap-1">
                    <strong>Color: </strong>
                    <span>{sneaker.colorVariant.color}</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <strong>Size: </strong>
                    <ul className="flex items-center">
                      <b>{sneaker.size.value.toString()}</b>
                    </ul>
                  </li>
                  <li className="flex items-center gap-1">
                    <strong>Quantity: </strong>
                    <span>{sneaker.colorVariant.quantity}</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col mt-2.5 gap-1">
                <SneakersPrice
                  price={sneaker.colorVariant.price}
                  discount={sneaker.colorVariant.discount}
                  variant="main"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
