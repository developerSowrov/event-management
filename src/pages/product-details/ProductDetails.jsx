import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const ProductDetails = () => {
    const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Failed to fetch product:", err));
  }, [id]);

  const handleAddToCart = () => {
  if (!user) {
    return alert("Please log in to add items to cart.");
  }

  fetch(`${import.meta.env.VITE_BASE_URL}/cart`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      product: product,
      email: user.email,
    }),
  })
    .then((res) => res.json())
    .then((data) => alert(data.message || "Added to cart"))
    .catch(() => alert("Failed to add to cart"));
};

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto my-10 p-6 bg-white rounded shadow border">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image on Left */}
        <div className="w-full lg:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded"
          />
        </div>

        {/* Details on Right */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
          <p className="text-yellow-600 font-bold text-2xl mb-3">
            ${product.price}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Seller:</span> {product.seller}
          </p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-sm text-gray-600 mb-6">
            Available Quantity: {product.quantity}
          </p>
          <button
  onClick={handleAddToCart}
  className="btn bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-2 rounded flex items-center gap-2"
>
  <FaCartPlus />
  Add to Cart
</button>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
