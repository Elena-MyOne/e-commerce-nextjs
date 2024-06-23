import { getCart } from "@/lib/db/cart";
import CartEntry from "./CartEntry/CartEntry";
import { setProductQuantity } from "../../components/UI/ProductQuantityBadge/actions";
import OrderSummary from "./OrderSummary/OrderSummary";

export const metadata = {
  title: "Your Cart",
};

export default async function CartPage() {
  const cart = await getCart();

  return (
    <section className="my-5 sm:my-10">
      <h1 className="mb-4 font-custom text-2xl font-bold">Your Cart</h1>
      <div className="flex flex-col justify-between gap-5 lg:flex-row">
        <div className="flex-1 divide-y rounded-xl border border-gray-200 px-4">
          {cart?.items.map((cartItem) => (
            <CartEntry
              cartItem={cartItem}
              key={cartItem.id}
              setProductQuantity={setProductQuantity}
            />
          ))}
          {!cart?.items.length && (
            <p className="my-10 text-center">Your cart is empty</p>
          )}
        </div>
        {!!cart?.items.length && (
          <OrderSummary
            subtotal={cart.subtotal}
            total={cart.total}
            discount={cart.discount}
          />
        )}
      </div>
    </section>
  );
}
