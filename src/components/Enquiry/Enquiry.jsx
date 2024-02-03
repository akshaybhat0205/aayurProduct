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
        <div className="space-y-6 max-w-5xl mx-auto">
          <h1 className="text-xl !text-center sm:text-left sm:text-3xl font-semibold">
            "Questions about our products ? –
            We're here to help!"
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 place-items-center  justify-items-center">
            <textarea
              data-aos="fade"
              type="text"
              placeholder="Write your message here"
              className="w-full p-3 rounded-md md:col-span-4 text-black border-secondary  border-2"
              value={message}
              rows={3}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div data-aos="fade" className="text-xl font-medium  bg-secondary dark:bg-primary hover:scale-105 duration-200 text-white  md:text-xl py-3 px-5  rounded-full mx-auto;
">
              <ReactWhatsapp number="919860312696" message={message}>
                Send
              </ReactWhatsapp>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
