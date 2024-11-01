import React, { useRef, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Enquiry/Enquiry";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import OrderModal from "./components/Modal/OrderModal";
import Videos from "./components/Videos/Video";
import WhyChooseUs from "./components/Banner/WhyChooseUs";
import ScrollToTop from "react-scroll-to-top";
import { IoIosArrowDropupCircle } from "react-icons/io";
import Enquiry from "./components/Enquiry/Enquiry";

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

  const scrollButtonStyle = {
    borderRadius: "25px",
    color: "#4F3871",
    background: "#fff",
  };
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
      <Hero handleOrderPopup={handleOrderPopup} scrollToTestimonial={scrollToTestimonial}/>

      <div ref={scrollToProucts && scrollToProucts}>
        <Products handleOrderPopup={handleOrderPopup} />
      </div>

      <div ref={scrollToBest && scrollToBest}>
        <TopProducts handleOrderPopup={handleOrderPopup} />{" "}
      </div>

      <div ref={scrollToChoose && scrollToChoose}>
        <Banner />
        <WhyChooseUs />
      </div>

      <div ref={scrollToTestimonial && scrollToTestimonial}>
        <Testimonials />
      </div>

      <div ref={scrollToVideos && scrollToVideos}>
        <Videos />
      </div>

      <Enquiry />
      <Footer />
      <OrderModal
        show={orderPopup}
        maxSizeStyle="max-w-lg"
        setOrderPopup={setOrderPopup}
        orderPopup={orderPopup}
      ></OrderModal>

      <ScrollToTop
        smooth
        style={scrollButtonStyle}
        component={<IoIosArrowDropupCircle className="w-24 h-24" />}
        className="flex justify-center place-items-center"
      ></ScrollToTop>
    </div>
  );
};

export default App;
