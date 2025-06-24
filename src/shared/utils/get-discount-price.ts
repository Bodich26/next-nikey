"use server";

function getDiscountedPrice(price: number, discount?: number) {
  if (!discount || discount <= 0) {
    return price;
  }
  return Math.floor(price - price * (1 - discount / 100));
}
export { getDiscountedPrice };
