"use client";

interface SizeBadgesProps {
  sizes: string[];
  selectedSize: string | null;
  setSelectedSize: (size: string) => void;
}

export default function SizeBadges({
  sizes,
  selectedSize,
  setSelectedSize,
}: SizeBadgesProps) {
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
