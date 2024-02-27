import React from "react";
// import Secure from "../assests/Payment_Method/Secure_Payment.png"

function JazzCash() {
  return (
    <>
    <div className="md:justify-end justify-center  md:items-start items-center rounded border bg-white flex  max-w-full w-full flex-col pb-12 border-solid border-zinc-300 border-opacity-80 self-start">
                           <div className="items-center rounded bg-sky-100 bg-opacity-70 self-stretch flex w-full flex-col md:px-5 px-0 py-4 border-r-4 border-r-slate-400 border-solid">
                             <div className="items-start flex w-full  max-w-full md:justify-between justify-center gap-2 md:self-start self-center max-md:ml-px">
                               <div className="justify-center items-center self-center flex w-4 max-w-full flex-col my-auto p-1 rounded-sm">
                                 <input type="checkbox" />
                                 
                               </div>
                               <div className="text-sky-700 text-center text-sm capitalize self-stretch">
                                 Pay via Easypaisa Mobile account
                               </div>
                             </div>
                           </div>
                           <div className="text-neutral-700 text-xs font-light capitalize w-[261px] max-w-full ml-5 mt-6 md:self-start self-center max-md:ml-2.5">
                             Enter your mobile number as registered on
                             easypaisa
                           </div>
                        
     
                           <div class="flex rounded-md w-full p-5">
   <span class="px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-gray-50 text-sm text-gray-500  dark:border-gray-700 dark:text-gray-400"> 
   <select
          
           className="h-full  outline-none rounded-md border-0 bg-transparent py-0     text-gray-500   sm:text-sm"
         >
           <option>Pk+92</option>
           <option>Ind+91</option>
         </select>
         </span>
   <input type="number" placeholder='3124567892' class="py-3 px-4 outline-none   pr-11 block w-full  border-gray-300 border-2 shadow-sm rounded-r-md text-sm  dark:text-gray-400"/>
 </div> 
 <div className="w-full py-3 px-5">
 <div className="text-neutral-700 w-full text-opacity-80 text-xs leading-5 whitespace-nowrap mt-5 text-start">
 Please enter your 13 digit NIC Number
                          </div>
                          <div className="flex grow flex-col max-md:mt-5">
                        
                        <input type="number" placeholder='1234 5675 1235 2345'  className="rounded-lg w-full  justify-end items-center overflow-hidden md:mt-3.5 mt-0 self-start border-gray-300 border-2 outline-none p-3" />
                       
                      </div>
 </div>
 
                           <div className="items-start self-center flex w-[295px] max-w-full flex-col md:ml-4 ml-0 mt-7">
                             <div className="text-stone-900 text-opacity-60 text-xs font-light">
                               • Please make sure that your Easypaisa account
                               is active and has sufficient balance.
                             </div>
                             <div className="text-stone-900 text-opacity-60 text-xs font-light mt-2">
                               • Please enter your account's 5-digit PIN when
                               prompted on your mobile screen to complete
                               transaction.
                             </div>
                           </div>
                         </div>


   </>
  );
}

export default JazzCash;
