import React from 'react'
import "./Footer.css"
import apple from "../assests/apple.png"
import palystore from "../assests/playstore.png"
import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react'

function Footer() {
  
const nav = useNavigate()


const helpcenter=()=>{

  window.scrollTo({ top: 0, behavior: 'smooth' });

  nav("HelpCenter")
}



const privacyPolicy =()=>{

  window.scrollTo({ top: 0, behavior: 'smooth' });

  nav("/privacyPolicy")
}


const termcondition =()=>{
  window.scrollTo({ top: 0, behavior: 'smooth' });
nav("/TermsCondition")
}

const gosearchumrah=()=>{
  window.scrollTo({ top: 0, behavior: 'smooth' });

  nav("/")
}
const goFlight = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });

  nav("/flight");
};

const gogethotel=()=>{
window.scrollTo({ top: 0, behavior: 'smooth' });

nav("/gethotel")
}


const goDeals =()=>{
window.scrollTo({ top: 0, behavior: 'smooth' });
nav("/dealoffer")
}


const goTrip =()=>{
window.scrollTo({ top: 0, behavior: 'smooth' });

nav("/Trip")
}

const goGetVisa =()=>{
window.scrollTo({ top: 0, behavior: 'smooth' });

nav("/GetVisa")
}



const goGetInsurance =()=>{
window.scrollTo({ top: 0, behavior: 'smooth' });

nav("/GetInsurance")
}




  return (
   <>
   <footer className="w-full  ">

<div className='bg-black w-full p-8  grid grid-cols-1 md:grid-cols-2  gap-5 place-items-center  '>
<div className='w-full'>
<h1 className='text-white text-xl '>Subscribe to our newsletter </h1>
<p className='text-white text-[13px]'>Stay up to date with the latest news, announcements and articles.</p>

</div>
<div className='w-full '>
<input className=' footer-inp ' type="text" name="" id="" placeholder='Enter Your Email'/>
<button className='footer-btn mx-3 my-3 text-white '>Subscribe</button>
</div>
</div>



  <div className="w-full bg-[#3C3C3C] ">
   
  <div className="container px-5 py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
   {/* <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left  order-first"> */}

    <div className="flex-grow flex flex-wrap  -mb-10 md:text-left  order-first">
      <div className="lg:w-1/5 md:w-1/3 w-full md:px-0 lg:px-0 px-3 ">
        <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">Services</h2>
        <ul className="list-none text-sm space-y-4 mb-10 ">
          <li className='my-3'>
            <a onClick={gosearchumrah} className="text-[#c1c1c1] hover:text-white hover:ml-1.5 duration-300 cursor-pointer">Umrah package</a>
          </li> 
          <li className='my-3'>
            <a onClick={goFlight} className="text-[#c1c1c1] hover:text-white hover:ml-1.5 duration-300  cursor-pointer">Flight</a>
          </li>
          <li className='my-3'>
            <a onClick={gogethotel} className="text-[#c1c1c1] hover:text-white hover:ml-1 duration-300  cursor-pointer">Get Hotel</a>
          </li>
          <li className='my-3'>
            <a onClick={goGetInsurance} className="text-[#c1c1c1] hover:text-white hover:ml-1 duration-300  cursor-pointer">Get Insurance</a>
          </li>
          <li className='my-3'>
            <a onClick={goDeals} className="text-[#c1c1c1] hover:text-white hover:ml-1 duration-300  cursor-pointer">Deals</a>
          </li>
          <li className='my-3'>
            <a onClick={goGetVisa} className="text-[#c1c1c1] hover:text-white hover:ml-1 duration-300  cursor-pointer">Get Visa</a>
          </li>
          <li className='my-3'>
            <a onClick={goTrip} className="text-[#c1c1c1] hover:text-white hover:ml-1 duration-300  cursor-pointer">Trip</a>
          </li>
        </ul>
      </div>
      <div className="lg:w-1/5 md:w-1/3 w-full  group md:px-0 lg:px-0 px-3 ">
        <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">Contact Us</h2>
        <ul className="list-none space-y-4 cursor-pointer mb-10 ">


          <li className='my-3 '> 
          <a className="text-[#c1c1c1] hover:text-white text-sm  hover:ml-2 duration-300 mx-1 gap-2 flex items-center ">
          <Icon icon="wpf:message-outline" />  
              Saer@gmail.com</a>
          </li>

          
          <li className='my-3'>
          <a className="text-[#c1c1c1] mx-1 gap-2 hover:text-white text-sm hover:ml-2 duration-300 flex items-center ">
          <Icon icon="icomoon-free:phone" />  
          +92-123456789</a>
          </li>
          
          


          <li className='my-3'>
          <a className="text-[#c1c1c1] mx-1 gap-2 hover:text-white text-sm hover:ml-2 duration-300 flex items-center ">
          <Icon icon="icomoon-free:phone" />  
          Phone : 03103889147</a>
          </li>

          
          <li className='my-3'>
          <a className="text-[#c1c1c1] mx-1 gap-2 hover:text-white text-sm hover:ml-2 duration-300 flex items-center ">
          <Icon icon="pepicons-pencil:internet" />  
          Yourwebsite.com </a>
          </li>


        </ul>
      </div>
      <div className="lg:w-1/5 md:w-1/3 w-full  md:px-0 lg:px-0 px-3 ">
        <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">Company</h2>
        <ul className="list-none space-y-4 text-sm cursor-pointer mb-10 ">
          <li className='my-3'>
            <a className="text-[#c1c1c1] hover:text-white duration-300 hover:ml-1">About Us</a>
          </li>
          <li className='my-3'>
            <a className="text-[#c1c1c1] hover:text-white duration-300 hover:ml-1">FAQ</a>
          </li>
          <li className='my-3'>
            <a onClick={privacyPolicy} className="text-[#c1c1c1] cursor-pointer hover:text-white duration-300 hover:ml-1">Privacy policy</a>
          </li>
          <li className='my-3'>
            <a onClick={termcondition} className="text-[#c1c1c1] cursor-pointer hover:text-white duration-300 hover:ml-1">Term of use</a>
          </li>
          <li className='my-3'>
            <a onClick={helpcenter} className="text-[#c1c1c1] cursor-pointer hover:text-white duration-300 hover:ml-1">Blogs</a>
          </li>
        </ul>
      </div>
      <div className="lg:w-1/5 md:w-1/3 w-full  md:px-0 lg:px-0 px-3">
        <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">Social links</h2>
        <ul className="list-none items-center flex my-3 cursor-pointer gap-1 ">

        <li><Icon icon="ic:round-facebook" className='w-10 h-10 text-gray-300 hover:text-white duration-300' /></li>

        <li><Icon  icon="ri:instagram-fill" className='w-10 h-10 text-gray-300 hover:text-white duration-300' /></li>

        <li><Icon icon="bi:linkedin" className='w-8 h-8 text-gray-300 hover:text-white duration-300' /></li>

        <li><Icon   icon="fa6-brands:square-x-twitter"  className='w-10 h-10 text-gray-300 hover:text-white duration-300' /></li>

          
       
       
        
        </ul>
      </div>
      <div className="lg:w-1/5 md:w-1/3 w-full  md:px-0 lg:px-0 px-3  flex-shrink-0 md:mr-0 mr-auto md:text-left md:mt-0 ">
  
  <span className="ml-3 text-[15px] md:text-left text-center  text-[#699fc9]">Get The App</span>

  <div className="justify-center items-center border self-stretch flex  grow flex-col mt-7 pl-2 pr-2 py-3 rounded-xl md:w-full lg:w-full w-[250px] border-solid border-white max-md:px-5">
        <div className="items-start flex-wrap flex justify-between gap-2">
          <img
            loading="lazy"
            src={apple}
            className="aspect-[0.95] object-contain object-center w-9 self-center max-w-full my-auto"
          />
          <div className="items-start self-stretch flex flex-col">
            <div className="self-stretch text-white text-opacity-80 text-xs font-medium">
            Download on the                  </div>
            <div className="text-white text-lg font-semibold self-stretch whitespace-nowrap">
            Apple Store                  </div>
          </div>
        </div>
        </div>

<div className="justify-center items-center border self-stretch flex  grow flex-col mt-7 pl-2 pr-2 py-3 rounded-xl border-solid md:w-full lg:w-full w-[250px] border-white max-md:px-5">
        <div className="items-start  flex justify-between gap-2">
          <img
            loading="lazy"
            src={palystore}
            className="aspect-[0.95] object-contain object-center w-9  self-center max-w-full my-auto"
          />
          <div className="items-start self-stretch flex flex-col">
            <div className="self-stretch text-white text-opacity-80 text-xs font-medium">
              Get it on
            </div>
            <div className="text-white text-lg font-semibold self-stretch whitespace-nowrap">
              Google Play
            </div>
          </div>
        </div>
        </div>
</div>
    </div>
  </div>
 
  </div>
</footer> 











  



  

   </>
  )
}

export default Footer