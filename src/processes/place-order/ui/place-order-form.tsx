"use client";

import {
  PaymentMethodOrder,
  RecipientDetails,
  SelectCouponOrder,
  SelectDeliveryAddress,
  SneakersListOrder,
  TariffsDeliveryOrder,
} from "@/features";
import { OrderFormSkeleton, useGetDraftOrder } from "@/features/orders";
import { ShowErrors } from "@/shared";

type Props = {
  draftOrderId: string;
};

export const PlaceOrderForm = ({ draftOrderId }: Props) => {
  const { draftOrder, isError, isLoading } = useGetDraftOrder(draftOrderId);

  if (isLoading) {
    return <OrderFormSkeleton />;
  }

  if (isError || !draftOrder) {
    return <ShowErrors error="Order not found" type="full" />;
  }

  if (draftOrder.draftItems.length === 0) {
    return <ShowErrors error="Sneakers not found" type="empty" />;
  }

  return (
    <form className="flex justify-between gap-8 mt-8 max-lg:flex-col-reverse">
      <div className="flex flex-col gap-8">
        <RecipientDetails />
      </div>
      <div className="flex flex-[2] h-[700px] flex-col gap-8 max-sm:gap-5">
        <SelectDeliveryAddress />
        <SneakersListOrder sneakersOrderList={draftOrder.draftItems} />
      </div>
      <div className="flex flex-[1] flex-col gap-8 max-sm:gap-5">
        <PaymentMethodOrder />
        <TariffsDeliveryOrder />
        <SelectCouponOrder />
      </div>
    </form>
  );
};
