import { Button } from "flowbite-react";
import { ArrowRight } from "lucide-react";
import { useCreateDraftOrder } from "../model/use-create-draft-order";

export const ButtonCreateOrder = () => {
  const { handleCreateDraftOrder } = useCreateDraftOrder();
  return (
    <Button
      onClick={() => handleCreateDraftOrder()}
      className="mt-2 uppercase w-full cursor-pointer transition-colors duration-300 h-[36px]"
      size="lg"
    >
      Create Order
      <ArrowRight className="ml-2" />
    </Button>
  );
};
