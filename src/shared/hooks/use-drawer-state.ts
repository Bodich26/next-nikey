"use client";
import { useState } from "react";
import { useWindowLockScroll } from "./use-windowlock-scroll";

export const useDrawerState = () => {
  const [isOpen, setIsOpen] = useState(false);

  useWindowLockScroll(isOpen);
  const handleClose = () => setIsOpen(true);

  return {
    isOpen,
    handleClose,
    setIsOpen,
  };
};
