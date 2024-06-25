import Pagination from "@/components/Pagination/Pagination";
import ProductCard from "@/components/productCard/ProductCard";
import { prisma } from "@/lib/db/prisma";

interface CategoryProps {
  searchParams: { page: string };
}

export default async function Category({
  searchParams: { page = "1" },
}: CategoryProps) {
  const currentPage = parseInt(page);
  const productCardsPerPage = 9;

  const totalItemCount = await prisma.product.count();

  const totalPages = Math.ceil(totalItemCount / productCardsPerPage);

  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
    skip: (currentPage - 1) * productCardsPerPage,
    take: productCardsPerPage,
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
        {totalPages > 1 && (
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        )}
      </div>
    </>
  );
}
