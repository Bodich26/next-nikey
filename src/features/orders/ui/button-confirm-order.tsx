import { Button, Spinner } from "flowbite-react";
import { CheckCircle2 } from "lucide-react";
import { useOrdersContext } from "../model/use-orders-context";

export const ButtonConfirmOrder = () => {
  const { loadingCreateOrder } = useOrdersContext();
  return (
    <Button
      type="submit"
      size="lg"
      className="uppercase w-full cursor-pointer transition-colors duration-300"
    >
      {loadingCreateOrder ? (
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
          <CheckCircle2 className="mr-2" />
          Confirm
        </>
      )}
    </Button>
  );
};
