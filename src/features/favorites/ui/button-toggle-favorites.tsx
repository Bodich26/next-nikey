"use client";
import React from "react";
import { Heart } from "lucide-react";
import { useGetFavorites } from "../model/use-get-favorites";
import clsx from "clsx";
import { Button } from "flowbite-react";
import { useFavoriteActions } from "../model/use-favorites-actions";

interface IProps {
  sneakersId: string;
}

export const ButtonToggleFavorites = ({ sneakersId }: IProps) => {
  const [isCooldown, setIsCooldown] = React.useState<boolean>(false);
  const { favoriteIds } = useGetFavorites();
  const { toggleFavorite } = useFavoriteActions();

  const isFavorite = favoriteIds.has(sneakersId);

  const timeoutId = React.useRef<NodeJS.Timeout | null>(null);

  const handleClick = async () => {
    if (isCooldown) return;

    setIsCooldown(true);
    await toggleFavorite(sneakersId, isFavorite);

    timeoutId.current = setTimeout(() => setIsCooldown(false), 5000);
  };

  React.useEffect(() => {
    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, []);

  return (
    <Button
      className="uppercase w-[53px] cursor-pointer transition-colors duration-300 !p-4 $"
      size="lg"
    >
      <Heart
        onClick={handleClick}
        width={32}
        height={32}
        className={clsx(
          "block stroke-indigo-50 hover:cursor-pointer transition-[fill,stroke] duration-200 ease-in-out",
          isFavorite ? "fill-indigo-50" : "fill-transparent"
        )}
      />
    </Button>
  );
};
