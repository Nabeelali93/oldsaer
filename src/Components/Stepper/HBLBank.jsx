import React from "react";
import { useNavigate } from "react-router-dom";


function HBLBank() {

  const nav = useNavigate();

  const privacyPolicy = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    nav("/privacyPolicy");
  };

  const termcondition = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    nav("/TermsCondition");
  };






  return (
    <>
       <div className="md:justify-end justify-center  md:items-start items-center rounded  bg-white flex md:w-[350px] max-w-full w-full flex-col pb-5 border-solid  border-opacity-80 self-start">
                           
                        
                         
      
       <div class="flex flex-wrap flex-col w-full rounded-md mt-5">
                              <div className='flex flex-col w-full'>
                              <label htmlFor="" className='self-start'>ID Card Number</label>
 
 <input type="text" placeholder='12345-1234567-1' class="py-3 px-4 outline-none   pr-11 block w-full  border-gray-300 border-2 shadow-sm rounded text-sm  dark:text-gray-400"/>
                              </div>
 <span className='text-[#A5A5A5] mt-3 text-[11px]  self-start'>Please enter your 13 digit NIC Number</span>
 </div>
 <div class="flex flex-wrap flex-col w-full rounded-md mt-5">
                            <div className='flex flex-col w-full'>
                            <label htmlFor="" className='self-start'>HBL Account Number </label>
 
 <input type="text" placeholder='12345 -234567891' class="py-3 px-4 outline-none   pr-11 block w-full  border-gray-300 border-2 shadow-sm rounded text-sm  dark:text-gray-400"/>
                            </div>
 <span className='text-[#A5A5A5] mt-3 text-[11px] self-start'>Your HBL account number should be 11 to 14 digits long</span>
 </div>
 <div className="justify-center items-center border flex w-full max-w-full grow flex-col mt-5 md:px-5 px-2 py-3.5 rounded-xl border-solid border-zinc-300 border-opacity-80 self-start max-md:mt-10">
                            <div className="text-slate-400 text-sm font-medium leading-5 self-center whitespace-nowrap">
                            Get OTP
                            </div>
                          </div>
                        
                         </div> 
    </>
  );
}

export default HBLBank;
