"use client";

import { useCreateOrderMutation } from "../api/orders-api";
import { OrdersSchemaData } from "./orders-schema";

export const useCreateOrder = () => {
  const [confirmOrder] = useCreateOrderMutation();

  const handleOrder = async (values: OrdersSchemaData) => {
    try {
      const response = await confirmOrder(values).unwrap();

      if (response.success) {
        window.location.href = "/";
        console.log("Data Success:", response.success);
      } else {
        console.log("Data error", response.error);
      }
    } catch (error: unknown | string) {
      console.log(error);
    }
  };

  return { handleOrder };
};
