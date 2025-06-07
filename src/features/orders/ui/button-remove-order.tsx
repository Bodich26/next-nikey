import { CloseIcon } from "flowbite-react";

export const ButtonRemoveOrder = () => {
  //   const { removeSneakerFromFavorites } = useRemoveFavorites();
  return (
    <CloseIcon
      className="cursor-pointer z-10 text-indigo-900 absolute"
      width={24}
      height={24}
      onClick={() => console.log("1")}
    />
  );
};
