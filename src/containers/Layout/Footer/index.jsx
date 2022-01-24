/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaFacebookMessenger,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaViber,
  FaAngleUp,
} from "react-icons/fa";

const quickLinks = [
  { label: "About Us", link: "/about" },
  { label: "News and Events", link: "/why-itot" },
  { label: "Marketplace for Teachers", link: "/market-place" },
  { label: "Marketplace for Parents", link: "/market-place" },
  { label: "Marketplace for Schools", link: "/market-place" },
  { label: "Help", link: "/help" },
];

const importantLinks = [
  { label: "Marketplace", link: "/market-place" },
  { label: "Web Portal", link: "/web-portal" },
  { label: "Courses", link: "/about" },
  { label: "Register as ITOT team member", link: "/register" },
  { label: "Register Your School", link: "/register" },
  { label: "Packages for School", link: "/help" },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function Footer() {
  const [isPageScrolled, setIsPageScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) setIsPageScrolled(true);
      else setIsPageScrolled(false);
    });
  }, []);

  return (
    <footer className="bg-custom-blue">
      <div className="container py-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 text-white text-sm gap-3">
        {/* First Section */}
        <div className="hidden md:flex flex-col">
          <div className="md:h-28 lg:h-32 w-auto">
            <img
              className="md:h-28 lg:h-32 w-auto"
              src="/assets/images/footer/white-logo.png"
              alt="Logo"
            />
          </div>
          <div className="flex flex-col justify-around mt-3">
            <p>Faisalabad, Pakistan</p>
            <p>(+92) 315 192-99-92</p>
            <p>info@itot.pk</p>
          </div>
        </div>
        {/* Quick Links */}
        <div className="flex flex-col">
          <h4 className="uppercase font-semibold">Quick Links</h4>
          <div className="flex flex-col space-y-1 mt-4">
            {quickLinks.map(item => (
              <Link
                key={item.label}
                to={item.link}
                className="hover:underline hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        {/* Important Links */}
        <div className="flex flex-col">
          <h4 className="uppercase font-semibold">Important Links</h4>
          <div className="flex flex-col space-y-1 mt-4">
            {importantLinks.map(item => (
              <Link
                key={item.label}
                to={item.link}
                className="hover:underline hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        {/* Stay Connected (Web) */}
        <div className="hidden md:flex flex-col items-center">
          <h4 className="uppercase font-semibold text-center">
            Stay Connected with itot
          </h4>
          <div className="flex flex-col space-y-4 mt-4">
            <div className="flex md:space-x-4 lg:space-x-7">
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
            <div className="flex md:space-x-4 lg:space-x-7">
              <Link to="/">
                <FaFacebook color="#fff" size={24} />
              </Link>
              <Link to="/">
                <FaInstagram color="#fff" size={24} />
              </Link>
              <Link to="/">
                <FaViber color="#fff" size={24} />
              </Link>
              <Link to="/">
                <FaWhatsapp color="#fff" size={24} />
              </Link>
            </div>
          </div>
        </div>
        {/* Affliations and Acknowledgments */}
        <div className="hidden lg:flex flex-col items-center">
          <h4 className="uppercase font-semibold text-center">
            Affliations and Acknowledgements
          </h4>
          <div className="md:h-28 lg:h-32 w-auto mt-4">
            <img
              className="md:h-28 lg:h-32 w-auto"
              src="/assets/images/footer/affliations.png"
              alt="Logo"
            />
          </div>
        </div>
      </div>
      {/* Stay Connected (Mobile) */}
      <div className="md:hidden flex flex-col items-center text-white text-sm">
        <h4 className="uppercase font-semibold">Stay Connected with itot</h4>
        <div className="flex flex-col p-3">
          <div className="flex justify-between space-x-5">
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
            <Link to="/">
              <FaFacebook color="#fff" size={24} />
            </Link>
            <Link to="/">
              <FaInstagram color="#fff" size={24} />
            </Link>
            <Link to="/">
              <FaViber color="#fff" size={24} />
            </Link>
            <Link to="/">
              <FaWhatsapp color="#fff" size={24} />
            </Link>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="text-xs md:text-sm bg-custom-red text-white px-2 py-3 grid grid-cols-1 sm:grid-cols-2">
        <p className="flex">
          © 2022 All Rights Reserved | ITOT
          <span className="hidden pl-2 lg:block">
            ( INNOVATIVE TECHNOLOGY OF TEACHING )
          </span>
        </p>
        <div className="flex justify-start sm:justify-end">
          <Link to="/privacy" className="hover:underline hover:text-white px-2">
            Privacy and Cookie Policy
          </Link>
          |
          <Link to="/terms" className="hover:underline hover:text-white px-2">
            Terms of Use
          </Link>
        </div>
      </div>
      {/* Scroll To Top */}
      {isPageScrolled && (
        <div
          className="bg-yellow-500 p-2 cursor-pointer rounded-full fixed right-4 bottom-4"
          onClick={scrollToTop}
        >
          <FaAngleUp size={20} className="text-white" />
        </div>
      )}
    </footer>
  );
}

export default Footer;
