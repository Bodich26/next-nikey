"use client";
import React from "react";

export const useScrollHeader = () => {
  const [scrolled, setScrolled] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (window.scrollY > 10) {
      setScrolled(true);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrolled;
};
