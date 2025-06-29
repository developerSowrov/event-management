import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-white py-10 px-3">
      <a className=" font-bold text-4xl ">
        <i className="text-yellow-400">Gatherly</i>
      </a>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8  mt-10">
        {/* Office Addresses */}
        <div>
          <h4 className="font-bold text-xl mb-4">Burkina Faso Office</h4>
          <p>Immeuble Kayiri</p>
          <p>Boulevard Mouammar Kadhafi, Ouaga 2000</p>
          <p>01 BP 1317 Ouagadougou, Burkina Faso</p>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-4">Pakistan Office</h4>
          <p>Office 615-615, 6th Floor, The Forum</p>
          <p>Khayaban-e-Jami, Block 9, Clifton</p>
          <p>Karachi, Sindh 75600, Pakistan</p>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-4">US Office</h4>
          <p>Pathfinder Fundraising Department</p>
          <p>1015 15th Street NW, Suite 1100</p>
          <p>Washington DC 20005</p>
        </div>
      </div>

      {/* Donation Info */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-10 border-t border-gray-700 pt-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl">
              90%
            </div>
            <svg
              className="w-16 h-16"
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke="#ffffff"
                strokeWidth="3"
                d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                fill="none"
                stroke="#facc15"
                strokeWidth="3"
                strokeDasharray="90, 100"
                d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
          </div>
          <p className="text-white text-lg">
            90% of all our expenses go to program services
          </p>
        </div>
        <div>
          <div className="flex space-x-4">
            {" "}
            <a href="https://www.facebook.com" className="text-white">
              {" "}
              <FaFacebookF />{" "}
            </a>{" "}
            <a href="https://www.twitter.com" className="text-white">
              {" "}
              <FaTwitter />{" "}
            </a>{" "}
            <a href="https://www.youtube.com" className="text-white">
              {" "}
              <FaYoutube />{" "}
            </a>{" "}
            <a href="https://www.instagram.com" className="text-white">
              {" "}
              <FaInstagram />{" "}
            </a>{" "}
            <a href="https://www.tiktok.com" className="text-white">
              {" "}
              <FaTiktok />{" "}
            </a>{" "}
            <a href="https://www.linkedin.com" className="text-white">
              {" "}
              <FaLinkedinIn />{" "}
            </a>{" "}
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10">
        <div className="flex gap-6">
          <a href="/" className="text-white">
            Privacy Policy
          </a>
          <a href="/" className="text-white">
            Ad Choices
          </a>
        </div>
        <p className="text-sm text-gray-400 mt-4 md:mt-0">
          © Pathfinder International 2024. Sowrov Kumar Nath | EIN: +88 01690
          151180
        </p>
      </div>
    </footer>
  );
};

export default Footer;
