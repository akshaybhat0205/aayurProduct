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
import Title from "../Title/Title";

const whyChooseUsData = [
  {
    title: "Top Quality",
    icon: (
      <LiaCertificateSolid className=" h-16 w-16  2xl:h-20 2xl:w-20 shadow-sm p-4 rounded-full bg-gradient-to-b from-primary/15   to-primary/0  mx-auto" />
    ),
    aosDelay: "600",
    description:
      "Precision-crafted for sublime results, our top-quality formula transforms hair with nourishing excellence.",
  },
  {
    title: "100% Organic",
    icon: (
      <ImLeaf className=" h-16 w-16  2xl:h-20 2xl:w-20 shadow-sm p-4 rounded-full bg-gradient-to-b from-primary/15   to-primary/0  mx-auto" />
    ),
    aosDelay: "700",
    description:
      "Pure & Natural - Our 100% organic formula provides wholesome care without synthetic additives for a truly enriching beauty experience.",
  },
  {
    title: "Fast Delivery",
    icon: (
      <RxLapTimer className=" h-16 w-16  2xl:h-20 2xl:w-20 shadow-sm p-4 rounded-full  bg-gradient-to-b from-primary/15   to-primary/0  mx-auto" />
    ),
    aosDelay: "800",
    description:
      "Swift Solutions, Speedy Styles: Delivering Beauty at Your Doorstep, Fast!",
  },
];

const WhyChooseUs = () => {
  const theme = localStorage.getItem("theme");

  return (
    <>
      <div className="container my-12">
        <Title
          header="Benefits"
          title="Choosing us brings many perks."
          subtitle="Excellence Redefined: Unveiling Our Premium Line of Quality
          Products!"
        />
        <div className="grid md:grid-cols-3 gap-6 mt-12 place-content-center mx-auto">
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
