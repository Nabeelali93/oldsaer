import React, { useState } from "react";
 


import { Link,useNavigate } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
 
import HeroSec from "./Comman/HeroSec";
import { Icon } from "@iconify/react";



function MakkahMain() {
  const nav = useNavigate()


  

 


  const [selectedDate, setSelectedDate] = useState(null);

  const [selectedReturnDate, setselectedReturnDate] = useState(null);
  const [travelLabel, settravelLabel] = useState("");


  const [returnLable, setreturnLable] = useState("");



  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (date) {
      settravelLabel(`Date of Travel`);
    }
  };

  const handleDateReturn = (date) => {
    setselectedReturnDate(date);
    if (date) {
      setreturnLable(`Check in`);
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





  const bookhotel=()=>{

    window.scrollTo({ top: 0, behavior: 'smooth' });
  
    nav("/bookhotel")
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
     <div className="md:mt-0  bg-[#699FC9]">
        <div onClick={()=>setIsmenu(false)}>
          <h1
            id="package_heading"
            className="md:text-3xl md:p-6 text-xl md:py-8  md:text-left text-center md:mt-0 py-3  font-bold text-white "
          >
        Search Hotels All Around Pakistan
            <br />
            <span
              id="find_Best_deal"
              className="md:text-3xl  text-lg  font-normal"
            >
Find Best Deals For Hotels        </span>
          </h1>
        </div>

        {/* Button Section Start */}
        <section className=" body-font  md:mx-auto ">
         
         
         <div className="container flex  justify-center md:justify-normal px-5 py-10 mx-auto">
        
        
         <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
       
         <div className="p-2 md:h-[60px] md:w-w-full h-16 w-full">
               <div className="h-full flex items-center  border p-2  cursor-pointer  rounded-lg gap-3">
                 <div className="   flex justify-center ml-3 ">

                 <Icon icon="icon-park-outline:hotel" color="#ffff" height="27"width="27"
                    />
                 </div>
                 <div className="flex-grow text-[0.995rem] ">
                   <select required className="outline-none w-full appearance-none bg-transparent ">
                     <option value="" selected disabled  >
                     City Name                    
                     
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

             {/* <div className="p-2 md:h-[60px] md:w-w-full h-16 w-full text-center">
               <div className="h-full flex   border p-2.5 duration-300 hover:bg-gray-50 active:bg-gray-100 cursor-pointer bg-white rounded-lg">
                 <div className="   flex justify-center mr-1 "></div>
                 <div className="flex gap-5">

                 <Icon icon="teenyicons:tick-circle-outline" height="28" width="28"  color="#699fc9"/>


                   <Link  >



                     <h2 className=" text-[0.995rem]">
                     <DatePicker
                          selected={selectedDate}
                          className="w-full cursor-pointer bg-transparent outline-none text-sm "
                          onChange={handleDateChange}
                          dateFormat="dd-MM-yyyy"
                          placeholderText="Check In"
                        />                </h2>
                   </Link>
                 </div>
               </div>
             </div> */}



             <div className="p-2 md:h-[60px] md:w-full h-16 w-full ">
                <div className="h-full flex items-center  border duration-300 transition-all ease-in-out  hover:bg-gray-50 active:bg-gray-100 cursor-pointer bg-white rounded-lg">
                  <div className="   flex justify-center  p-2  ">
                  <Icon icon="teenyicons:tick-circle-outline" height="28" width="28"  color="#699fc9"/>

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
                      placeholderText="Check In"
                      closeOnScroll={true}
                    />
                  </div>
                </div>
              </div>

             {/* <div className="p-2 md:h-[60px] md:w-w-full h-16 w-full text-center">
               <div className="h-full flex   border p-2.5 duration-300 hover:bg-gray-50 active:bg-gray-100 cursor-pointer bg-white rounded-lg">
                 <div className="   flex justify-center mr-3 items-center "></div>
                 <div className="flex gap-5">

                 <Icon icon="teenyicons:tick-circle-outline" height="28" width="28"  color="#699fc9"/>

                   <Link  >



                     <h2 className="text-[0.995rem]">
                     <DatePicker
                          selected={selectedReturnDate}
                          className="w-full cursor-pointer bg-transparent  outline-none text-sm "
                          onChange={handleDateReturn}
                          dateFormat="dd-MM-yyyy"
                          placeholderText="Check out"
                        />                  </h2>
                   </Link>
                 </div>
               </div>
             </div> */}

                       {/* total passenger modal */}

                       <div className="p-2 md:h-[60px] md:w-w-full h-16 w-full">
               <div
            
                 className="h-full flex items-center  borderduration-300  hover:bg-gray-50 active:bg-gray-100 cursor-pointer bg-white rounded-lg"
               >
                 <div className="   flex justify-center ml-2 ">
                 <Icon icon="carbon:passenger-plus" width="27" height="27"  color="#699fc9" />
                 </div>
                 <div className="flex-grow">





  <div className="">
          <div class="relative w-full inline-block text-left mr-10">
  <div    onClick={()=>dropdown()} className="flex items-center w-full ">
   
   
    {
  adultcount  == 0 ?

  <button  type="button" class="inline-flex w-full  gap-x-1.5 rounded-md  px-3 py-2 text-sm  text-black shadow-sm  " id="menu-button" aria-expanded="true" aria-haspopup="true">
      Total Passengers
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
    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full   bg-white outline-none focus:outline-none">
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






             <div className="p-2 md:h-[60px] md:w-w-full h-16 w-full text-center" >
               <div className="h-full flex   border p-2.5 duration-300 hover:bg-gray-50 active:bg-gray-100 cursor-pointer bg-white rounded-lg">
                 <div className="   flex justify-center mr-4 "></div>
                 <div className="flex gap-5">

                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" fill="#7E7676"/>
<g id="Hotel" clip-path="url(#clip0_0_1)">
<g id="Desktop - 10" clip-path="url(#clip1_0_1)">
<rect width="1440" height="2686" transform="translate(-906 -360)" fill="#F4F6F7"/>
<path id="Rectangle 3897" d="M-646 -254H534V121H-646V-254Z" fill="#699FC9"/>
<g id="Frame 1171275768">
<rect x="-23.5" y="-15.5" width="257" height="55" rx="7.5" fill="white"/>
<rect x="-23.5" y="-15.5" width="257" height="55" rx="7.5" stroke="white"/>
<g id="Frame 1171275772">
<g id="Layer_1" clip-path="url(#clip2_0_1)">
<g id="SVGRepo_iconCarrier">
<g id="Group">
<path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M21.9293 22.3197C21.9293 22.517 21.7692 22.6791 21.5699 22.6791H2.32971C2.13244 22.6791 1.97033 22.519 1.97033 22.3197V11.4096C1.56799 11.5639 1.19494 11.5658 0.882442 11.4623C0.638302 11.3803 0.433223 11.2338 0.282833 11.0424C0.132442 10.8529 0.0367391 10.6205 0.0074422 10.3666C-0.0355265 9.97013 0.0836141 9.52091 0.419552 9.10099C0.43713 9.0795 0.456661 9.05997 0.478145 9.04239L11.7281 1.41154C11.8551 1.29435 12.0504 1.28263 12.191 1.39201L23.4606 9.00724C23.4762 9.01896 23.4899 9.03263 23.5035 9.0463C23.9567 9.53458 24.0699 10.0756 23.9606 10.5346C23.9059 10.7592 23.7985 10.9643 23.65 11.1303C23.5016 11.2983 23.3121 11.4272 23.0953 11.5053C22.7516 11.6303 22.3453 11.6244 21.9313 11.4291C21.9293 14.476 21.9293 19.2748 21.9293 22.3197ZM8.85315 8.41739H15.1442V12.6537H8.85315V8.41739ZM10.9918 9.56779C11.1735 9.56779 11.3219 9.71622 11.3219 9.89786C11.3219 10.0795 11.1735 10.2279 10.9918 10.2279C10.8102 10.2279 10.6617 10.0795 10.6617 9.89786C10.6617 9.71427 10.8082 9.56779 10.9918 9.56779ZM12.3805 10.9838L13.1227 9.84318L13.8238 11.6166H10.3863V11.3959L10.6617 11.3822L10.9371 10.7084L11.1559 11.1908H11.568L11.9254 10.269L12.3805 10.9838ZM9.23205 8.85294H14.7692V12.2182H9.23205V8.85294ZM11.9 15.9037C11.9078 15.9057 11.9176 15.9037 11.9254 15.8959C12.3473 15.5658 12.9664 15.7045 13.2496 16.3959H13.2438C12.6852 16.8705 12.2848 17.3861 12.1403 17.9623H11.3317L11.9 15.9037ZM14.7164 17.2221C14.7848 17.808 14.1832 18.3139 13.6539 18.1537C13.5797 18.2826 13.5231 18.4447 13.4781 18.6401C13.3785 19.0951 13.4078 18.9565 13.4508 19.3979C13.5094 19.9858 13.4469 20.3861 13.068 20.558V20.7846H5.41565V20.558C5.12072 20.4526 4.99377 20.1635 5.03869 19.6889C5.13635 18.7943 5.0758 18.5151 4.85119 18.1772C4.45666 18.1908 4.1715 18.0971 3.99377 17.8979C3.63049 17.4936 3.74182 16.9018 4.19494 16.6186C4.28869 16.56 4.39807 16.515 4.52502 16.4877C5.49768 16.2826 6.03479 17.2787 6.2926 18.0639L8.84533 18.1322C9.01916 18.1557 9.13049 18.2338 9.20471 18.3393C9.27307 18.2358 9.37268 18.1576 9.52502 18.1225C10.3199 18.0873 10.8883 18.1928 11.4684 18.1928H12.1442C12.2828 18.1928 12.3551 18.1322 12.3785 18.0209C12.5504 17.4975 13.1598 16.4467 13.7985 16.4662C14.191 16.4799 14.6188 16.7494 14.7164 17.2221ZM5.30041 16.3334C5.55822 15.7592 5.96057 15.6166 6.5094 15.808L7.09729 17.8295H6.46252C6.1676 17.2279 5.97229 16.6166 5.30041 16.3334ZM6.75744 15.8236C6.76525 15.8197 6.77111 15.8139 6.77502 15.8041C6.99182 15.3041 7.58947 15.1635 8.07775 15.3783C8.07775 15.3764 8.07971 15.3764 8.07971 15.3764L8.21252 17.9506H7.36682L6.75744 15.8236ZM8.33947 15.3236C8.49768 14.6654 9.99768 14.8002 10.1363 15.2533C10.1559 15.2514 9.9801 17.683 9.96838 17.9526H9.74572C9.39416 17.9526 9.08361 17.9526 8.73596 17.9526H8.45471L8.34533 15.3236H8.33947ZM10.3317 15.435C10.3356 15.435 10.3414 15.433 10.3473 15.4311C10.8903 15.142 11.6461 15.3529 11.7184 15.7299L11.6813 15.7436L11.0856 17.9506H10.2047L10.3317 15.435ZM18.1305 16.5326V20.1166H18.8531C18.9645 20.1166 19.0543 20.2475 19.0543 20.3588C19.0543 20.4701 18.9645 20.601 18.8531 20.601H16.8512C16.7399 20.601 16.65 20.4701 16.65 20.3588C16.65 20.2475 16.7399 20.1166 16.8512 20.1166H17.5738V16.5326H18.1305ZM16.8141 13.8178H18.8844L19.4918 16.2143H16.2106L16.8141 13.8178ZM21.027 21.7748V11.0092C21.027 10.9858 21.0289 10.9623 21.0328 10.9408L12.0348 4.94669L2.86291 10.9428C2.87072 10.9721 2.87463 11.0033 2.87463 11.0346V21.7748C8.92541 21.7748 14.9762 21.7748 21.027 21.7748Z" fill="#699FC9"/>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
<defs>
<clipPath id="clip0_0_1">
<rect width="1440" height="2686" fill="white" transform="translate(-906 -360)"/>
</clipPath>
<clipPath id="clip1_0_1">
<rect width="1440" height="2686" fill="white" transform="translate(-906 -360)"/>
</clipPath>
<clipPath id="clip2_0_1">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

                   <Link  >



                     <h2 className=" text-[0.995rem]">
                     Total room
                     </h2>
                   </Link>
                 </div>
               </div>
             </div>

             <div className="p-2 md:h-[60px] md:w-w-full h-16 w-full text-center">
               <div onClick={bookhotel} className=" h-full flex duration-300  border p-2.5 hover:bg-gray-50 active:bg-gray-100 cursor-pointer bg-white rounded-lg">
                 <div className="   flex justify-center  "></div>
                 <div  className="flex gap-5">

                 <Icon icon="carbon:search" width="27" height="27"  color="#699fc9" />
                   <Link  >



                     <h2 className=" text-[0.995rem]">
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

    

    </>
  );
}
export default MakkahMain;


