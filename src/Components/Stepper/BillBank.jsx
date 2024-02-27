import React from 'react'
import { useNavigate } from "react-router-dom";



function BillBank() {

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
        
    <div className="md:justify-end justify-center  md:items-start items-center rounded  bg-white flex   w-full flex-col pb-12 border-solid  border-opacity-80 self-start">
                       
                    
                     
  
                        <div class="flex flex-col w-full flex-wrap rounded-md mt-5">
                            <label htmlFor="" className='self-start'>Select Transfer Method </label>

<input type="text" placeholder='Bank transfer via mobile app' class="py-3 px-4 outline-none   pr-11 block md:w-full  border-gray-300 border-2 shadow-sm rounded text-sm  dark:text-gray-400"/>
</div>
<div class="flex flex-wrap flex-col w-full rounded-md mt-5">
                            <label htmlFor="" className='self-start'>Select Transfer Method </label>

<input type="text" placeholder='Enter bank name' class="py-3 px-4 outline-none   pr-11 block md:w-full  border-gray-300 border-2 shadow-sm rounded text-sm  dark:text-gray-400"/>
</div>

                     
                      </div>
        </>
  )
}

export default BillBank