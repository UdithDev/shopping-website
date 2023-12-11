import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            <div className="header_top_icon_wrapper">
              <FaSquareFacebook />
            </div>
            <div className="header_top_icon_wrapper">
              <FaTwitter />
            </div>
            <div className="header_top_icon_wrapper">
              <FaInstagram />
            </div>
            <div className="header_top_icon_wrapper">
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
