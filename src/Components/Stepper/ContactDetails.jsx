import React from "react";
import { useState } from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import travel from "../../assests/image 76.png"; 
import Phone from "../../assests/Securepayment/Phone.png.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PaymentDetails from "./PaymentDetails";
import { Icon } from '@iconify/react';


export default function ContactDetails() {



// Date of Birth

const [dobDay, setdobDay] = useState(null);

const [dobMonth, setdobMonth] = useState(null);

const [dobYear, setdobYear] = useState(null);

// Date of Birth

const dobDayChange = (e) => {
  setdobDay(e);
};

const dobMonthChange = (e) => {
  setdobMonth(e);
};

const dobYearChange = (e) => {
  setdobYear(e);
};






  // Passport Expiry
  const [selectDay, setselectDay] = useState(null);

  const [selectMonth, setselectMonth] = useState(null);

  const [selectYear, setselectYear] = useState(null);

// Passport Expiry
  const handleDayChange = (e) => {
    setselectDay(e);
  };

  const handleMonthChange = (e) => {
    setselectMonth(e);
  };

  const handleYearChange = (e) => {
    setselectYear(e);
  };







  const [startDate, setStartDate] = useState(null);

  const [activestep1, setActiveStep1] = useState(0);

  const steps = ["Booking", "Payment", "Confirmation"];

  return (
    <>
      <div className=" justify-center items-center bg-white self-center flex w-full  flex-col px-5 py-10 max-md:max-w-full">
        <div className="flex w-full">
          <Stepper
            activeStep={activestep1}
            className="w-full  flex justify-center"
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel className="text-xs">{label} </StepLabel>
              </Step>
            ))}
          </Stepper>
          <div className="items-start  mx-3 self-center md:flex hidden w-[187px] max-w-full justify-between my-auto">
            <div className="justify-center text-neutral-400 text-center text-xs self-stretch">
              Finish Booking in
            </div>
            <div className="text-slate-400 text-center text-xs font-medium self-stretch whitespace-nowrap">
              04:58:50
            </div>
          </div>
        </div>
      </div>

      {activestep1 == 0 ? (
        <>
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
              <h1 class="sm:text-xl text-lg font-medium title-font text-[#699FC9] mb-5 text-left">
                Contact Details
              </h1>
              <div class="flex lg:flex-row flex-col flex-wrap -m-4">
                <div class="p-4 lg:w-[65%] w-full">
                  <div class=" bg-white sm:p-5 p-2 rounded">
                    <div className="flex lg:flex-nowrap flex-wrap  gap-4">
                      <div className="lg:w-[45%] md:w-[100%] w-full">
                        <label htmlFor="">Mobile Number</label>
                        <br />

                        <div className="border mt-2 rounded w-[100%] flex p-2">
                          <div className=" px-2 border-r-2">
                            <p>PK+92</p>
                          </div>

                          <input
                            type="number"
                            name=""
                            placeholder="3124567892"
                            className="outline-none sm:px-2 px-0 w-full md:w-48"
                            id=""
                            required
                          />
                        </div>
                        <p className="text-xs  px-2 mt-2 text-gray-400">
                          e.g +923456789112
                        </p>
                      </div>

                      <div className="lg:w-[55%] md:[100%] w-full">
                        <div className="flex gap-2">
                          <label htmlFor="">Email</label>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M9.99199 1.66666C5.39199 1.66666 1.66699 5.39999 1.66699 9.99999C1.66699 14.6 5.39199 18.3333 9.99199 18.3333C14.6003 18.3333 18.3337 14.6 18.3337 9.99999C18.3337 5.39999 14.6003 1.66666 9.99199 1.66666ZM10.0003 16.6667C6.31699 16.6667 3.33366 13.6833 3.33366 9.99999C3.33366 6.31666 6.31699 3.33332 10.0003 3.33332C13.6837 3.33332 16.667 6.31666 16.667 9.99999C16.667 13.6833 13.6837 16.6667 10.0003 16.6667ZM9.16699 12.5H10.8337V14.1667H9.16699V12.5ZM9.16699 5.83332H10.8337V10.8333H9.16699V5.83332Z"
                              fill="#A5A5A5"
                              fill-opacity="0.67"
                            />
                          </svg>

                          <p className="text-[9px] mt-1 text-gray-400">
                            (Your package will be Emailed here)
                          </p>
                        </div>

                        <div className="border w-[100%] mt-2 rounded flex p-2">
                          <input
                            type="email"
                            name=""
                            className="outline-none w-full px-2 "
                            id=""
                            required
                          />
                        </div>
                        <p className="text-xs  px-2 mt-2 text-gray-400">
                          e.g mailto:name@outlook.com
                        </p>
                      </div>
                    </div>

                    <div className="justify-start items-center mt-[20px] flex gap-2 ">
                      <input type="checkbox" name="" id="" />

                      <p className="text-xs font-bold">
                        I agree to receive travel related information and deals
                      </p>
                    </div>
                  </div>
                  {/* {/ Traverl Section Start  /} */}

                  <div className="container flex flex-col">
                    <div className="w-full mt-[33px] flex ">
                      <h1 className="sm:text-xl text-lg text-[#699FC9]">
                        Travel Details for adult 1
                      </h1>
                    </div>
                    <div className="w-full flex flex-col bg-white mt-[16.5px] sm:p-5 p-2">
                      <div className="flex-wrap lg:flex-row md:flex-row flex-col flex  max-w-full   ">
                        <div className=" flex  flex-col  md:w-[50%] w-full">
                          <div className="text-black mb-3 w-full text-sm  capitalize mt-2 self-start whitespace-nowrap">
                            Title{" "}
                          </div>
                          <ul className="justify-center  w-full items-center flex flex-nowrap max-w-full  my-auto">
                            <li className=" flex w-full h-10 justify-center items-center border">
                              <input
                                type="radio"
                                name="mr"
                                id="mr"
                                className="mr-3 rounded-lg "
                              />

                              <label for="mr" className=" mx-2 ">
                                Mr
                              </label>
                            </li>

                            <li className="flex border  justify-center items-center h-10  w-full">
                              <input
                                type="radio"
                                name="mr"
                                id="mrs"
                                className="mr-3 rounded-lg "
                              />
                              <label for="mrs" className=" mx-2">
                                Mrs
                              </label>
                            </li>

                            <li className="flex border mx-auto justify-center items-center  h-10 w-full">
                              <input
                                type="radio"
                                name="mr"
                                id="ms"
                                className="mr-3 rounded-lg "
                              />

                              <label for="ms" className=" mx-2">
                                Ms
                              </label>
                            </li>
                          </ul>
                        </div>

                        <div className="flex  flex-col  md:w-[50%] w-full ">
                          <div className="text-black mb-3 w-full text-sm capitalize mt-2 self-start whitespace-nowrap md:ml-7 ml-0">
                            Upload Passport image
                          </div>
                          <input
                            accept="image/*"
                            class="relative m-0 block md:w-[80%]  w-full md:ml-7 ml-0 min-w-0  cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding  py-[0.32rem] font-normal  transition duration-300 ease-in-out  file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100  file:py-[0.32rem]  file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] focus:border-primary  focus:shadow-te-primary focus:outline-none   dark:file:text-neutral-100 dark:focus:border-primary "
                            id="formFileLg"
                            type="file"
                          />
                        </div>
                      </div>

                      <div className="flex-wrap lg:flex-row md:flex-row flex-col flex  max-w-full md:my-5 my-2">
                        <div className="flex  flex-col  md:w-[50%] w-full px-2 md:mt-0 mt-5">
                          <div className="text-black w-full mb-1 text-sm capitalize self-start whitespace-nowrap">
                            Given Name
                          </div>
                          <div className="border-gray-300 rounded border items-center justify-around flex">
                            <input
                              type="text"
                              className=" object-contain w-full  object-center rounded-sm self-start  outline-none p-2"
                            />
                         <Icon icon="iconoir:info-empty" color="#a5a5a5" className="mr-2" rotate={2} />


                          </div>

                          <div className="text-zinc-500 text-opacity-70  text-[11px] lowercase mt-3 self-start whitespace-wrap">
                            Enter name as per passport to avoid boarding issues.
                          </div>
                        </div>

                        <div className="flex flex-col md:w-[50%] w-full px-2 md:mt-0 mt-5">
                          <div className="text-black w-full mb-1 text-sm capitalize self-start whitespace-nowrap">
                            Surname
                          </div>
                          <div className="border-gray-300  border rounded items-center justify-around flex">
                            <input
                              type="text"
                              className=" object-contain w-full  object-center rounded-sm self-start  outline-none p-2"
                            />
                           <Icon icon="iconoir:info-empty" color="#a5a5a5" className="mr-2" rotate={2} />


                          </div>

                          <div className="text-zinc-500 text-opacity-70  text-[11px] lowercase mt-3 self-start whitespace-wrap">
                            Enter name as per passport to avoid boarding issues.{" "}
                          </div>
                        </div>
                      </div>

                      <div className="flex-wrap lg:flex-row md:flex-row flex-col flex  max-w-full md:my-5 my-2">
                        <div className="flex  flex-col  md:w-[50%] w-full px-2 md:mt-0 mt-5">
                          <div className="text-black mb-1 w-full text-sm capitalize self-start whitespace-nowrap">
                            Date of birth{" "}
                          </div>
                          <div className="flex w-full gap-2">

<div className="flex  w-full border cursor-pointer rounded justify-around  items-center ">
<DatePicker
selected={dobDay}
onChange={(e)=>dobDayChange(e)}
dateFormat="d"
placeholderText="Date"
className=" p-2 w-full outline-none"
/>

</div>



<div className="flex w-full border cursor-pointer rounded justify-around  items-center ">
<DatePicker
selected={dobMonth}
onChange={(e)=>dobMonthChange(e)}
dateFormat="d"
placeholderText="Month"
showMonthYearPicker
className=" p-2 w-full outline-none"
/>
</div>

<div className="flex w-full border cursor-pointer rounded justify-around  items-center ">
<DatePicker
selected={dobYear}
onChange={(e)=>dobYearChange(e)}
dateFormat="yyyy"
placeholderText="Year"
showYearPicker
className=" p-2 w-full outline-none   "
/>
</div>


</div>
                        </div>

                        <div className="flex  flex-col md:w-[50%] w-full px-2  md:mt-0 mt-5">
                          <div className="text-black  mb-1 text-sm w-full capitalize self-start whitespace-nowrap">
                            Nationality
                          </div>
                          <div className="border-gray-300 rounded border items-center  flex">
                            <input
                              type="text"
                              placeholder="Pakistan"
                              className=" object-contain w-full  object-center  self-start  outline-none p-2 "
                            />
    <svg width="24" className="flex text-end w-full" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="ic:baseline-keyboard-arrow-down">
<path id="Vector" d="M7.41 8.59003L12 13.17L16.59 8.59003L18 10L12 16L6 10L7.41 8.59003Z" fill="#A5A5A5"/>
</g>
</svg>

                          </div>

                        </div>
                      </div>

                      <div className="flex-wrap lg:flex-row md:flex-row flex-col flex  max-w-full md:my-5 my-2">
                        <div className="flex flex-col md:w-[50%] w-full px-2 md:mt-0 mt-5">
                          <div className="text-black  mb-1 w-full text-sm capitalize self-start whitespace-nowrap">
                            Passport Number{" "}
                          </div>
                            <input
                              type="text"
                              className=" object-contain border-gray-300  border w-full   object-center rounded self-start  outline-none p-2"
                            />



                       

                        </div>

                        <div className="flex grow flex-col md:w-[50%] w-full px-2 md:mt-0 mt-5">
                          <div className="text-black  mb-1 text-sm w-full capitalize self-start whitespace-nowrap">
                            Passport Expiry{" "}
                          </div>
                          
                          <div className="flex gap-2">

<div className="flex w-full border cursor-pointer rounded justify-around  items-center ">
<DatePicker
selected={selectDay}
onChange={(e)=>handleDayChange(e)}
dateFormat="d"
placeholderText="Date"
className=" p-2 w-full outline-none   "
/>
</div>



<div className="flex w-full border cursor-pointer rounded justify-around  items-center ">
<DatePicker
selected={selectMonth}
onChange={(e)=>handleMonthChange(e)}
dateFormat="d"
placeholderText="Month"
showMonthYearPicker
className=" p-2 w-full outline-none   "
/>
</div>

<div className="flex w-full border cursor-pointer rounded justify-around  items-center ">
<DatePicker
selected={selectYear}
onChange={(e)=>handleYearChange(e)}
dateFormat="yyyy"
placeholderText="Year"
showYearPicker
className=" p-2 w-full outline-none   "
/>
</div>


</div>

                          <div className="text-zinc-500 text-opacity-70  text-xs lowercase mt-3 self-start whitespace-wrap">
                            Please ensure your passport is currently valid.{" "}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex md:justify-end justify-center w-full  p-5">
                      <button
                        onClick={() => setActiveStep1(+1)}
                        className="bg-[#699FC9] lg:w-1/3 md:w-1/2 w-full py-2 sm:text-sm text-sm text-white rounded-lg px-1"
                      >
                        Create Booking
                      </button>
                    </div>
                  </div>

                  {/* {/ Traverl Section End  /} */}
                </div>

                <div class="p-4 lg:w-[35%] w-full  flex md:flex-col flex-col-reverse">
                  <div class="lg:h-96 md:h-[40%] rounded ">
                    <div className="flex bg-white items-center md:gap-1 justify-start p-5 lg:gap-2 ">
                      <svg
                        className="h-10 w-10  lg:h-8 lg:w-8 "
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="ic:outline-verified-user">
                          <path
                            id="Vector"
                            d="M14 1.16666L3.5 5.83332V12.8333C3.5 19.3083 7.98 25.3633 14 26.8333C20.02 25.3633 24.5 19.3083 24.5 12.8333V5.83332L14 1.16666ZM22.1667 12.8333C22.1667 18.1067 18.69 22.9717 14 24.4183C9.31 22.9717 5.83333 18.1067 5.83333 12.8333V7.34999L14 3.72166L22.1667 7.34999V12.8333ZM8.645 13.5217L7 15.1667L11.6667 19.8333L21 10.5L19.355 8.84332L11.6667 16.5317L8.645 13.5217Z"
                            fill="#699FC9"
                          />
                        </g>
                      </svg>

                      <p class="sm:text-sm text-xs">
                        Pakistan’s most reliable booking platform!
                      </p>
                    </div>

                    <div className="flex bg-white  md:flex-col items-center gap-2 mt-5">
                      <div class="container flex flex-wrap  items-center">
                        <div class="lg:w-1/2 md:w-[30%] w-full md:justify-start justify-center flex ">
                          <img src={travel} alt="" />
                        </div>
                        <div class="flex flex-col lg:w-1/2 md:w-[70%] w-full justify-center md:p-3 p-5 ">
                          <p className="sm:text-sm text-xs">
                            Sign in to book faster using Passenger Quick pick
                            and exclusive vouchers!
                          </p>
                        </div>
                        <div className="flex justify-center w-full p-3">
                          <button className="bg-[#699FC9] w-full py-2 text-white rounded-lg sm:text-lg text-sm">
                            Start
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="   w-full md:flex-row">
             
             <div class=" lg:px-4 px-0">
     
             <div className=" drop-shadow-sm   border-b border-t  rounded-xl border-gray-300  items-center w-full flex    md:py-2 py-4 lg:mt-0 md:mt-5 ">
  <div className="items-start w-full self-center  flex  max-w-full md:gap-3 gap-2  lg:gap-4  my-3">

    <div className="items-start gap-3 w-full flex flex-col  ">
 
      <div className="text-[#699FC9] ml-3 w-full text-opacity-80 text-left text-[14px] sm:text-[1.2rem]   self-start">
      Price Summary
      </div> 
       <div className="w-full">
          <div className='flex bg-white w-full items-center  border py-5 px-1  rounded j  '>
                  <p className='lg:text-[12px] w-full  sm:text-[14px] text-[10px]'>qatar airway (Adult x 1)</p>

                  <p className='lg:text-[12px] w-full sm:text-[14px] text-right text-[10px] text-black font-bold'>PKR 228,000</p>
                </div>


                <div className='flex bg-white w-full items-center  border py-5 px-1 rounded   '>
                  <p className='lg:text-[12px] w-full  sm:text-[14px] text-[10px]'>Price you pay</p>

                  <p className='lg:text-[12px] w-full  sm:text-[14px] text-right text-[10px] text-black font-bold'>PKR 228,000</p>
                </div>
       </div>
    </div>

  </div>
</div>
     
     
     {/* {/ price summery end /} */}
     
     
                   <div class="h-full   bg-opacity-75  pt-3 pb-24 rounded-lg overflow-hidden text-center relative">
                   
     
     <div className='my-5 flex justify-start  '>
     <select name="" id="" className=' text-[#699FC9] text-[14px] sm:text-[1.2rem] focus:outline-none  bg-transparent'>
       <option value="">Your Booking</option>
     </select>
     </div>
     
     <div className='flex items-center mt-2 p-2 bg-white rounded-lg'>
       <div className='flex justify-center items-center '>
         <div className=' justify-center items-center flex '>
         <img src={Phone} alt="" className='lg:h-5 lg:w-20 md:h-10 w-10  h-10 object-contain'  />
     
         </div>
     
         <div className=' justify-center items-center flex '>
     <p className='text-left px-3 leading-5 sm:text-[14px] text-[9px] text-[#A5A5A5]'>
     having a trouble making a payment? contact our helpline for assistance
     <span className='text-black sm:text-[12px] text-[9px]'> (021)111172782</span>
     
     </p>
     </div>
     
       </div>
     
     
     </div>
     
     
     
     
     
                
                    
                   </div>
                 </div>
                 
                             </div>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          {window.scrollTo({ top: 0, behavior: "smooth" })}
          <PaymentDetails />
        </>
      )}
    </>
  );
}