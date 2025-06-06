import { CheckboxGroup } from "@/shared";
import {
  checkboxPayment,
  checkboxTheme,
  labelTheme,
} from "../model/checkbox-order-list";

export const PaymentMethodOrder = () => {
  return (
    <div className="border border-indigo-300 p-4 bg-transparent rounded-lg">
      <h4 className="uppercase text-xl font-medium text-indigo-900 mb-4 ">
        Payment method
      </h4>
      <div className="flex items-center gap-2">
        {checkboxPayment.map((group) => (
          <CheckboxGroup
            key={group.name}
            options={group.options}
            checkboxTheme={checkboxTheme}
            labelTheme={labelTheme}
          />
        ))}
      </div>
    </div>
  );
};
