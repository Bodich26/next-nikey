import { CloseIcon } from "flowbite-react";
import { useRemoveFavorites } from "../model/use-remove-favorites";

type Props = {
  sneakerId: string;
};
export const ButtonRemoveFavorites = ({ sneakerId }: Props) => {
  const { removeSneakerFromFavorites } = useRemoveFavorites();
  return (
    <CloseIcon
      className="cursor-pointer z-10"
      onClick={() => removeSneakerFromFavorites(sneakerId)}
    />
  );
};
