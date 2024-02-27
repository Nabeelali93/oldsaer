    import React, { useState } from "react";
 import { Icon } from "@iconify/react";

import { LiaExchangeAltSolid } from "react-icons/lia";

import "../app.css";
import {  useNavigate } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
 
import HeroSec from "./Comman/HeroSec";



function FlightMain() {

const nav = useNavigate()
 


const [selectedDate, setSelectedDate] = useState(null);

  const [selectedReturnDate, setselectedReturnDate] = useState(null);


  const [checkInLabel, setcheckInLabel] = useState('');


  const [checkOutLabel, setcheckOutLabel] = useState('');
  
  



  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (date) {
      setcheckInLabel(`Dep date`);
    } 
  };



  const handleDateReturn = (date) => {
    setselectedReturnDate(date);
    if (date) {
      setcheckOutLabel(`Return date`);
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

 }

  // Function to increment the counter
  const childincrement = () => {
    setchildcount(childcount + 1);
  };
 
  // Function to decrement the counter
  const childdecrement = () => {
 
   if (childcount > 0) {
     setchildcount(childcount - 1);
 }}

   // Function to increment the counter
 const infantincrement = () => {
  setinfantcount(infantcount + 1);
};

// Function to decrement the counter
const infantdecrement = () => {
 if (infantcount > 0) {
   setinfantcount(infantcount - 1);
}}







  const bookflight=()=>{

    window.scrollTo({ top: 0, behavior: 'smooth' });
  
    nav("/bookflight")
  }
  
  
  const [ismenu, setIsmenu] = useState(false);



const dropdown =()=>{

  setIsmenu(!ismenu);
}




const closeModal =()=>{
  setIsmenu(false)
}




  return (
    <>
      <div  className="bg-[#699FC9]">
        <div>
          <h1
            id="package_heading"
            className="md:text-3xl p-5 text-lg   font-bold text-white "
          >
Search Flights Around The Globe            <br />
            <span
              id="find_Best_deal"
              className="md:text-3xl  text-lg  font-normal"
            >
Find Best Deals For Air Ticket            </span>
          </h1>
        </div>

        <section className=" body-font ">
          <div className="container flex  flex-col px-5 py-2 mx-auto">
            <div className="flex">
              <div className="lg:w-[47%] w-full">
                <div className="grid  grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3">
                  <div className="p-2 border-solid border hover:bg-blue-200 cursor-pointer transition-all ease-in border-white md:w-[100px] w-full rounded">
                    <div className="flex-grow text-center text-white text-sm">
                      <span>One way</span>
                    </div>
                  </div>

                  <div className="p-2 border-solid border hover:bg-blue-200 cursor-pointer transition-all ease-in border-white md:w-[100px] w-full rounded">
                    <div className="flex-grow text-center text-white text-sm">
                      <span>Return </span>
                    </div>
                  </div>

                  <div className="p-2 border-solid border hover:bg-blue-200 cursor-pointer transition-all ease-in border-white md:w-[100px] w-full rounded">
                    <div className="flex-grow text-center text-white text-sm">
                      <span>Multi city</span>
                    </div>
                  </div>

                  <div className="p-2 border-solid border hover:bg-blue-200 cursor-pointer transition-all ease-in border-white md:w-[100px] w-full rounded">
                    <div className="flex-grow text-center text-white text-sm">
                      <span>Economy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex lg:flex-row flex-col">
              <div class="py-5 lg:w-[50%] w-full  flex">
                <div className=" h-10 border-solid border transition-all ease-in hover:bg-blue-200 cursor-pointer border-white w-full rounded">
                  <div className="flex justify-center text-white text-sm">
                   <input type="text" placeholder="Dep City" className="bg-transparent outline-none mx-auto placeholder:ml-[7px] p-2 h-full  w-full placeholder:text-white"  />
                  </div>
                </div>
                <div className="w-20 h-10 hover:bg-blue-200 cursor-pointer transition-all ease-in  bg-white rounded-full flex   flex-col ">
                  <div className="w-full flex justify-center items-center mt-2">
                    <LiaExchangeAltSolid className="text-xl justify-center items-center flex" />
                  </div>
                </div>

                <div className=" h-10 border-solid border hover:bg-blue-200 transition-all ease-in cursor-pointer border-white w-full rounded">
                  <div className="flex justify-center text-white text-sm">
                   <input type="text" placeholder="Arrival City" className="bg-transparent outline-none mx-auto placeholder:ml-[7px] p-2 h-full  w-full placeholder:text-white"  />
                  </div>
                </div>
              </div>




              <div className="lg:w-[50%] w-full flex mt-2 justify-center ">
                <div className="grid lg:grid-cols-2 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 ">




                <div className="p-2 md:h-[60px] md:w-w-full  h-16 w-full">
                    <div className="h-full flex items-center cursor-pointer  duration-300 transition-all border p-2 bg-white rounded-lg hover:bg-gray-50 active:bg-gray-100">
                      <div className="   flex justify-center  ">
                      <Icon width="22" height="22"  icon="uiw:date" color="#699fc9" />

                      </div>
                      <div className="flex-wrap p-2 flex items-center w-60">
                      <label className={`${checkInLabel ? "text-xs w-20" : " "}`}>{checkInLabel}</label>
                        <DatePicker
                          selected={selectedDate}
                          className={`${selectedDate ? "  bg-transparent text-sm outline-none " :" cursor-pointer bg-transparent outline-none"}`}
                          onChange={handleDateChange}
                          dateFormat="dd-MM-yyyy"
                          placeholderText="Dep date"
                          closeOnScroll={true}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="p-2 md:h-[60px] md:w-full  h-16 w-full">
                    <div className="h-full flex items-center cursor-pointer duration-300 transition-all  border p-2 bg-white rounded-lg hover:bg-gray-50 active:bg-gray-100">
                      <div className="   flex justify-center  ">
                      <Icon width="22" height="22"  icon="uiw:date" color="#699fc9" />

                      </div>
                      <div className="p-2 flex flex-wrap items-center">
                      <label className={`${checkOutLabel ? "text-xs   w-20" : " "}`}>{checkOutLabel}</label>
                        <DatePicker
                          selected={selectedReturnDate}
                          className={`${selectedReturnDate ? " bg-transparent text-sm outline-none " :" cursor-pointer bg-transparent outline-none"}`}                          onChange={handleDateReturn}
                          dateFormat="dd-MM-yyyy"
                          placeholderText="Return date"
                          closeOnScroll={true}

                        />
                      </div>
                    </div>
                  </div>


               {/* total passenger modal */}

               <div className="p-2 md:h-[60px] md:w-w-full h-16 w-full">
               <div
            
                 className="h-full flex items-center  border duration-300 transition-all  hover:bg-gray-50 active:bg-gray-100 cursor-pointer bg-white rounded-lg"
               >
                 <div className="   flex justify-center ml-2 ">
                 <Icon icon="carbon:passenger-plus" width="27" height="27"  color="#699fc9" />
                 </div>
                 <div className="flex-grow">





  <div className="">
          <div class="relative w-full inline-block text-left mr-10">
  <div   onClick={()=>dropdown()}    className=" flex items-center w-full ">
   
   
    {
  adultcount == 0 ?

  <button  type="button" class="inline-flex w-full  gap-x-1.5 rounded-md  px-3 py-2 text-sm  text-black shadow-sm  " id="menu-button" aria-expanded="true" aria-haspopup="true">
      Total Passengers
         </button>
  :

  <h2  className="text-gray-900  text-xs font-semibold">
 Adult:{adultcount} , 

 Child:{childcount} , 

Infant:{infantcount} 

</h2>
  
}
   
   
   
  

        </div>

<div class={`${ismenu  ? 'absolute -left-7 top-8  z-10 mt-2 w-56 origin-top-right rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1' : 'hidden'}   `}>
    <div class="py-1" >
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
                  <h3 className="text-base  px-2 font-bold">Passengers</h3>
                 
                </div>
{/* header cloase */}



{/* body start */}

<div className="relative p-2 w-full px-5 ">


                  <div className="app flex-col   w-[100%] ">



                    <div className=" border-b border-t items-center flex border-solid justify-between border-gray-500 p-1">
                      <h1 className="text-base text-gray-600">Adult
                      <p className="text-gray-500 text-[9.5px]  ">(12+ years)
                      </p>
                      </h1>
                      
                      <div className="flex   ml-5 ">
      
      <button  className="bg-gray-200 text-white active:bg-[#5f91b8]  font-bold uppercase text-sm px-2  rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
 onClick={adultdecrement}>-</button>
 <h2 className="w-6 text-center"> {adultcount}</h2>      <button  
          className="bg-[#699FC9] text-white mx-1 active:bg-[#5f91b8]  font-bold uppercase text-sm px-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"

      onClick={adultincrement}>+</button>
    </div>
                     

                    </div>



                    <div className=" border-b items-center flex border-solid justify-between border-gray-500 p-1">
                      <h1 className="text-base text-gray-600">Child
                      <p className="text-gray-500 text-[9.5px] ">(2-11 years)
                      
                     
                      </p>
                      </h1>
                      
                      <div className="flex   ml-5 ">
      
      <button  className="bg-gray-200 text-white active:bg-[#5f91b8]  font-bold uppercase text-sm px-2  rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
 onClick={childdecrement}>-</button>
       <h2 className="w-6 text-center"> {childcount}</h2>
      <button  
          className="bg-[#699FC9] text-white mx-1 active:bg-[#5f91b8]  font-bold uppercase text-sm px-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"

      onClick={childincrement}>+</button>
    </div>
                     

                    </div>




                    <div className=" border-b items-center flex border-solid justify-between border-gray-500 p-1">
                      <h1 className="text-base text-gray-600">Infant
                      <p className="text-gray-500 text-[9.5px]  ">(0-21 months)
                      
                     
                      </p>
                      </h1>
                      
                      <div className="flex   ml-5 ">
      
      <button  className="bg-gray-200 text-white active:bg-[#5f91b8]  font-bold uppercase text-sm px-2  rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
 onClick={infantdecrement}>-</button>


   <h2 className="w-6 text-center"> {infantcount}</h2>

      <button  
          className="bg-[#699FC9] text-white mx-1 active:bg-[#5f91b8]  font-bold uppercase text-sm px-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"

      onClick={infantincrement}>+</button>
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
             </div>



                  

                  <div className="p-2 md:h-[60px] md:w-w-full  h-16 w-full">
                    <div onClick={bookflight} className="h-full flex items-center cursor-pointer duration-300 transition-all border p-2 bg-white rounded-lg hover:bg-gray-50 active:bg-gray-100">
                      <div className="   flex justify-center  ">
                      <Icon icon="carbon:search" width="27" height="27"  color="#699fc9" />
                      </div>
                      <div className="flex-grow mx-2">
                        <h1 className="text-sm">Search</h1>
                      </div>
                    </div>
                  </div>



                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Button Section End */}
      </div>




      <HeroSec closeModal={closeModal} />
    

   
    </>
  );
}
export default FlightMain;


