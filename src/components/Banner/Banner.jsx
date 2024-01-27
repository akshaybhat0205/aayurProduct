import React from "react";
import BannerImg from "../../assets/women/women2.jpg";
import { GrSecure } from "react-icons/gr";
import { TbPlant } from "react-icons/tb";
import { GiFoodTruck } from "react-icons/gi";
import { RxLapTimer } from "react-icons/rx";
import FlowerPetalGrid from "./petal";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="zoom-in">
            <FlowerPetalGrid />
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              What sets us apart?
            </h1>
            <p
              data-aos="fade-up"
              className="md:text-lg md:font-medium text-lg text-secondary dark:text-primary/80 tracking-wide leading-5"
            >
              "Stand Out, Shine Bright: The Unmatched Qualities That Define Our
              Exceptional Product!"
            </p>
            <div className="gap-x-5 gap-4 md:gap-y-0 grid grid-cols-2 max-w-md place-content-center px-4  md:px-0">
              <div
                className="flex flex-col py-6 px-2  md:py-12 md:px-8 bg-primary/60  rounded-3xl items-center justify-center text-center md:mt-5"
                data-aos="fade-up"
              >
                <GrSecure className="text-4xl mb-2 h-14 w-14  md:h-20 md:w-20 shadow-sm p-4 rounded-full bg-gradient-to-b from-primary  to-primary/0  mx-auto" />
                <p className="flex-grow md:font-medium md:text-lg">Quality Products</p>
              </div>

              <div
                className="flex flex-col py-6 px-2  md:py-12 md:px-8 bg-primary/30  rounded-3xl items-center justify-center text-center md:mb-5"
                data-aos="fade-up"
              >
                <TbPlant className="text-4xl mb-2 h-14 w-14  md:h-20 md:w-20 shadow-sm p-4 rounded-full  bg-gradient-to-b from-primary/15   to-primary/0  mx-auto" />
                <p className="flex-grow md:font-medium md:text-lg">100% Organic</p>
              </div>

              <div
                className="flex flex-col py-6 px-2  md:py-12 md:px-8 bg-primary/30  rounded-3xl items-center justify-center text-center md:mt-5"
                data-aos="fade-up"
              >
                <RxLapTimer className="text-4xl mb-2 h-14 w-14  md:h-20 md:w-20 shadow-sm p-4 rounded-full bg-gradient-to-b from-primary/15   to-primary/0  mx-auto" />
                <p className="flex-grow md:font-medium md:text-lg">Fast Delivery</p>
              </div>

              <div
                className="flex flex-col py-6 px-2  md:py-12 md:px-8 bg-primary/60  rounded-3xl items-center justify-center text-center md:mb-5"
                data-aos="fade-up"
              >
                <GiFoodTruck className="text-4xl mb-2 h-14 w-14  md:h-20 md:w-20 shadow-sm p-4 rounded-full bg-gradient-to-b from-primary  to-primary/0 mx-auto" />
                <p className="flex-grow md:font-medium md:text-lg">Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
