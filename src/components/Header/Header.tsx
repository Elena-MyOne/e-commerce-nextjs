import { redirect } from "next/navigation";
import Link from "next/link";
import { getCart } from "@/lib/db/cart";
import ShoppingCartButton from "./ShoppingCartButton/ShoppingCartButton";
import UserMenuButton from "./UserMenuButton/UserMenuButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SearchProductsSubmitButton from "./searchProductsSubmitButton/searchProductsSubmitButton";
import { RiSearchLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

async function searchProducts(formData: FormData) {
  "use server";
  const searchQuery = formData.get("searchQuery")?.toString();
  if (searchQuery) {
    redirect("/category?query=" + searchQuery);
  } else {
    redirect("/category");
  }
}

export default async function Header() {
  const cart = await getCart();
  const session = await getServerSession(authOptions);

  return (
    <>
      <header className="navbar m-auto flex-col gap-4 border-b border-gray-200 p-0 py-2 md:container lg:flex-row">
        <div className="flex flex-1 items-end gap-20 self-start lg:items-center lg:justify-between">
          <button className="block px-1 text-2xl lg:hidden">
            <RxHamburgerMenu />
          </button>
          <Link
            href="/"
            className="font-custom text-lg duration-300 hover:text-secondary sm:text-2xl"
          >
            Shop.co
          </Link>
          <nav className="hidden lg:block">
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
          </nav>
        </div>
        <div className="flex-none gap-3 px-1 sm:gap-6 sm:px-0">
          <form action={searchProducts} className="relative">
            <div className="form-control">
              <input
                name="searchQuery"
                placeholder="Search for products..."
                className="input input-bordered w-full min-w-[100px] rounded-full pl-10"
              />
            </div>
            <SearchProductsSubmitButton>
              <RiSearchLine />
            </SearchProductsSubmitButton>
          </form>
          <ShoppingCartButton cart={cart} />
          <UserMenuButton session={session} />
        </div>
      </header>
    </>
  );
}
