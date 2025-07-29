import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const CartPage = () => {
  const { user } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (!user) return;
    fetch(`${import.meta.env.VITE_BASE_URL}/cart/${user.email}`)
      .then((res) => res.json())
      .then((data) => setCartItems(data))
      .catch((err) => console.error("Failed to fetch cart items", err));
  }, [user]);

  if (!user) {
    return <p className="text-center mt-10">Please log in to view your cart.</p>;
  }

  return (
    <div className="max-w-6xl mx-auto my-10 p-6 bg-white rounded shadow border">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>No items in your cart.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cartItems.map((item) => (
            <div key={item._id} className="flex border rounded p-4 shadow-sm">
              {/* Image */}
              <img
                src={item.product?.image}
                alt={item.product?.name}
                className="w-28 h-28 object-cover rounded mr-4"
              />

              {/* Product Info */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{item.product?.name}</h3>
                <p className="text-gray-600 mb-1">Price: ${item.product?.price}</p>
                <p className="text-gray-600 mb-1">Quantity: {item.quantity}</p>
                <p className="text-sm text-gray-500">Seller: {item.product?.seller}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
