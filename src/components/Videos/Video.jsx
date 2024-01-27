// Packages imports
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// project imports
import exclusiveVideoContentData from "./VideoData";
import VideoCard from "./VideoCard";

const Videos = (props) => {
  var exclsuveBlogSliderSettings = {
    dots: true,
    infinite: false,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          dots: true,
          slidesToShow: 1,
          swipeToSlide: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="c-exclusive-videos-parent my-10 container">
        <div className="text-center mb-10 max-w-[700px] mx-auto">
          <h1 data-aos="fade-up" className="text-3xl  xl:text-4xl font-bold">
          Explore Our Products In Action
          </h1>
          <p
            data-aos="fade-up"
            className="md:text-lg font-medium text-secondary dark:text-primary/80"
          >
            "A Modern Muse's Hair Essentials: Redefined with Aayur Products"
          </p>
        </div>
        <div>
          <Slider {...exclsuveBlogSliderSettings}>
            {exclusiveVideoContentData &&
              exclusiveVideoContentData.map((item, index) => {
                return (
                  <div className="md:pt-4 md:pb-8 " key={index}>
                    <VideoCard videoData={item} />
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Videos;
