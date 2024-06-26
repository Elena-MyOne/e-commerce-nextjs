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
      await prisma.cart.update({
        where: { id: cart.id },
        data: {
          items: {
            delete: { id: articleInCart.id },
          },
        },
      });
    }
  } else {
    if (articleInCart) {
      await prisma.cart.update({
        where: { id: cart.id },
        data: {
          items: {
            update: {
              where: { id: articleInCart.id },
              data: { quantity },
            },
          },
        },
      });
    } else if (color && size) {
      await prisma.cart.update({
        where: { id: cart.id },
        data: {
          items: {
            create: {
              productId,
              quantity,
              size,
              color,
            },
          },
        },
      });
    }
  }

  revalidatePath("/cart");
}
