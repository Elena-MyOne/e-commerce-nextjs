"use client";

import { useTransition } from "react";

interface ProductQuantityBadgeProps {
  quantity: number;
  productId: string;
  size: string;
  color: string;
  setProductQuantity: (
    productId: string,
    quantity: number,
    color?: string,
    size?: string,
  ) => Promise<void>;
}

export default function ProductQuantityBadge({
  quantity,
  productId,
  size,
  color,
  setProductQuantity,
}: ProductQuantityBadgeProps) {
  const [isPending, startTransition] = useTransition();

  return (
    <div
      className={`item-center my-1 flex ${isPending ? "pointer-events-none opacity-50" : ""}`}
    >
      <button
        className="w-[30px] rounded-l-full border-y-2 border-l-2 border-gray-400 text-2xl duration-300 hover:bg-gray-200 sm:w-[35px]"
        onClick={() => {
          startTransition(async () => {
            await setProductQuantity(productId, (quantity -= 1), color, size);
          });
        }}
      >
        -
      </button>
      <div className="relative flex w-[30px] items-center justify-center border-y-2 border-gray-400 py-1 sm:w-[40px]">
        {quantity}
      </div>
      <button
        className="w-[30px] rounded-r-full border-y-2 border-r-2 border-gray-400 text-2xl duration-300 hover:bg-gray-200 sm:w-[35px]"
        onClick={() => {
          startTransition(async () => {
            await setProductQuantity(productId, (quantity += 1), color, size);
          });
        }}
      >
        +
      </button>
    </div>
  );
}
