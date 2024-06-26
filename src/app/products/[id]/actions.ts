"use server";

import { createCart, getCart } from "@/lib/db/cart";
import { prisma } from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";

export async function incrementProductQuantity(
  productId: string,
  color: string,
  size: string,
) {
  const cart = (await getCart()) ?? (await createCart());

  const articleInCart = await prisma.cartItem.findFirst({
    where: {
      cartId: cart.id,
      productId: productId,
      color: color,
      size: size,
    },
  });

  if (articleInCart) {
    await prisma.cart.update({
      where: { id: cart.id },
      data: {
        items: {
          update: {
            where: { id: articleInCart.id },
            data: { quantity: { increment: 1 } },
          },
        },
      },
    });
  } else {
    await prisma.cart.update({
      where: { id: cart.id },
      data: {
        items: {
          create: {
            productId,
            quantity: 1,
            size,
            color,
          },
        },
      },
    });
  }

  revalidatePath("/cart");
}
