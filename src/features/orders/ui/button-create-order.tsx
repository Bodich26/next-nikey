import { Button, Spinner } from "flowbite-react";
import { ArrowRight } from "lucide-react";
import { useCreateDraftOrder } from "../model/use-create-draft-order";

export const ButtonCreateOrder = () => {
  const { handleCreateDraftOrder, isLoading } = useCreateDraftOrder();
  return (
    <Button
      onClick={() => handleCreateDraftOrder()}
      className="mt-2 uppercase w-full cursor-pointer transition-colors duration-300 h-[36px]"
      size="lg"
    >
      {isLoading ? (
        <>
          <Spinner
            aria-label="Alternate spinner button example"
            light
            className="mr-2 "
            color="default"
            size="sm"
          />
          Loading...
        </>
      ) : (
        <>
          Create order
          <ArrowRight className="ml-2" />
        </>
      )}
    </Button>
  );
};
