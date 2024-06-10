import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add product",
};

const inputStyles = "input-bordered input  mb-3 w-full";

const AddProduct = () => {
  return (
    <>
      <section className="flex gap-4 flex-col items-center justify-center">
        <h1 className="text-2xl mb-3 font-bold font-custom text-center">
          Add product
        </h1>
        <form className="w-96">
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
            className="input-bordered input input-md mb-3 w-full h-20"
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
          <select className="select select-bordered w-full mb-6" required>
            <option disabled selected>
              Size
            </option>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
            <option>X-Large</option>
          </select>
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

export default AddProduct;
