import React, { useContext, useEffect, useRef, useState } from "react";
import "./StickyHeader.css";
import Select from "react-select";
import { headerList } from "./StickyHeaderList";
import { CartIcon, CartSelectedIcon } from "../../Image";
const StickyHeader = (props) => {
  const theme = localStorage.getItem("theme");
  const [selectedValue, setSelectedValue] = useState({
    id: 1,
    name: "Our Proucts",
    label: "Our Proucts",
    value: "products",
    icon: CartIcon,
    selectedIcon: CartSelectedIcon,
  });
  const [activeLink, setActiveLink] = useState("products");
  const {
    scrollToBest,
    scrollToProucts,
    scrollToTestimonial,
    scrollToChoose,
    scrollToVideos,
  } = props;

  // Select Menu Function Start
  function onSelectHeader(selectedItem) {
    console.log("selectedItem", selectedItem);
    setSelectedValue(selectedItem);
    setActiveLink(selectedItem.value);
    switch (selectedItem?.value) {
      case "products":
        scrollToProucts?.current?.scrollIntoView({
          behaviour: "smooth",
        });
        break;

      case "best":
        scrollToBest?.current?.scrollIntoView({
          behaviour: "smooth",
        });
        break;

      case "choose":
        scrollToChoose?.current?.scrollIntoView({
          behaviour: "smooth",
        });
        break;
      case "testimonial":
        scrollToTestimonial?.current?.scrollIntoView({
          behaviour: "smooth",
        });
        break;
      case "videos":
        scrollToVideos?.current?.scrollIntoView({
          behaviour: "smooth",
        });

      default:
        break;
    }
  }

  // Select Menu Function End
  const isDesktopView = window.innerWidth >= 1024;
  useEffect(() => {
    if (!isDesktopView) {
      switch (activeLink) {
        case "products":
          scrollToProucts?.current?.scrollIntoView({
            behaviour: "smooth",
          });
          break;

        case "best":
          scrollToBest?.current?.scrollIntoView({
            behaviour: "smooth",
          });
          break;

        case "choose":
          scrollToChoose?.current?.scrollIntoView({
            behaviour: "smooth",
          });
          break;

        case "testimonial":
          scrollToTestimonial?.current?.scrollIntoView({
            behaviour: "smooth",
          });
          break;

        case "videos":
          scrollToVideos?.current?.scrollIntoView({
            behaviour: "smooth",
          });
          break;

        default:
          break;
      }
    }
  }, [activeLink]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const customStyles = {
    option: (styles, { isSelected }) => {
      return {
        ...styles,
        backgroundColor: isSelected ? "#c082ff66" : "#fff",
        color: isSelected ? "#000" : "#3A3B41",
        fontFamily: "FjallaOne",
      };
    },
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "#c082ff66",
      color: "#000",
      borderRadius: "100px",
      fontSize: "15px",
      fontFamily: "FjallaOne",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#fff",
      padding: "12px 20px",
    }),
  };

  return (
    <div className="c-sticky-header px-4">
      <div className="content-wrapper">
        <div className="header">
          <>
            <div className=" lg:block hidden">
              <div className="flex gap-6">
                {headerList &&
                  headerList?.map((item, index) => (
                    <button
                      key={index}
                      className={
                        activeLink === item.value
                          ? "active py-3 px-5 rounded-full w-52"
                          : "py-3 px-5 rounded-full w-52"
                      }
                      onClick={() => {
                        onSelectHeader(item);
                      }}
                    >
                      <div className="flex items-center justify-center gap-2.5">
                        {activeLink === item.value ? (
                          <img
                            src={item?.selectedIcon}
                            className="w-6 h-6"
                            alt="icon"
                          />
                        ) : (
                          <img
                            src={
                              theme == "dark" ? item.selectedIcon : item?.icon
                            }
                            className="w-6 h-6"
                            alt="icon"
                          />
                        )}
                        <p
                          className={
                            activeLink === item.value
                              ? "text-white uppercase"
                              : "text-black dark:text-white uppercase"
                          }
                        >
                          {item.name}
                        </p>
                      </div>
                    </button>
                  ))}
              </div>
            </div>
          </>
          <div className="px-4 max-w-md mb-md mx-auto lg:hidden w-72">
            <Select
              placeholder="Select Option"
              value={selectedValue}
              // options={headerList}
              options={headerList}
              isSearchable={false}
              styles={customStyles}
              onChange={onSelectHeader}
              components={{
                IndicatorSeparator: () => null,
              }}
              getOptionLabel={(item) => (
                <div className="flex items-center gap-2">
                  {activeLink === item.value ? (
                    <img
                      src={item.selectedIcon}
                      className="w-6 h-6"
                      alt="icon"
                    />
                  ) : (
                    <img src={item.icon} className="w-6 h-6" alt="icon" />
                  )}
                  <span className="uppercase">{item.label}</span>
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyHeader;
