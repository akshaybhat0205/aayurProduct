import React from "react";
import Slider from "react-slick";
import { femaleAvatar, maleAvatar } from "../../Image";
import "./Testimonials.css";
import { FaStar } from "react-icons/fa";
import Title from "../Title/Title";
const TestimonialData = [
  {
    id: 1,
    name: "Raaga",
    gender: "female",
    rating: 5,
    text: "The hair oil is truly working wonders.. I'm seeing new baby hairs grow. Thank you very much.. I'll be ordering two more bottles",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 6,
    name: "Shilpa",
    gender: "female",
    rating: 3.5,
    text: "Hour products hair oil is really Miracle.I was facing dandruff problem from last 6 months. But after using your product it's slowly reducing.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 2,
    name: "Anonymous",
    gender: "female",
    rating: 3.5,
    text: "Nin product use madade kane, chanagide akka amma ibru tumba ishta patru. Hair oil try madtini nange 2 bottle kalsu",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Anonymous",
    gender: "male",
    rating: 4,
    text: "Hair mask anyone can use right.. because my husband has too much dandruff and hair thinning issue.For me it's working. Best product ever",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Pradeep",
    gender: "male",
    rating: 4,
    text: "DIVINE hair oil and henna is really good. Dandruff and hairfall problem 95% reduced. It's almost been a month I'm using your product it too good thank you",
    img: "https://picsum.photos/103/103",
  },
];

const StarRating = ({ numberOfStars }) => {
  const starsArray = [];

  for (let i = 0; i < numberOfStars; i++) {
    starsArray.push(<FaStar key={i} className="text-yellow-500" />);
  }

  return <div className="w-full flex items-center gap-1">{starsArray}</div>;
};

const Testimonials = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-12 c-testimonial ">
      <div className="container">
        {/* header section */}
        <Title
          header="Testimonials"
          title="From Clients to Fans"
          subtitle="Locks of Love: Hear What Our Customers Have to Say About Their Hair Journey!"
        />

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6" key={data.id}>
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl  bg-gradient-to-b from-primary/15   to-primary/5  relative">
                  <div className="mb-4">
                    <img
                      src={data?.gender == "male" ? maleAvatar : femaleAvatar}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-base font-medium">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-white">
                        {data.name}
                      </h1>
                      <StarRating numberOfStars={data.rating} />
                    </div>
                  </div>
                  <p className="text-black/40 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
