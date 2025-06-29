import React, { useContext, useState } from "react";
// import { FaGoogle } from "react-icons/fa";
// import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../Authprovider/AuthProvider";
// import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa6";
import { IoMdEyeOff } from "react-icons/io";

const Registration = () => {
  //   const { creatUser, google, setUser, updateUser } = useContext(AuthContext);
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
    // const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    // if (!passwordRegex.test(password)) {
    //   toast.error(
    //     " Must include an uppercase letter, a lowercase letter, and be at least 6 characters long",
    //     {
    //       position: "top-right",
    //       autoClose: 3000,
    //       hideProgressBar: true,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "light",
    //     }
    //   );
    //   return;
    // }
    // creatUser(email, password)
    //   .then((res) => {
    //     toast.success("Registration Successfull", {
    //       position: "top-right",
    //       autoClose: 3000,
    //       hideProgressBar: true,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "light",
    //     });
    //     setUser(res.user);
    //     updateUser(name, photo)
    //       .then((res) => {
    //         navigate(location.state ? location.state : "/");
    //       })
    //       .catch((error) => {});
    //   })
    //   .catch((err) => {
    //     toast.error(`${err.code}`, {
    //       position: "top-right",
    //       autoClose: 3000,
    //       hideProgressBar: true,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //       progress: undefined,
    //       theme: "light",
    //     });
    //   });
  };

  //   const googleHandler = () => {
  //     google()
  //       .then((res) => {
  //         toast.success("Google Sing In Success", {
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
  //         toast.error("Registration Failed", {
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

  return (
    <div className="min-h-screen flex items-center justify-center my-16 px-4">
      <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-2xl p-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-6">
          Create an account
        </h2>

        <hr className="border border-gray-600 mb-6" />

        <form onSubmit={handleSignUp} className="space-y-5">
          {/* Name */}
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

          {/* Photo URL */}
          <div>
            <label className="block text-white font-medium mb-1">
              Photo URL
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Enter photo URL"
              className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>

          {/* Email */}
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

          {/* Password */}
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

          {/* Terms & Conditions */}
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 rounded-md transition duration-300"
          >
            Register
          </button>
        </form>

        {/* Already have account */}
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
