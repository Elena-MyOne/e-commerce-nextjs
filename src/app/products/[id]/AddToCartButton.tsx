"use client";

import { useState, useTransition } from "react";
import { CgShoppingCart } from "react-icons/cg";

interface AddToCartButtonProps {
  productId: string;
  selectedColor: string | null;
  selectedSize: string | null;
  incrementProductQuantity: (
    productId: string,
    color: string,
    size: string,
  ) => Promise<void>;
}

export default function AddToCartButton({
  productId,
  incrementProductQuantity,
  selectedColor,
  selectedSize,
}: AddToCartButtonProps) {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);

  const handleAddToCart = () => {
    setSuccess(false);

    if (!selectedColor || !selectedSize) {
      alert("Please select both color and size.");
      return;
    }

    startTransition(async () => {
      await incrementProductQuantity(productId, selectedColor, selectedSize);
      setSuccess(true);
    });
  };

  return (
    <div className="flex items-center gap-2 py-4">
      <button
        className="btn btn-primary rounded-full px-14 hover:btn-secondary"
        onClick={handleAddToCart}
        disabled={isPending}
      >
        {isPending && <span className="loading loading-spinner loading-md" />}
        Add to Cart
        <span className="text-lg">
          <CgShoppingCart />
        </span>
      </button>
      {!isPending && success && (
        <span className="text-success">Added to Cart</span>
      )}
    </div>
  );
}
