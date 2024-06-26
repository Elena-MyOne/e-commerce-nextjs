"use client";

import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

type SearchProductsSubmitButtonProps = {
  children: React.ReactNode;
} & ComponentProps<"button">;

export default function SearchProductsSubmitButton({
  children,
}: SearchProductsSubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      className="absolute left-2 top-3 cursor-pointer text-2xl text-gray-500 duration-300 hover:text-secondary"
      type="submit"
      disabled={pending}
    >
      {children}
    </button>
  );
}
