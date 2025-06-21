"use client";

import { SneakersOrderItem } from "@/entities";
import { DraftOrderItemsList } from "../model/type-orders";
import { ShowErrors } from "@/shared";

type Props = {
  sneakersOrderList: DraftOrderItemsList;
};

export const SneakersListOrder = ({ sneakersOrderList }: Props) => {
  return (
    <div className="border border-indigo-300 p-4 bg-transparent rounded-lg lg:overflow-y-auto max-lg:overflow-y-auto max-lg:h-[400px]">
      <h4 className="uppercase text-xl font-medium text-indigo-900 mb-4">
        Sneakers
      </h4>
      <div className="flex flex-col gap-8 max-sm:gap-5">
        {!sneakersOrderList ? (
          <ShowErrors error={"Server Error"} type={"full"} />
        ) : (
          sneakersOrderList.map((item, index) => (
            <SneakersOrderItem sneakers={item} key={index} />
          ))
        )}
      </div>
    </div>
  );
};
