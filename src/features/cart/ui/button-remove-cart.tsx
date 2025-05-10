import { CloseIcon } from "flowbite-react";
import { useRemoveCart } from "../model/use-remove-cart.";

type Props = {
  sneakerId: string;
  variantId: string;
  sizeId: number;
};
export const ButtonRemoveCart = ({ sneakerId, variantId, sizeId }: Props) => {
  const { removeFromSneakerCart } = useRemoveCart();
  return (
    <CloseIcon
      className="cursor-pointer z-10"
      onClick={() => removeFromSneakerCart(sneakerId, variantId, sizeId)}
    />
  );
};
