import React, { useState } from "react";

import { Icon } from "@iconify/react";
import "../app.css";
import { Link,useNavigate } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import HeroSec from "./Comman/HeroSec";



function SearchUmrah() {

const nav = useNavigate()




const [selectedDate, setSelectedDate] = useState(null);

const [duration,setduration] = useState("")


const handleDateChange = (date) => {
  setSelectedDate(date);
  if (date) {
    setduration(`Duration`);
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







  const   gobooktrip=()=>{

    window.scrollTo({ top: 0, behavior: 'smooth' });
  
    nav("/booktrip")
  }
  
  const [ismenu, setIsmenu] = useState(false);



const dropdown =()=>{
setIsmenu(!ismenu)
  
}


const closeModal =()=>{
  setIsmenu(false)
}




  return (
    <div  >
      <div className="md:mt-0  bg-[#699FC9]">
        <div onClick={()=>setIsmenu(false)}>
          <h1
            id="package_heading"
            className="md:text-3xl md:p-6 text-xl md:py-8  md:text-left text-center md:mt-0 py-3  font-bold text-white "
          >
          Make Trips Around The Pakistan
            <br />
            <span
              id="find_Best_deal"
              className="md:text-3xl  text-lg  font-normal"
            >
Find Best Deals For Trips        </span>
          </h1>
        </div>

        {/* Button Section Start */}
        <section className=" body-font  md:mx-auto ">
         
         
         <div className="container flex   px-5 py-10 mx-auto">
        
        
         <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
       
         <div className="p-2 md:h-[60px] md:w-w-full h-16 w-full">
               <div className="h-full flex items-center  border p-2  cursor-pointer  rounded-lg gap-3">
                 <div className="   flex justify-center -ml-1 ">
                 <Icon    icon="fluent-mdl2:city-next-2"    height="27"    color="#ffff"    width="27"  />


                 </div>
                 <div className="flex-grow text-[0.995rem] ">
                   <select required className="outline-none w-full appearance-none  bg-transparent">
                     <option value="" selected disabled >
                     Destination city
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

             <div className="p-2 md:h-[60px] md:w-full h-16 w-full ">
               <div
                 
                 className="h-full flex items-center gap-2  border p-4 duration-300  hover:bg-gray-50 active:bg-gray-100 cursor-pointer bg-white rounded-lg"
               >
                 <div className="   flex justify-center  p-2  ">
                 {/* <Icon icon="teenyicons:tick-circle-outline" height="24" width="24" color="#699FC9" /> */}

                 <Icon icon="uiw:date"  height="24" width="24" color="#699FC9" />



                 </div>
           


                 <div className=" inline">
                  <label className={`${duration ? "text-xs  ml-3" : " "}`}>{duration}</label>

<DatePicker
   selected={selectedDate}
  dateFormat="dd-MM-yyyy"
  className={`${duration ? "ml-3   bg-transparent outline-none " :" cursor-pointer bg-transparent outline-none"}`}
  onChange={handleDateChange}
  placeholderText="Duration"
  closeOnScroll={true}
/>
                  </div>




           
               </div>
             </div>
                    {/* total passenger modal */}

                    <div className="p-2 md:h-[60px] md:w-w-full h-16 w-full">
               <div
              
               
                 className="h-full flex items-center duration-300  border  hover:bg-gray-50 active:bg-gray-100 cursor-pointer bg-white rounded-lg"
               >
                 <div className="   flex justify-center ml-2 ">
                 <svg height="28" viewBox="0 0 32 32" width="28"  className="fill-[#699FC9]"   
                           
                            xmlns="http://www.w3.org/2000/svg"><path d="m10.5 9a3.5 3.5 0 1 1 3.5-3.5 3.5042 3.5042 0 0 1 -3.5 3.5zm0-5a1.5 1.5 0 1 0 1.5 1.5 1.5017 1.5017 0 0 0 -1.5-1.5z"/><path d="m22.4739 31.313-3.1339-7.313h-7.1015a4.0072 4.0072 0 0 1 -3.8662-2.9707l-1.6338-6.126a3.8988 3.8988 0 0 1 7.5342-2.0092l.8281 3.1059h5.8992v2h-7.4363l-1.2226-4.5908a1.9 1.9 0 0 0 -3.6709.979l1.6338 6.1255a2.0051 2.0051 0 0 0 1.9345 1.4863h8.42l3.6543 8.5254z"/><path d="m30 6h-4v-4h-2v4h-4v2h4v4h2v-4h4z"/><path d="m18 28h-10.2324a2.0025 2.0025 0 0 1 -1.9326-1.4849l-3.802-14.2575 1.9326-.5152 3.802 14.2576h10.2324z"/><path d="m0 0h32v32h-32z" fill="none"/></svg>
                 </div>
                 <div className="flex-grow">





  <div className="">
          <div class="relative w-full inline-block text-left mr-10">
  <div  onClick={()=>dropdown()} className="flex items-center w-full ">
   
   
    {
  adultcount == 0 ?

  <button  type="button" class="inline-flex w-full  gap-x-1.5   px-3 py-2 text-sm  text-black  " id="menu-button" aria-expanded="true" aria-haspopup="true">
      Total Visitors
         </button>
  :

  <h2 className="text-gray-900  text-xs font-semibold">
 Adult:{adultcount} , 

 Child:{childcount} , 

Infant:{infantcount} 

</h2>
  
}
   
   
   
  

        </div>

<div class={`${ismenu  ? 'absolute -left-9 right-0 z-10 mt-2 w-56 origin-top-right rounded-md  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1' : 'hidden'}   `}>
    <div class="py-1" >
    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center  p-2  rounded-t">
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
                  <h3 className="text-base  px-2 font-bold">Visitors</h3>
                 
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


             <div className="p-2 md:h-[60px] md:w-w-full h-16 w-full text-center">
               <div onClick={gobooktrip} className="h-full flex duration-300  border p-2.5 hover:bg-gray-50 active:bg-gray-100 cursor-pointer bg-white rounded-lg">
                 <div className="   flex justify-center mr-4 "></div>
                 <div className="flex gap-5">

                 <Icon icon="carbon:search" width="27" height="27"  color="#699fc9" />


                   <Link  >



                     <h2 className="text-[#699FC9] text-[0.995rem]">
                       Search
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


  <HeroSec closeModal={closeModal}/>
    


    </div>
  );
}
export default SearchUmrah;


