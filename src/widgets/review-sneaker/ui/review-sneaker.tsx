import { ShowErrors } from "@/shared";
import { ReviewSlider } from "./review-slider";
import { getSneakersReviews } from "@/entities/reviews";

type Props = {
  slug: string;
};
export const ReviewSneaker = async ({ slug }: Props) => {
  const { sneakerReviews, error: sneakerReviewsError } =
    await getSneakersReviews(slug);

  return (
    <>
      {sneakerReviews.length > 0 ? (
        <ReviewSlider review={sneakerReviews} showError={sneakerReviewsError} />
      ) : (
        <ShowErrors
          type="border"
          error="There are no reviews for these sneakers yet."
        />
      )}
    </>
  );
};
