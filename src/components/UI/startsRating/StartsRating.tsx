import { useId } from "react";

interface StarsRatingProps {
  rating: number;
  className?: string;
}

export default function StarsRating({ rating, className }: StarsRatingProps) {
  const uniqueName = useId();

  return (
    <div className={`rating ${className ? className : "rating-xs"}`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <input
          key={star}
          type="radio"
          name={`ratting-${uniqueName}`}
          className="mask mask-star-2 bg-orange-400"
          checked={rating === star}
          readOnly
        />
      ))}
    </div>
  );
}
