import React from "react";
import meet from "../../assets/meet.jpg";
import { FaCircleDot } from "react-icons/fa6";

const Meet = () => {
  return (
    <div className="container -mt-5 mb-20 mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="relative">
        <img
          src={meet}
          alt="Event Management"
          className="rounded-lg shadow-lg"
        />
        <div className="absolute -bottom-12 -right-8 bg-black text-white p-4 rounded-lg shadow-lg">
          <h4 className="text-lg font-semibold">Get in Touch</h4>
          <p className="mt-2 text-sm">
            <span className="block">Customer Support:</span>
            <span className="font-bold">(888) 1234-5678</span>
          </p>
          <p className="mt-2 text-sm">
            <span className="block">Email Support:</span>
            <span className="font-bold">support@eventora.com</span>
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl lg:text-3xl font-bold leading-tight text-gray-800">
          Make Your Events Unforgettable with Gatherly
        </h2>
        <p className="text-gray-600">
          From corporate conferences to personal celebrations — we provide
          end-to-end event management solutions tailored to your needs. Let us
          turn your vision into reality with creativity, precision, and passion.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <span className="text-yellow-500">
                <FaCircleDot />
              </span>
              <span>Experienced Planners</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-yellow-500">
                <FaCircleDot />
              </span>
              <span>Customized Event Solutions</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-yellow-500">
                <FaCircleDot />
              </span>
              <span>Creative Theme Designs</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-yellow-500">
                <FaCircleDot />
              </span>
              <span>Reliable Vendor Network</span>
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <span className="text-yellow-500">
                <FaCircleDot />
              </span>
              <span>On-time Execution</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-yellow-500">
                <FaCircleDot />
              </span>
              <span>Client-Centered Service</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-yellow-500">
                <FaCircleDot />
              </span>
              <span>Budget-Friendly Packages</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-yellow-500">
                <FaCircleDot />
              </span>
              <span>24/7 Event Support</span>
            </li>
          </ul>
        </div>
        <button className="px-6 py-3 bg-yellow-400 btn-grad text-white font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300">
          Plan Your Event
        </button>
      </div>
    </div>
  );
};

export default Meet;
