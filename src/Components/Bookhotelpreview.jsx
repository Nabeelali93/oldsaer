import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './check.css';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

function Bookhotelpreview() {
 const nav = useNavigate()
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
     prevArrow: <div style={{ display: 'none' }}></div> ,
  nextArrow: <div style={{ display: 'none' }}></div>,
    variableWidth: false, // Ensure each slide has a fixed width
    centerMode: false, // Center the current slide
  };




  const goinformation = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  
    nav("/Hotelinformation");
  };

  return (

    <>


      <div className='bg-white  flex md:flex-row flex-col mb-0 ' >

<div className='relative md:w-[25%]  w-[100%]'>
<Slider {...settings} className='md:h-[100px]   '>
      <div className='w-full h-full outline-none'>
       <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/193638378.jpg?k=1880dde314d49d98c932cc82d7b389fb4098e50cf32ade42e15d56542ecfa1dd&o=&hp=1" 
       alt="" className='w-full md:h-[631px] h-[350px]  object-cover' />
      </div>
      <div className='w-full h-full outline-none'>
      <img src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/377728032.jpg?k=edcb3782144771c5113735254e9233c9c8a08c43889d4a9c06003fd9568a7ff5&o="
       alt="" className='object-cover w-full md:h-[631px] h-[350px]' />
      </div>
    </Slider>



<div className='absolute md:top-[570px] top-[290px] w-[100%] h-[50px] '>
<div className='flex items-center justify-center'>
  <button className='bg-white opacity-70 text-[#699FC9] md:text-[13px] px-2 py-1 flex flex-nowrap rounded-sm lg:text-[14px]'>See Room images</button>
</div>
</div>

</div>

<div className='md:w-[75%]   w-[100%] '>
<div className=' flex md:flex-row flex-col'>

<div className='md:w-[45%] w-[100%]'>
<div className=' md:p-10 sm:p-8 p-4'>
<h1 className='text-[27px] text-[#545050FA]'>Al Faris Hotel</h1>
<span className='text-[15px] text-gray-500'>200 meter from majd al hrm</span>
<h1 className='text-[27px] mt-5 text-[#545050FA]'>Location</h1>
<div className='flex   items-center ' >
<svg width="65" height="60" viewBox="0 0 65 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="SVGRepo_iconCarrier">
<path id="Vector" d="M13.4677 41.1912H22.9462L18.5438 54.9553H5.97471C5.31885 54.9553 4.77979 54.4162 4.77979 53.7603C4.77979 53.5267 4.85166 53.3021 4.97744 53.1045L12.4704 41.7213C12.695 41.3978 13.0724 41.1912 13.4677 41.1912Z" fill="white"/>
<path id="Vector_2" d="M22.0297 59.7439H5.97461C2.67734 59.7439 0 57.0666 0 53.7693C0 52.6013 0.341406 51.4603 0.988281 50.481L8.48125 39.0978C9.58633 37.4178 11.4551 36.4115 13.4676 36.4115H29.4957L22.0297 59.7439ZM13.4676 41.1912C13.0633 41.1912 12.6949 41.3888 12.4703 41.7303L4.97734 53.1135C4.85156 53.3111 4.77969 53.5357 4.77969 53.7693C4.77969 54.4252 5.31875 54.9642 5.97461 54.9642H18.5438L22.9461 41.2002H13.4676V41.1912Z" fill="#151313"/>
<path id="Vector_3" d="M26.5309 41.1912H36.3777L38.6508 54.9642H24.2578L26.5309 41.1912Z" fill="white"/>
<path id="Vector_4" d="M44.2839 59.7439H18.6245L22.4698 36.4205H40.4386L44.2839 59.7439ZM24.2577 54.9642H38.6507L36.3776 41.1912H26.5308L24.2577 54.9642Z" fill="#151313"/>
<path id="Vector_5" d="M41.2651 41.1912H50.7437C51.1479 41.1912 51.5163 41.3888 51.7409 41.7303L59.2429 53.1135C59.6022 53.6615 59.4495 54.4072 58.9015 54.7666C58.7038 54.8924 58.4792 54.9642 58.2456 54.9642H45.6765L41.2651 41.1912Z" fill="white"/>
<path id="Vector_6" d="M58.2457 59.7439H42.1906L34.7246 36.4115H50.7527C52.7652 36.4115 54.634 37.4178 55.7391 39.0978L63.232 50.481C64.1125 51.8107 64.418 53.4099 64.0945 54.9732C63.7711 56.5365 62.8637 57.8752 61.525 58.7556C60.5547 59.4025 59.4137 59.7439 58.2457 59.7439ZM45.6766 54.9642H58.2457C58.4793 54.9642 58.7039 54.8924 58.9016 54.7666C59.2609 54.533 59.3777 54.1916 59.4137 54.0119C59.4496 53.8322 59.4766 53.4728 59.243 53.1135L51.75 41.7392C51.5254 41.3978 51.157 41.2002 50.7527 41.2002H41.2652L45.6766 54.9642Z" fill="#151313"/>
<path id="Vector_7" d="M33.6734 46.1258C44.3109 36.9348 49.6296 28.7051 49.6296 21.4457C49.6296 10.0355 40.4027 2.38983 32.1101 2.38983C23.8175 2.38983 14.5906 10.0355 14.5906 21.4457C14.5906 28.7051 19.9093 36.9258 30.5558 46.1258C31.4453 46.8984 32.7749 46.8984 33.6734 46.1258Z" fill="#699FC9"/>
<path id="Vector_8" d="M32.1101 49.0906C30.987 49.0906 29.8729 48.7043 28.9835 47.9316C17.6901 38.1746 12.2007 29.5047 12.2007 21.4457C12.2007 8.61602 22.4968 0 32.1101 0C41.7233 0 52.0194 8.61602 52.0194 21.4457C52.0194 29.5047 46.53 38.1746 35.2276 47.9316C34.3472 48.7043 33.2241 49.0906 32.1101 49.0906ZM32.1101 4.77969C24.9495 4.77969 16.9804 11.6258 16.9804 21.4457C16.9804 27.9414 22.0745 35.641 32.1101 44.3199C42.1546 35.641 47.2397 27.9414 47.2397 21.4457C47.2397 11.6258 39.2706 4.77969 32.1101 4.77969Z" fill="#151313"/>
<path id="Vector_9" d="M23.3503 19.9184C23.3503 22.2416 24.2732 24.4697 25.916 26.1125C27.5588 27.7552 29.7869 28.6781 32.1101 28.6781C34.4333 28.6781 36.6614 27.7552 38.3042 26.1125C39.947 24.4697 40.8699 22.2416 40.8699 19.9184C40.8699 17.5951 39.947 15.3671 38.3042 13.7243C36.6614 12.0815 34.4333 11.1586 32.1101 11.1586C29.7869 11.1586 27.5588 12.0815 25.916 13.7243C24.2732 15.3671 23.3503 17.5951 23.3503 19.9184Z" fill="white"/>
<path id="Vector_10" d="M32.1101 31.068C25.9647 31.068 20.9604 26.0637 20.9604 19.9183C20.9604 13.773 25.9647 8.76874 32.1101 8.76874C38.2554 8.76874 43.2597 13.7641 43.2597 19.9183C43.2597 26.0726 38.2554 31.068 32.1101 31.068ZM32.1101 13.5394C28.5972 13.5394 25.7401 16.3965 25.7401 19.9094C25.7401 23.4223 28.5972 26.2793 32.1101 26.2793C35.6229 26.2793 38.48 23.4223 38.48 19.9094C38.48 16.3965 35.6229 13.5394 32.1101 13.5394Z" fill="#151313"/>
</g>
</svg>
<p className='text-[15px] text-gray-500 mx-2  '>
Abrahim kahlil road near kabuka chowk
</p>
</div>

<h1 className='text-[27px] mt-10 text-[#545050FA]'>ROOM TYPE</h1>
<div className='flex flex-row items-center ml-3 mt-5'>
<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="share-circle-svgrepo-com 1">
<g id="SVGRepo_iconCarrier">
<g id="Group" opacity="0.5">
<path id="Vector" d="M8.7806 9.1362C9.08936 8.86368 9.11874 8.39245 8.84623 8.08368C8.5737 7.77491 8.10247 7.74552 7.7937 8.01804C5.98881 9.61106 4.84863 11.9442 4.84863 14.5426C4.84863 14.9545 5.18249 15.2883 5.59432 15.2883C6.00616 15.2883 6.34002 14.9545 6.34002 14.5426C6.34002 12.3898 7.28285 10.4581 8.7806 9.1362Z" fill="#1C274C"/>
<path id="Vector_2" d="M19.3031 8.01804C18.9944 7.74552 18.5231 7.77491 18.2506 8.08368C17.9781 8.39245 18.0075 8.86368 18.3162 9.1362C19.8139 10.4581 20.7568 12.3898 20.7568 14.5426C20.7568 14.9545 21.0907 15.2883 21.5025 15.2883C21.9143 15.2883 22.2482 14.9545 22.2482 14.5426C22.2482 11.9442 21.108 9.61106 19.3031 8.01804Z" fill="#1C274C"/>
<path id="Vector_3" d="M11.7457 21.524C11.3469 21.4213 10.9403 21.6614 10.8377 22.0603C10.735 22.4591 10.9751 22.8656 11.374 22.9682C12.0698 23.1473 12.7985 23.2424 13.5483 23.2424C14.2982 23.2424 15.0269 23.1473 15.7227 22.9682C16.1216 22.8656 16.3617 22.4591 16.259 22.0603C16.1564 21.6614 15.7498 21.4213 15.351 21.524C14.7757 21.672 14.1717 21.751 13.5483 21.751C12.9249 21.751 12.321 21.672 11.7457 21.524Z" fill="#1C274C"/>
</g>
<path id="Vector_4" d="M10.5657 7.58286C10.5657 9.2302 11.9011 10.5656 13.5484 10.5656C15.1958 10.5656 16.5312 9.2302 16.5312 7.58286C16.5312 5.93553 15.1958 4.6001 13.5484 4.6001C11.9011 4.6001 10.5657 5.93553 10.5657 7.58286Z" fill="#699FC9"/>
<path id="Vector_5" d="M4.10303 19.514C4.10303 21.1613 5.43846 22.4967 7.08579 22.4967C8.73313 22.4967 10.0686 21.1613 10.0686 19.514C10.0686 17.8666 8.73313 16.5312 7.08579 16.5312C5.43846 16.5312 4.10303 17.8666 4.10303 19.514Z" fill="#699FC9"/>
<path id="Vector_6" d="M20.0111 22.4967C18.3637 22.4967 17.0283 21.1613 17.0283 19.514C17.0283 17.8666 18.3637 16.5312 20.0111 16.5312C21.6585 16.5312 22.9939 17.8666 22.9939 19.514C22.9939 21.1613 21.6585 22.4967 20.0111 22.4967Z" fill="#699FC9"/>
</g>
</g>
</svg>
<span className='text-[15px] text-gray-500 mx-5 '>Shared</span>
</div>

<div className='flex flex-row items-center ml-3 mt-2 '>
<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="lock-keyhole-svgrepo-com 1">
<g id="SVGRepo_iconCarrier">
<path id="Vector" d="M4.71436 18.5877C4.71436 16.0508 4.71436 14.7824 5.5217 13.9943C6.32904 13.2061 7.62843 13.2061 10.2272 13.2061H17.5777C20.1765 13.2061 21.4758 13.2061 22.2832 13.9943C23.0906 14.7824 23.0906 16.0508 23.0906 18.5877C23.0906 21.1246 23.0906 22.3931 22.2832 23.1812C21.4758 23.9693 20.1765 23.9693 17.5777 23.9693H10.2272C7.62843 23.9693 6.32904 23.9693 5.5217 23.1812C4.71436 22.3931 4.71436 21.1246 4.71436 18.5877Z" stroke="#699FC9" stroke-width="2.81"/>
<path id="Vector_2" opacity="0.5" d="M13.9026 20.3816C14.9175 20.3816 15.7402 19.5784 15.7402 18.5877C15.7402 17.597 14.9175 16.7938 13.9026 16.7938C12.8877 16.7938 12.0649 17.597 12.0649 18.5877C12.0649 19.5784 12.8877 20.3816 13.9026 20.3816Z" stroke="#1C274C" stroke-width="1.81"/>
<path id="Vector_3" opacity="0.5" d="M8.38965 13.2061V11.4122C8.38965 8.44006 10.8578 6.03064 13.9025 6.03064C16.9472 6.03064 19.4154 8.44006 19.4154 11.4122V13.2061" stroke="#1C274C" stroke-width="1.81" stroke-linecap="round"/>
</g>
</g>
</svg>
<span className='text-[15px] text-gray-500 mx-5 '>Private</span>
</div>

<div className='flex ml-3 mt-3'>

  <span className='text-[20px]'>Total Bed</span>
  <span className='mx-3 text-[20px] text-gray-500'>5</span>
</div>

</div>
</div>

<div className='md:w-[55%] w-[100%]'>

<div className='md:p-0 sm:p-8 p-4 md:mt-[110px] mt-[22px] '>
<h1 className='text-[27px] text-[#545050FA] '>Room Amenities</h1>
<div className='flex flex-row  ml-2 md:justify-between justify-start md:gap-0 gap-5 md:w-[55%] w-[100%]'>

<div className='flex flex-row items-center  '>
<svg width="30" height="28" viewBox="0 0 38 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="SVGRepo_iconCarrier">
<path id="Vector" d="M22.0927 4.81167C20.8384 3.94439 19.9339 3.02637 19.3613 2.35745C18.7886 3.02637 17.8796 3.93978 16.6207 4.81167C14.271 6.43552 11.5804 7.33048 8.60352 7.48271V18.2268C8.60352 18.619 8.65351 19.0757 8.75804 19.5831C8.75804 19.5831 10.0533 27.8592 19.3613 32.1356C19.3613 32.1356 26.1195 29.5384 29.0873 22.2634C29.7782 20.6626 30.1054 19.2279 30.1054 18.2268V7.48271C27.1285 7.33048 24.4379 6.43552 22.0927 4.81167Z" fill="white"/>
<path id="Vector_2" d="M23.8886 16.6079L25.9111 12.2069H23.0342L21.0117 16.6079H23.8886ZM14.9533 12.2069L12.9309 16.6079H15.8078L17.8303 12.2069H14.9533ZM21.8707 12.2069H18.9937L16.9713 16.6079H19.8482L21.8707 12.2069ZM9.36768 12.2069V16.6079H11.7674L13.7899 12.2069H9.36768ZM29.347 16.6079V12.2069H27.0746L25.0521 16.6079H29.347Z" fill="#699FC9"/>
<path id="Vector_3" d="M19.3579 32.1355C15.7038 30.5301 13.0587 27.9329 11.3043 25.3311C10.3545 25.0081 9.44093 24.6621 8.56831 24.3069C8.93645 25.0081 9.35003 25.7093 9.80907 26.3829C11.4316 28.7771 14.3403 32.0386 18.9807 33.9716C19.1034 34.0223 19.2306 34.05 19.3579 34.05C19.4851 34.05 19.6124 34.0269 19.7351 33.9762C23.112 32.5646 25.5707 30.4563 27.2842 28.4865C26.5252 28.4496 25.7435 28.3896 24.9481 28.3112C23.4437 29.8059 21.5894 31.1575 19.3579 32.1355ZM36.274 19.0294C35.9376 18.725 35.5513 18.4159 35.115 18.1114C34.2288 17.4794 33.1516 16.8474 31.92 16.2385V6.67991C31.92 6.1171 31.4746 5.66039 30.9292 5.66039C27.9977 5.64655 25.3708 4.84847 23.1165 3.28921C21.3667 2.08055 20.4259 0.802696 20.176 0.438254C19.9896 0.166075 19.6851 0 19.3579 0C19.0352 0 18.7261 0.161462 18.5398 0.433641C18.2898 0.798083 17.3445 2.07594 15.5947 3.2846C13.3359 4.84386 10.7044 5.64194 7.7775 5.65578C7.23211 5.66039 6.78671 6.1171 6.78671 6.67529V10.9471C6.22315 10.984 5.69139 11.0348 5.19145 11.104C4.06887 11.2562 3.11444 11.4869 2.33726 11.7913C1.01924 12.3126 0.251157 13.0415 0.0511819 13.9595C-0.139704 14.836 0.214798 15.7771 1.09651 16.7644L1.10105 16.769C1.11923 16.7874 1.13287 16.8059 1.15105 16.8243C1.97367 17.7193 3.21897 18.6327 4.85513 19.5415C4.96421 19.6015 5.07783 19.6661 5.19145 19.726C5.80047 20.0536 6.45494 20.3765 7.14121 20.6856C7.34119 21.4514 7.62297 22.2494 7.97293 23.0568C8.78192 23.412 9.63636 23.7533 10.5317 24.0809C10.0499 23.2321 9.65908 22.3971 9.35912 21.6128C11.8724 22.5862 14.7175 23.4443 17.7126 24.1178C21.0759 24.8744 24.3664 25.3357 27.3069 25.4787C26.8479 26.1476 26.3343 26.8119 25.7571 27.4577C26.5343 27.5223 27.2933 27.5685 28.025 27.5915C28.3522 27.1717 28.6431 26.7658 28.9022 26.3829C29.093 26.1015 29.2748 25.8154 29.4521 25.5248C30.0838 25.5202 30.6883 25.5017 31.2746 25.4602C32.7971 25.3587 34.0879 25.1419 35.1196 24.8144C35.3468 24.7406 35.5604 24.6668 35.7604 24.5837C36.1558 24.4223 36.5012 24.2377 36.7921 24.0394C36.6421 23.781 36.4512 23.5319 36.2422 23.2966C35.9422 23.4996 35.565 23.6795 35.1196 23.8364C34.1333 24.187 32.8062 24.4315 31.2155 24.5376C30.8201 24.5653 30.4111 24.5837 29.9884 24.5929C31.2064 22.3417 31.9245 20.0213 31.9245 18.2221V17.2672C33.1971 17.9223 34.2788 18.5958 35.1196 19.2555C35.3195 19.4123 35.5013 19.5646 35.674 19.7214C36.4149 20.3903 37.2557 21.3729 37.0648 22.2587C37.033 22.3971 36.9784 22.5262 36.9012 22.6554C37.133 22.9091 37.3284 23.1629 37.4829 23.412C37.7192 23.1213 37.8738 22.803 37.951 22.457C38.1783 21.396 37.6147 20.2427 36.274 19.0294ZM5.29144 18.725C5.25963 18.7065 5.22327 18.6881 5.19145 18.6696C3.65074 17.8069 2.4827 16.9304 1.76006 16.1185C1.75552 16.1185 1.75552 16.1231 1.75097 16.1231C1.46464 15.8279 1.2783 15.505 1.21013 15.3804C0.955615 14.9329 0.855628 14.5223 0.937436 14.1533C1.15559 13.143 2.70994 12.3864 5.19145 12.0312C5.68685 11.962 6.2186 11.9067 6.78671 11.8698V18.2267C6.78671 18.6419 6.82762 19.0894 6.90033 19.5553C6.33677 19.2832 5.79593 19.0064 5.29144 18.725ZM30.1066 18.2267C30.1066 19.6891 29.4021 22.0972 27.8886 24.5791C24.8708 24.473 21.4349 24.0071 17.9126 23.2136C14.6721 22.4847 11.6134 21.5436 8.97735 20.4688C8.72738 19.6015 8.60467 18.8311 8.60467 18.2267V7.4826C11.5816 7.33037 14.2721 6.43541 16.6219 4.81156C17.8808 3.94428 18.7852 3.02626 19.3624 2.35734C19.9351 3.02626 20.8395 3.93967 22.0939 4.81156C24.4391 6.43541 27.1296 7.33037 30.1066 7.4826V18.2267Z" fill="#353E45"/>
<path id="Vector_4" d="M6.77241 13.9546C4.94991 14.0699 3.45465 14.3559 2.3366 14.7988C1.9003 14.9695 1.52307 15.1678 1.20947 15.3846C1.34582 15.6245 1.53216 15.869 1.7594 16.1274C2.72292 15.4815 4.46361 15.0433 6.77241 14.8864V13.9546Z" fill="#353E45"/>
<path id="Vector_5" d="M1.20489 15.3781C1.27306 15.5026 1.46395 15.8255 1.74573 16.1208C1.75028 16.1208 1.75028 16.1162 1.75482 16.1162C1.53212 15.8624 1.34578 15.6179 1.20489 15.3781C1.20944 15.3781 1.20944 15.3781 1.20489 15.3781ZM37.4776 23.4096C37.3186 23.1605 37.1231 22.9068 36.8959 22.6531C36.7096 22.4501 36.505 22.2425 36.2732 22.0349C35.237 21.0984 33.7236 20.1343 31.8647 19.2162C31.8465 19.3408 31.7647 19.8944 31.7102 20.1712C33.3827 21.0154 34.7371 21.8873 35.6688 22.7269C35.8597 22.8976 36.0551 23.0913 36.2369 23.2943C36.4459 23.525 36.6368 23.7787 36.7868 24.037C37.0186 24.4384 37.1459 24.8628 37.0595 25.2641C36.7959 26.4682 34.6098 27.3216 31.2148 27.5477C30.224 27.6122 29.1514 27.6261 28.0243 27.5892C27.2925 27.5661 26.5335 27.52 25.7564 27.4554C23.293 27.2478 20.6297 26.8326 17.9119 26.2191C15.2895 25.6286 12.7898 24.8997 10.5355 24.0739C9.6402 23.7464 8.78576 23.405 7.97677 23.0498C7.01326 22.6254 6.11337 22.1825 5.29529 21.7304C2.3093 20.0743 0.68223 18.3628 0.941288 17.1587C0.973103 17.0203 1.02764 16.8866 1.1049 16.762L1.10036 16.7574C1.05946 16.7159 0.800397 16.4483 0.518614 16.0054C0.28228 16.2961 0.127754 16.6144 0.0504906 16.9604C-0.14494 17.8553 0.227741 18.8195 1.1549 19.8252C1.97752 20.7201 3.22282 21.6335 4.85898 22.5423C5.96793 23.1559 7.21778 23.751 8.5767 24.3046C9.44477 24.6598 10.3583 25.0012 11.3127 25.3287C13.3125 26.0115 15.4713 26.6204 17.7165 27.1232C20.2071 27.6814 22.6568 28.0828 24.9519 28.3088C25.7518 28.3873 26.5335 28.4472 27.288 28.4841C27.9561 28.5164 28.6015 28.5349 29.2287 28.5349C29.9377 28.5349 30.6239 28.5118 31.2739 28.4703C33.1327 28.3457 34.6416 28.0505 35.7597 27.5938C37.0186 27.0771 37.7549 26.3621 37.9503 25.4671C38.0912 24.812 37.9321 24.1247 37.4776 23.4096Z" fill="#353E45"/>
<path id="Vector_6" d="M1.10481 16.7687C1.10481 16.7687 1.09668 16.7687 1.09668 16.7599C1.09668 16.7599 1.10481 16.7599 1.10481 16.7687Z" fill="#353E45"/>
</g>
</svg>
<span className='md:text-[18px] text-[12px] text-[#699FC9] mx-2'>Safe </span>

</div>

<div className='flex flex-row items-center  '>
<svg width="30" height="30" viewBox="0 0 38 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="SVGRepo_iconCarrier">
<path id="Vector" d="M0.00181389 13.6182C0.0120945 13.3573 0.0205631 13.0853 0.0293331 12.8049C0.116127 10.0388 0.23505 6.25052 2.2309 3.85074C4.31528 1.3447 6.77209 0.222119 9.33647 0.603979C11.5639 0.935845 13.7536 2.35348 15.8474 4.81752C20.0216 0.903031 25.5401 0.0605035 30.2948 2.28722C31.0254 2.62935 31.4451 3.28809 31.5791 4.04735C30.3483 3.49342 25.5536 7.65716 20.5166 13.7131C15.6927 19.5128 12.3129 25.0448 12.4401 26.8024C11.8837 26.5857 11.4101 26.0908 11.154 25.3002C9.30223 19.5852 10.0019 12.9521 13.2559 7.93403C11.7773 6.20498 10.2696 5.18211 8.88588 4.97596C7.44344 4.76117 6.11427 5.41208 4.82175 6.96588C3.84224 8.14355 3.75468 10.9337 3.6908 12.971C3.6821 13.2472 3.67364 13.5155 3.66381 13.7737V27.0426C3.66381 28.2591 2.84351 29.2453 1.83179 29.2453C0.820068 29.2453 -0.000226974 28.259 -0.000226974 27.0426V13.7223L0.00181389 13.6182Z" fill="#30373B" stroke="black" stroke-width="0.000688406"/>
<path id="Vector_2" d="M20.517 13.7138C15.2258 20.0753 11.6712 26.1156 12.5774 27.2051C13.4836 28.2947 18.5076 24.0209 23.7987 17.6594C29.0898 11.2978 32.6446 5.25762 31.7383 4.16803C30.8321 3.07844 25.8082 7.35225 20.517 13.7138ZM9.2552 12.1869C9.40032 9.01283 10.515 6.01492 12.3855 3.76817C14.2542 1.51928 16.7477 0.179063 19.3878 0.00456825C20.3316 -0.0583327 21.2143 0.532682 21.6727 1.50883C19.0344 2.22019 16.5269 3.80962 14.4731 6.27885C12.4195 8.74789 11.0976 11.7623 10.5061 14.934C9.6943 14.3829 9.2028 13.3219 9.2552 12.1869Z" fill="black" stroke="black" stroke-width="0.000688406"/>
<path id="Vector_3" d="M27.1902 33.7092L23.2076 28.9209C22.8295 28.4663 22.8295 27.7292 23.2076 27.2746C23.5857 26.82 24.1987 26.82 24.5768 27.2746L28.5594 32.063C28.9375 32.5176 28.9375 33.2547 28.5594 33.7092C28.3704 33.9366 28.1226 34.0502 27.8748 34.0502C27.627 34.0502 27.3792 33.9366 27.1902 33.7092ZM29.1815 20.6639L26.4486 17.3782C26.0705 16.9236 26.0705 16.1865 26.4486 15.7319C26.8267 15.2773 27.4398 15.2773 27.8178 15.7319L30.5508 19.0177C30.9288 19.4723 30.9288 20.2094 30.5508 20.6639C30.3617 20.8913 30.1139 21.0049 29.8661 21.0049C29.6183 21.0049 29.3705 20.8913 29.1815 20.6639ZM34.5123 19.5842L27.1902 10.7809C26.8121 10.3263 26.8121 9.58919 27.1902 9.13461C27.5683 8.67994 28.1813 8.67994 28.5594 9.13461L35.8815 17.9379C36.2596 18.3925 36.2596 19.1296 35.8815 19.5842C35.6925 19.8115 35.4447 19.9251 35.1969 19.9251C34.949 19.9251 34.7013 19.8115 34.5123 19.5842ZM24.6331 22.1665L20.6504 17.3782C20.2723 16.9236 20.2723 16.1865 20.6504 15.7319C21.0285 15.2773 21.6416 15.2773 22.0197 15.7319L26.0023 20.5202C26.3804 20.9748 26.3804 21.7119 26.0023 22.1665C25.8133 22.3938 25.5655 22.5074 25.3176 22.5074C25.0698 22.5074 24.8221 22.3938 24.6331 22.1665ZM36.3471 29.3488L32.3645 24.5605C31.9864 24.1059 31.9864 23.3689 32.3645 22.9143C32.7426 22.4596 33.3556 22.4596 33.7337 22.9143L37.7164 27.7026C38.0945 28.1571 38.0945 28.8942 37.7164 29.3488C37.5274 29.5761 37.2796 29.6898 37.0318 29.6898C36.7839 29.6898 36.5362 29.5761 36.3471 29.3488ZM33.553 33.2852L27.1902 25.6351C26.8121 25.1805 26.8121 24.4434 27.1902 23.9889C27.5683 23.5342 28.1813 23.5342 28.5594 23.9889L34.9223 31.639C35.3004 32.0935 35.3004 32.8306 34.9223 33.2852C34.7333 33.5125 34.4855 33.6262 34.2376 33.6262C33.9898 33.6262 33.742 33.5125 33.553 33.2852ZM22.0767 25.7932C22.3244 25.7932 22.5723 25.6796 22.7614 25.4522C23.1394 24.9977 23.1394 24.2606 22.7614 23.806L20.0284 20.5202C19.6504 20.0656 19.0373 20.0656 18.6592 20.5202C18.281 20.9748 18.281 21.7119 18.6592 22.1665L21.3921 25.4522C21.4819 25.5605 21.5886 25.6464 21.7061 25.7049C21.8236 25.7634 21.9495 25.7934 22.0767 25.7932Z" fill="#699FC9" stroke="black" stroke-width="0.000688406"/>
</g>
</svg>
<span className='md:text-[18px] text-[12px] text-[#699FC9] mx-2'>Shower</span>

</div>


</div>

<div className='flex flex-row  ml-2 md:justify-between justify-start md:gap-0 gap-5 md:w-[70%] w-[100%] mt-5'>

<div className='flex flex-row items-center  '>
<svg width="28" height="30" viewBox="0 0 38 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="SVGRepo_iconCarrier">
<path id="Vector" opacity="0.5" d="M2.7478 15.8902C3.64873 12.0518 4.09921 10.1327 5.80942 8.99887C7.51965 7.86508 9.96401 7.86508 14.8528 7.86508H23.1473C28.0361 7.86508 30.4804 7.86508 32.1906 8.99887C33.9009 10.1327 34.3513 12.0518 35.2522 15.8902L36.7917 22.4489C38.0586 27.8462 38.692 30.5448 36.8452 32.3224C34.9985 34.1 31.5613 34.1 24.6868 34.1H13.3133C6.43882 34.1 3.00159 34.1 1.15478 32.3224C-0.692012 30.5448 -0.058584 27.8462 1.20831 22.4489L2.7478 15.8902Z" fill="#699FC9"/>
<path id="Vector_2" d="M14.3802 6.20084C14.3802 4.1633 16.4481 2.51155 18.9987 2.51155C21.5493 2.51155 23.6172 4.1633 23.6172 6.20084V7.84052C24.779 7.84081 25.7969 7.84337 26.696 7.86492C26.6962 7.8568 26.6962 7.84867 26.6962 7.84052V6.20084C26.6962 2.80494 23.25 0.0520325 18.9987 0.0520325C14.7475 0.0520325 11.3013 2.80494 11.3013 6.20084V7.84052C11.3013 7.84868 11.3014 7.85683 11.3016 7.86496C12.2006 7.84339 13.2184 7.84086 14.3802 7.84055V6.20084Z" fill="#1C274C"/>
<path id="Vector_3" d="M14.6437 22.2122C15.2786 23.6468 16.9913 24.6717 18.9998 24.6717C21.0083 24.6717 22.7211 23.6468 23.356 22.2122C23.6392 21.5719 24.5188 21.2363 25.3203 21.4626C26.1221 21.689 26.5423 22.3916 26.2588 23.0319C25.2029 25.4185 22.3536 27.1313 18.9998 27.1313C15.646 27.1313 12.7967 25.4185 11.7408 23.0319C11.4574 22.3916 11.8776 21.689 12.6792 21.4626C13.4809 21.2363 14.3604 21.5719 14.6437 22.2122Z" fill="#1C274C"/>
</g>
</svg>

<span className='md:text-[18px] text-[12px] text-[#699FC9] mx-2'>Luggage </span>

</div>

<div className='flex flex-row items-center  '>
<svg width="30" height="30" viewBox="0 0 38 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="SVGRepo_iconCarrier">
<path id="Vector" d="M15.5623 28.1414V25.8832H11.6555C10.052 25.7668 8.52771 25.2288 7.28652 24.341C6.04533 23.4531 5.14638 22.2578 4.70993 20.915L4.34095 20.3127H3.58129C3.26342 20.2764 2.97094 20.1429 2.7565 19.9364C2.56107 19.7219 2.4541 19.457 2.45263 19.1836C2.45339 18.9856 2.51321 18.7911 2.62628 18.619C2.73898 18.4459 2.90409 18.3027 3.10378 18.205L3.75491 17.8851V15.7398C3.78159 15.5818 3.84788 15.4309 3.94915 15.2976C4.0504 15.1643 4.18414 15.0518 4.34095 14.9682C4.46109 14.8653 4.60347 14.7841 4.75992 14.7293C4.91636 14.6743 5.08377 14.6469 5.25255 14.6483H18.2753C18.4481 14.643 18.6202 14.6685 18.7809 14.7235C18.9417 14.7783 19.0876 14.8613 19.2098 14.9673C19.3319 15.0732 19.4277 15.1997 19.491 15.3392C19.5542 15.4786 19.5837 15.6277 19.5776 15.7774V21.423H14.1515C14.0283 21.1357 13.8185 20.8822 13.5438 20.6891C13.2795 20.4902 12.9561 20.3598 12.6105 20.3127C12.2578 20.2759 11.9 20.3147 11.5686 20.4257C11.242 20.5398 10.957 20.7284 10.7439 20.9714C10.5362 21.2131 10.4087 21.4995 10.3749 21.7995C10.3275 22.1008 10.3802 22.4076 10.5268 22.6839C10.6698 22.967 10.9033 23.2086 11.1996 23.3802C11.4865 23.5576 11.8248 23.662 12.1764 23.6814H22.0955C22.7844 23.6765 23.4437 23.4369 23.9309 23.0145C24.418 22.592 24.6943 22.0204 24.7 21.423V19.1648C24.7004 18.8664 24.6314 18.5708 24.4973 18.2961C24.3629 18.0211 24.1661 17.7725 23.9187 17.5652C23.6816 17.3546 23.3979 17.1876 23.0846 17.0743C22.7713 16.9611 22.4348 16.9041 22.0955 16.9065V14.6483C21.9729 12.3214 20.8208 10.125 18.8782 8.51592C16.9358 6.90686 14.3528 6.00894 11.6663 6.00894C8.97984 6.00894 6.39677 6.90686 4.45434 8.51592C2.51191 10.125 1.35964 12.3214 1.23717 14.6483V16.8501C0.497154 17.4395 0.053029 18.2571 0 19.1272C0.004693 19.8072 0.263644 20.4674 0.73796 21.009C1.18906 21.5344 1.80781 21.9334 2.51775 22.157C3.20028 23.8193 4.42938 25.2719 6.05325 26.3354C7.67712 27.3988 9.62468 28.0267 11.6555 28.1414H15.5623Z" fill="#699FC9"/>
<path id="Vector_2" d="M26.6001 0.0499878H11.4001C10.3923 0.0499878 9.42573 0.408721 8.7131 1.0473C8.00045 1.68585 7.6001 2.55193 7.6001 3.45499H24.7001V11.9675H34.2001V30.695H7.6001C7.6001 31.598 8.00045 32.4641 8.7131 33.1027C9.42573 33.7413 10.3923 34.1 11.4001 34.1H34.2001C35.2079 34.1 36.1744 33.7413 36.8871 33.1027C37.5998 32.4641 38.0001 31.598 38.0001 30.695V10.265L26.6001 0.0499878Z" fill="#423B3B"/>
</g>
</svg>

<span className='md:text-[18px] text-[12px] text-[#699FC9] mx-2'>24/7 Services</span>

</div>


</div>

<h1 className='text-[27px] mt-6 text-[#545050FA]'>Cancellation Rules</h1>
<span className='text-[15px] text-gray-500 p-2'>Free Cancellation until 22 July</span><br />
<br />
<span className='text-[20px] text-gray-500 '>According to time of destination</span>
<p className='text-[15px] text-[#699FC9]'>Until 20 JULY 23: 20 100% FREE</p>
<p className='text-[13px] text-[#EB252559] mt-5'>After 24 July 23.59 Charges May Applies</p>


</div>
</div>
</div>

<div className='bg-[#bed6e9] h-[155px]'>

<div className='flex justify-around mx-5 items-center md:py-8 py-4 md:flex-row flex-col '>
  <div className='text-center flex justify-center items-center'>  
  <p className=''>10 Adult ,5child ,2Infant</p>
  </div>
  <div className='text-[#206DA9]'>PKR 12,000   10 Nights</div>
  
  <div className='flex rounded-xl bg-[#206DA9] w-28 justify-center items-center text-center'>
<button onClick={goinformation}  className='p-3 text-white '>
choose
</button>



  </div>

</div>


{/* wishlist */}
<div className='flex justify-end px-10 items-center text-white gap-2'>

<svg width="24" height="24" viewBox="0 0 34 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="SVGRepo_iconCarrier">
<path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M17.225 5.33038C14.181 1.78292 9.09447 0.686599 5.28053 3.93501C1.46658 7.18342 0.92963 12.6145 3.92475 16.4565C6.41498 19.6507 13.9513 26.3878 16.4213 28.5683C16.6976 28.8123 16.8358 28.9342 16.997 28.9821C17.1376 29.0239 17.2915 29.0239 17.4322 28.9821C17.5935 28.9342 17.7315 28.8123 18.0079 28.5683C20.4779 26.3878 28.0141 19.6507 30.5044 16.4565C33.4995 12.6145 33.0281 7.14924 29.1486 3.93501C25.2691 0.720771 20.269 1.78292 17.225 5.33038Z" stroke="white" stroke-width="2.99805" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>

<p>save to wishlist</p>
</div>
{/* wishlist */}

</div>

</div>









    </div>
</>
  )
}

export default Bookhotelpreview





