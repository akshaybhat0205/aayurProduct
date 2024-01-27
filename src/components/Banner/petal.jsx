import React from "react";
import { CartIcon, HairMask, HairOil, Henna, LongHairs } from "../../Image";
import "./petal.css";
const FlowerPetalGrid = () => {
  const gridContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
    gap: "5px",
    width: "400px",
    height: "400px",
    margin: "auto",
  };

  const petalStyle = {
    borderTopRightRadius: "50px",
    borderBottomLeftRadius: "50px",
    backgroundImage: `url(${HairOil})`,
    backgroundSize: "cover",
  };
  const petalStyle1 = {
    borderBottomRightRadius: "50px",
    borderTopLeftRadius: "50px",
    backgroundImage: `url(${HairMask})`,
    backgroundSize: "cover",
  };

  const petalStyle2 = {
    borderBottomRightRadius: "50px",
    borderTopLeftRadius: "50px",
    backgroundImage: `url(${LongHairs})`,
    backgroundSize: "cover",
  };
  const petalStyle4 = {
    borderBottomLeftRadius: "50px",
    borderTopRightRadius: "50px",
    backgroundImage: `url(${Henna})`,
    backgroundSize: "cover",
  };

  return (
    <div className="flower-petal-grid">
      <div
        style={{ ...petalStyle, gridColumn: "1 / 2", gridRow: "1 / 2" }}
      ></div>
      <div
        style={{ ...petalStyle1, gridColumn: "2 / 3", gridRow: "1 / 2" }}
      ></div>
      <div
        style={{ ...petalStyle2, gridColumn: "1 / 2", gridRow: "2 / 3" }}
      ></div>
      <div
        style={{ ...petalStyle4, gridColumn: "2 / 3", gridRow: "2 / 3" }}
      ></div>
    </div>
  );
};

export default FlowerPetalGrid;
