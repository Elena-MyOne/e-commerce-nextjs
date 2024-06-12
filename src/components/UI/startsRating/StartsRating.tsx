interface StarsRatingProps {
  rating: number;
}

export default function StarsRating({ rating }: StarsRatingProps) {
  return (
    <div className="rating rating-xs">
      {[1, 2, 3, 4, 5].map((star) => (
        <input
          key={star}
          type="radio"
          name="rating-5"
          className="mask mask-star-2 bg-orange-400"
          checked={rating >= star}
          readOnly
        />
      ))}
    </div>
  );
}
