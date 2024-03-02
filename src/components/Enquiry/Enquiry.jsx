import React, { useState } from "react";
import Banner from "../../assets/website/orange-pattern.jpg";
import ReactWhatsapp from "react-whatsapp";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Enquiry = () => {
  const [message, setMessage] = useState(null);

  return (
    <div data-aos="zoom-in" className="mb-10">
      <div className="container backdrop-blur-sm py-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-xl text-center sm:text-3xl font-semibold font-AstoriaRoman bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-flex text-transparent bg-clip-text">
            "Questions about our products ? – We're here to help!"
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 place-items-center  justify-items-center max-w-5xl mx-auto mt-5">
          <textarea
            data-aos="fade"
            type="text"
            placeholder="Write your message here"
            className="w-full p-3 rounded-xl md:col-span-4 dark:text-white border-secondary bg-primary  border-2"
            value={message}
            rows={3}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div
            data-aos="fade"
            className="text-xl font-medium  bg-secondary dark:bg-primary hover:scale-105 duration-200 text-white  md:text-xl py-3 px-5  rounded-full mx-auto;
"
          >
            <ReactWhatsapp number="917204330876" message={message}>
              Send
            </ReactWhatsapp>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
