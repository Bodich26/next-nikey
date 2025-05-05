export const useCalcRating = (rating: number) => {
  const safeRating = Math.min(rating, 5);

  const fullStars = Math.floor(safeRating);
  const halfStar = safeRating % 1 >= 0.1 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return { fullStars, halfStar, emptyStars };
};
