import React from "react";

const filteredEvents = [
  {
    id: "101",
    name: "Fresh Tomatoes",
    price: 2.5,
    description: "Juicy, ripe tomatoes straight from local farms.",
    category: "Vegetables",
    img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "102",
    name: "Organic Milk",
    price: 1.8,
    description: "Full cream organic milk from trusted farms.",
    category: "Dairy",
    img: "https://images.unsplash.com/photo-1587049352833-cd46fc684d6f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "103",
    name: "Basmati Rice 5kg",
    price: 12.0,
    description: "Premium quality long grain basmati rice.",
    category: "Grains",
    img: "https://images.unsplash.com/photo-1582464667577-9e6f6f4f28b0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "104",
    name: "Brown Eggs - 12 Pack",
    price: 2.9,
    description: "Farm fresh brown eggs packed with protein.",
    category: "Dairy & Eggs",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "105",
    name: "Sunflower Oil 1L",
    price: 3.5,
    description: "Healthy and light cooking oil for everyday use.",
    category: "Cooking Essentials",
    img: "https://images.unsplash.com/photo-1563306406-c08d77f45f3e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "106",
    name: "Red Onions 1kg",
    price: 1.1,
    description: "Fresh red onions with strong flavor and aroma.",
    category: "Vegetables",
    img: "https://images.unsplash.com/photo-1606312616404-e90c67a4a3ee?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "107",
    name: "Cucumbers 1kg",
    price: 1.2,
    description: "Cool and crunchy cucumbers, perfect for salads.",
    category: "Vegetables",
    img: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "108",
    name: "Potatoes 2kg",
    price: 1.6,
    description: "Versatile and fresh potatoes for all your meals.",
    category: "Vegetables",
    img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "109",
    name: "Green Chili 250g",
    price: 0.8,
    description: "Spicy and fresh green chilies to spice up your dishes.",
    category: "Vegetables",
    img: "https://images.unsplash.com/photo-1590080877777-8ecb43a3e498?auto=format&fit=crop&w=600&q=80"
  }
];

const RecentProducts = () => {
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
          {filteredEvents.map((product) => (
            <div
              key={product.id}
              className="shadow-xl transition-transform transform hover:scale-105"
            >
              <div className="max-w-sm mx-auto bg-white text-gray-800 rounded-xl border-2 border-yellow-400 overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-52 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-1">{product.name}</h2>
                  <p className="text-lg font-semibold text-green-600 mb-2">
                    ${product.price.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    Category: <span className="font-medium">{product.category}</span>
                  </p>
                  <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                    {product.description}
                  </p>
                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentProducts;
