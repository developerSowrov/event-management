import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`${import.meta.env.VITE_BASE_URL}/my-products/${user.email}`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    const ToastContent = ({ closeToast }) => (
      <div>
        <p>Are you sure you want to delete this product?</p>
        <div className="mt-2 flex justify-end gap-2">
          <button
            onClick={async () => {
              closeToast();
              try {
                const res = await fetch(
                  `${import.meta.env.VITE_BASE_URL}/product/${id}`,
                  { method: "DELETE" }
                );

                const result = await res.json();

                if (res.ok) {
                  toast.success("Product deleted successfully!");
                  setProducts((prev) => prev.filter((item) => item._id !== id));
                } else {
                  toast.error(result.message || "Failed to delete product.");
                }
              } catch (error) {
                console.error("Delete Error:", error);
                toast.error("Something went wrong.");
              }
            }}
            className="btn bg-red-500 text-white"
          >
            Yes
          </button>
          <button onClick={closeToast} className="btn bg-white">
            No
          </button>
        </div>
      </div>
    );

    toast.info(<ToastContent />, {
      autoClose: false,
      closeOnClick: false,
      closeButton: false,
      draggable: false,
    });
  };

  return (
    <div className="grid max-w-11/12 mx-auto my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.length === 0 ? (
        <p className="text-center col-span-full text-gray-500">No products found.</p>
      ) : (
        products.map((product) => (
          <div
            key={product._id}
            className="max-w-sm mx-auto bg-white border border-yellow-400 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-1">{product.name}</h2>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-semibold">Price:</span> ${product.price}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-semibold">Quantity:</span> {product.quantity}
              </p>
              <p className="text-sm text-gray-700 mb-2 line-clamp-2">{product.description}</p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <Link
                  to={`/product-update/${product._id}`}
                  className=" col-span-1 btn bg-blue-500 text-white font-bold rounded"
                >
                  Update
                </Link>
                <button
                  onClick={() => handleDelete(product._id)}
                  className=" col-span-1 btn bg-red-500 text-white font-bold rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyProducts;
