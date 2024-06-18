import HeroComponent from "@/components/HeroComponent/HeroComponent";
import ProductsRow from "@/components/ProductsRow/ProductsRow";
import ViewAllButton from "@/components/UI/buttons/ViewAllButton";
import { prisma } from "@/lib/db/prisma";

export default async function Home() {
  const [newProducts, salesProducts] = await prisma.$transaction([
    prisma.product.findMany({
      orderBy: { id: "desc" },
    }),

    prisma.product.findMany({
      orderBy: { sale: "desc" },
    }),
  ]);

  return (
    <>
      <HeroComponent />
      <div className="divide-y">
        <div>
          <ProductsRow title="New Arrivals" products={newProducts} />
          <ViewAllButton />
        </div>
        <div>
          <ProductsRow title="Top Discounts" products={salesProducts} />
          <ViewAllButton />
        </div>
      </div>
    </>
  );
}
