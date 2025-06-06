import { Button } from "flowbite-react";
import { CheckCircle2 } from "lucide-react";

export const ButtonConfirmOrder = () => {
  return (
    <Button
      type="submit"
      size="lg"
      className="uppercase w-full cursor-pointer transition-colors duration-300"
    >
      <CheckCircle2 className="mr-2" />
      Confirm
    </Button>
  );
};
