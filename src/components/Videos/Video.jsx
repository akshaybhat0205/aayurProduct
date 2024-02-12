// Packages imports
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// project imports
import exclusiveVideoContentData from "./VideoData";
import VideoCard from "./VideoCard";
import Title from "../Title/Title";

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
      <div className="c-exclusive-videos-parent my-12 container">
      <Title
          header="Videos"
          title="Explore Our Products In Action"
          subtitle="A Modern Muse's Hair Essentials: Redefined with Parvam Products"
        />
        <div>
          <Slider {...exclsuveBlogSliderSettings}>
            {exclusiveVideoContentData &&
              exclusiveVideoContentData.map((item, index) => {
                return (
                  <div className="md:pb-8 " key={index}>
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
