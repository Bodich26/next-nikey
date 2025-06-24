type DiscountCalcItem = {
  quantity: number;
  price: number;
  discount?: number;
};

export const calcDiscountPriceServer = <T>(
  items: T[],
  getData: (item: T) => DiscountCalcItem
): number => {
  return Math.floor(
    items.reduce((sum, item) => {
      const { price, discount = 0, quantity } = getData(item);
      const discountedPrice = price * (1 - discount / 100);
      return sum + discountedPrice * quantity;
    }, 0)
  );
};
