import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaGoogle } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(true);
  const emailRef = useRef();
  const { setUser } = useContext(AuthContext);
  const loginHandler = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    const formData = { email, password };
    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("user", JSON.stringify(data.user));
        alert("✅ " + data.message);
        setUser(data.user);

        // 🟢 Redirect
        navigate("/");
      } else {
        alert("❌ " + data.message);
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("❌ Something went wrong. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Login Your Account
        </h2>
        <hr className="border-gray-500 mb-6" />
        <form onSubmit={loginHandler} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-white font-semibold mb-1">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ref={emailRef}
              required
            />
          </div>
          {/* Password */}
          <div className="relative">
            <label className="block text-white font-semibold mb-1">
              Password
            </label>
            <input
              name="password"
              type={showPass ? "password" : "text"}
              placeholder="Password"
              className="w-full px-4 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <div
              className="absolute top-[40px] right-4 text-xl text-gray-600 cursor-pointer"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <FaEye /> : <IoMdEyeOff />}
            </div>
          </div>
          {/* Forgot password */}
          <div className="text-right -mt-4">
            <Link
              to="/forget"
              className="text-sm text-gray-400  hover:text-yellow-400 font-medium"
            >
              Forgot password?
            </Link>
          </div>
          {/* Submit Button */}
          <button className="btn btn-grad w-full rounded-sm">Login</button>
        </form>

        {/* Register Link */}
        <p className="text-white text-center mt-6">
          Don’t Have An Account?
          <Link
            to="/register"
            state={location.state}
            className="text-yellow-400 font-bold ml-1"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
