// import React, { Fragment } from 'react';
import { Dialog, Transition } from "@headlessui/react";
import { IoCloseOutline } from "react-icons/io5";
import React, { useEffect, useState, Fragment } from "react";
import ReactWhatsapp from "react-whatsapp";
import Select from "react-select";
import { FiPlus, FiMinus } from "react-icons/fi";
import "./OrderModal.css";

const product_OPTIONS = [
  { value: "Divine Roots", label: "Divine Roots", price: 30 },
  { value: "Kesh Amrith", label: "Kesh Amrith", price: 30 },
  { value: "Aayur Henna 250g", label: "Aayur Henna", price: 30 },
  { value: "Aayur Combo 01", label: "Parvam Combo 01", price: 30 },
  { value: "Parvam Combo 02", label: "Parvam Combo 02", price: 30 },
  { value: "Parvam Combo 03", label: "Parvam Combo 03", price: 30 },
  { value: "Henna Combo 500", label: "Henna Combo 500", price: 30 },
  { value: "Henna Combo 1000", label: "Henna Combo 1000", price: 30 },
  { value: "Aayur Henna 150g", label: "Aayur Henna 150g", price: 30 },
  { value: "Kesh Amrith Combo 2X", label: "Kesh Amrith Combo 2X", price: 30 },
  { value: "Parvam Divine Care", label: "Parvam Divine Care", price: 30 },
];

const OrderModal = (props) => {
  // let cancelButtonRef = useRef(null)
  const {
    show,
    title,
    body,
    footer,
    children,
    maxSizeStyle,
    cssHide,
    modelClass,
    setOrderPopup,
  } = props;
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const [selectedOption, setSelectedOption] = useState(null);
  const [orderData, setOrderData] = useState(null);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    getData(selectedOption);
  }, [selectedOption]);

  function getData(data) {
    const updatedOptions = data?.map((item) => ({
      ...item,
      price: item.price,
      label: undefined,
    }));
    setOrderData(updatedOptions);
  }

  const theme = localStorage.getItem("theme");

  const customStyles = {
    option: (styles, { isSelected, isFocused }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? "#37036ce3"
          : isFocused
          ? "##e8d6fd85"
          : "#c082ff66", // Change background color to red on hover
        color: isSelected ? "#fff" : isFocused ? "#000" : "#3A3B41",
        fontFamily: "FjallaOne",
        cursor: "pointer",
      };
    },
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "#c082ff66",
      color: "#000",
      borderRadius: "100px",
      fontSize: "15px",
      fontFamily: "FjallaOne",
      cursor: "pointer",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: theme === "dark" ? "#fff" : "#000",
      fontSize: "16px",
      fontWeight: 500,
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      backgroundColor: theme === "dark" ? "#fff" : "#000",
    }),
  };

  const [order, setOrder] = useState();
  const [error, setError] = useState(false);
  const [inputList, setInputList] = useState([
    { productCount: "1", product: "", price: 0 },
  ]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const selectedProduct = product_OPTIONS.find(
      (option) => option.value === value
    );

    setInputList((prevList) =>
      prevList.map((item, i) =>
        i === index
          ? {
              ...item,
              [name]: value,
              price: selectedProduct?.price || item.price,
            }
          : item
      )
    );
    setError(false);
  };
  const handleRemoveClick = (index) =>
    setInputList((prevList) => prevList.filter((_, i) => i !== index));

  const handleAddClick = () => {
    const lastItem = inputList[inputList.length - 1];
    if (lastItem.productCount.trim() !== "" && lastItem.product.trim() !== "") {
      setError(false);
      setInputList((prevList) => [
        ...prevList,
        { productCount: "1", product: "", price: 0 },
      ]);
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    getData(selectedOption);
  }, [selectedOption]);
  useEffect(() => {
    const hasEmptySelect = inputList.some(
      ({ product }) => product.trim() === ""
    );
    const nonEmptyItems = inputList.filter(
      ({ productCount, product }) =>
        productCount.trim() !== "" && product.trim() !== ""
    );

    if (hasEmptySelect || nonEmptyItems.length === 0) {
      setTimeout(() => setError(false), 5000);
      return;
    }
    const formattedData = nonEmptyItems
      .map(({ productCount, product }) => `${productCount} ${product}`)
      .join(", ");
    setOrder(formattedData);
  }, [inputList]);

  console.log("inputList", inputList);
  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-50 inset-0 overflow-y-auto w-full "
        // initialFocus={cancelButtonRef}
        open={show}
        onClose={() => null}
      >
        <div className="flex items-center justify-center min-h-screen p-tmd text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className={classNames(
                maxSizeStyle ? maxSizeStyle : " max-w-lg ",
                " inline-block align-bottom bg-white dark:bg-gray-900 dark:text-white rounded-lg mx-4 px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:p-6",
                modelClass || ""
              )}
            >
              <div>
                <div className={cssHide ? "" : "mt-3 text-center sm:mt-5"}>
                  {title ? (
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      {title ?? title}
                    </Dialog.Title>
                  ) : undefined}
                  <div className={cssHide ? "" : "mt-2"}>
                    <div className="flex items-center justify-between">
                      <div>
                        <h1 className="font-bold md:text-2xl ">Order Now</h1>
                      </div>
                      <div>
                        <IoCloseOutline
                          className="text-2xl cursor-pointer "
                          onClick={() => setOrderPopup(false)}
                        />
                      </div>
                    </div>
                    <hr className="mb-4 mt-1"></hr>
                    <>
                      <div className="grid grid-cols-12">
                        <p className="px-2 font-medium col-span-7 text-left text-lg">
                          Product
                        </p>
                        <p className="font-medium col-span-3 text-lg">Count</p>
                        <p className=" col-span-2"></p>
                      </div>
                      {inputList.map((item, index) => (
                        <div
                          className="grid grid-cols-12 md:gap-x-4 my-6"
                          key={index}
                        >
                          <div className="col-span-7">
                            <Select
                              name={`product-${index}`}
                              value={product_OPTIONS.find(
                                (option) => option.value === item.product
                              )}
                              options={product_OPTIONS}
                              styles={customStyles}
                              placeholder="Select Product"
                              onChange={(selectedOption) =>
                                handleInputChange(
                                  {
                                    target: {
                                      name: "product",
                                      value: selectedOption.value,
                                      price: selectedOption.price,
                                    },
                                  },
                                  index
                                )
                              }
                            />
                          </div>
                          <div className="col-span-3">
                            <input
                              name="productCount"
                              className={`input-field ${
                                theme === "dark" ? "dark-mode" : "light-mode"
                              }`}
                              placeholder="Count"
                              value={item.productCount}
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
                    </>

                    <p className="px-2 mt-10 mb-2 font-medium text-left text-lg">
                      Add Address
                    </p>
                    <textarea
                      name="address"
                      className={`text-area w-full text-left px-2 ${
                        theme === "dark" ? "dark-mode" : "light-mode"
                      }`}
                      rows={5}
                      placeholder="Add Address Here.."
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />

                    <div className="order-whatsapp mx-auto my-6 text-center">
                      <ReactWhatsapp
                        number="917204330876"
                        message={`I would like to place an order for ${order} \nAddress: ${address}`}
                      >
                        Place Order
                      </ReactWhatsapp>
                    </div>

                    <p className="text-sm md:text-base italic text-left">
                      Note : Once you Select Product(s) and place order you will
                      be directed to Seller's WhatsApp.
                    </p>
                  </div>
                </div>
              </div>
              {footer ?? footer}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
  // }
};

export default OrderModal;
