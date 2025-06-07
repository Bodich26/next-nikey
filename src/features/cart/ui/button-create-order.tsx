import { Button } from "flowbite-react";
import { ArrowRight } from "lucide-react";

export const ButtonCreateOrder = () => {
  return (
    <Button
      className="mt-2 uppercase w-full cursor-pointer transition-colors duration-300 h-[36px]"
      size="lg"
    >
      Create Order
      <ArrowRight className="ml-2" />
    </Button>
  );
};
