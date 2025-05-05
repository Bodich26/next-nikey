import { Review, Sneaker, User } from "@prisma/client";

type sneakerReview = Review & {
  sneaker: Sneaker;
  user: User;
};

type SneakersReviewsResponse = {
  sneakerReviews: sneakerReview[];
  success: boolean;
  error?: string;
};

export type { SneakersReviewsResponse, sneakerReview };
