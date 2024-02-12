import React from "react";
import "./Title.css";

const Title = (props) => {
  const { header, title, subtitle } = props;
  return (
    <>
      <div className="max-w-2xl mx-auto pt-3 md:pt-12">
        <div
          data-aos="fade-up"
          className="header-center text-lg md:text-2xl font-medium mb-4"
        >
          {header}
        </div>
        <div className="flex flex-col items-center justify-center">
          <div
            data-aos="fade-up"
            className="text-center text-4xl md:text-5xl font-AstoriaRoman bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-flex text-transparent bg-clip-text font-semibold"
          >
            {title}
          </div>
        </div>
      </div>
      <div className="text-center mt-1 mb-16">
        <p
          data-aos="fade-up"
          className="md:text-lg font-medium text-secondary dark:text-primary/80 tracking-wider"
        >
          "{subtitle}"
        </p>
      </div>
    </>
  );
};

export default Title;
