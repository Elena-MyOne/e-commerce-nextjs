"use client";

import { useState } from "react";

interface SizeBadgesProps {
  sizes: string[];
}

export default function SizeBadges({ sizes }: SizeBadgesProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <div className="py-3">
      <p>Choose Size</p>
      <div className="my-3 flex flex-wrap gap-4">
        {sizes.map((size) => {
          const isActive = selectedSize === size;
          return (
            <div
              className={`badge ${isActive ? "badge-neutral" : "badge-ghost"} cursor-pointer p-5`}
              key={size}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </div>
          );
        })}
      </div>
    </div>
  );
}
