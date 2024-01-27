import React from "react";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color:
      "Lorem ipsum dolor sit amet, Molestias a re dignissimos officiis deserunt modi doloremque quidem, explicabo, assumenda sint suscipit. Distinctio, doloremque cumque?",
    aosDelay: "400",
  },
  {
    id: 7,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, dicta!",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  // {
  //   id: 5,
  //   img: Img2,
  //   title: "Fashin T-Shirt",
  //   rating: 4.5,
  //   color: "Pink",
  //   aosDelay: "800",
  // },
];

const Products = ({ handleOrderPopup }) => {
  return (
    <div className="mt-14 mb-12 md:py-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-3xl  xl:text-4xl font-bold">
            Your Problem, Our Solution
          </h1>
          <p
            data-aos="fade-up"
            className="md:text-lg font-medium text-secondary dark:text-primary/80"
          >
            "Excellence Redefined: Unveiling Our Premium Line of Quality
            Products!"
          </p>

          {/* <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p> */}
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 justify-items-center gap-8 px-4 md:px-0">
            {/* card section */}
            {ProductsData?.slice(0, window.innerWidth >= 1024 ? 5 : 3).map(
              (data) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  key={data.id}
                  className="space-y-3 rounded-xl  p-4 w-full bg-secondary/50   dark:bg-gray-800 shadow-lg shadow-secondary/50 dark:shadow-gray-900"
                >
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-center text-white text-lg ">
                      {data.title}
                    </h3>
                    <div className="flex items-center gap-1 text-center">
                      <FaStar className="text-yellow-400  dark:text-yellow-400" />
                      <span className="text-white">{data.rating}</span>
                    </div>
                  </div>

                  <img
                    src={data.img}
                    alt=""
                    className="h-60 object-cover rounded-md"
                  />
                  <div>
                    <p className="text-white font-medium dark:text-white text-left md:text-xl mb-3">
                      Ingredients:
                    </p>
                    <p className="text-white font-medium dark:text-white text-left text-sm md:text-base">
                      {data.color}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
          {/* view all button */}
          <div className="flex justify-center mt-4">
            <button
              className="bg-secondary dark:bg-primary text-xl font-bold hover:scale-105 duration-300 text-white py-3 px-12 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
              onClick={handleOrderPopup}
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
