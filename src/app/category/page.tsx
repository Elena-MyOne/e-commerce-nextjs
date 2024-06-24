import ProductCard from "@/components/productCard/ProductCard";
import { prisma } from "@/lib/db/prisma";

export default async function Category() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });

  return (
    <section className="w-full">
      <h1 className="mb-4 font-custom text-2xl font-bold">New Arrivals</h1>
      <div className="flex flex-wrap gap-4">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
}
