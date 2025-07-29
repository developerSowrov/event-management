import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProducts = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const productData = {
      name: form.name.value,
      price: parseFloat(form.price.value),
      description: form.description.value,
      image: form.image.value,
      quantity: parseInt(form.quantity.value),
      seller: user?.name || "Unknown Seller",
      email: user.email,
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/add-product`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });

      if (res.ok) {
        toast.success("Product added successfully!");
        navigate("/products");
      } else {
        toast.error("Failed to add product");
      }
    } catch (err) {
      toast.error("Something went wrong!");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl bg-gray-900 rounded-2xl shadow-2xl p-10 border border-gray-700">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-8">
          Add New Product
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <label className="block text-white font-semibold mb-1">
              Product Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter product name"
              className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <div>
            <label className="block text-white font-semibold mb-1">
              Price ($)
            </label>
            <input
              name="price"
              type="number"
              step="0.01"
              placeholder="Enter price"
              className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <div>
            <label className="block text-white font-semibold mb-1">
              Seller
            </label>
            <input
              name="seller"
              type="text"
              value={user?.name}
              disabled
              className="w-full px-4 py-2 bg-white text-gray-600 border border-gray-300 rounded-md cursor-not-allowed"
              required
            />
          </div>

          <div>
            <label className="block text-white font-semibold mb-1">
              Quantity
            </label>
            <input
              name="quantity"
              type="number"
              min="0"
              placeholder="Enter available quantity"
              className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-white font-semibold mb-1">
              Image URL
            </label>
            <input
              name="image"
              type="url"
              placeholder="Enter product image URL"
              className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-white font-semibold mb-1">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Describe the product"
              rows="4"
              className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn md:col-span-2 btn-grad w-full rounded-sm"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
