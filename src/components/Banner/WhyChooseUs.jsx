import React, { useEffect, useState } from "react";
import {
  Certified,
  CertifiedDark,
  Delivery,
  DeliveryDark,
  Organic,
  OrganicDark,
} from "../../Image";
import { RxLapTimer } from "react-icons/rx";
import { ImLeaf } from "react-icons/im";
import { LiaCertificateSolid } from "react-icons/lia";

const whyChooseUsData = [
  {
    title: "Top Quality",
    icon: (
      <LiaCertificateSolid className=" h-16 w-16  2xl:h-20 2xl:w-20 shadow-sm p-4 rounded-full bg-gradient-to-b from-primary/15   to-primary/0  mx-auto" />
    ),
    aosDelay: "600",
    description: "description 1",
  },
  {
    title: "100% Organic",
    icon: (
      <ImLeaf className=" h-16 w-16  2xl:h-20 2xl:w-20 shadow-sm p-4 rounded-full bg-gradient-to-b from-primary/15   to-primary/0  mx-auto" />
    ),
    aosDelay: "700",
    description: "description 2",
  },
  {
    title: "Fast Delivery",
    icon: (
      <RxLapTimer className=" h-16 w-16  2xl:h-20 2xl:w-20 shadow-sm p-4 rounded-full  bg-gradient-to-b from-primary/15   to-primary/0  mx-auto" />
    ),
    aosDelay: "800",
    description: "description 3",
  },
];

const WhyChooseUs = () => {
  const theme = localStorage.getItem("theme");

  return (
    <>
      <div className="container py-16">
        <div className="flex items-center gap-x-4">
          <hr
            data-aos="fade-right"
            data-aos-delay="200"
            className="md:block hidden border border-b-4 border-black dark:border-white md:w-16 rounded-full"
          ></hr>
          <h1
            data-aos="fade-right"
            
            className="text-3xl  xl:text-4xl font-bold text-center md:text-left"
          >
            Choosing Us Offers Varieties Of Perks
          </h1>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-12 place-content-center mx-auto" >
          {whyChooseUsData &&
            whyChooseUsData?.map((item) => (
              <div
                className="grid grid-cols-12 gap-4"
                data-aos="fade"
                data-aos-delay={item.aosDelay}
              >
                <div className="col-span-12 md:col-span-4">{item?.icon}</div>
                <div className="col-span-12 md:col-span-8 text-center md:text-left">
                  <h2 className="font-semibold text-2xl md:text-xl xl:text-2xl">
                    {item.title}
                  </h2>
                  <p className="text-base font-medium mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
