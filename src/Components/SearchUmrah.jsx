import React, { useState } from "react";

import "../app.css";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import HeroSec from "./Comman/HeroSec";

function SearchUmrah() {
  // const [startDate, setStartDate] = useState(new Date());

  const [selectedDate, setSelectedDate] = useState(null);

  const [selectedReturnDate, setselectedReturnDate] = useState(null);

  const [returnLable, setreturnLable] = useState("");

  const [travelLabel, settravelLabel] = useState("");

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (date) {
      settravelLabel(`Date of Travel`);
    }
  };

  const handleDateReturn = (date) => {
    setselectedReturnDate(date);
    if (date) {
      setreturnLable(`Return Date`);
    }
  };

  // State to hold the counter value
  const [adultcount, setadultcount] = useState(0);

  const [childcount, setchildcount] = useState(0);
  const [infantcount, setinfantcount] = useState(0);

  // Function to increment the counter
  const adultincrement = () => {
    setadultcount(adultcount + 1);
  };

  // Function to decrement the counter
  const adultdecrement = () => {
    if (adultcount > 0) {
      setadultcount(adultcount - 1);
    }
  };

  // Function to increment the counter
  const childincrement = () => {
    setchildcount(childcount + 1);
  };

  // Function to decrement the counter
  const childdecrement = () => {
    if (childcount > 0) {
      setchildcount(childcount - 1);
    }
  };

  // Function to increment the counter
  const infantincrement = () => {
    setinfantcount(infantcount + 1);
  };

  // Function to decrement the counter
  const infantdecrement = () => {
    if (infantcount > 0) {
      setinfantcount(infantcount - 1);
    }
  };

  const [ismenu, setIsmenu] = useState(false);

  const dropdown = () => {
    setIsmenu(!ismenu);
  };

  return (
    <>
      <div className="md:mt-0  bg-[#699FC9]">
        <div>
          <h1
            id="package_heading"
            className="md:text-3xl md:p-6 text-xl md:py-8  md:text-left text-center md:mt-0 py-3  font-bold text-white "
          >
            Search Umrah Packages
            <br />
            <span
              id="find_Best_deal"
              className="md:text-3xl  text-lg  font-normal"
            >
              Find Best Deals For Umrah Trip
            </span>
          </h1>
        </div>

        {/* Button Section Start */}
        <section className=" body-font  md:mx-auto ">
          <div className="container flex   px-5 py-10 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
              <div className="p-2 md:h-[60px] md:w-full h-16 w-full ">
                <div className="h-full  flex items-center cursor-pointer  border duration-300 transition-all ease-in-out  bg-white rounded-lg hover:bg-gray-50 active:bg-gray-100">
                  <div className="   flex justify-center p-2 ">
                    <Icon
                      width="22"
                      height="22"
                      icon="uiw:date"
                      color="#699fc9"
                    />
                  </div>
                  <div className=" inline">
                    <label className={`${travelLabel ? "text-xs  ml-3" : " "}`}>
                      {travelLabel}
                    </label>

                    <DatePicker
                      selected={selectedDate}
                      dateFormat="dd-MM-yyyy"
                      className={`${
                        travelLabel
                          ? "ml-3   bg-transparent outline-none "
                          : " cursor-pointer bg-transparent outline-none"
                      }`}
                      onChange={handleDateChange}
                      placeholderText="Date of Travel"
                      closeOnScroll={true}
                    />
                  </div>
                </div>
              </div>

              <div className="p-2 md:h-[60px] md:w-full h-16 w-full ">
                <div className="h-full flex items-center  border duration-300 transition-all ease-in-out  hover:bg-gray-50 active:bg-gray-100 cursor-pointer bg-white rounded-lg">
                  <div className="   flex justify-center  p-2  ">
                    <Icon
                      width="22"
                      height="22"
                      icon="uiw:date"
                      color="#699fc9"
                    />
                  </div>
                  <div className=" inline">
                    <label className={`${returnLable ? "text-xs ml-3" : " "}`}>
                      {returnLable}
                    </label>

                    <DatePicker
                      selected={selectedReturnDate}
                      dateFormat="dd-MM-yyyy"
                      className={`${
                        returnLable
                          ? "ml-3  bg-transparent outline-none "
                          : " cursor-pointer bg-transparent outline-none"
                      }`}
                      onChange={handleDateReturn}
                      placeholderText="Return Date"
                      closeOnScroll={true}
                    />
                  </div>
                </div>
              </div>

              <div className="p-2 md:h-[60px] md:w-w-full h-16 w-full">
                <div className="h-full flex items-center  border p-2 duration-300 transition-all ease-in-out hover:bg-gray-50 active:bg-gray-100 cursor-pointer bg-white rounded-lg">
                  <div className="   flex justify-center -ml-1 ">
                    <Icon
                      icon="fluent-mdl2:city-next-2"
                      height="27"
                      color="#699FC9"
                      width="27"
                    />
                  </div>
                  <div className="flex-grow text-[0.995rem]">
                    <select
                      required
                      className="outline-none bg-transparent w-full"
                    >
                      <option value="" selected disabled>
                        Choose your city
                      </option>

                      <option value="">Karachi</option>
                      <option value="a-value-here">Lahore</option>
                      <option value="a-value-here">Islamabad</option>
                      <option value="a-value-here">Sialkot</option>
                      <option value="a-value-here">Multan</option>
                      <option value="a-value-here">Peshawar</option>
                    </select>{" "}
                  </div>
                </div>
              </div>

              {/* total passenger modal */}

              <div className="p-2 md:h-[60px] md:w-w-full h-16 w-full ">
                <div className="h-full flex items-center  border duration-300 transition-all ease-in-out hover:bg-gray-50 active:bg-gray-100 cursor-pointer bg-white rounded-lg">
                  <div className="   flex justify-center ml-2 ">
                    <Icon
                      icon="carbon:passenger-plus"
                      color="#699fc9"
                      height="27"
                      width="27"
                    />
                  </div>

                  <div className="flex-grow">
                    <div className="">
                      <div class="relative w-full inline-block text-start mr-10">
                        <div
                          onClick={() => dropdown()}
                          className="flex  items-center w-full "
                        >
                          {adultcount == 0 ? (
                            <button
                              type="button"
                              class="inline-flex w-full  gap-x-1.5 rounded-md  px-3 py-2 text-sm  text-black shadow-sm  "
                              id="menu-button"
                              aria-expanded="true"
                              aria-haspopup="true"
                            >
                              Total Passengers
                            </button>
                          ) : (
                            <h2 className="text-gray-900  text-xs font-semibold">
                              Adult:{adultcount} , Child:{childcount} , Infant:
                              {infantcount}
                            </h2>
                          )}
                        </div>

                        <div
                          class={`${
                            ismenu
                              ? "absolute -left-9 right-0 z-10 mt-3 w-56  rounded-md  shadow-lg  focus:outline-none"
                              : "hidden"
                          }   `}
                        >
                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-center   p-2  rounded-t">
                              <svg
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="17"
                                height="17"
                                viewBox="0 0  256 256"
                                enable-background="new 0 0 256 256"
                              >
                                <g>
                                  <g>
                                    <path
                                      fill="#699FC9"
                                      d="M133,132.6c38.1,12.6,65.8,49.9,65.8,93.8c0,4.3-0.3,8.5-0.8,12.6l0,0H10.8c-0.5-4.1-0.8-8.4-0.8-12.6c0-44,27.6-81.2,65.8-93.8c-18.1-10.5-30.4-30.8-30.4-54c0-34.1,26.4-61.7,59-61.7c32.6,0,59,27.6,59,61.7C163.4,101.8,151.1,122.1,133,132.6L133,132.6z M222.4,226.8h22.8c0.5-4,0.8-8,0.8-12.1c0-39.5-24.2-72.9-57.7-84.2l0,0c17.4-9.7,29.4-29.2,29.4-51.7c0-31.4-23.1-56.9-52.1-58.1C178.9,35.9,187,56.3,187,78.6c0,17.7-5.1,34.1-13.8,47.8C203,148.9,222.4,185.4,222.4,226.8L222.4,226.8L222.4,226.8L222.4,226.8z"
                                    />
                                  </g>
                                </g>
                              </svg>
                              <h3 className="text-base  px-2 font-bold">
                                Passengers
                              </h3>
                            </div>
                            {/* header cloase */}

                            {/* body start */}

                            <div className="relative p-2 w-full px-5 ">
                              <div className="app  flex-col   w-[100%] ">
                                <div className=" border-b border-t items-center flex border-solid justify-between border-gray-500 p-1">
                                  <h1 className="text-base text-gray-600">
                                    Adult
                                    <p className="text-gray-500 text-[9.5px]  ">
                                      (12+ years)
                                    </p>
                                  </h1>

                                  <div className="flex   ml-5 ">
                                    <button
                                      className="bg-gray-200 text-white active:bg-[#5f91b8]  font-bold uppercase text-sm px-2  rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                      onClick={adultdecrement}
                                    >
                                      -
                                    </button>
                                    <h2 className="w-6 text-center">
                                      {" "}
                                      {adultcount}
                                    </h2>{" "}
                                    <button
                                      className="bg-[#699FC9] text-white mx-1 active:bg-[#5f91b8]  font-bold uppercase text-sm px-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                      onClick={adultincrement}
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>

                                <div className=" border-b items-center flex border-solid justify-between border-gray-500 p-1">
                                  <h1 className="text-base text-gray-600">
                                    Child
                                    <p className="text-gray-500 text-[9.5px] ">
                                      (2-11 years)
                                    </p>
                                  </h1>

                                  <div className="flex   ml-5 ">
                                    <button
                                      className="bg-gray-200 text-white active:bg-[#5f91b8]  font-bold uppercase text-sm px-2  rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                      onClick={childdecrement}
                                    >
                                      -
                                    </button>
                                    <h2 className="w-6 text-center">
                                      {" "}
                                      {childcount}
                                    </h2>
                                    <button
                                      className="bg-[#699FC9] text-white mx-1 active:bg-[#5f91b8]  font-bold uppercase text-sm px-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                      onClick={childincrement}
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>

                                <div className=" border-b items-center flex border-solid justify-between border-gray-500 p-1">
                                  <h1 className="text-base text-gray-600">
                                    Infant
                                    <p className="text-gray-500 text-[9.5px]  ">
                                      (0-21 months)
                                    </p>
                                  </h1>

                                  <div className="flex   ml-5 ">
                                    <button
                                      className="bg-gray-200 text-white active:bg-[#5f91b8]  font-bold uppercase text-sm px-2  rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                      onClick={infantdecrement}
                                    >
                                      -
                                    </button>

                                    <h2 className="w-6 text-center">
                                      {" "}
                                      {infantcount}
                                    </h2>

                                    <button
                                      className="bg-[#699FC9] text-white mx-1 active:bg-[#5f91b8]  font-bold uppercase text-sm px-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                      onClick={infantincrement}
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* body end */}

                            {/* footer start */}
                            <div className="flex items-center justify-evenly p-1 py-2  rounded-b">
                              <button
                                className="bg-[#699FC9] text-white active:bg-[#5f91b8]  font-bold uppercase text-sm px-4 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => dropdown()}
                              >
                                Done
                              </button>
                            </div>

                            {/* footer end */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-2 md:h-[60px] md:w-w-full h-16 w-full">
                <div className="h-full flex items-center  border p-2 duration-300 transition-all ease-in-out hover:bg-gray-50 active:bg-gray-100 cursor-pointer bg-white rounded-lg">
                  <div className="   flex justify-center mr-2 ">
                    <Icon
                      icon="icon-park-outline:hotel"
                      color="#699fc9"
                      height="27"
                      width="27"
                    />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-gray-900  text-[0.995rem]">
                      Hotel Nights
                    </h2>
                  </div>
                </div>
              </div>

              <div className="p-2 md:h-[60px] h-16 w-full ">
                <div className="h-full flex items-center  border px-2 duration-300 transition-all ease-in-out hover:bg-gray-50 active:bg-gray-100 cursor-pointer bg-white rounded-lg">
                  <div className="   flex justify-center mr-2 ">
                    <Icon
                      icon="mingcute:bus-2-line"
                      height="29"
                      width="29"
                      color="#699fc9"
                    />
                  </div>

                  <div className="flex-grow w-[75%]   ">
                    <div className="   h-12 flex justify-around  items-center   text-black  ">
                      <h2 className="text-gray-900 text-[0.995rem]">
                        Transport
                      </h2>

                      <label className="font-normal  text-xs" htmlFor="yes">
                        Yes
                      </label>
                      <input type="radio" name="visa" id="yes" />
                      <label className="font-normal text-xs" htmlFor="no">
                        No
                      </label>
                      <input type="radio" name="visa" id="no" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-2 md:h-[60px] md:w-w-full  h-16 w-full">
                <div className="h-full flex items-center  border p-2 duration-300 transition-all ease-in-out hover:bg-gray-50 active:bg-gray-100 cursor-pointer bg-white rounded-lg">
                  <div className="   flex justify-center  ">
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 38 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="passport-1-svgrepo-com 1">
                        <g id="SVGRepo_iconCarrier">
                          <g id="Passport 1">
                            <g id="Group">
                              <path
                                id="Vector"
                                d="M17.8923 30.0745H4.67238C3.69845 30.0745 2.76442 29.7128 2.07574 29.069C1.38707 28.4252 1.00018 27.5519 1.00018 26.6414V6.21878C1.00018 5.30827 1.38707 4.43505 2.07574 3.79123C2.76442 3.1474 3.69845 2.78571 4.67238 2.78571H17.8923C18.8662 2.78571 19.8003 3.1474 20.4889 3.79123C21.1776 4.43505 21.5645 5.30827 21.5645 6.21878V26.6414C21.5645 27.5519 21.1776 28.4252 20.4889 29.069C19.8003 29.7128 18.8662 30.0745 17.8923 30.0745ZM4.67238 4.15893C4.08802 4.15893 3.5276 4.37595 3.1144 4.76225C2.7012 5.14854 2.46906 5.67247 2.46906 6.21878V26.6414C2.46906 27.1877 2.7012 27.7117 3.1144 28.098C3.5276 28.4843 4.08802 28.7013 4.67238 28.7013H17.8923C18.4766 28.7013 19.0371 28.4843 19.4503 28.098C19.8635 27.7117 20.0956 27.1877 20.0956 26.6414V6.21878C20.0956 5.67247 19.8635 5.14854 19.4503 4.76225C19.0371 4.37595 18.4766 4.15893 17.8923 4.15893H4.67238Z"
                                fill="#699FC9"
                              />
                              <path
                                id="Vector_2"
                                d="M11.2824 17.2032C10.2656 17.2032 9.27159 16.9214 8.42615 16.3932C7.5807 15.8651 6.92176 15.1145 6.53264 14.2362C6.14352 13.358 6.04171 12.3916 6.24008 11.4593C6.43845 10.5269 6.92809 9.67055 7.64709 8.99837C8.36608 8.3262 9.28213 7.86844 10.2794 7.68299C11.2767 7.49754 12.3104 7.59272 13.2498 7.9565C14.1892 8.32027 14.9921 8.93631 15.557 9.7267C16.1219 10.5171 16.4235 11.4463 16.4235 12.3969C16.4235 13.6716 15.8818 14.8942 14.9177 15.7955C13.9535 16.6969 12.6459 17.2032 11.2824 17.2032ZM11.2824 8.96387C10.5561 8.96387 9.8461 9.16521 9.24221 9.54244C8.63832 9.91968 8.16765 10.4558 7.88971 11.0832C7.61177 11.7105 7.53905 12.4007 7.68074 13.0667C7.82243 13.7326 8.17217 14.3444 8.68574 14.8245C9.19931 15.3046 9.85363 15.6316 10.566 15.764C11.2783 15.8965 12.0167 15.8285 12.6877 15.5687C13.3587 15.3088 13.9322 14.8688 14.3357 14.3043C14.7392 13.7397 14.9546 13.0759 14.9546 12.3969C14.9546 11.4864 14.5677 10.6132 13.879 9.96939C13.1903 9.32557 12.2563 8.96387 11.2824 8.96387Z"
                                fill="#699FC9"
                              />
                              <path
                                id="Vector_3"
                                d="M15.689 25.271H6.87574C6.68095 25.271 6.49414 25.1987 6.35641 25.0699C6.21867 24.9411 6.1413 24.7665 6.1413 24.5844C6.1413 24.4023 6.21867 24.2276 6.35641 24.0989C6.49414 23.9701 6.68095 23.8978 6.87574 23.8978H15.689C15.8838 23.8978 16.0706 23.9701 16.2083 24.0989C16.3461 24.2276 16.4234 24.4023 16.4234 24.5844C16.4234 24.7665 16.3461 24.9411 16.2083 25.0699C16.0706 25.1987 15.8838 25.271 15.689 25.271Z"
                                fill="#699FC9"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>{" "}
                  </div>
                  <div className="flex-grow  md:w-52 sm:[300px]  h-12 flex justify-between  items-center   text-black  ">
                    <h2 className="text-gray-900 text-[0.995rem]">
                      Umrah Visa
                    </h2>

                    <label className="font-normal  text-xs" htmlFor="yes">
                      Yes
                    </label>
                    <input type="radio" name="visa" id="yes" />
                    <label className="font-normal text-xs" htmlFor="no">
                      No
                    </label>
                    <input type="radio" name="visa" id="no" />
                  </div>
                </div>
              </div>

              <div className="p-2 md:h-[60px] md:w-w-full h-16 w-full text-center">
                <div className="h-full flex   border p-2.5 duration-300 transition-all ease-in-out hover:bg-gray-50 active:bg-gray-100 cursor-pointer bg-[#E4F0FF] rounded-lg">
                  <div className="   flex justify-center mr-4 "></div>
                  <div className="flex-grow">
                    <Link to="/flight">
                      <h2 className="text-[#699FC9] text-[0.995rem]">
                        Continue
                      </h2>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Images */}
            </div>
          </div>
        </section>

        {/* Button Section End */}
      </div>

      <HeroSec />
    </>
  );
}
export default SearchUmrah;
