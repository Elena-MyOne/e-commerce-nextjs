import { Product } from "@prisma/client";
import Image from "next/image";
import StarsRating from "../UI/startsRating/StartsRating";
import PriceTag from "../UI/PriceTag/PriceTag";
import SizeBadges from "../UI/SizeBadges/SizeBadges";
import ColorBadges from "../UI/ColorBadges/ColorsBadges";

interface ProductDetailsCardProps {
  product: Product;
}

export default function ProductDetailsCard({
  product,
}: ProductDetailsCardProps) {
  return (
    <div className="m-auto flex max-w-[950px] flex-col items-start gap-4 rounded-xl py-5 lg:flex-row lg:gap-8 lg:py-10">
      <Image
        src={product.imageUrl}
        alt={`${product.category} for ${product.targetAudience}`}
        width={350}
        height={350}
        className="rounded-xl"
      />
      <div className="divide-y">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-extrabold">{product.name}</h1>
          <div>
            <StarsRating rating={product.rating} className="rating-sm" />
            <span className="ml-2">
              {product.rating}/<span className="text-gray-400">5</span>
            </span>
          </div>
          <PriceTag
            sale={product.sale}
            price={product.price}
            className="text-xl"
          />
          <div className="mb-3">{product.description}</div>
        </div>
        <ColorBadges colors={product.colors} />
        <SizeBadges sizes={product.size} />
      </div>
    </div>
  );
}
