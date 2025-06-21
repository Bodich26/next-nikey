export const useCalcDiscountPrice = (price: number, discount?: number) => {
  if (!discount || discount <= 0) {
    return price;
  }
  return Math.floor(price - (price * discount) / 100);
};
