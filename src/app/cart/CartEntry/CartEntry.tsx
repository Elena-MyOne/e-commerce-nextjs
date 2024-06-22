"use client";

import { useTransition } from "react";
import ProductQuantityBadge from "@/components/UI/ProductQuantityBadge/ProductQuantityBadge";
import { CartItemWithProduct } from "@/lib/db/cart";
import { countSalePriceWithQuantity } from "@/lib/functions/countSalePriceWithQuantity";
import { formatPrice } from "@/lib/functions/formatPrice";
import Image from "next/image";
import Link from "next/link";
import { RiDeleteBin6Line } from "react-icons/ri";

interface CartEntryProps {
  cartItem: CartItemWithProduct;
  setProductQuantity: (
    productId: string,
    quantity: number,
    color?: string,
    size?: string,
  ) => Promise<void>;
}

export default function CartEntry({
  cartItem: { product, quantity, size, color },
  setProductQuantity,
}: CartEntryProps) {
  const [isPending, startTransition] = useTransition();

  return (
    <div className="flex gap-2 py-2 sm:gap-4 sm:py-4">
      <Image
        src={product.imageUrl}
        width={200}
        height={150}
        alt={`${product.category}: ${product.size}`}
        className="h-[80px] w-[80px] rounded-lg object-cover sm:h-[200px] sm:w-[200px]"
      />
      <div className="flex-1">
        <div className="mb-2 flex items-center justify-between gap-2 text-sm font-bold sm:text-base">
          <Link
            href={`/products/${product.id}`}
            className="cursor-pointer duration-300 hover:text-secondary"
          >
            {product.name}
          </Link>
          <button
            className="cursor-pointer text-lg duration-300 hover:text-secondary"
            onClick={() => {
              startTransition(async () => {
                await setProductQuantity(product.id, 0, color, size);
              });
            }}
          >
            <RiDeleteBin6Line />
          </button>
        </div>
        <p className="text-sm sm:text-base">
          <span className="text-info">Size:</span> {size}
        </p>
        <p className="text-sm sm:text-base">
          <span className="text-info">Color:</span> {color}
        </p>
        <p className="text-sm sm:text-base">
          {" "}
          <span className="text-info">Price:</span> {formatPrice(product.price)}
        </p>
        {product.sale > 0 && (
          <p className="text-sm sm:text-base">
            <span className="text-info">Sale:</span>{" "}
            <span className="font-semibold text-error">-{product.sale}%</span>
          </p>
        )}

        <div className="flex items-center justify-between gap-2">
          <p className="text-sm font-semibold sm:text-base">
            Total:{" "}
            {countSalePriceWithQuantity(product.price, product.sale, quantity)}
          </p>
          <ProductQuantityBadge
            quantity={quantity}
            productId={product.id}
            size={size}
            color={color}
            setProductQuantity={setProductQuantity}
          />
        </div>
      </div>
    </div>
  );
}
