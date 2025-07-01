import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <div>
      <div className="w-full bg-[#0b1629] text-white fixed z-10">
        <div className="max-w-[1150px] mx-auto">
          <Navbar></Navbar>
        </div>
      </div>
      <Outlet></Outlet>
      <div className="w-full bg-[#0b1629] text-white ">
        <div className="max-w-[1150px] mx-auto">
          <Footer></Footer>{" "}
        </div>
      </div>
    </div>
  );
};

export default Layout;
