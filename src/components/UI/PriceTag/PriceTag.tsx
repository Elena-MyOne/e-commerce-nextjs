import { countSalePrice } from "@/lib/functions/countSalePrice";
import { formatPrice } from "@/lib/functions/formatPrice";

interface PriceTagProps {
  price: number;
  sale: number;
  className?: string;
}

export default function PriceTag({ price, sale, className }: PriceTagProps) {
  return (
    <div className="flex items-center gap-4">
      <div className={`${className} font-semibold`}>
        {countSalePrice(price, sale)}
      </div>
      {sale > 0 && (
        <>
          <div
            className={`${className} font-semibold text-gray-400 line-through`}
          >
            {formatPrice(price)}
          </div>
          <div className="rounded-lg bg-red-100 px-2 py-1 text-sm text-error">
            -{sale}%
          </div>
        </>
      )}
    </div>
  );
}
