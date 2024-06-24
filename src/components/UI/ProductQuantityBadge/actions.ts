"use server";

import { createCart, getCart } from "@/lib/db/cart";
import { prisma } from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";

export async function setProductQuantity(
  productId: string,
  quantity: number,
  color?: string,
  size?: string,
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

  if (quantity === 0) {
    if (articleInCart) {
      await prisma.cartItem.delete({
        where: { id: articleInCart.id },
      });
    }
  } else {
    if (articleInCart) {
      await prisma.cartItem.update({
        where: { id: articleInCart.id },
        data: { quantity },
      });
    } else if (color && size) {
      await prisma.cartItem.create({
        data: {
          cartId: cart.id,
          productId,
          quantity,
          size,
          color,
        },
      });
    }
  }

  revalidatePath("/cart");
}
