import { ButtonQuantity, ButtonRemoveOrder } from "@/features";
import { SneakersPrice } from "@/shared";
import Link from "next/link";
import Image from "next/image";
import { DraftOrderItemWithDetails } from "@/features/orders/model/type-orders";

export const SneakersOrderItem = ({
  sneakers,
}: {
  sneakers: DraftOrderItemWithDetails;
}) => {
  const { sneaker, colorVariant, size } = sneakers;
  return (
    <div className="w-full relative rounded-lg border border-indigo-300 p-4 flex gap-4 max-lg:flex-col">
      <ButtonRemoveOrder />
      <div className="relative w-full min-w-[20%] h-[150px] ">
        <Image
          src={
            colorVariant.mainImage ??
            "https://ik.imagekit.io/pfbn9k04m/no-sneaker-main.png?updatedAt=1745404988293"
          }
          alt={sneaker.model}
          className="object-cover"
          fill
        />
      </div>
      <div className="flex flex-col flex-wrap gap-2 w-full text-indigo-900 text-sm sm:text-base">
        <div className="flex justify-between">
          <span className="font-semibold">{sneaker.brand}</span>
          <span className="uppercase font-bold">Nike</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Model:</span>
          <Link
            className="font-bold text-indigo-700 hover:underline"
            href="/sneakers/nike-lebron-xxii"
            passHref
          >
            {sneaker.model}
          </Link>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Size:</span>
          <span className="font-bold">{size.value}</span>
        </div>

        <div className="flex justify-between">
          <span className="font-semibold">Color:</span>
          <span className="font-bold">{colorVariant.color}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="font-semibold">Quantity:</span>
          <ButtonQuantity productId={1} quantity={1} />
        </div>

        <div className="flex justify-between items-center">
          <span className="font-semibold">Price:</span>
          <SneakersPrice
            price={colorVariant.price}
            discount={colorVariant.discount}
            variant="default"
          />
        </div>
      </div>
    </div>
  );
};
