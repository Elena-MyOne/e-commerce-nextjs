"use client";

import { ShoppingCart } from "@/lib/db/cart";
import { formatPrice } from "@/lib/functions/formatPrice";
import Link from "next/link";
import { CgShoppingCart } from "react-icons/cg";

interface ShoppingCartButtonProps {
  cart: ShoppingCart | null;
}

export default function ShoppingCartButton({ cart }: ShoppingCartButtonProps) {
  function closeDropdownMenu() {
    const element = document.activeElement as HTMLElement;
    if (element) {
      element.blur();
    }
  }

  return (
    <div className="dropdown dropdown-end">
      <label
        tabIndex={0}
        className="cursor-pointer duration-300 hover:text-secondary"
      >
        <div className="indicator flex items-center justify-center">
          <span className="text-2xl">
            <CgShoppingCart />
          </span>

          <span className="badge indicator-item badge-sm border-gray-400 font-semibold">
            {cart?.size || 0}
          </span>
        </div>
      </label>
      <div
        tabIndex={0}
        className="card dropdown-content card-compact z-30 mt-3 w-52 bg-base-100 shadow-sm sm:mt-5"
      >
        <div className="card-body p-10 sm:p-5">
          <span className="text-center text-lg font-extrabold">
            {cart?.size || 0} <span className="font-custom">Items</span>
          </span>
          <span className="text-center text-info">
            Subtotal: {formatPrice(cart?.subtotal || 0)}
          </span>
          <div className="card-actions m-auto">
            <Link
              href="/cart"
              className="btn btn-primary rounded-full px-14 hover:btn-secondary"
              onClick={closeDropdownMenu}
            >
              Go to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
