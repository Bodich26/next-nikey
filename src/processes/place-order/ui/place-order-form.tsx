"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  PaymentMethodOrder,
  RecipientDetails,
  SelectCouponOrder,
  SelectDeliveryAddress,
  SneakersListOrder,
  TariffsDeliveryOrder,
} from "@/features";
import {
  OrderFormSkeleton,
  OrdersSchema,
  OrdersSchemaData,
  useCreateOrder,
  useGetDraftOrder,
} from "@/features/orders";
import { ShowErrors } from "@/shared";

type Props = {
  draftOrderId: string;
};

export const PlaceOrderForm = ({ draftOrderId }: Props) => {
  const { handleOrder } = useCreateOrder();
  const { draftOrder, isError, isLoading, error } =
    useGetDraftOrder(draftOrderId);

  const orderForm = useForm<OrdersSchemaData>({
    resolver: zodResolver(OrdersSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      deliveryAddress: "",
      paymentMethod: "UPON_RECEIPT",
      shippingMethod: "STANDARD",
      shippingCost: 0,
      promoCode: "",
      orderAmount: 0,
    },
  });

  const { setValue } = orderForm;

  React.useEffect(() => {
    if (draftOrder?.orderAmount) {
      setValue("orderAmount", draftOrder.orderAmount);
    }
  }, [draftOrder, setValue]);

  if (isLoading) {
    return <OrderFormSkeleton />;
  }

  if (isError || !draftOrder) {
    return (
      <div className="mt-8">
        <ShowErrors error={error || "Server Error"} type="full" />
      </div>
    );
  }

  if (draftOrder.draftItems.length === 0) {
    return (
      <div className="mt-8">
        <ShowErrors error="Sneakers not found" type="empty" />
      </div>
    );
  }

  return (
    <FormProvider {...orderForm}>
      <form
        onSubmit={orderForm.handleSubmit(handleOrder)}
        className="flex justify-between gap-8 mt-8 max-lg:flex-col-reverse"
      >
        <div className="flex flex-col gap-8">
          <RecipientDetails />
        </div>
        <div className="flex flex-[2] h-[600px] flex-col gap-8 max-sm:gap-5">
          <SelectDeliveryAddress />
          <SneakersListOrder sneakersOrderList={draftOrder.draftItems} />
        </div>
        <div className="flex flex-[1] flex-col gap-8 max-sm:gap-5">
          <PaymentMethodOrder />
          <TariffsDeliveryOrder />
          <SelectCouponOrder totalPrice={draftOrder.orderAmount} />
        </div>
      </form>
    </FormProvider>
  );
};
