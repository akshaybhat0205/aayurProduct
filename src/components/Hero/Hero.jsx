import React from "react";
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Slider from "react-slick";
import { femaleAvatar, maleAvatar } from "../../Image";
import { SiWolframmathematica } from "react-icons/si";
import { FaBottleDroplet } from "react-icons/fa6";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 20% off on all Men's Wear",
    description:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Women's Wear",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Products Sale",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Hero = ({ handleOrderPopup, scrollToTestimonial }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    fade: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    transition: 2000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden  min-h-[600px] sm:min-h-[650px] bg-gradient-to-r from-[#391468] to-[#142140] flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.title}>
              <div className="grid grid-cols-1 md:grid-cols-3">
                {/* text content section */}
                <div className="flex  text-white col-span-2 flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold "
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      onClick={handleOrderPopup}
                      className="bg-primary  dark:bg-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                    >
                      Order Now
                    </button>
                  </div>
                  <div
                    data-aos="fade"
                    data-aos-duration="500"
                    data-aos-delay="300"
                    className="flex mt-5 items-center justify-around md:justify-start  lg:justify-between max-w-md  gap-6"
                  >
                    <div
                      data-aos="fade"
                      data-aos-duration="500"
                      data-aos-delay="300"
                      className="text-center"
                    >
                      <p
                        data-aos="fade"
                        data-aos-duration="500"
                        data-aos-delay="100"
                        className="text-xl lg:text-3xl flex items-center gap-1 text-primary/80"
                      >
                        <span>
                          <SiWolframmathematica className="text-primary/80 w-5 h-5" />
                        </span>
                        ngreents
                      </p>
                      <p
                        data-aos="fade"
                        data-aos-duration="500"
                        data-aos-delay="100"
                        className="text-md lg:text-xl text-white"
                      >
                        100% Organc
                      </p>
                    </div>
                    <div
                      data-aos="fade"
                      data-aos-duration="500"
                      data-aos-delay="300"
                      className="text-center"
                    >
                      <p
                        data-aos="fade"
                        data-aos-duration="500"
                        data-aos-delay="100"
                        className="text-xl lg:text-3xl flex items-center gap-1 text-primary/80"
                      >
                        <span>
                          <FaBottleDroplet className="text-primary/80 w-5 h-5" />
                        </span>
                        Volume
                      </p>
                      <p
                        data-aos="fade"
                        data-aos-duration="500"
                        data-aos-delay="100"
                        className="text-md lg:text-xl text-white"
                      >
                        200ml
                      </p>
                    </div>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />

                    <div className="flex -space-x-4 rtl:space-x-reverse justify-center">
                      <img
                        className="w-12 h-12 lg:w-16 lg:h-16 border-2 border-white rounded-full dark:border-gray-800"
                        src={maleAvatar}
                        alt=""
                      />
                      <img
                        className="w-12 h-12 lg:w-16 lg:h-16 border-2 border-white rounded-full dark:border-gray-800"
                        src={maleAvatar}
                        alt=""
                      />
                      <img
                        className="w-12 h-12 lg:w-16 lg:h-16 border-2 border-white rounded-full dark:border-gray-800"
                        src={femaleAvatar}
                        alt=""
                      />
                      <a
                        onClick={() =>
                          scrollToTestimonial.current.scrollIntoView({
                            behaviour: "smooth",
                          })
                        }
                        className="flex cursor-pointer  items-center justify-center w-12 h-12 lg:w-16 lg:h-16  text-lg md:text-3xl  font-medium text-white bg-gray-800 border-2 border-white rounded-full "
                      >
                        +
                      </a>
                    </div>
                    <p className="text-xl my-2 text-white text-center">
                      <span
                        className="px-1 cursor-pointer underline font-semibold"
                        onClick={() =>
                          scrollToTestimonial.current.scrollIntoView({
                            behaviour: "smooth",
                          })
                        }
                      >
                        Click
                      </span>
                      To read customer feedback.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
