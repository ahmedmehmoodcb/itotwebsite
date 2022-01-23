import React from "react";
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaFacebookMessenger,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Topbar() {
  return (
    <nav className="bg-custom-red">
      <div className="grid grid-cols-1 md:grid-cols-2 p-3 text-white">
        <div className="text-xs sm:text-center md:text-left flex items-center">
          <span className="uppercase">
            Become a 21<sup>st</sup> century school
          </span>
        </div>
        <div className="hidden md:flex justify-end items-center space-x-4 lg:space-x-7">
          <Link
            to="mailto:info@itot.pk"
            className="text-sm pr-3 hover:text-current hover:underline"
          >
            info@itot.pk
          </Link>
          <Link to="/">
            <FaWhatsapp color="#fff" size={24} />
          </Link>
          <Link to="/">
            <FaInstagram color="#fff" size={24} />
          </Link>
          <Link to="/">
            <FaFacebook color="#fff" size={24} />
          </Link>
          <Link to="/">
            <FaFacebookMessenger color="#fff" size={24} />
          </Link>
          <Link to="/">
            <FaLinkedin color="#fff" size={24} />
          </Link>
          <Link to="/">
            <FaTwitter color="#fff" size={24} />
          </Link>
          <Link to="/">
            <FaYoutube color="#fff" size={24} />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Topbar;
