import { FaStar } from "react-icons/fa6";
import Title from "../Title/Title";
import {
  AayurHenna,
  DivineRoots,
  FamilyPack,
  KeshAmrith,
  TripleCombo,
} from "../../Image";
import "./Products.css";

import React from "react";

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Slider from "react-slick";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CustomPrevArrow = (props) => (
  <div
    className="custom-prev-arrow absolute top-1/2 -left-3 md:-left-5 transform -translate-y-1/2 cursor-pointer"
    onClick={props.onClick}
  >
    <FaChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-purple-500" />
  </div>
);

const CustomNextArrow = (props) => (
  <div
    className="custom-next-arrow absolute top-1/2 -right-3 md:-right-5 transform -translate-y-1/2 cursor-pointer"
    onClick={props.onClick}
  >
    <FaChevronRight className="w-6 h-6 md:w-8 md:h-8 text-purple-500" />
  </div>
);
const ProductsData = [
  {
    id: 1,
    img: DivineRoots,
    title: "Divine Roots Hair Oil",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: AayurHenna,
    title: "Aayur Henna",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: KeshAmrith,
    title: "Kesh Amrith",
    rating: 4.7,
    color:
      "Lorem ipsum dolor sit amet, Molestias a re dignissimos officiis deserunt modi doloremque quidem, explicabo, assumenda sint suscipit. Distinctio, doloremque cumque?",
    aosDelay: "400",
  },
  {
    id: 7,
    img: TripleCombo,
    title: "Triple Combo",
    rating: 4.7,
    color:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, dicta!",
  },
  {
    id: 4,
    img: FamilyPack,
    title: "Family Pack",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
];

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  cssEase: "linear",
  pauseOnHover: true,
  pauseOnFocus: true,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
  responsive: [
    {
      breakpoint: 10000,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1536,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Products = ({ handleOrderPopup }) => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div className="mt-14 mb-12 c-products">
      <div className="container">
        <Title
          header="Products"
          title="Your Problem, Our Solution"
          subtitle="Hair Bliss Combos: Elevate Your Locks with Our Perfect Pairings!"
        />
        {/* Body section */}
        <Slider {...settings}>
          {ProductsData.map((data) => (
            <div className="mb-4">
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3 rounded-xl  p-4 mx-4   bg-primary dark:bg-gradient-to-b dark:from-primary/15   dark:to-primary/5    dark:bg-gray-800 shadow-lg shadow-primary/20  dark:shadow-gray-900"
              >
                <LightGallery
                  onInit={onInit}
                  speed={500}
                  plugins={[lgThumbnail, lgZoom]}
                  closeOnTap={true}
                >
                  <a href={data.img}>
                    <img
                      alt={data.title}
                      src={data.img}
                      className="h-60 w-full object-cover rounded-md"
                    />
                  </a>
                </LightGallery>
                <div className="flex justify-between">
                  <h3 className="font-semibold text-center  text-lg ">
                    {data.title}
                  </h3>
                  <div className="flex items-center gap-1 text-center">
                    <FaStar className="text-secondary   dark:text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* view all button */}
      <div className="flex justify-center mt-4 ">
        <button
          className="bg-secondary dark:bg-primary text-xl font-bold hover:scale-105 duration-300 text-white py-3 px-12 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
          onClick={handleOrderPopup}
        >
          Order Now
        </button>
      </div>
    </div>
    // </div>
    // </div>
  );
};

export default Products;
