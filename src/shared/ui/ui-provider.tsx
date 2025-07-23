"use client";
import { createContext, useState, useCallback } from "react";
import { useWindowLockScroll } from "../hooks";

type UIContextType = {
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  showLoader: () => void;
  hideLoader: () => void;
  isLoading: boolean;
};

export const UIContext = createContext<UIContextType>({
  isCartOpen: false,
  openCart: () => {},
  closeCart: () => {},
  toggleCart: () => {},
  showLoader: () => {},
  hideLoader: () => {},
  isLoading: false,
});

export const UIProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const openCart = useCallback(() => setCartOpen(true), []);
  const closeCart = useCallback(() => setCartOpen(false), []);
  const toggleCart = useCallback(() => setCartOpen((prev) => !prev), []);

  const showLoader = useCallback(() => setLoading(true), []);
  const hideLoader = useCallback(() => setLoading(false), []);

  useWindowLockScroll(isCartOpen);
  return (
    <UIContext.Provider
      value={{
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        isLoading,
        showLoader,
        hideLoader,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
