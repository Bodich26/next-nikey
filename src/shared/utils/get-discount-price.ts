"use server";

function getDiscountedPrice(price: number, discount?: number) {
  if (!discount) return price;
  return price - price * (1 - discount / 100);
}
export { getDiscountedPrice };
