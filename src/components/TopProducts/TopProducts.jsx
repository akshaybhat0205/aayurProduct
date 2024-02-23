import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaStar } from "react-icons/fa";
import Title from "../Title/Title";
import { BestAayurhenna, BestDivineRoots, BestKeshAmrith } from "../../Image";

const ProductsData = [
  {
    id: 1,
    img: BestDivineRoots,
    title: "Divine Roots",
    description:
      "Embrace Lustrous Locks with Our Luxe Hair Oil Elixir",
  },
  {
    id: 2,
    img: BestAayurhenna,
    title: "Aayur Henna",
    description:
      "Redefine Your Look with Our Stunning Hair Colors",
  },
  {
    id: 3,
    img: BestKeshAmrith,
    title: "Kesh Amrith",
    description:
      "Our Hair Mask, Your Instant Transformation",
  },
];
const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container my-12">
        <Title
          header="Our Best"
          title="Prime Picks"
          subtitle="Unveiling the Pinnacle of Beauty: Discover Our Top-Performing
            Products!"
        />
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center py-16">
          {ProductsData.map((data) => (
            <div
              key={data.title}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-secondary dark:bg-primary  hover:scale-105 duration-300 text-white py-1 px-4 font-medium rounded-full mt-4 group-hover:bg-white group-hover:text-secondary"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
