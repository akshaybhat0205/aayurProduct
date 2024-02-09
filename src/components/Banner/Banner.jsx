import React from "react";

import FlowerPetalGrid from "./petal";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* image section */}
          <div data-aos="zoom-in">
            <FlowerPetalGrid />
          </div>

          <div className="">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              About <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">PARVAM</h1>

            </h1>
            <p
              data-aos="fade-up"
              className="md:text-lg md:font-medium text-lg text-secondary dark:text-primary/80 tracking-wide leading-5"
            >
              "Stand Out, Shine Bright: The Unmatched Qualities That Define Our
              Exceptional Product!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
