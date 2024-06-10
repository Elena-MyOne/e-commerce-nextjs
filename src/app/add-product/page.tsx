import { prisma } from "@/lib/db/prisma";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Add product",
};

const getAvailableSizes = () => {
  const allSizes = ['X-Small', "Small", "Medium", "Large", "X-Large", "XX-Large", "XXX-Large"];
  return allSizes.filter(() => Math.random() > 0.25);
};

const addProduct = async (formData: FormData) => {
  "use server";

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);
  const rating = Number(formData.get("rating") || 0);
  const size = getAvailableSizes();

  if (!name || !description || !imageUrl || !price || !rating || size.length === 0) {
    throw Error("Missing required fields. All fields should be fill up.")
  }

  await prisma.product.create({
    data: {
      name,
      description,
      imageUrl,
      price,
      rating,
      size,
    },
  });

  redirect('/');
};

const inputStyles = "input-bordered input  mb-3 w-full";

const AddProductPage = () => {
  return (
    <>
      <section className="flex gap-4 flex-col items-center justify-center">
        <h1 className="text-2xl mb-3 font-bold font-custom text-center">
          Add product
        </h1>
        <form className="w-96" action={addProduct}>
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
            className="input-bordered input mb-3 w-full h-20"
          />
          <input
            required
            name="imageUrl"
            type="url"
            placeholder="Image URL"
            className={inputStyles}
          />
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
          <div className="w-full flex justify-center">
            <button type="submit" className="btn btn-primary">
              Add Product
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddProductPage;
