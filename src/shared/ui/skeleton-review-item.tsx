import { Avatar } from "flowbite-react";
import { StarsRating } from "./stars-rating";

export const SkeletonReviewItem = () => {
  return (
    <div className="border rounded-lg border-indigo-300 p-4 text-indigo-900 flex flex-col justify-between h-full min-h-[240px] w-full">
      <div className="flex items-center gap-4 mb-2">
        <Avatar size="md" rounded />
        <div className="text-xl font-bold" />
      </div>

      <div className="flex items-center gap-1 mb-2 mt-2">
        <StarsRating rating={5} />
      </div>

      <div className="flex-1">
        <div className="text-base font-light leading-normal" />
      </div>
    </div>
  );
};
