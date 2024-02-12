import React from "react";
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import { FaStar, FaSunPlantWilt } from "react-icons/fa6";
import Accordion from "../Accordian/Accordian";
import { TbPlant2 } from "react-icons/tb";
import Title from "../Title/Title";

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
const theme = localStorage.getItem("theme");

const Products = ({ handleOrderPopup }) => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
      <Title
          header="Products"
          title="Your Problem, Our Solution"
          
          subtitle="Excellence Redefined: Unveiling Our Premium Line of Quality
          Products!"
        />
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-5 justify-items-center gap-8 px-4 md:px-0">
            {/* card section */}
            {ProductsData?.slice(0, window.innerWidth >= 1024 ? 5 : 3).map(
              (data) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  key={data.id}
                  className="space-y-3 rounded-xl  p-4 w-full  bg-primary dark:bg-gradient-to-b dark:from-primary/15   dark:to-primary/5    dark:bg-gray-800 shadow-lg shadow-primary/20  dark:shadow-gray-900"
                >
                  <img
                    src={data.img}
                    alt=""
                    className="h-60 object-cover rounded-md"
                  />
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-center  text-lg ">
                      {data.title}
                    </h3>
                    <div className="flex items-center gap-1 text-center">
                      <FaStar className="text-secondary   dark:text-yellow-400" />
                      <span>{data.rating}</span>
                    </div>
                  </div>
                  <div className="pt-3">
                    <Accordion
                      active={false}
                      icon={<TbPlant2 className="w-6 h-6" />}
                      title="View Ingredients"
                    >
                      <div className="text-black dark:text-white mx-auto rounded-b-xl">
                        <div className="">{data.color}</div>
                      </div>
                    </Accordion>
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
