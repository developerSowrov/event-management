import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedProduct = {
      name: form.name.value,
      price: parseFloat(form.price.value),
      quantity: parseInt(form.quantity.value),
      description: form.description.value,
      image: form.image.value,
      seller: form.seller.value,
      email: form.email.value,
    };

    fetch(`${import.meta.env.VITE_BASE_URL}/update-product/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Product updated successfully!");
        navigate("/my-products");
      })
      .catch(() => {
        toast.error("Failed to update product.");
      });
  };

  const { name, price, quantity, description, image, seller, email } = product;

  return (
    <div className="w-full max-w-4xl bg-gray-900 rounded-2xl shadow-2xl p-10 border border-gray-700 mx-auto my-10">
      <h2 className="text-4xl font-bold text-center text-yellow-400 mb-8">
        Update Product
      </h2>

      <form
        onSubmit={handleUpdate}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <label className="block text-white font-semibold mb-1">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            required
            className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-white font-semibold mb-1">Price</label>
          <input
            type="number"
            name="price"
            defaultValue={price}
            step="0.01"
            required
            className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-white font-semibold mb-1">Seller</label>
          <input
            type="text"
            name="seller"
            defaultValue={seller}
            readOnly
            className="w-full px-4 py-2 bg-white text-gray-600 border border-gray-300 rounded-md cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block text-white font-semibold mb-1">Quantity</label>
          <input
            type="number"
            name="quantity"
            defaultValue={quantity}
            required
            className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-md"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-white font-semibold mb-1">
            Image URL
          </label>
          <input
            type="url"
            name="image"
            defaultValue={image}
            required
            className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-md"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-white font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            readOnly
            className="w-full px-4 py-2 bg-white text-gray-600 border border-gray-300 rounded-md cursor-not-allowed"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-white font-semibold mb-1">
            Description
          </label>
          <textarea
            name="description"
            rows="4"
            defaultValue={description}
            required
            className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-md"
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn md:col-span-2 btn-grad w-full rounded-sm"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
