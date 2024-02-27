import React, { useState } from "react";

import qatar from '../assests/flight/qatar.png'

import { Icon } from "@iconify/react";
import { LiaExchangeAltSolid } from "react-icons/lia";

import "../app.css";
import { Link,useNavigate } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




function Modifyflight() {

const nav = useNavigate()


const goflightinformation=()=>{
  window.scrollTo({ top: 0, behavior: 'smooth' });

  nav("/Flightinformation")

  
}

const [ismenu, setIsmenu] = useState(false);



const dropdown =()=>{

  setIsmenu(!ismenu);
}

  const [PassengerModal, setPassengerModal] = useState(false);

  const [Qustions, setQustions] = useState(false);


  // const [startDate, setStartDate] = useState(new Date());


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
  
  
const getPassenger =()=>{
  setPassengerModal(false)
  
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
  <div  onClick={()=>dropdown()}    className=" flex items-center w-full ">
   
   
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



      
      <div className="flex md:flex-nowrap flex-wrap  gap-1 ">
        
      

        <div className=" md:w-1/5 w-full  md:m-0 m-auto  p-3 bg-white ">
        <h1 className="text-xl ">Price</h1>
        <h1 className="text-[20px]  my-2 text-gray-400">Rs 228,000</h1>
      
        <input type="range" className="md:w-full w-40"/>
        <br />
        <hr  className=" bg-black"/>
        <br />
        <h1 className="text-xl ">Stops</h1>
      <div className="space-x-2 text-gray-400 items-center my-2">
      <input type="checkbox"/>
        <label htmlFor="" className="">1 stop</label>
      </div>
        <br />
        <hr  className=" bg-black"/>
        <br />
      
        <h1 className="text-xl ">Flights</h1>
      
        <div className="space-x-2 text-gray-400 items-center my-2">
      <input type="checkbox"/>  
        <label htmlFor="" className=" text-sm">Saudia arabia airlines</label>
      </div>
      <div className="space-x-2 text-gray-400 items-center ">
      <input type="checkbox"/>
        <label htmlFor="" className="text-sm">Qatar airways</label>
      
        
      </div>
        
     
        
        </div> 
      
      
      <div className="md:w-4/5 w-full  flex-row  ">  
      <div className="flex flex-row  flex-wrap gap-4 mt-5 md:justify-start justify-center">
    <button className="bg-white p-2 hover:bg-blue-100   focus:bg-blue-100  focus:text-[#699FC9] cursor-pointer  md:text-sm text-[12px] rounded-lg text-[#3C3C3C] flex flex-col flex-wrap">
    <h1>Wed, 24 Jan</h1>
    <h1>PKR 55,985</h1>
    </button> 
    <button className="bg-white p-2 hover:bg-blue-100   focus:bg-blue-100  focus:text-[#699FC9] cursor-pointer  md:text-sm text-[12px] rounded-lg text-[#3C3C3C] flex flex-col flex-wrap">
    <h1>Thu, 25 Jan</h1>
    <h1>PKR 50,985</h1>
    </button>
    
    <button className="bg-white p-2 hover:bg-blue-100   focus:bg-blue-100  focus:text-[#699FC9] cursor-pointer  md:text-sm text-[12px] rounded-lg text-[#3C3C3C] flex flex-col flex-wrap">
    <h1>Fri, 26 Jan</h1>
    <h1>PKR 59,372</h1>
    </button> 


    <button className="bg-white p-2 hover:bg-blue-100   focus:bg-blue-100  focus:text-[#699FC9] cursor-pointer  md:text-sm text-[12px] rounded-lg text-[#3C3C3C] flex flex-col flex-wrap">
    <h1>Sat, 27 Jan</h1>
    <h1>PKR 58,941</h1>
    </button> 


    <button className="bg-white p-2 hover:bg-blue-100   focus:bg-blue-100  focus:text-[#699FC9] cursor-pointer  md:text-sm text-[12px] rounded-lg text-[#3C3C3C] flex flex-col flex-wrap">
    <h1>Sun, 28 Jan</h1>
    <h1>PKR 59,372</h1>
    </button>
    
    <button className="bg-white p-2 hover:bg-blue-100   focus:bg-blue-100  focus:text-[#699FC9] cursor-pointer  md:text-sm text-[12px] rounded-lg text-[#3C3C3C] flex flex-col flex-wrap">
    <h1>Mon, 29 Jan</h1>
    <h1>PKR 59,372</h1>
    </button> 
    
    <button className="bg-white p-2 hover:bg-blue-100   focus:bg-blue-100  focus:text-[#699FC9] cursor-pointer  md:text-sm text-[12px] rounded-lg text-[#3C3C3C] flex flex-col flex-wrap">
    <span >Tue, 30 Jan</span>
    <span>PKR 59,372</span>
    </button>
    
    </div>
      <div className="  flex justify-between h-20 my-5">   
      <h1 className="md:m-5 m-0 mt-5 ml-3 " >Flights  <span className="text-[#B3B3B3]">Found</span> </h1>
      <input type="text" placeholder="Sort by : Price - low to high"  className="border bg-transparent border-gray-400 placeholder:text-sm outline-none md:p-5 p-2 mt-3 ml-3 mr-3 rounded-sm h-10 md:w-[235px] w-40 md:m-5 m-0 " readOnly/>
      
      
      
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
                        <div className="text-black text-lg ">
                          07h 50m
                        </div>
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
          <h1>
          QATAR airways
            
          </h1>
          <p className="text-[#699FC9] text-xs"> Saudia Sv 223</p>
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
      <div className="text-black text-lg ">
        07h 50m
      </div>
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
                <div  onClick={goflightinformation}  className= "text-white cursor-pointer text-lg font-medium self-stretch whitespace-nowrap justify-center items-center rounded bg-sky-700 w-[120px] max-w-full px-5 py-2.5">
                  Continue
                </div>
              </div>
      
      
      
      
            </div>
          </div>  
      
      
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
                        <div className="text-black text-lg ">
                          07h 50m
                        </div>
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
          <h1>
          QATAR airways
            
          </h1>
          <p className="text-[#699FC9] text-xs"> Saudia Sv 223</p>
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
      <div className="text-black text-lg ">
        07h 50m
      </div>
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
                <div  onClick={goflightinformation}  className= "text-white cursor-pointer text-lg font-medium self-stretch whitespace-nowrap justify-center items-center rounded bg-sky-700 w-[120px] max-w-full px-5 py-2.5">
                  Continue
                </div>
              </div>
      
      
      
      
            </div>
          </div>  
      
      
      </div> 
      
      
      
      
      
      
      
      
      
      
      
      </div> 
      
      
                
                
      
        </div>  

    

      {/* Pessanger  Modal start */}
      {PassengerModal ? (
        <>
          <div className="justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto  mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center  justify-between p-2  rounded-t">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
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
                  <h3 className="text-lg  px-2 font-bold">Passengers</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setPassengerModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      X
                    </span>
                  </button>
                </div>
                {/*body*/}


                <div className="relative p-2 w-full px-5 ">


                  <div className="app flex-col   w-[100%] ">



                    <div className=" border-b border-t items-center flex border-solid justify-between border-gray-500 p-1">
                      <h1 className="text-lg text-gray-600">Adult
                      <p className="text-gray-300 text-sm ">(12+ years)
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
                      <h1 className="text-lg text-gray-600">Child
                      <p className="text-gray-300 text-sm ">(2-11 years)
                      
                     
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
                      <h1 className="text-lg text-gray-600">Infant
                      <p className="text-gray-300 text-sm ">(0-21 months)
                      
                     
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
                {/*footer*/}
                <div className="flex items-center justify-evenly p-1 py-2  rounded-b">
                  <button
                    className="bg-[#699FC9] text-white active:bg-[#5f91b8]  font-bold uppercase text-sm px-4 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setPassengerModal(false)}
                  >
                    C
                  </button>
                  <button
                    className="bg-[#699FC9] text-white active:bg-[#5f91b8]  font-bold uppercase text-sm px-4 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => getPassenger()}
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {/* Passenger Modal End */}
    </>
  );
}
export default Modifyflight;


