import React from "react";
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";
import Image4 from "../../assets/hero/product.png";
import Slider from "react-slick";
import {
  HomeAayurhenna,
  HomeDivineRoots,
  HomeKeshAmrith,
  IngredientsIcon,
  VolumeIcon,
  femaleAvatar,
  maleAvatar,
} from "../../Image";

const ImageList = [
  {
    id: 1,
    img: HomeAayurhenna,
    title: "Aayur Henna",
    type: "Hair Color",
    volume: "Starting from 150g",
    price: 200,
    description:
      "Consists of henna powder, hibiscus leaf, beetroot, amla, bhringraj",
  },
  {
    id: 2,
    img: HomeKeshAmrith,
    title: "Kesh Amrith",
    type: "Hair Mask",
    volume: "Starting from 150g",
    price: 200,
    description:
      "Consists of aloe vera, fenugreek powder, hibiscus leaf, beetroot, amla, bhringraj",
  },
  {
    id: 3,
    img: HomeDivineRoots,
    title: "Divine Roots",
    type: "Hair Oil",
    volume: "200ml",
    price: 200,
    description:
      "Consists of coconut oil, fenugreek seeds, amla, castor oil, tulsi leaves, flax seeds, small onion, camphor, curry leaves",
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
    autoplaySpeed: 6000,
    transition: 2000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden  min-h-[600px] bg-gradient-to-r from-[#391468] to-[#142140] flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.title}>
              <div className="grid grid-cols-1 md:grid-cols-4">
                {/* text content section */}
                <div className="flex  text-white col-span-2 flex-col justify-center gap-4 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-4xl tracking-wider sm:text-5xl lg:text-7xl font-bold AstoriaRoman"
                  >
                    {data.title}
                  </h1>
                  <h2
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold AstoriaRoman"
                  >
                    {data.type}
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-xl"
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
                      className="bg-primary  dark:bg-primary hover:scale-105 duration-200 text-white  py-2 px-4 rounded-full"
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
                      // className="text-center"
                    >
                      <img
                        src={IngredientsIcon}
                        className="w-12 h-12 mb-2 mx-auto"
                        alt="icon"
                      />
                      <p
                        data-aos="fade"
                        data-aos-duration="500"
                        data-aos-delay="100"
                        className="text-lg lg:text-2xl  text-center gap-1 "
                      >
                        Ingredients
                      </p>
                      <p
                        data-aos="fade"
                        data-aos-duration="500"
                        data-aos-delay="100"
                        className="text-md lg:text-xl text-center text-primary/80 mt-1 AstoriaRoman"
                      >
                        100% Organic
                      </p>
                    </div>
                    <div
                      data-aos="fade"
                      data-aos-duration="500"
                      data-aos-delay="300"
                      // className="text-center"
                    >
                      <img
                        src={VolumeIcon}
                        className="w-14 h-14 mb-2 mx-auto"
                        alt="icon"
                      />
                      <p
                        data-aos="fade"
                        data-aos-duration="500"
                        data-aos-delay="100"
                        className="text-lg lg:text-2xl text-center gap-1 "
                      >
                        Volume
                      </p>
                      <p
                        data-aos="fade"
                        data-aos-duration="500"
                        data-aos-delay="100"
                        className="text-md lg:text-xl text-center text-primary/80 mt-1 AstoriaRoman"
                      >
                        {data.volume}
                      </p>
                    </div>
                    {/* <div
                      data-aos="fade"
                      data-aos-duration="500"
                      data-aos-delay="300"
                      // className="text-center"
                    >
                      <p
                        data-aos="fade"
                        data-aos-duration="500"
                        data-aos-delay="100"
                        className="text-xl lg:text-3xl flex items-center gap-1 text-primary/80"
                      >
                        Price
                      </p>
                      <p
                        data-aos="fade"
                        data-aos-duration="500"
                        data-aos-delay="100"
                        className="text-md lg:text-xl text-white  mt-2"
                      >
                        ₹ {data.price}
                      </p>
                    </div> */}
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2 col-span-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="md:w-full md:h-[400px] h-[250px]  sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                    <div className="hidden md:flex flex-col justify-center mt-5">
                      <p className="md:text-2xl mb-2 text-white font-semibold  text-center">
                        Honest Reviews
                      </p>

                      <div className="bg-white inline-flex justify-center  p-1 rounded-full mx-auto">
                        <div className="flex -space-x-7 rtl:space-x-reverse justify-center items-center ">
                          <img
                            className="w-12 h-12 md:w-16 md:h-16  rounded-full"
                            src={maleAvatar}
                            alt=""
                          />
                          <img
                            className="w-12 h-12 md:w-16 md:h-16  rounded-full"
                            src={maleAvatar}
                            alt=""
                          />
                          <img
                            className="w-12 h-12 md:w-16 md:h-16  rounded-full"
                            src={femaleAvatar}
                            alt=""
                          />
                          <a
                            onClick={() =>
                              scrollToTestimonial.current.scrollIntoView({
                                behaviour: "smooth",
                              })
                            }
                            className="cursor-pointer font-extrabold md:text-md px-10 text-black"
                          >
                            100 +
                            <p className="text-xs  md:text-sm font-bold text-gray-600">
                              4 star reviews
                            </p>
                            <p className="text-xs md:text-sm font-bold text-gray-600">
                              from our clients
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
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
