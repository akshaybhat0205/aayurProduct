// Package imports
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FaChevronRight } from "react-icons/fa6";
import "./Accordian.css";

const Accordian = (props) => {
  const [isActive, setIsActive] = useState(false);
  const { title, icon, active } = props;

  useEffect(() => {
    setIsActive(active);
  }, [active]);

  return (
    <div className="mb-4">
      <div
        className="accordion-title c-Accordian title-container"
        onClick={() => setIsActive(!isActive)}
        data-aos="fade"
      >
        <div className="cursor-pointer">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              {icon}
              <span className="text-xl tracking-wider font-medium ">{title}</span>
            </div>
            <div>
              {isActive ? (
                <FaChevronRight className="rotatedown chevron " />
              ) : (
                <FaChevronRight className="rotateup chevron " />
              )}
            </div>
          </div>
        </div>
      </div>
      {isActive && (
        <div className="c-Accordian accordian-body" data-aos="fade">
          {props.children}
        </div>
      )}
    </div>
  );
};

export default Accordian;
