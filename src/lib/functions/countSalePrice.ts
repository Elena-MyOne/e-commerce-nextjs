import { formatPrice } from "./formatPrice";

export function countSalePrice(price: number, sale: number) {
  return formatPrice(sale > 0 ? price - price * (sale / 100) : price);
}
