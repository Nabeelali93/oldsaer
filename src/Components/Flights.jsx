import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import qatar from "../assests/flight/qatar.png";

import "../app.css";
import { Icon } from "@iconify/react";
function Flight() {
  const nav = useNavigate();

  const gohotel = () => {
    nav("/gethotel");
  };

  return (
    <>
      <div className="flex md:flex-nowrap flex-wrap  gap-1 ">
        <div className=" md:w-1/5 w-full  md:m-0 m-auto  p-3 bg-white ">
          <h1 className="text-xl ">Price</h1>
          <h1 className="text-[20px]  my-2 text-gray-400">Rs 228,000</h1>

          <input type="range" className="md:w-full w-40" />
          <br />
          <hr className=" bg-black" />
          <br />
          <h1 className="text-xl ">Stops</h1>
          <div className="space-x-2 text-gray-400 items-center my-2">
            <input type="checkbox" />
            <label htmlFor="" className="">
              1 stop
            </label>
          </div>
          <br />
          <hr className=" bg-black" />
          <br />

          <h1 className="text-xl ">Flights</h1>

          <div className="space-x-2 text-gray-400 items-center my-2">
            <input type="checkbox" />
            <label htmlFor="" className=" text-sm">
              Saudia arabia airlines
            </label>
          </div>
          <div className="space-x-2 text-gray-400 items-center ">
            <input type="checkbox" />
            <label htmlFor="" className="text-sm">
              Qatar airways
            </label>
          </div>



          <button className="bg-[#699FC9] mt-5 p-2.5 rounded-tl-xl rounded-bl-xl flex items-center text-xs text-white float-right  "><Icon className="mx-1" icon="icon-park-twotone:change-date-sort" height="22" width="22" color="white" />
Change travel date
</button>

        </div>

        

        <div className="md:w-4/5 w-full  flex-row  ">
          <div className="  flex justify-between h-20 my-5">
            <h1 className="md:m-5 m-0 mt-5 ml-3 ">
              Flights <span className="text-[#B3B3B3]">Found</span>{" "}
            </h1>
            <input
              type="text"
              placeholder="Sort by : Price - low to high"
              className="border bg-transparent border-gray-400 placeholder:text-sm outline-none md:p-5 p-2 mt-3 ml-3 mr-3 rounded-sm h-10 md:w-[235px] w-40 md:m-5 m-0 "
              readOnly
            />
          </div>





          <div className="bg-white p-[20px] w-[97%] rounded-lg m-2">
            <div className="bg-white flex flex-col   rounded-lg ">
              <div className="self-stretch  flex flex-col    max-md:max-w-full ">
                <div className="w-[98%] max-w-full   max-md:mr-2.5 ">
                  <div className="gap-2 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
                      <div className=" flex grow flex-col w-full max-md:max-w-full max-md:mt-10">
                        <div className=" self-stretch flex w-full items-start justify-between max-md:flex-wrap max-md:justify-center ">
                          <div className=" flex w-[215px] max-w-full items-start justify-between gap-5  self-start">
                            <div className="flex flex-col self-start">
                              <img
                                loading="lazy"
                                src={qatar}
                                className="aspect-[2.25]  border-gray-200 border object-center w-18  h-14 rounded-xl justify-center items-center overflow-hidden "
                              />
                              <div className="text-black text-xs font-light leading-10 self-center ">
                                QATAR airways
                              </div>
                            </div>
                            <div className="items-start flex flex-col w-[115px] mt-1.5 self-start">
                              <div className="text-black text-lg  self-start">
                                09:45 AM{" "}
                              </div>
                              <div className="text-neutral-400 text-xs self-start">
                                12 sep
                              </div>
                              <div className="text-neutral-400 text-xs  self-start">
                                {" "}
                                Lahore (LHE)
                              </div>
                            </div>
                          </div>

                          <div className=" flex flex-col md:w-[30%] mt-1.5 justify-center items-center w-full text-center ">
                            <div className="text-zinc-500 text-xs self-stretch pb-2">
                              1h 50m
                            </div>

                            <div className="text-zinc-500 text-xs self-center border-t w-full pt-2">
                              KHI
                            </div>
                          </div>

                          <div className="items-start flex flex-col ml-[10px] self-start">
                            <div className="text-black text-lg  self-start">
                              09:10 PM
                            </div>
                            <div className="text-neutral-400 text-xs  self-start">
                              12 sep
                            </div>
                            <div className="text-neutral-400 text-xs uppercase self-start">
                              Jeddah (Jed)
                            </div>
                          </div>

                          <div className="justify-center items-center flex  ml-[30px] max-w-full flex-col self-start ">
                            <div className="text-black text-lg ">07h 50m</div>
                            <div className="text-slate-400 text-xs uppercase self-center ">
                              1 stop
                            </div>
                            <div className=" text-red-400  text-[9px] font-light text-center p-1  justify-center items-center rounded w-[120px] max-w-full mt-6    border-[0.5px] border-solid border-red-100">
                              3 seats available
                            </div>
                          </div>
                        </div>

                        <hr className="border-gray-200 md:w-[100%] w-full  my-5" />

                        <div className=" self-stretch flex w-full items-start justify-between max-md:flex-wrap max-md:justify-center">
                          <div className=" flex w-[215px] max-w-full items-start justify-between gap-5  self-start">
                            <div className="flex flex-col self-start">
                              <img
                                loading="lazy"
                                src={qatar}
                                className="aspect-[2.25]  border-gray-200 border rounded-xl object-center w-18 h-14 justify-center items-center overflow-hidden "
                              />
                              <div className="text-black text-xs font-light leading-7 self-center ">
                                <h1>QATAR airways</h1>
                                <p className="text-[#699FC9] text-xs">
                                  {" "}
                                  Saudia Sv 223
                                </p>
                              </div>
                            </div>
                            <div className="items-start flex flex-col mt-1.5 w-[115px] self-start">
                              <div className="text-black text-lg  self-start">
                                09:45 AM{" "}
                              </div>
                              <div className="text-neutral-400 text-xs self-start">
                                12 sep
                              </div>
                              <div className="text-neutral-400 text-xs  self-start">
                                {" "}
                                Lahore (LHE)
                              </div>
                            </div>
                          </div>

                          <div className=" flex flex-col md:w-[30%] mt-1.5 justify-center items-center w-full text-center ">
                            <div className="text-zinc-500 text-xs  border-b  self-stretch pb-2">
                              Non Stop
                            </div>
                          </div>

                          <div className="items-start flex flex-col ml-[10px] self-start">
                            <div className="text-black text-lg  self-start">
                              09:10 PM
                            </div>
                            <div className="text-neutral-400 text-xs  self-start">
                              12 sep
                            </div>
                            <div className="text-neutral-400 text-xs uppercase self-start">
                              Jeddah (Jed)
                            </div>
                          </div>

                          <div className="justify-center items-center flex  ml-[30px] max-w-full flex-col self-start ">
                            <div className="text-black text-lg ">07h 50m</div>
                            <div className="text-[#699FC9] text-xs uppercase self-center ">
                              NON Stop
                            </div>

                            <div className=" text-[#699FC9]  text-[9px] font-light text-center p-1  justify-center items-center rounded w-[120px] max-w-full mt-6    border-[0.5px] border-solid border-red-100">
                              9 seats available
                            </div>
                          </div>
                        </div>

                        <hr className="border-gray-200 md:w-[100%] w-full  my-5" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="items-end flex  max-w-full justify-end float-right gap-5 mr-3 mt-2.5  max-md:mr-2.5">
                  <div className="items-end self-stretch flex justify-between gap-1.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/514f4e9b-8a49-40a6-8525-a6e35b7dd9d1?"
                      className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center max-w-full my-auto"
                    />
                    <div className="text-slate-400 text-center text-sm self-stretch whitespace-nowrap">
                      Total: 30 kg psc: 2
                    </div>
                  </div>
                  <div className="items-end self-stretch flex justify-between gap-1.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc1f24b2-addf-4cd2-9604-d6ae2e0bf9e9?"
                      className="aspect-square object-contain object-center w-full overflow-hidden flex-1 my-auto"
                    />
                    <div className="text-slate-400 text-center text-sm self-stretch whitespace-nowrap">
                      Meal
                    </div>
                  </div>
                </div>

                <div className="flex w-[98%] max-w-full items-start justify-between gap-5 mt-7  max-md:flex-wrap max-md:justify-center">
                  <div className="text-sky-700 text-base self-center whitespace-nowrap justify-center items-center rounded bg-sky-100 w-[122px] max-w-full my-auto px-4 py-2">
                    Refundable
                  </div>
                  <div className="text-neutral-700 text-base my-auto">
                    <span className="font-semibold text-black text-opacity-90">
                      PKR 2,28000
                    </span>
                    <span className=" text-black text-opacity-90">/</span>
                    <span className=" text-neutral-700"> 1 Person</span>
                  </div>
                  <div
                    onClick={gohotel}
                    className="text-white cursor-pointer text-lg font-medium self-stretch whitespace-nowrap justify-center items-center rounded bg-[#699FC9] w-[120px] max-w-full px-5 py-2.5"
                  >
                    Continue
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </>
  );
}

export default Flight;
