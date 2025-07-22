"use client";

import { createContext, useContext } from "react";
import { OrdersSchemaData } from "./orders-schema";

type OrdersContextType = {
  loadingCreateOrder: boolean;
  handleOrder: (data: OrdersSchemaData) => void;
};
export const OrdersContext = createContext<OrdersContextType | undefined>(
  undefined
);

export const useOrdersContext = () => {
  const context = useContext(OrdersContext);
  if (!context) {
    throw new Error("useOrdersContext must be used within an OrdersProvider");
  }
  return context;
};
