import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { logOut, user, setUser } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
    setUser(null);
  };
    const [cartItems, setCartItems] = useState([]);
  
    useEffect(() => {
      if (!user) return;
      fetch(`${import.meta.env.VITE_BASE_URL}/cart/${user.email}`)
        .then((res) => res.json())
        .then((data) => setCartItems(data))
        .catch((err) => console.error("Failed to fetch cart items", err));
    }, [user]);
    const cartLength = cartItems.length
  return (
    <div className="pb-3">
      <div className="p-0">
        <div className="navbar py-3 items-center">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 text-yellow-600 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <NavLink to={"/"} className={"p-2 rounded-lg "}>
                  Home
                </NavLink>

                {user && (
                  <div className="flex flex-col">
                    <NavLink to={"/events"} className={"p-2 rounded-lg "}>
                      Products
                    </NavLink>
                    <NavLink to={"/add-event"} className={"p-2 rounded-lg "}>
                      Add Product{" "}
                    </NavLink>

                    <NavLink to={"/my-events"} className={"p-2 rounded-lg "}>
                      My Products
                    </NavLink>
                  </div>
                )}
              </ul>
            </div>
            <a className="font-bold text-xl md:text-4xl">
              <i className="t ">Gatherly</i>
            </a>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 flex items-center ">
              <NavLink
                to={"/"}
                className="rotate-90 px-4 py-2 font-bold tracking-wider"
              >
                HOME
              </NavLink>

              {user && (
                <div>
                  <NavLink
                    to={"/products"}
                    className="px-4 py-2 font-semibold text-lg"
                  >
                    Products
                  </NavLink>
                  <NavLink
                    to={"/add-product"}
                    className="px-4 py-2 font-semibold text-lg"
                  >
                    Add Product
                  </NavLink>
                  <NavLink
                    to={"/my-products"}
                    className="px-4 py-2 font-semibold text-lg"
                  >
                    My Products
                  </NavLink>
                </div>
              )}
            </ul>
          </div>

          <div className="navbar-end">
            {user ? (
              <div className="flex gap-1 items-center">
                <NavLink to="/cart" className="text-yellow-500 text-2xl mr-6 relative">
                 
                 <p className="bg-red-500 rounded-full flex justify-center items-center text-center py-1 text-xs size-4 absolute left-4 bottom-3">{cartLength}</p> <FaShoppingCart/>
                </NavLink>
                <div className="tooltip tooltip-bottom" data-tip={user.name}>
                  <img
                    src={user.photoURL}
                    className="w-12 h-12 rounded-full border-yellow-400 border-2"
                    alt="User profile"
                  />
                </div>
                <button>
                  <Link
                    onClick={handleLogOut}
                    className="btn btn-grad pt-2 px-7 font-bold"
                  >
                    Log out
                  </Link>
                </button>
              </div>
            ) : (
              <Link to={"/login"} className="btn btn-grad font-bold pt-2 px-7">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
