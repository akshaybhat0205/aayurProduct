import { FaStar, FaSunPlantWilt } from "react-icons/fa6";
import Accordion from "../Accordian/Accordian";
import { TbPlant2 } from "react-icons/tb";
import Title from "../Title/Title";
import {
  AayurHenna,
  DivineRoots,
  FamilyPack,
  KeshAmrith,
  TripleCombo,
} from "../../Image";

import React, { useEffect, useRef } from "react";

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

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
  const onInit = () => {
    console.log('lightGallery has been initialized');
};
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
                  <LightGallery
                    onInit={onInit}
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
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
