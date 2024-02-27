import React, { useState } from "react";
import Securepayment from "../../assests/Securepayment/Secure_Payment.png.png";
import Refunds from "../../assests/Securepayment/Lighting_Fast_Refunds.png.png";
import Mastercard from "../../assests/Securepayment/Mastercard - png.png";
import HBL from "../../assests/Securepayment/HBL.png.png";
import Link1 from "../../assests/Securepayment/Link.png.png";
import Konnect from "../../assests/Securepayment/Konnect.png.png";
import JazzCash from "../../assests/Securepayment/JazzCash.png.png";
import EasyPaisa from "../../assests/Securepayment/EasyPaisa.png.png";
import Phone from "../../assests/Securepayment/Phone.png.png";
import DebitCard from "../Stepper/DebitCard";
import EasyPaisaBank from "../Stepper/EasyPaisaBank";
import Bill_Bank from "../Stepper/BillBank";
import HBL_Bank from "../Stepper/HBLBank";
import Jazzcash from "../Stepper/JazzCash";
import { useNavigate } from "react-router-dom";

function PaymentDetails() {
  const nav = useNavigate();

  const [payment_method, setpayment_method] = useState("Visa");

  const privacyPolicy =()=>{

    window.scrollTo({ top: 0, behavior: 'smooth' });
  
    nav("/privacyPolicy")
  }
  
  
  const termcondition =()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  nav("/TermsCondition")
  }

  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-8 mx-auto">
          <h1 className="text-slate-400  text-2xl font-medium whitespace-nowrap mb-8  max-md:ml-0.5 max-md:mt-5">
            Payment Options
          </h1>

          <div class="flex flex-wrap lg:flex-row md:flex-col -m-4 sm:p-5 p-3">
            {/* {/ payment section start  /} */}

            {/* {/ secure payment headings /} */}

            <div className="lg:w-3/4 w-full">
              <div className=" bg-white items-center border flex  px-4 py-5 justify-center  rounded-lg border-solid border-zinc-300 border-opacity-90">
                <div className="items-start  self-center md:justify-start justify-center flex  max-w-full md:gap-3 gap-2 flex-wrap lg:gap-4 max-md:flex-wrap ">
                  <div className="items-start  flex justify-between gap-2">
                    <img
                      loading="lazy"
                      src={Securepayment}
                      className="aspect-square object-contain object-center  w-[20px] overflow-hidden max-w-full self-start"
                    />
                    <div className="text-zinc-400 text-opacity-80 text-center md:text-[1rem] text-[12px] whitespace-nowrap self-start">
                      Secure Payment
                    </div>
                  </div>

                  <div className="items-start  flex justify-between gap-2">
                    <img
                      loading="lazy"
                      src={Refunds}
                      className="aspect-square object-contain object-center w-[20px] overflow-hidden self-stretch max-w-full"
                    />
                    <div className="text-zinc-400 text-opacity-80 text-center md:text-[1rem] text-[12px] self-stretch whitespace-nowrap">
                      Lightning Fast Refunds{" "}
                    </div>
                  </div>

                  <div className="items-start  flex justify-between gap-2">
                    <svg
                      className="aspect-square object-contain object-center w-6 overflow-hidden self-center max-w-full my-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M21 8.5H14.69L15.64 3.93L15.67 3.61C15.67 3.2 15.5 2.82 15.23 2.55L14.17 1.5L7.59 8.09C7.22 8.45 7 8.95 7 9.5V19.5C7 20.6 7.9 21.5 9 21.5H18C18.83 21.5 19.54 21 19.84 20.28L22.86 13.23C22.95 13 23 12.76 23 12.5V10.5C23 9.4 22.1 8.5 21 8.5ZM21 12.5L18 19.5H9V9.5L13.34 5.16L12.23 10.5H21V12.5ZM1 9.5H5V21.5H1V9.5Z"
                        fill="black"
                      />
                    </svg>

                    <div className="text-zinc-400 text-opacity-80 text-center md:text-[1rem] text-[12px] self-stretch whitespace-nowrap">
                      Trust by 10 lac customers
                    </div>
                  </div>
                </div>
              </div>

              {/* {/ secure payment headings end /} */}
            </div>

            {/* {/ payment options start div /} */}

            <div class="sm:p-4 p-2 lg:w-3/4 w-full   bg-white h-[100%] ">
              <div class="h-full md:flex-row flex-col   rounded-lg overflow-hidden text-center relative flex">
                {/* bank name start*/}

                <div className="lg:w-[57%] w-full   bg-opacity-75  mt-2 ">
                  {/* {/ Debit Card Option /} */}
                  <button onClick={()=>setpayment_method("Visa")} className="flex hover:bg-[#E4F0FFB8] w-full items-center justify-around py-5  focus:bg-[#E4F0FFB8]   md:mx-2 ">
                    <h1 className="lg:text-[1rem] sm:text-[0.9rem] text-[14px] lg:p-3 md:p-1">
                      {" "}
                      Debit Credit Card
                    </h1>

                    <div className="flex flex-row space-y-2 items-center">
                      <svg
                        width="70"
                        height="28"
                        viewBox="0 0 70 28"
                        className="lg:h-8 md:h-6 h-4"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="Visa Inc. svg" clip-path="url(#clip0_14_2467)">
                          <path
                            id="path3789"
                            d="M45.6081 0C40.6443 0 36.1876 3.19529 36.1876 9.05882C36.1876 15.8118 44.0602 16.2729 44.0602 19.6329C44.0602 21.0494 42.7259 22.3341 40.4842 22.3341C37.2817 22.3341 34.8799 20.5553 34.8799 20.5553L33.8658 26.4847C33.8658 26.4847 36.6146 28 40.2974 28C45.7415 28 50.0114 24.6729 50.0114 18.6776C50.0114 11.5624 42.1121 11.1012 42.1121 7.97177C42.1121 6.85177 43.2063 5.63294 45.448 5.63294C47.9832 5.63294 50.0648 6.91765 50.0648 6.91765L51.0789 1.18588C51.0522 1.18588 48.7838 0 45.6081 0ZM0.133435 0.428235L0 1.28471C0 1.28471 2.08159 1.74588 3.97636 2.70118C6.40488 3.78824 6.565 4.41412 6.99199 6.35765L11.4487 27.5388H17.4266L26.5803 0.428235H20.6291L14.7312 18.8753L12.3294 3.22824C12.1159 1.44941 10.995 0.428235 9.60732 0.428235H0.133435ZM28.9821 0.428235L24.3119 27.5388H29.9962L34.6397 0.428235H28.9821ZM60.6329 0.428235C59.2718 0.428235 58.5513 1.31765 58.0175 2.89882L49.6912 27.5388H55.6424L56.7899 23.4212H64.0488L64.7427 27.5388H70L65.4365 0.428235H60.6329ZM61.4068 7.77412L63.1681 17.9529H58.4445L61.4068 7.77412Z"
                            fill="#699FC9"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_14_2467">
                            <rect width="70" height="28" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <img
                        src={Mastercard}
                        className="lg:h-8 md:h-6 h-4  "
                        alt=""
                      />
                    </div>
                  </button>

                  {/* {/ HBL Direct Transfer Option /} */}

                  <button  onClick={()=>setpayment_method("HBL")} className="flex hover:bg-[#E4F0FFB8] w-full items-center justify-around  py-5  focus:bg-[#E4F0FFB8]   md:mx-2 ">
                    <h1 className="lg:text-[1rem] sm:text-[0.9rem] text-[14px] lg:p-3 md:p-1">
                      HBL Direct Transfer
                    </h1>

                    <div className="flex flex-row  gap-5 items-center">
                      <img src={HBL} className="lg:h-8 md:h-6 h-6 " alt="" />

                      <img
                        src={Konnect}
                        className="lg:h-8 md:h-6 h-5 "
                        alt=""
                      />
                    </div>
                  </button>

                  {/* {/ Link Transfer Option /} */}

                  <button onClick={()=>setpayment_method("BillBank")} className="flex hover:bg-[#E4F0FFB8] w-full items-center justify-around  py-5  focus:bg-[#E4F0FFB8]   md:mx-1 ">
                    <h1 className="lg:text-[1rem] sm:text-[0.9rem] text-[14px] lg:p-3 md:p-1">
                      1 Bill_ Bank Transfer
                    </h1>

                    <div className="flex flex-row 1 space-y-2 items-center">
                      <img
                        src={Link1}
                        className="lg:h-10 md:h-10 h-8  "
                        alt=""
                      />
                    </div>
                  </button>

                  {/* {/ JazzCash Option /} */}

                  <button onClick={()=>setpayment_method("Jazzcash")} className="flex hover:bg-[#E4F0FFB8] w-full items-center justify-around  py-5  focus:bg-[#E4F0FFB8]   md:mx-2 ">
                    <h1 className="lg:text-[1rem] sm:text-[0.9rem] text-[14px] lg:p-3 md:p-1">
                      Jazzcash
                    </h1>

                    <div className="flex flex-row  space-y-2 items-center">
                      <img
                        src={JazzCash}
                        className="lg:h-10 md:h-10  h-8"
                        alt=""
                      />
                    </div>
                  </button>

                  {/* {/ Easy Paisa Option /} */}

                  <button onClick={()=>setpayment_method("Easypaisa ")} className="flex hover:bg-[#E4F0FFB8] w-full items-center justify-around py-5 focus:bg-[#E4F0FFB8]   md:mx-2 ">
                    <h1 className="lg:text-[1rem] sm:text-[0.9rem] text-[14px] lg:p-3 md:p-1">
                      Easypaisa
                    </h1>

                    <div className="flex flex-row  space-y-2 items-center">
                      <img
                        src={EasyPaisa}
                        className="lg:h-10 md:h-10 h-8 "
                        alt=""
                      />
                    </div>
                  </button>
                </div>

                {/* {/ bank name enm /} */}

                {/* {/ bank details start /} */}

                <div className="lg:w-[43%] flex  flex-col w-full md:p-4 p-0">

<div className="w-full">
  
{
                      
                      
                      payment_method === 'Visa' ? <DebitCard/> : // if 
                       payment_method === 'HBL' ? <HBL_Bank/> : // else if 
                       payment_method === 'BillBank' ? <Bill_Bank/> : // else if
                       payment_method === 'Jazzcash' ? <Jazzcash/> : // else if
                        <EasyPaisaBank/>  // else if
                     
                       // else 
                     
                     
                     }
</div>

<div className=" mt-5">
  <span className='text-black text-[11px] font-semibold'>Please <span className="text-blue-400">login</span> to avail discounts on voucher codes.</span>


 
</div>
<div>
<span className="text-[10px] text-gray-500">
By selecting to complete this booking, I acknowledge that I have read and accept the above Policy section containing Fare Rules & Restrictions,<span onClick={()=>termcondition()}  className="text-blue-400 cursor-pointer">Terms of Use</span> and<span onClick={privacyPolicy} className="text-blue-400 cursor-pointer "> privacy policy</span></span>
</div>



<div className="mt-20 ">
<button className="border hover:bg-blue-100   border-gray-300  w-full p-2 ">Pay Now</button>
</div>
                </div>

                {/* {/ bank details end /} */}

   
              </div>




            </div>

            {/* {/ payment section end /} */}

            {/* {/ price summmery start /} */}

            {/* {/ price Summery heading start /} */}
            <div class=" lg:w-1/4  w-full md:flex-row my-5">
             
        <div class=" lg:px-4 px-0">


<div className=" drop-shadow-sm   border-b border-t  rounded-xl border-gray-300  items-center w-full flex    md:py-0 py-4 lg:mt-0 md:mt-5 ">
  <div className="items-start w-full self-center  flex  max-w-full md:gap-3 gap-2  lg:gap-4  my-0">

    <div className="items-start gap-3 w-full flex flex-col  ">
 
      <div className="text-[#699FC9] w-full text-opacity-80 text-left text-[14px] sm:text-[16px] mx-2 mt-1  self-start">
      Price Summary
      </div> 
       <div className="w-full">
          <div className='flex bg-white w-full items-center  border py-2 px-2  rounded   '>
                  <p className='lg:text-[11px] w-full  sm:text-[14px] text-[10px]'>qatar airway (Adult x 1)</p>

                  <p className='lg:text-[11px] w-full sm:text-[14px] text-right text-[10px] text-black font-bold'>PKR 228,000</p>
                </div>


                <div className='flex bg-white w-full items-center  border py-3 px-2 rounded   '>
                  <p className='lg:text-[11px] w-full  sm:text-[14px] text-[10px]'>Price you pay</p>

                  <p className='lg:text-[11px] w-full  sm:text-[14px] text-right text-[10px] text-black font-bold'>PKR 228,000</p>
                </div>
       </div>
    </div>

  </div>
</div>


{/* {/ price summery end /} */}


              <div class="h-full   bg-opacity-75  pt-3 pb-24 rounded-lg overflow-hidden text-center relative">
              
              

<div className='my-5 flex justify-start  '>
<select name="" id="" className=' text-[#699FC9] text-[15px] focus:outline-none  bg-transparent'>
  <option value="">Your Booking</option>
</select>
</div>

<div className='flex items-center mt-2 p-2 bg-white rounded-lg'>
  <div className='flex justify-center items-center '>
    <div className=' justify-center items-center flex '>
    <img src={Phone} alt="" className='lg:h-5 lg:w-20 md:h-10 w-10  h-10 object-contain'  />

    </div>

    <div className=' justify-center items-center flex '>
<p className='text-left px-3 leading-4 sm:text-[11px] text-[9px] text-[#A5A5A5]'>
having a trouble making a payment? contact our helpline for assistance
<span className='text-black sm:text-[11px] text-[9px]'> (021)111172782</span>

</p>
</div>

  </div>


</div>





           
               
              </div>
            </div>
            
                        </div>

            {/* {/ price summmery end /} */}
          </div>
        </div>
      </section>
    </>
  );
}

export default PaymentDetails;