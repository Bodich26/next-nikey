import { StarsRating } from "@/shared";
import { Avatar } from "flowbite-react";

export const ReviewItem = () => {
  return (
    <div className="border rounded-lg border-indigo-300 p-4 text-indigo-900 flex flex-col justify-between h-full min-h-[240px] w-full">
      <div className="flex items-center gap-4 mb-2">
        <Avatar
          size="lg"
          img="https://forum-ru-cdn.warthunder.com/original/3X/a/f/af62d76a2d92797df0711e6a94d319490936f3a1.jpeg"
          alt="avatar of Jese"
          rounded
        />
        <span className="text-2xl font-bold">Weblirama</span>
      </div>

      <div className="flex items-center gap-1 mb-2 mt-2">
        <StarsRating rating={4} />
      </div>

      <div className="flex-1">
        <p className="text-base font-light leading-normal">
          Super comfortable and stylish sneakers! Perfect for everyday wear,
          great support, lightweight, and look amazing with any outfit. Highly
          recommended!
        </p>
      </div>
    </div>
  );
};
