import { StarsRating } from "@/shared";
import { Avatar } from "flowbite-react";

type Props = {
  userIconSrc: string;
  userName: string;
  reviewGrade: number;
  reviewComment: string | null;
};

export const ReviewItem = ({
  userIconSrc,
  userName,
  reviewGrade,
  reviewComment,
}: Props) => {
  return (
    <div className="border rounded-lg border-indigo-300 p-4 text-indigo-900 flex flex-col justify-between h-full min-h-[240px] w-full">
      <div className="flex items-center gap-4 mb-2">
        <Avatar
          size="md"
          img={userIconSrc}
          alt={`Avatar ${userName}`}
          rounded
        />
        <span className="text-xl font-bold">{userName}</span>
      </div>

      <div className="flex items-center gap-1 mb-2 mt-2">
        <StarsRating rating={reviewGrade} />
      </div>

      <div className="flex-1">
        <p className="text-base font-light leading-normal">
          {reviewComment ? reviewComment : ""}
        </p>
      </div>
    </div>
  );
};
