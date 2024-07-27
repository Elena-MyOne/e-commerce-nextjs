import Filters from "@/components/Filters/Filters";
import Pagination from "@/components/Pagination/Pagination";
import ProductCard from "@/components/productCard/ProductCard";
import { prisma } from "@/lib/db/prisma";
import { Metadata } from "next";

interface CategoryProps {
  searchParams: { page: string; query?: string; audience?: string };
}

export const metadata: Metadata = {
  title: "Shop",
};

export default async function Category({
  searchParams: { page = "1", query = "new", audience = "" },
}: CategoryProps) {
  const currentPage = parseInt(page);
  const productCardsPerPage = 9;
  const targetAudiences = audience === "kids" ? ["boys", "girls"] : [audience];

  const createFilter = (query: string, targetAudiences: string[]) => {
    const filterConditions = [];

    if (query && query !== "new" && query !== "sale") {
      filterConditions.push({
        OR: [
          { name: { contains: query, mode: "insensitive" as const } },
          { category: { contains: query, mode: "insensitive" as const } },
        ],
      });
    }

    if (targetAudiences.length > 0 && targetAudiences[0]) {
      filterConditions.push({
        OR: targetAudiences.map((aud) => ({
          targetAudience: { equals: aud, mode: "insensitive" as const },
        })),
      });
    }
    return filterConditions.length > 0 ? { AND: filterConditions } : {};
  };

  const createOrderBy = (query: string) => {
    if (query === "new") {
      return { id: "desc" as const };
    } else if (query === "sale") {
      return { sale: "desc" as const };
    }
    return undefined;
  };

  const filter = createFilter(query, targetAudiences);
  const orderBy = createOrderBy(query);

  const totalItemCount = await prisma.product.count({ where: filter });

  const totalPages = Math.ceil(totalItemCount / productCardsPerPage);

  const products = await prisma.product.findMany({
    where: filter,
    orderBy: orderBy ? [orderBy] : undefined,
    skip: (currentPage - 1) * productCardsPerPage,
    take: productCardsPerPage,
  });

  return (
    <>
      <section className="my-5 w-full sm:my-10">
        <h1 className="mb-4 font-custom text-2xl font-bold">
          {query === "new" && "New Arrivals"}
          {query === "sale" && "Top Discounts"}
          {query !== "sale" && query !== "new" && `${query} clothes`}
          {audience && `${audience} clothes`}
        </h1>
        <div className="flex gap-4">
          <Filters />
          <div className="flex flex-wrap gap-4">
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
      <div className="flex w-full justify-center py-5 sm:py-10">
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            query={query}
            audience={audience}
          />
        )}
      </div>
    </>
  );
}
