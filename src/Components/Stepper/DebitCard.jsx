import React, { useState } from 'react'
import Secure from "../../assests/Securepayment/image 87.png"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DebitCard.css"




function DebitCard() {

  const [startDate, setStartDate] = useState(null);
  
  return (
    <>
         <div className="items-start flex w-full max-w-full gap-3 self-start mt-5">
                            <img
                              loading="lazy"
                              src={Secure}
                              className="aspect-square object-contain object-center w-[23px] overflow-hidden  max-w-full "
                            />
                            <div className="text-neutral-700 text-opacity-60 text-sm  leading-5 self-stretch   md:max-w-[230px] max-w-[80%] grow shrink-0 basis-auto">
                              All informa is encrypted and we do not store your
                              card details.
                            </div>
                          </div>
                          <div className="text-neutral-700 text-opacity-80 text-sm leading-5 whitespace-nowrap mt-9 self-start flex">
                            Name on card
                          </div>
                          <div className="flex flex-col items-stretch w-full ml-5 max-md:w-full max-md:ml-0">
                        <div className="flex grow flex-col max-md:mt-5">
                        

         

                          <input type="number"  className="   justify-end items-center overflow-hidden md:mt-3.5 mt-0 w-full self-start border-gray-300 border-2 md:ml-[-20px] ml-0 outline-none p-3 rounded-lg" />
                         
                        </div>
                      </div>
                          <div className="text-neutral-700 text-opacity-80 text-sm leading-5 whitespace-nowrap mt-5 self-start flex">
                            Card Number
                          </div>
                          <div className="flex grow flex-col max-md:mt-5">
                        
                        <input type="number" placeholder='1234 5675 1235 2345'  className="rounded-lg w-full  justify-end items-center overflow-hidden md:mt-3.5 mt-0 self-start border-gray-300 border-2 outline-none p-3" />
                       
                      </div>
                          <div className="flex w-full max-w-full items-start md:justify-between justify-normal gap-5 mt-11 self-start max-md:mt-10 md:flex-row flex-col">
                            <div className="self-stretch flex w-full flex-col">
                              <div className="text-neutral-700 text-opacity-80 text-sm leading-5 whitespace-nowrap self-start flex">
                                Expiry
                              </div>
                              <div class="flex w-full  mt-5  ">
  
                              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}   label="Basic date picker" placeholderText="MM/YY" className=" w-full border border-gray-300 text-gray-900 text-sm rounded-lg   block pl-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:text-white  outline-none "  />
                             

                            
                   </div> 
                            </div>
                            <div className="self-stretch flex flex-col">
                              <div className="text-neutral-700 text-opacity-80 text-sm leading-5 whitespace-nowrap self-start">
                                CVV
                              </div>
                              <div className="flex grow flex-col max-md:mt-5">
                        
                        <input type="number" placeholder='1234 5675 1235 2345'  className=" rounded-lg  justify-end items-center overflow-hidden md:mt-3.5 mt-0 self-start border-gray-300 border-2 outline-none  w-full  pl-5 p-2.5  h-[50px]" />
                       
                      </div>
                            </div>





  </div>  


  
    </>
  )
}

export default DebitCard