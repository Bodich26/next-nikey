import {
  PaymentMethodOrder,
  RecipientDetails,
  SelectCouponOrder,
  SelectDeliveryAddress,
  SneakersListOrder,
  TariffsDeliveryOrder,
} from "@/features";

export const PlaceOrderForm = () => {
  return (
    <form className="flex justify-between gap-8 mt-8 max-lg:flex-col-reverse">
      <div className="flex flex-col gap-8">
        <RecipientDetails />
      </div>
      <div className="flex flex-[2] h-[700px] flex-col gap-8 max-sm:gap-5">
        <SelectDeliveryAddress />
        <SneakersListOrder />
      </div>
      <div className="flex flex-[1] flex-col gap-8 max-sm:gap-5">
        <PaymentMethodOrder />
        <TariffsDeliveryOrder />
        <SelectCouponOrder />
      </div>
    </form>
  );
};
