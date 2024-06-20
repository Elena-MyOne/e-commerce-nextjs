import FormSubmitButton from "@/components/UI/buttons/FormSubmitButton";
import { prisma } from "@/lib/db/prisma";
import { getAvailableColors } from "@/lib/functions/getAvailableColors";
import { getAvailableSizes } from "@/lib/functions/getAvailableSizes";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Add product",
};

const addProduct = async (formData: FormData) => {
  "use server";

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);
  const rating = Number(formData.get("rating") || 0);
  const size = getAvailableSizes();
  const colors = getAvailableColors();
  const category = formData.get("category")?.toString();
  const targetAudience = formData.get("targetAudience")?.toString();
  const sale = Number(formData.get("sale") || 0);

  if (
    !name ||
    !description ||
    !imageUrl ||
    !price ||
    !rating ||
    size.length === 0 ||
    colors.length === 0 ||
    !category ||
    !targetAudience
  ) {
    throw Error("Missing required fields. All fields should be fill up.");
  }

  await prisma.product.create({
    data: {
      name,
      description,
      imageUrl,
      price,
      rating,
      size,
      colors,
      category,
      targetAudience,
      sale,
    },
  });

  redirect("/category");
};

const inputStyles = "input-bordered input  mb-3 w-full";

export default function AddProductPage() {
  return (
    <section className="flex h-full flex-col items-center justify-center gap-4">
      <div className="rounded-md border-[1px] border-gray-400 bg-base-100 p-4">
        <h1 className="mb-3 text-center font-custom text-2xl font-bold">
          Add product
        </h1>
        <form className="sm:w-96" action={addProduct}>
          <input
            required
            name="name"
            type="text"
            placeholder="Product name"
            className={inputStyles}
          />
          <textarea
            required
            name="description"
            placeholder="Description"
            className="input input-bordered mb-3 h-20 w-full"
          />
          <input
            required
            name="imageUrl"
            type="url"
            placeholder="Image URL"
            className={inputStyles}
          />
          <select
            className="select select-bordered mb-3 w-full"
            defaultValue={"DEFAULT"}
            name="category"
            required
          >
            <option disabled value="DEFAULT">
              Category
            </option>
            <option>T-shirt</option>
            <option>Shorts</option>
            <option>Jeans</option>
            <option>Shirts</option>
            <option>Hoodie</option>
          </select>
          <select
            className="select select-bordered mb-3 w-full"
            defaultValue={"DEFAULT"}
            name="targetAudience"
            required
          >
            <option disabled value="DEFAULT">
              Target audience
            </option>
            <option>Men</option>
            <option>Women</option>
            <option>Girls</option>
            <option>Boys</option>
            <option>Unisex</option>
          </select>
          <input
            required
            name="price"
            type="number"
            placeholder="Price"
            className={inputStyles}
          />
          <input
            required
            name="rating"
            type="number"
            placeholder="Rating"
            className={inputStyles}
            min={0}
            max={5}
          />
          <input
            name="sale"
            type="number"
            placeholder="Sale"
            className={inputStyles}
            min={0}
            max={80}
          />
          <div className="flex w-full justify-center">
            <FormSubmitButton>Add Product</FormSubmitButton>
          </div>
        </form>
      </div>
    </section>
  );
}
