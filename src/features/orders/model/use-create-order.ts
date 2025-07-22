"use client";

import React from "react";
import { useCreateOrderMutation } from "../api/orders-api";
import { OrdersSchemaData } from "./orders-schema";

export const useCreateOrder = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [confirmOrder] = useCreateOrderMutation();

  const handleOrder = async (values: OrdersSchemaData) => {
    setLoading(true);

    try {
      const response = await confirmOrder(values).unwrap();

      if (response.success) {
        window.location.href = "/";
        console.log("Data Success:", response.success);
      } else {
        setLoading(false);
        console.log("Data error", response.error);
      }
    } catch (error: unknown | string) {
      setLoading(false);
      console.log(error);
    }
  };

  return { handleOrder, loadingCreateOrder: loading };
};
