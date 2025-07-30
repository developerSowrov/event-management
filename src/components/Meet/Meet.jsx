import React from "react";
import meet from "../../assets/meet.jpg"; // You can use a grocery-related image here
import { FaCircleDot } from "react-icons/fa6";

const Meet = () => {
  return (
    <div className="container -mt-5 mb-20 mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="relative">
        <img
          src={meet}
          alt="Grocery Delivery"
          className="rounded-lg shadow-lg"
        />
        <div className="absolute -bottom-12 -right-8 bg-black text-white p-4 rounded-lg shadow-lg">
          <h4 className="text-lg font-semibold">Need Help?</h4>
          <p className="mt-2 text-sm">
            <span className="block">Customer Service:</span>
            <span className="font-bold">(888) 4321-8765</span>
          </p>
          <p className="mt-2 text-sm">
            <span className="block">Email Us:</span>
            <span className="font-bold">support@grocerygenie.com</span>
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl lg:text-3xl font-bold leading-tight text-gray-800">
          Fresh Groceries at Your Fingertips with GroceryGenie
        </h2>
        <p className="text-gray-600">
          Enjoy a smooth, affordable, and fast grocery shopping experience from the comfort of your home. 
          From farm-fresh produce to household essentials — we’ve got everything you need, delivered with care.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <span className="text-yellow-500">
                <FaCircleDot />
              </span>
              <span>Fresh & Organic Products</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-yellow-500">
                <FaCircleDot />
              </span>
              <span>Fast Delivery Service</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-yellow-500">
                <FaCircleDot />
              </span>
              <span>Secure Online Payment</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-yellow-500">
                <FaCircleDot />
              </span>
              <span>Wide Product Range</span>
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <span className="text-yellow-500">
                <FaCircleDot />
              </span>
              <span>Daily Deals & Discounts</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-yellow-500">
                <FaCircleDot />
              </span>
              <span>Easy Return Policy</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-yellow-500">
                <FaCircleDot />
              </span>
              <span>Trusted Local Farmers</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-yellow-500">
                <FaCircleDot />
              </span>
              <span>24/7 Customer Support</span>
            </li>
          </ul>
        </div>
        <button className="px-6 py-3 bg-green-500 btn-grad text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 transition duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Meet;
