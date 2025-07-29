import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/products`)
      .then((res) => res.json())
      .then((results) => {
        setProducts(results);
      })
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  const filterByPrice = (product) => {
    const price = parseFloat(product.price);
    switch (priceFilter) {
      case "under50":
        return price < 50;
      case "50to100":
        return price >= 50 && price <= 100;
      case "above100":
        return price > 100;
      default:
        return true;
    }
  };

  const filteredProducts = products.filter((product) => {
    const nameMatch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return nameMatch && filterByPrice(product);
  });

  return (
    <div className="max-w-11/12 mx-auto my-10">
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <input
          type="text"
          placeholder="Search products by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-1/2"
        />
        <select
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-1/4"
        >
          <option value="all">All Prices</option>
          <option value="under50">Under $50</option>
          <option value="50to100">$50 - $100</option>
          <option value="above100">Above $100</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProducts.length === 0 ? (
          <p className="text-center col-span-full text-gray-500">
            No products found.
          </p>
        ) : (
          filteredProducts.map((product) => (
            <div
              key={product._id}
              className="shadow-xl transition-transform transform hover:scale-105"
            >
              <div className="max-w-sm mx-auto bg-white text-gray-800 rounded-lg shadow-lg border-2 border-yellow-400 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-1">{product.name}</h2>
                  <p className="text-sm text-gray-600 mb-2">
                    Seller:{" "}
                    <span className="font-semibold text-gray-800">
                      {product.seller}
                    </span>
                  </p>
                  <p className="text-lg text-yellow-500 font-bold mb-2">
                    ${product?.price?.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-700 mb-4 line-clamp-3">
  {product.description?.slice(0, 60)}...
</p>

                  <p className="text-sm text-gray-600 mb-2">
                    Available: {product.quantity}
                  </p>
<Link to={`/product/${product._id}`}>
  <button className="w-full btn bg-yellow-400 text-white font-bold rounded-lg text-center hover:bg-yellow-500">
    View Details
  </button>
</Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
