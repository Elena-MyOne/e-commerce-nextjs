import { formatPrice } from "./formatPrice";

export function countSalePriceWithQuantity(
  price: number,
  sale: number,
  quantity: number,
) {
  return formatPrice(
    sale ? (price - price * (sale / 100)) * quantity : price * quantity,
  );
}
