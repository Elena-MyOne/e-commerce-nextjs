import { Product } from "@prisma/client";
import StarsRating from "../UI/startsRating/StartsRating";
import Link from "next/link";
import PriceTag from "../UI/PriceTag/PriceTag";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      className="card card-compact w-[268px] bg-base-100 shadow-sm transition-shadow hover:shadow-lg"
      href={`/products/${product.id}`}
    >
      <figure>
        <Image
          src={product.imageUrl}
          alt={`${product.category}: ${product.name}`}
          width={268}
          height={256}
          className="h-64 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <StarsRating rating={product.rating} />
        <PriceTag
          sale={product.sale}
          price={product.price}
          className="text-lg"
        />
      </div>
    </Link>
  );
}
