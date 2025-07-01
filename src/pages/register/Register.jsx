import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import { IoMdEyeOff } from "react-icons/io";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registration = () => {
  const [showPass, setShowPass] = useState(true);
  const navigate = useNavigate();
  const { setUser, setLoading } = useContext(AuthContext);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photoURL = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    const formData = { name, email, password, photoURL };

    try {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setUser(formData);
        localStorage.setItem("user", JSON.stringify(formData));
        toast.success("✅ " + data.message);
        navigate("/");
      } else {
        toast.error("❌ " + data.message);
      }
    } catch (err) {
      console.error("Registration error:", err);
      toast.error("❌ Something went wrong. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center my-16 px-4">
      <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-2xl p-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-6">
          Create an account
        </h2>

        <hr className="border border-gray-600 mb-6" />

        <form onSubmit={handleSignUp} className="space-y-5">
          <div>
            <label className="block text-white font-medium mb-1">
              Your Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-1">
              Photo URL
            </label>
            <input
              name="photo"
              type="url"
              placeholder="Enter photo URL"
              className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-1">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          <div className="relative">
            <label className="block text-white font-medium mb-1">
              Password
            </label>
            <input
              name="password"
              type={showPass ? "password" : "text"}
              placeholder="Enter your password"
              className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <div
              className="absolute top-[40px] right-4 text-xl text-gray-600 cursor-pointer"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <FaEye /> : <IoMdEyeOff />}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="checkbox checkbox-warning"
              required
            />
            <p className="text-white font-medium text-sm">
              Accept Terms and Conditions
            </p>
          </div>

          <button type="submit" className="btn btn-grad w-full rounded-sm">
            Register
          </button>
        </form>

        <p className="text-white text-center mt-6 text-sm sm:text-base">
          Already Have An Account?
          <Link to="/login" className="text-yellow-400 font-bold ml-1">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
