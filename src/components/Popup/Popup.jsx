import { IoCloseOutline } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import ReactWhatsapp from "react-whatsapp";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

import { FiPlus, FiMinus } from "react-icons/fi";
import "./Popup.css";

const GENDER_OPTIONS = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];
const Popup = ({ orderPopup, setOrderPopup }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    getData(selectedOption);
  }, [selectedOption]);

  function getData(data) {
    const stringValue = data?.map((item) => item.value)?.join(", ");
    setOrderData(stringValue);
  }

  const customStyles = {
    option: (styles, { isSelected }) => {
      return {
        ...styles,
        backgroundColor: isSelected ? "#FEA928" : "#FEA92866",
        color: isSelected ? "#fff" : "#3A3B41",
        fontFamily: "FjallaOne",
        cursor: "pointer",
      };
    },
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "#FEA92866",
      color: "#000",
      borderRadius: "100px",
      fontSize: "15px",
      fontFamily: "FjallaOne",
      cursor: "pointer",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#000",
      fontSize: "16px",
      fontWeight: 500,
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      backgroundColor: "#000", // Set small arrow color to black
    }),
  };

  console.log("orderData", orderData);

  const [order, setOrder] = useState();
  const [error, setError] = useState(false);
  const [inputList, setInputList] = useState([{ firstName: "1", gender: "" }]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    setInputList((prevList) =>
      prevList((item, i) =>
        i === index ? { ...item, [name]: value } : item
      )
    );
    setError(false);
  };

  const handleRemoveClick = (index) =>
    setInputList((prevList) => prevList.filter((_, i) => i !== index));

  const handleAddClick = () => {
    const lastItem = inputList[inputList.length - 1];
    if (lastItem.firstName.trim() !== "" && lastItem.gender.trim() !== "") {
      setError(false);
      setInputList((prevList) => [...prevList, { firstName: "1", gender: "" }]);
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    const hasEmptySelect = inputList.some(({ gender }) => gender.trim() === "");
    const nonEmptyItems = inputList.filter(
      ({ firstName, gender }) => firstName.trim() !== "" && gender.trim() !== ""
    );

    if (hasEmptySelect || nonEmptyItems.length === 0) {
      setTimeout(() => setError(false), 5000);
      return;
    }

    const formattedData = nonEmptyItems
      .map(({ firstName = "N/A", gender = "N/A" }) => `${firstName}:${gender}`)
      .join(" , ");
    setOrder(formattedData);
  }, [inputList]);

  console.log(order);

  return (
    <>
      {orderPopup && (
        <>
          <div className="bg-black/50 z-50 backdrop-blur-sm fixed inset-0 overflow-y-auto">
            <div className="mx-auto m-4 md:max-w-lg align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="font-bold text-lg ">Order Now</h1>
                </div>
                <div>
                  <IoCloseOutline
                    className="text-2xl cursor-pointer "
                    onClick={() => setOrderPopup(false)}
                  />
                </div>
              </div>
              <div className="">
                {inputList.map((item, index) => (
                  <div
                    className="grid grid-cols-12 md:gap-x-4 my-2"
                    key={index}
                  >
                    <div className="col-span-7">
                      <p className="px-2 pb-1 font-medium">Product</p>
                      <Select
                        name={`gender-${index}`}
                        value={GENDER_OPTIONS.find(
                          (option) => option.value === item.gender
                        )}
                        options={GENDER_OPTIONS}
                        styles={customStyles}
                        placeholder="Select Product"
                        onChange={(selectedOption) =>
                          handleInputChange(
                            {
                              target: {
                                name: "gender",
                                value: selectedOption.value,
                              },
                            },
                            index
                          )
                        }
                      />
                    </div>
                    <div className="col-span-3 ">
                      <p className="px-2 pb-1 font-medium">Count</p>
                      <input
                        name="firstName"
                        className="input-field"
                        placeholder="Add Count"
                        value={item.firstName}
                        type="text" // Change type to text
                        inputMode="numeric" // Add inputMode attribute
                        pattern="[0-9]*" // Add pattern attribute to allow only numeric input
                        min="1"
                        onChange={(e) => handleInputChange(e, index)}
                        onBlur={(e) => {
                          if (e.target.value < 1) {
                            e.target.value = 1;
                            handleInputChange(e, index);
                          }
                        }}
                      />
                    </div>
                    <div className="col-span-2 place-self-end">
                      {inputList.length !== 1 && (
                        <button
                          type="button"
                          className="remove-btn"
                          onClick={() => handleRemoveClick(index)}
                        >
                          <FiMinus size={20} />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                <div className="btn-box mt-4">
                  <div className="flex">
                    <button
                      type="button"
                      onClick={handleAddClick}
                      className="add-btn"
                    >
                      <FiPlus size={20} />
                      Add More
                    </button>
                  </div>
                  {error && (
                    <p className="text-red-600 font-medium ml-2">
                      Please select a product.
                    </p>
                  )}
                </div>
              </div>

              <div className="order-whatsapp mx-auto py-4 text-center">
                <ReactWhatsapp
                  number="919860312696"s
                  message={`I would like to place an order for ${order}`}
                >
                  Place Order
                </ReactWhatsapp>
              </div>

              <p className="text-xs md:text-sm italic">
                Note : Once you Select Product(s) and place order you will be
                directed to Seller's WhatsApp.
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Popup;
