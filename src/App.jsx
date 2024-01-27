import React, { useRef, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import OrderModal from "./components/Modal/OrderModal";
import Videos from "./components/Videos/Video";
import WhyChooseUs from "./components/Banner/WhyChooseUs";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const [order, setOrder] = useState();
  const scrollToProucts = useRef();
  const scrollToBest = useRef();
  const scrollToTestimonial = useRef();
  const scrollToChoose = useRef();
  const scrollToVideos = useRef();
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar
        handleOrderPopup={handleOrderPopup}
        scrollToBest={scrollToBest}
        scrollToProucts={scrollToProucts}
        scrollToTestimonial={scrollToTestimonial}
        scrollToChoose={scrollToChoose}
        scrollToVideos={scrollToVideos}
      />
      <Hero handleOrderPopup={handleOrderPopup} />

      <div ref={scrollToProucts && scrollToProucts}>
        <Products handleOrderPopup={handleOrderPopup} />
      </div>

      <div ref={scrollToBest && scrollToBest}>
        <TopProducts handleOrderPopup={handleOrderPopup} />{" "}
      </div>

      <div ref={scrollToChoose && scrollToChoose}>
        {/* <Banner /> */}
        <WhyChooseUs />
      </div>

      {/* <Subscribe /> */}
      <div ref={scrollToTestimonial && scrollToTestimonial}>
        <Testimonials />
      </div>

      <div ref={scrollToVideos && scrollToVideos}>
        <Videos />
      </div>

      <Footer />
      <OrderModal
        show={orderPopup}
        maxSizeStyle="max-w-lg"
        setOrderPopup={setOrderPopup}
        orderPopup={orderPopup}
      ></OrderModal>
    </div>
  );
};

export default App;
