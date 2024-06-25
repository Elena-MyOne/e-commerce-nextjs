import Pagination from "@/components/Pagination/Pagination";
import ProductCard from "@/components/productCard/ProductCard";
import { prisma } from "@/lib/db/prisma";

export default async function Category() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });

  return (
    <>
      <section className="my-5 w-full sm:my-10">
        <h1 className="mb-4 font-custom text-2xl font-bold">New Arrivals</h1>
        <div className="flex flex-wrap gap-4">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>
      <div className="flex w-full justify-center py-5 sm:py-10">
        {/* <Pagination currentPage={2} totalPages={100} /> */}
      </div>
    </>
  );
}
