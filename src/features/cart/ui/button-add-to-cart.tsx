import { Button } from "flowbite-react";
import { ShoppingCart } from "lucide-react";
import { useAddCart } from "../model/use-add-cart";

type Props = {
  sneakerId: string;
  variantId: string;
  sizeVariantId: number;
};
export const ButtonAddToCart = ({
  sneakerId,
  variantId,
  sizeVariantId,
}: Props) => {
  const { addToSneakerCart } = useAddCart();

  return (
    <Button
      className="uppercase w-full cursor-pointer transition-colors duration-300 gap-2"
      size="lg"
      onClick={() => addToSneakerCart(sneakerId, variantId, sizeVariantId)}
    >
      <ShoppingCart />
      Add to cart
    </Button>
  );
};
