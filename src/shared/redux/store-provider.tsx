"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NuqsAdapter>
      <Provider store={store}>{children}</Provider>
    </NuqsAdapter>
  );
};
