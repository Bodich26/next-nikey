import { ReactElement } from "react";

type Props = {
  onClick: () => void;
  icon: ReactElement;
  quantity: number;
};

export const CircleQuantity = ({ onClick, icon, quantity }: Props) => {
  return (
    <div className="div-icon-hover relative cursor-pointer" onClick={onClick}>
      <div className="hover-effect-icon">{icon}</div>
      {quantity > 0 && (
        <span className=" rounded-full bg-indigo-600 text-indigo-50 p-1 w-5 h-5 absolute left-[30%] top-[45%] inline-flex items-center justify-center">
          <b className="text-center text-xs h-3.5">{quantity}</b>
        </span>
      )}
    </div>
  );
};
