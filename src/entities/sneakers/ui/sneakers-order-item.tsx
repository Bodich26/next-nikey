import { ButtonQuantity, ButtonRemoveOrder } from "@/features";
import { SneakersPrice } from "@/shared";
import Link from "next/link";
import Image from "next/image";

export const SneakersOrderItem = () => {
  return (
    <div className="w-full relative rounded-lg border border-indigo-300 p-4 flex gap-4 max-lg:flex-col">
      <ButtonRemoveOrder sneakerId={"1"} />
      <div className="relative w-full min-w-[20%] h-[150px] ">
        <Image
          src="https://ik.imagekit.io/pfbn9k04m/AirMax90-1.png?updatedAt=1744832779584"
          alt="model"
          className="object-cover"
          fill
        />
      </div>
      <div className="flex flex-col flex-wrap gap-2 w-full text-indigo-900 text-sm sm:text-base">
        <div className="flex justify-between">
          <span className="font-semibold">Brand:</span>
          <span className="uppercase font-bold">Nike</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Model:</span>
          <Link
            className="font-bold text-indigo-700 hover:underline"
            href="/sneakers/nike-lebron-xxii"
            passHref
          >
            Air Max 90
          </Link>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Size:</span>
          <span className="font-bold">43</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Color:</span>
          <span className="font-bold">Blue</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="font-semibold">Quantity:</span>
          <ButtonQuantity productId={1} quantity={1} />
        </div>

        <div className="flex justify-between items-center">
          <span className="font-semibold">Price:</span>
          <SneakersPrice price={100} discount={1} variant="default" />
        </div>
      </div>
    </div>
  );
};
