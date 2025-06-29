import React, { useContext, useRef, useState } from "react";
// import Header from "../header/Header";
// import Footer from "../footer/Footer";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../Authprovider/AuthProvider";
import { FaEye, FaGoogle } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
// import { toast } from "react-toastify";
// import { Helmet } from "react-helmet-async";

const Login = () => {
  //   const { google, login, setUser, setEmail } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(true);
  const emailRef = useRef();

  const loginHandler = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const pass = form.get("password");
    //     login(email, pass)
    //       .then((res) => {
    //         toast.success("Login Successful", {
    //           position: "top-right",
    //           autoClose: 3000,
    //           hideProgressBar: true,
    //           closeOnClick: true,
    //           pauseOnHover: true,
    //           draggable: true,
    //           progress: undefined,
    //           theme: "light",
    //         });
    //         setUser(res.user);
    //         navigate(location.state ? location.state : "/");
    //       })
    //       .catch((error) => {
    //         toast.error("Invalid Email & Password", {
    //           position: "top-right",
    //           autoClose: 3000,
    //           hideProgressBar: true,
    //           closeOnClick: true,
    //           pauseOnHover: true,
    //           draggable: true,
    //           progress: undefined,
    //           theme: "light",
    //         });
    //       });
    //   };

    //   const handleGoogle = () => {
    //     google()
    //       .then((res) => {
    //         toast.success("Google Sign In Success", {
    //           position: "top-right",
    //           autoClose: 3000,
    //           hideProgressBar: true,
    //           closeOnClick: true,
    //           pauseOnHover: true,
    //           draggable: true,
    //           progress: undefined,
    //           theme: "light",
    //         });
    //         navigate(location.state ? location.state : "/");
    //       })
    //       .catch((err) => {
    //         // Handle error if needed
    //       });
    //   };

    //   const forgetHandle = () => {
    //     const email = emailRef.current.value;
    //     setEmail(email && email);
  };

  return (
    <div>
      <div className="card bg-gray-800 p-5 rounded-xl mx-auto my-10 pt-14 w-11/12 md:w-8/12 lg:w-5/12 shrink-0 shadow-2xl">
        <p className="font-bold text-3xl sm:text-4xl text-center text-white">
          Login Your Account
        </p>
        <hr className="border border-gray-400 w-10/12 mx-auto mt-8" />
        <form onSubmit={loginHandler} className="card-body relative">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white font-bold text-lg">
                Email
              </span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered"
              ref={emailRef}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white font-bold text-lg">
                Password
              </span>
            </label>
            <input
              name="password"
              type={showPass ? "password" : "text"}
              placeholder="Password"
              className="input input-bordered"
              required
            />
          </div>
          <div>
            <Link to={"/forget"} className="text-gray-400 font-bold text-sm">
              Forgot password?
            </Link>
          </div>
          <div className="form-control mt-10">
            <button className="btn btn-grad">Login</button>
          </div>
          <div
            className="absolute bottom-[170px] right-12 text-2xl sm:text-3xl"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? <FaEye /> : <IoMdEyeOff />}
          </div>
        </form>

        <button
          //   onClick={handleGoogle}
          className="btn w-[87%] mb-3 mx-auto font-bold text-lg sm:text-xl"
        >
          <FaGoogle /> Google
        </button>
        <p className="text-white font-semibold text-center pb-5">
          Don’t Have An Account??
          <Link
            to={{
              pathname: "/register",
            }}
            state={location.state}
            className="text-yellow-400 font-bold"
            replace
          >
            {" "}
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
