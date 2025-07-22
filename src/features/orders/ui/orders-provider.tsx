"use client";

import React from "react";
import { OrdersContext } from "../model/use-orders-context";
import { useCreateOrder } from "../model/use-create-order";

type OrdersProviderProps = {
  children: React.ReactNode;
};

export const OrdersProvider = ({ children }: OrdersProviderProps) => {
  const { loadingCreateOrder, handleOrder } = useCreateOrder();

  return (
    <OrdersContext.Provider value={{ loadingCreateOrder, handleOrder }}>
      {children}
    </OrdersContext.Provider>
  );
};
