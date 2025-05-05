import { Star } from "lucide-react";
import { useCalcRating } from "../hooks";

export const StarsRating = ({ rating }: { rating: number }) => {
  const { fullStars, halfStar, emptyStars } = useCalcRating(rating);

  return (
    <div className="flex items-center gap-1">
      {Array(fullStars)
        .fill(null)
        .map((_, index) => (
          <Star
            key={`full-${index}`}
            className="text-indigo-700 fill-indigo-700"
          />
        ))}

      {halfStar > 0 && (
        <div className="relative w-6 h-6 ">
          <Star
            className="absolute top-0 left-0 text-indigo-700 fill-indigo-700 w-full h-full"
            style={{ clipPath: "inset(0 45% 0 0)" }}
          />
          <Star className="absolute top-0 left-0 text-indigo-700 w-full h-full" />
        </div>
      )}

      {Array(emptyStars)
        .fill(null)
        .map((_, index) => (
          <Star key={`empty-${index}`} className="text-indigo-700" />
        ))}
    </div>
  );
};
