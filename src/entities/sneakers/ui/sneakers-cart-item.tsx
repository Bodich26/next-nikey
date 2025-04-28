import { ArrowRightIcon, Badge, Button, CloseIcon } from "flowbite-react";
import Image from "next/image";
import { SneakersPrice } from "./sneakers-price";
import clsx from "clsx";
import { SneakerInCart } from "../model/type-sneakers";

export const SneakersCartItem = ({ sneaker }: SneakerInCart) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="border-1 border-indigo-400 rounded-lg p-2 flex flex-col gap-2">
        <span className="uppercase font-bold text-base leading-none text-indigo-600 flex items-center justify-between">
          {sneaker.brand}
          <Image src="/nike-brand.svg" width={32} height={11} alt="nike" />
        </span>
        <h4 className="font-bold text-xl leading-none capitalize text-indigo-900 w-full">
          {sneaker.model}
        </h4>
        <div className="flex justify-between items-center">
          <strong className="text-base font-light leading-normal text-indigo-900">
            Gender: <span>{sneaker.gender}</span>
          </strong>
          <Button
            className="!bg-transparent rounded-full text-indigo-900 cursor-pointer transition-colors duration-300 px-1 py-1 w-20 h-6 gap-2"
            href={`/catalog/${sneaker.slug}`}
          >
            View <ArrowRightIcon width={14} height={14} />
          </Button>
        </div>

        <div className="flex flex-col gap-5 mt-3">
          {sneaker.variants.map((variant) => (
            <div
              className="rounded-lg cart-gradient relative flex flex-col"
              key={variant.id}
            >
              <div className="flex items-center justify-between w-full gap-2 absolute pt-2 px-2 z-10">
                <CloseIcon className="cursor-pointer z-10" />
                <p
                  className={clsx(
                    "opacity-0",
                    variant.discount && variant.discount > 0 && "opacity-100"
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
                    {`${variant.discount}%`}
                  </b>
                </p>
              </div>
              <div className="relative w-full h-[120px] overflow-hidden rounded-lg">
                <Image
                  src={
                    variant.mainImage ??
                    "https://ik.imagekit.io/pfbn9k04m/no-sneaker-main.png?updatedAt=1745404988293"
                  }
                  alt={sneaker.model}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3 flex-grow flex flex-col justify-between">
                <div className=" text-base font-light leading-normal text-indigo-900">
                  <ul>
                    <li className="flex items-center gap-1">
                      <strong>Color: </strong>
                      <span>{variant.color}</span>
                    </li>
                    <li className="flex items-center gap-1">
                      <strong>Size: </strong>
                      <ul className="flex items-center">
                        {variant.sizes.map((s) => (
                          <b key={s.id}> {s.size.value.toString()}</b>
                        ))}
                      </ul>
                    </li>
                    <li className="flex items-center gap-1">
                      <strong>Quantity: </strong>
                      <span>{variant.quantity}</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col mt-2.5 gap-1">
                  <SneakersPrice
                    price={variant.price}
                    discount={variant.discount}
                    variant="main"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
