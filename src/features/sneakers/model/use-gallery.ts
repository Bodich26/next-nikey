"use client";
import React from "react";

export const useGallery = (initialImages: string[]) => {
  const [activeImage, setActiveImage] = React.useState(initialImages[0]);

  React.useEffect(() => {
    setActiveImage(initialImages[0]);
  }, [initialImages]);

  return {
    activeImage,
    setActiveImage,
  };
};
