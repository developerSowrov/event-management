import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RecentProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/products`)
      .then((res) => res.json())
      .then((results) => {
        setProducts(results);
      })
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  const displayedProducts = products.slice(0, 6);

  return (
    <div className="pb-10 bg-gray-100 pt-10 rounded-2xl">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div>
          <p className="text-5xl font-bold text-center">Featured Grocery Items</p>
          <p className="text-lg text-center text-gray-600 mt-3 mb-10 w-10/12 mx-auto">
            Discover our freshest arrivals and best deals on daily essentials.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="shadow-xl transition-transform transform hover:scale-105"
            >
              <div className="max-w-sm mx-auto bg-white text-gray-800 rounded-xl border-2 border-yellow-400 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-52 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-1">{product.name}</h2>
                  <p className="text-lg font-semibold text-green-600 mb-2">
                    ${product.price.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    Category:{" "}
                    <span className="font-medium">{product.category}</span>
                  </p>
                  <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                    {product.description}
                  </p>
                  <Link to={`/product/${product._id}`}>
  <button className="w-full btn bg-yellow-400 text-white font-bold rounded-lg text-center hover:bg-yellow-500">
    View Details
  </button>
</Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        {products.length > 6 && (
          <div className="mt-10 text-center">
            <button
              onClick={() => navigate("/products")}
              className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-300"
            >
              See More Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentProducts;
