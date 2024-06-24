import { Product } from "@prisma/client";
import ProductCard from "../productCard/ProductCard";

interface ProductsRowProps {
  title: string;
  products: Product[];
}

export default async function ProductsRow({
  title,
  products,
}: ProductsRowProps) {
  const productsToShow = products.length > 3 ? products.slice(0, 4) : products;

  return (
    <div className="py-5 lg:py-10">
      <h2 className="mb-4 text-center font-custom text-2xl font-bold lg:mb-8 lg:text-3xl">
        {title}
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {productsToShow.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
