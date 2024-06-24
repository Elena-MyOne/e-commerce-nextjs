"use client";

import { IoCheckmarkSharp } from "react-icons/io5";

interface ColorBadgesProps {
  colors: string[];
  selectedColor: string | null;
  setSelectedColor: (color: string) => void;
}

export default function ColorBadges({
  colors,
  selectedColor,
  setSelectedColor,
}: ColorBadgesProps) {
  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div className="py-3">
      <p className="mb-3">Select colors</p>
      <div className="flex flex-wrap gap-4">
        {colors.map((item) => {
          const color = item.toLocaleLowerCase();
          const isActive = selectedColor === color;

          return (
            <div
              className="relative cursor-pointer rounded-full border border-gray-300 p-4"
              key={color}
              style={{ backgroundColor: `${color}` }}
              onClick={() => handleColorClick(color)}
            >
              {isActive && (
                <span
                  className={`absolute inset-0 flex items-center justify-center ${color === "white" || color === "yellow" || color === "pink" ? "text-black" : "text-white"}`}
                >
                  <IoCheckmarkSharp />
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
