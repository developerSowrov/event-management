import React from "react";
import meet from "../../assets/meet.jpg";
import { FaCircleDot } from "react-icons/fa6";

const Meet = () => {
  return (
    <div className="container -mt-5  mb-20 mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="relative">
        <img src={meet} alt="Counseling" className="rounded-lg shadow-lg" />
        <div className="absolute -bottom-12 -right-8 bg-black text-white p-4 rounded-lg shadow-lg">
          <h4 className="text-lg font-semibold">Get in touch</h4>
          <p className="mt-2 text-sm">
            <span className="block">Client Support:</span>
            <span className="font-bold">(888) 4000-2345</span>
          </p>
          <p className="mt-2 text-sm">
            <span className="block">Email Support:</span>
            <span className="font-bold">path@finder.org</span>
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl lg:text-3xl font-bold leading-tight text-gray-800">
          Embrace your best self and elevate your life with Sowrov.
        </h2>
        <p className="text-gray-600">
          Discover personalized coaching, expert guidance, and transformative
          support to unlock your potential and achieve a fulfilling, elevated
          life with Sowrov.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <span className="text-yellow-500">
                <FaCircleDot></FaCircleDot>
              </span>
              <span>Expert Coaches</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-yellow-500">
                <FaCircleDot></FaCircleDot>
              </span>{" "}
              <span>Personalized Coaching Plans</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-yellow-500">
                <FaCircleDot></FaCircleDot>
              </span>{" "}
              <span>Holistic Approach to Growth</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-yellow-500">
                <FaCircleDot></FaCircleDot>
              </span>{" "}
              <span>Proven Track Record</span>
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <span className="text-yellow-500">
                <FaCircleDot></FaCircleDot>
              </span>{" "}
              <span>Flexible & Convenient</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-yellow-500">
                <FaCircleDot></FaCircleDot>
              </span>{" "}
              <span>Supportive & Encouraging</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-yellow-500">
                <FaCircleDot></FaCircleDot>
              </span>{" "}
              <span>Continuous Accountability</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-yellow-500">
                <FaCircleDot></FaCircleDot>
              </span>{" "}
              <span>Comprehensive Resources</span>
            </li>
          </ul>
        </div>
        <button className="px-6 py-3 bg-yellow-400 btn-grad text-white font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default Meet;
