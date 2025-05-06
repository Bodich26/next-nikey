"use client";
import React from "react";

export const useWindowLockScroll = (lock: boolean) => {
  React.useEffect(() => {
    const isDesktop = window.innerWidth > 1919;
    const headers = document.querySelectorAll("header");

    if (lock) {
      document.body.style.overflow = "hidden";
      if (isDesktop) {
        document.body.style.paddingRight = "15px";
        headers.forEach((header) => {
          (header as HTMLElement).style.paddingRight = "15px";
        });
      }
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      headers.forEach((header) => {
        (header as HTMLElement).style.paddingRight = "";
      });
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      headers.forEach((header) => {
        (header as HTMLElement).style.paddingRight = "";
      });
    };
  }, [lock]);
};
