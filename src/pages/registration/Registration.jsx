import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Authprovider/AuthProvider";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa6";
import { IoMdEyeOff } from "react-icons/io";
import { Helmet } from "react-helmet-async";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Registration = () => {
  const { creatUser, google, setUser, updateUser } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        " Must include an uppercase letter, a lowercase letter, and be at least 6 characters long",
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
      return;
    }
    creatUser(email, password)
      .then((res) => {
        toast.success("Registration Successfull", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setUser(res.user);
        updateUser(name, photo)
          .then((res) => {
            navigate(location.state ? location.state : "/");
          })
          .catch((error) => {});
      })
      .catch((err) => {
        toast.error(`${err.code}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const googleHandler = () => {
    google()
      .then((res) => {
        toast.success("Google Sing In Success", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error("Registration Failed", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <div>
      <Helmet>
        <title>Pathfinder Pro. | Registretion </title>
      </Helmet>
      <Header />
      <div className="card bg-gray-800 p-5 rounded-xl mx-auto my-24 pt-14 w-11/12 sm:w-8/12 lg:w-7/12  shrink-0 shadow-2xl">
        <p className="font-bold text-3xl text-center text-white">
          Create an account
        </p>
        <hr className="border border-gray-400 w-10/12 mx-auto mt-8" />
        <form onSubmit={handleSignUp} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white font-bold text-lg">
                Your Name
              </span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white font-bold text-lg">
                Photo URL
              </span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Photo"
              className="input input-bordered"
              required
            />
          </div>
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
          <div className="flex gap-3 mt-2">
            <div className="form-control">
              <input type="checkbox" className="checkbox checkbox-warning" />
            </div>
            <p className="text-white font-semibold">
              Accept Terms And Conditions
            </p>
          </div>
          <div className="form-control mt-10">
            <button className="btn btn-grad">Register</button>
          </div>
          <div
            className="absolute bottom-[305px] right-16 text-2xl cursor-pointer"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? <FaEye /> : <IoMdEyeOff />}
          </div>
        </form>
        <button
          onClick={googleHandler}
          className="btn w-full sm:w-11/12 mb-3 mx-auto font-bold text-xl"
        >
          <FaGoogle /> Google
        </button>
        <p className="text-white font-semibold text-center pb-5">
          Already Have An Account??
          <Link to={"/login"} className="text-yellow-400 font-bold">
            {" "}
            Login
          </Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Registration;
