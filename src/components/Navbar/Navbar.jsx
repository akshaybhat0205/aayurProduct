import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
import StickyHeader from "../StickyHeader/StickyHeader";

const Navbar = (props) => {
  const {
    handleOrderPopup,
    scrollToBest,
    scrollToProucts,
    scrollToTestimonial,
    scrollToChoose,
    scrollToVideos
  } = props;
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold md:text-xl sm:text-3xl flex gap-2 items-center">
              <img src={Logo} alt="Logo" className="w-10" />
              Aayur Products
            </a>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            {/* order button */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-secondary dark:bg-primary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <StickyHeader
          scrollToBest={scrollToBest}
          scrollToProucts={scrollToProucts}
          scrollToTestimonial={scrollToTestimonial}
          scrollToChoose={scrollToChoose}
          scrollToVideos={scrollToVideos}
        />
      </div>
    </div>
  );
};

export default Navbar;
