import Pagination from "@/components/Pagination/Pagination";
import ProductCard from "@/components/productCard/ProductCard";
import { prisma } from "@/lib/db/prisma";
import { Metadata } from "next";

interface CategoryProps {
  searchParams: { page: string; query: string };
}

export const metadata: Metadata = {
  title: "Shop",
};

export default async function Category({
  searchParams: { page = "1", query = "" },
}: CategoryProps) {
  const currentPage = parseInt(page);
  const productCardsPerPage = 9;

  const totalItemCount = await prisma.product.count({
    where: {
      OR: [
        { name: { contains: query, mode: "insensitive" } },
        { category: { contains: query, mode: "insensitive" } },
      ],
    },
  });

  const totalPages = Math.ceil(totalItemCount / productCardsPerPage);

  const products = await prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: "insensitive" } },
        { category: { contains: query, mode: "insensitive" } },
      ],
    },
    orderBy: { id: "desc" },
    skip: (currentPage - 1) * productCardsPerPage,
    take: productCardsPerPage,
  });

  return (
    <>
      <section className="my-5 w-full sm:my-10">
        <h1 className="mb-4 font-custom text-2xl font-bold">
          {query ? "Searching results" : "New Arrivals"}
        </h1>
        <div className="flex flex-wrap gap-4">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>
      <div className="flex w-full justify-center py-5 sm:py-10">
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            query={query}
          />
        )}
      </div>
    </>
  );
}
