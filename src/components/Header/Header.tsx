import { redirect } from "next/navigation";
import Link from "next/link";
import { getCart } from "@/lib/db/cart";
import ShoppingCartButton from "./ShoppingCartButton/ShoppingCartButton";

async function searchProducts(formData: FormData) {
  "use server";
  const searchQuery = formData.get("searchQuery")?.toString();
  if (searchQuery) {
    redirect("/search?query=" + searchQuery);
  }
}

export default async function Header() {
  const cart = await getCart();

  return (
    <>
      <header className="navbar m-auto flex-col gap-2 border-b border-gray-200 p-0 py-2 md:container sm:flex-row">
        <div className="flex flex-1 items-center gap-10">
          <Link
            href="/"
            className="font-custom text-lg duration-300 hover:text-secondary sm:text-2xl"
          >
            Shop.co
          </Link>
        </div>
        <div className="flex-none gap-2 sm:gap-5">
          {/* <nav>
            <ul className="flex gap-6">
              <li>
                <Link href="/category">Shop</Link>
              </li>
              <li>
                <Link href="/category">On Sale</Link>
              </li>
              <li>
                <Link href="/category">New Arrivals</Link>
              </li>
            </ul>
          </nav> */}
          <form action={searchProducts}>
            <div className="form-control">
              <input
                name="searchQuery"
                placeholder="Search for products..."
                className="input input-bordered w-full min-w-[100px] rounded-full"
              />
            </div>
          </form>
          <ShoppingCartButton cart={cart} />
        </div>
        {/*
        <div className="">avatar icon</div> */}
      </header>
    </>
  );
}
