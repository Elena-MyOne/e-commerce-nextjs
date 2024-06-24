import { cookies } from "next/dist/client/components/headers";
import { prisma } from "./prisma";
import { Prisma } from "@prisma/client";

export type CartWithProducts = Prisma.CartGetPayload<{
  include: { items: { include: { product: true } } };
}>;

export type CartItemWithProduct = Prisma.CartItemGetPayload<{
  include: { product: true };
}>;

export type ShoppingCart = CartWithProducts & {
  size: number;
  subtotal: number;
  total: number;
  discount: number;
};

export async function getCart(): Promise<ShoppingCart | null> {
  const localCartId = cookies().get("localCartId")?.value;
  const cart = localCartId
    ? await prisma.cart.findUnique({
        where: { id: localCartId },
        include: { items: { include: { product: true } } },
      })
    : null;

  if (!cart) {
    return null;
  }

  const size = cart.items.reduce((acc, item) => acc + item.quantity, 0);

  const subtotal = cart.items.reduce(
    (acc, item) => acc + item.quantity * item.product.price,
    0,
  );

  const total = cart.items.reduce((acc, item) => {
    const price =
      item.product.sale > 0
        ? item.product.price - item.product.price * (item.product.sale / 100)
        : item.product.price;
    return acc + item.quantity * price;
  }, 0);

  const discount = subtotal - total;

  return {
    ...cart,
    size,
    subtotal,
    total,
    discount,
  };
}

export async function createCart(): Promise<ShoppingCart> {
  const newCart = await prisma.cart.create({
    data: {},
  });

  //TODO encryption + secure settings for production
  cookies().set("localCartId", newCart.id);

  return {
    ...newCart,
    items: [],
    size: 0,
    subtotal: 0,
    total: 0,
    discount: 0,
  };
}
