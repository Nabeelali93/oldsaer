import "./app.css";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Navigation from "./Config/Navigation";
import Footer from "./Components/Footer";
import 'animate.css';
function App() {
  const location = useLocation();


  const nav = useNavigate();


  const [Sidebar, setSidebar] = useState(true);

  const togle = () => {
    if (Sidebar == false) {
      setSidebar(true);
    } else {
      setSidebar(false);
    }
  };


// these all function handling navigations

  const gosearchumrah = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    nav("/");
  };
  const goFlight = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    nav("/flightmain");
  };

  const gogethotel = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    nav("/gethotelmain");
  };

  const goDeals = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    nav("/dealoffer");
  };

  const goTrip = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    nav("/Trip");
  };

  const goGetVisa = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    nav("/GetVisa");
  };

  const goGetInsurance = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    nav("/GetInsurance");
  };

  const goManageBooking = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    nav("/manageBooking");
  };

  return (
    <>

<div className=" bg-[#699FC9] min-h-screen flex overflow-hidden">
        {/* Navbar Start */}

        <Navbar togle={togle} />
        {/* Navbar Close */}

        <div className=" flex  w-full z-10     md:mt-[60px] mt-[65px] bg-[#699FC9] mb-0">
          {/* SideBar Start */}
          {Sidebar ? (
            <> 

              {/* md sidebar start  */}
              

              <div  className="w-[18%] sticky   md:block hidden -z-10  ">
                <div className="md:w-[16.5%]   overflow-hidden animate__animated animate__fadeInLeft  h-full bg-[#699FC9] fixed ">
               
               
                 <ul className=" space-y-7  mt-8   ">






                    <li className="h-[30px]  items-center flex text-center ">
                      <button
                        onClick={() => gosearchumrah()}
                        className={`${
                          location.pathname === "/"
                            ? "text-[#699FC9]  py-1 w-full rounded-br-[200px] rounded-tr-[200px]  bg-white lg:w-[100%]  "
                            : location.pathname === "/flight"
                            ? "text-[#699FC9]  py-1 w-full rounded-br-[200px] rounded-tr-[200px]  bg-white lg:w-[100%]  "
                            : location.pathname === "/gethotel"
                            ? "text-[#699FC9]  py-1 w-full rounded-br-[200px] rounded-tr-[200px]  bg-white lg:w-[100%]  "
                            : location.pathname === "/HotelPreviews"
                            ? "text-[#699FC9]  py-1 w-full rounded-br-[200px] rounded-tr-[200px]  bg-white lg:w-[100%]  "
                            : location.pathname === "/MadinaHotel"
                            ? "text-[#699FC9]  py-1 w-full rounded-br-[200px] rounded-tr-[200px]  bg-white lg:w-[100%]  "
                            : location.pathname === "/MadinaHotelPre"
                            ? "text-[#699FC9]  py-1 w-full rounded-br-[200px] rounded-tr-[200px]  bg-white lg:w-[100%]  "
                            :location.pathname ==="/umrahcontactdetail"
                            ? "text-[#699FC9]  py-1 w-full rounded-br-[200px] rounded-tr-[200px]  bg-white lg:w-[100%]  "
                            :""
                        } items-center flex px-2 py-1 lg:hover:w-[100%]  group   lg:focus:w-[100%] 
                           hover:bg-[#bae6fd] focus:bg-white  hover:rounded-tr-[200px] 
                        hover:rounded-br-[200px]  focus:rounded-tr-[200px] focus:rounded-br-[200px]`}
                      >
                        

                        <svg
                          width="27"
                          height="27"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={`${
                            location.pathname === "/"
                            ? "group-focus:fill-[#699FC9]  group-hover:fill-white fill-[#699FC9]"
                            : location.pathname === "/flight"
                            ? "group-focus:fill-[#699FC9]  group-hover:fill-white fill-[#699FC9]"
                            : location.pathname === "/gethotel"
                            ? "group-focus:fill-[#699FC9]  group-hover:fill-white fill-[#699FC9]"
                            : location.pathname === "/HotelPreviews"
                            ? "group-focus:fill-[#699FC9]  group-hover:fill-white fill-[#699FC9]"
                            : location.pathname === "/MadinaHotel"
                            ? "group-focus:fill-[#699FC9]  group-hover:fill-white fill-[#699FC9]"
                            : location.pathname === "/MadinaHotelPre"
                            ? "group-focus:fill-[#699FC9]  group-hover:fill-white fill-[#699FC9]"
                            :location.pathname ==="/umrahcontactdetail"
                            ? "group-focus:fill-[#699FC9]  group-hover:fill-white fill-[#699FC9]"
                            : "group-focus:fill-[#699FC9]  group-hover:fill-white fill-white"
                          } `}
                        >
                          <g id="Frame">
                            <g id="SVGRepo_iconCarrier">
                              <path
                                id="Vector"
                                d="M16 5C15.786 5 15.5722 5.03452 15.3672 5.10352L5.02539 8.55078C4.41239 8.75478 4 9.32666 4 9.97266V22.8906C4 23.5786 4.46872 24.1787 5.13672 24.3457L15.5156 26.9395C15.6746 26.9795 15.837 27 16 27C16.163 27 16.3254 26.9795 16.4844 26.9395L26.8633 24.3457C27.5313 24.1797 28 23.5796 28 22.8906V9.97266C28 9.32666 27.5876 8.75478 26.9746 8.55078L16.6328 5.10352C16.4278 5.03452 16.214 5 16 5ZM16 7L26 10.332V12.877L16.8008 10.1191C16.2758 9.96114 15.7242 9.96114 15.1992 10.1191L6 12.877V10.332L16 7ZM16 11.6328C16.1614 11.6328 16.3239 11.6552 16.4824 11.7012L26 14.5586V22.5L16 25L6 22.5V14.5586L15.5254 11.7012C15.6794 11.6552 15.8386 11.6328 16 11.6328ZM15.2207 13.0059C15.1797 12.9974 15.1355 12.9975 15.0918 13.0098L11.7598 13.918C11.6428 13.952 11.5586 14.0605 11.5586 14.1855V14.7676C11.5586 14.9516 11.7332 15.0772 11.9082 15.0352L15.2422 14.127C15.3592 14.094 15.4414 13.9766 15.4414 13.8516V13.2773C15.4414 13.1401 15.3438 13.0312 15.2207 13.0059ZM16.7812 13.0059C16.6582 13.031 16.5586 13.1401 16.5586 13.2773V13.8535C16.5586 13.9865 16.6428 14.0959 16.7598 14.1289L20.0918 15.0352C20.2668 15.0852 20.4414 14.9525 20.4414 14.7695V14.1855C20.4414 14.0605 20.3582 13.9529 20.2422 13.9199L16.9082 13.0117C16.8645 12.9992 16.8223 12.9975 16.7812 13.0059ZM10.2207 14.3711C10.1797 14.3627 10.1355 14.3645 10.0918 14.377L7.31641 15.1348C7.19141 15.1688 7.10938 15.2773 7.10938 15.4023V15.9766C7.10938 16.1606 7.28398 16.2941 7.45898 16.2441L10.2422 15.4863C10.3592 15.4523 10.4414 15.3438 10.4414 15.2188V14.6445C10.4414 14.5073 10.3438 14.3963 10.2207 14.3711ZM21.7812 14.3711C21.6582 14.3963 21.5586 14.5073 21.5586 14.6445V15.2188C21.5586 15.3438 21.6428 15.4533 21.7598 15.4863L24.543 16.2441C24.718 16.2941 24.8926 16.1596 24.8926 15.9766V15.4023C24.8926 15.2773 24.8076 15.1688 24.6836 15.1348L21.9082 14.377C21.8645 14.3645 21.8223 14.3627 21.7812 14.3711Z"
                                
                              />
                            </g>
                          </g>
                        </svg>

                        <p
                          className={`${
                            location.pathname === "/"
                              ? "text-[#699FC9]"
                              :location.pathname === "/flight"
                              ? "text-[#699FC9]"
                              :location.pathname === "/gethotel"
                             ? "text-[#699FC9]"
                             : location.pathname === "/MadinaHotel"
                             ?"text-[#699FC9]"
                             :location.pathname === "/HotelPreviews"
                             ?"text-[#699FC9]"
                             :location.pathname === "/MadinaHotelPre"
                             ?"text-[#699FC9]"
                             :location.pathname ==="/umrahcontactdetail"
                             ?"text-[#699FC9]"
                             : "text-white"
                          }  mx-1.5    text-[0.65rem] duration-300   md:text-[0.70rem] lg:text-[12.5px] group-focus:text-[#699FC9]  group-hover:text-white `}
                        >
                          Umrah Packages
                        </p>
                      </button>
                    </li>

                    <li className=" h-[30px]   items-center flex text-center  ">
                      <button
                        onClick={() => goFlight()}
                        className={`${
                          location.pathname === "/flightmain"
                            ? "text-[#699FC9] p-0 rounded-br-[200px] w-full  rounded-tr-[200px] bg-white lg:w-[100%] "
                            : location.pathname === "/bookflight"
                            ? "text-[#699FC9] p-0 rounded-br-[200px] w-full  rounded-tr-[200px] bg-white lg:w-[100%] "
                            : location.pathname === "/modifyflight"
                            ? "text-[#699FC9] p-0 rounded-br-[200px] w-full  rounded-tr-[200px] bg-white lg:w-[100%] "
                            : location.pathname === "/Flightinformation"
                            ? "text-[#699FC9] p-0 rounded-br-[200px] w-full  rounded-tr-[200px] bg-white lg:w-[100%] "
                            : ""
                        } items-center flex px-2 py-2 lg:hover:w-[100%]  group   lg:focus:w-[100%] 
                        hover:bg-[#bae6fd] focus:bg-white  hover:rounded-tr-[200px] 
                     hover:rounded-br-[200px]  focus:rounded-tr-[200px] focus:rounded-br-[200px] `}
                      >
                      
                      <Icon icon="mynaui:aeroplane"  height="22" width="22"  className={`${
                            location.pathname === "/flightmain"
                            ? "group-focus:text-[#699FC9]  group-hover:text-white text-[#699FC9]"
                            
                              : location.pathname === "/bookflight"
                              ? "group-focus:text-[#699FC9]  group-hover:text-white text-[#699FC9]"
                              : location.pathname === "/modifyflight"
                              ? "group-focus:text-[#699FC9]  group-hover:text-white text-[#699FC9]"
                              : location.pathname === "/Flightinformation"
                              ? "group-focus:text-[#699FC9]  group-hover:text-white text-[#699FC9]"
                              : "group-focus:text-[#699FC9]  group-hover:text-white text-white"
                          } `}   />

                    
                        <p
                          className={`${
                            location.pathname === "/flightmain"
                              ? "text-[#699FC9]"
                              
                              : location.pathname === "/bookflight"
                              ? "text-[#699FC9]"
                              : location.pathname === "/modifyflight"
                              ? "text-[#699FC9]"
                              : location.pathname === "/Flightinformation"
                              ? "text-[#699FC9]"
                              : "text-white"
                          }  mx-1  md:mx-2.5 text-[0.65rem]   md:text-[0.70rem] lg:text-[12.5px] group-focus:text-[#699FC9] 
                          group-hover:text-white `}
                        >
                          Flights
                        </p>
                      </button>
                    </li>

                    <li className=" items-center flex text-center h-[30px] ">
                      <button
                        onClick={() => gogethotel()}
                        className={`${
                          location.pathname === "/gethotelmain"
                            ? "text-[#699FC9] p-1 rounded-br-[200px] rounded-tr-[200px] bg-white lg:w-[100%] w-full   mx:auto "
                            
                            
                            : location.pathname === "/bookhotel"
                            ? "text-[#699FC9] p-1 rounded-br-[200px] rounded-tr-[200px] bg-white md:w-[100%] w-full  mx:auto"
                            : location.pathname === "/modifyhotel"
                            ? "text-[#699FC9] p-1 rounded-br-[200px] rounded-tr-[200px] bg-white md:w-[100%] w-full  mx:auto"
                            : location.pathname === "/bookhotelpreview"
                            ? "text-[#699FC9] p-1 rounded-br-[200px] rounded-tr-[200px] bg-white md:w-[100%] w-full   mx:auto"
                            : location.pathname === "/Hotelinformation"
                            ? "text-[#699FC9] p-1 rounded-br-[200px] rounded-tr-[200px] bg-white md:w-[100%] w-full   mx:auto"
                            : ""
                        } items-center flex px-2 py-2 md:hover:w-[100%]    group    md:focus:w-[100%] w-full    hover:bg-[#bae6fd] focus:bg-white  hover:rounded-tr-[200px] hover:rounded-br-[200px]  focus:rounded-tr-[200px] focus:rounded-br-[200px] `}
                      >
        

 
        <Icon icon="icon-park-outline:hotel" height="22" width="22"  className={`${
                            location.pathname === "/gethotelmain"
                              ? "group-focus:stroke-[#699FC9]  group-hover:stroke-white stroke-[#699FC9]   "
                              
                              : location.pathname === "/bookhotel"
                              ? " group-focus:stroke-[#699FC9]  group-hover:text-white stroke-[#699FC9] "
                              : location.pathname === "/modifyhotel"
                              ? " group-focus:stroke-[#699FC9]  group-hover:text-white stroke-[#699FC9] "
                              : location.pathname === "/bookhotelpreview"
                              ? " group-focus:stroke-[#699FC9]  group-hover:text-white stroke-[#699FC9]"
                              : location.pathname === "/Hotelinformation"
                              ? "group-focus:stroke-[#699FC9]  group-hover:text-white stroke-[#699FC9]"
                              : "group-focus:stroke-[#699FC9]  group-hover:stroke-white text-white"
                          
                            } `} />
                    
                        <p
                          className={`${
                            location.pathname === "/gethotelmain"
                              ? "text-[#699FC9]"
                             
                            
                            
                              : location.pathname === "/bookhotel"
                              ? "text-[#699FC9]"
                              : location.pathname === "/modifyhotel"
                              ? "text-[#699FC9]"
                              : location.pathname === "/bookhotelpreview"
                              ? "text-[#699FC9]"
                              : location.pathname === "/Hotelinformation"
                              ? "text-[#699FC9]"
                              : "text-white"
                          } 
                    
                    mx-1  md:mx-2 text-[0.65rem]   md:text-[0.70rem] lg:text-[12.5px] group-focus:text-[#699FC9] group-hover:text-white `
                  }
                        >
                          Get Hotel
                        </p>
                      </button>
                    </li>

                    <li className=" items-center flex text-center h-[30px] ">
                    <button
                        onClick={() => goManageBooking()}
                        className={`${
                          location.pathname === "/manageBooking"
                            ? "text-[#699FC9] p-1 rounded-br-[200px] rounded-tr-[200px] bg-white lg:w-[100%] w-full md:w-[85%]  mx:auto "
                            : ""
                           }items-center flex px-2 py-2 lg:hover:w-[100%]  md:hover:w-[85%]  group    lg:focus:w-[100%] w-full md:focus:w-[85%]   hover:bg-[#bae6fd] focus:bg-white  hover:rounded-tr-[200px] hover:rounded-br-[200px]  focus:rounded-tr-[200px] focus:rounded-br-[200px] `}
                      >

                        
<Icon icon="icon-park-outline:setting-config"  rotate={3} vFlip={true} 
className={`${
  location.pathname === "/manageBooking"
    ? "focus:stroke-[#699FC9]  hover:stroke-white stroke-[#699FC9]"
    : "focus:stroke-[#699FC9]  hover:stroke-white text-white "

  } `}
                          
                          
                          height="22" width="22"  
                          />


                      

                      

                        <p className={location.pathname==="/manageBooking"   ?  " md:mx-1  flex-wrap  text-[12.5px]   md:text-[12.5px]lg:text-[12.5px] focus:text-[#699FC9]   " :" text-white text-[12.5px] mx-2" }
                        
                        >
                          Manage Booking
                        </p>
                      </button>
                    </li>

                    <li className=" items-center flex text-center h-[30px] ">

                    <button
                        onClick={goGetInsurance}
                        className={`${
                          location.pathname === "/GetInsurance"
                            ? "text-[#699FC9] p-2  rounded-br-[200px] rounded-tr-[200px] bg-white md:w-[100%]    "
                            : location.pathname === "/bookinsurance"
                            ? "text-[#699FC9] p-2  rounded-br-[200px] rounded-tr-[200px] bg-white md:w-[100%]   "
                            : location.pathname === "/contactDetail"
                            ? "text-[#699FC9] p-2  rounded-br-[200px] rounded-tr-[200px] bg-white md:w-[100%]    "
                            : location.pathname === "/modifyinsurance"
                            ? "text-[#699FC9] p-2  rounded-br-[200px] rounded-tr-[200px] bg-white md:w-[100%]    "

                            
                            : ""
                        } items-center flex px-2 py-2 md:hover:w-[100%]    group    md:focus:w-[100%] w-full    hover:bg-[#bae6fd] focus:bg-white  hover:rounded-tr-[200px] hover:rounded-br-[200px]  focus:rounded-tr-[200px] focus:rounded-br-[200px] `}  
                                            >


<Icon icon="solar:gallery-download-outline"  className={`${
                            location.pathname === "/GetInsurance"
                            ? "group-focus:stroke-[#699FC9]  group-hover:stroke-white stroke-[#699FC9]   "
                            : location.pathname === "/bookinsurance"
                            ? "group-focus:stroke-[#699FC9]  group-hover:stroke-white stroke-[#699FC9]  "
                            : location.pathname === "/contactDetail"
                            ? "group-focus:stroke-[#699FC9]  group-hover:stroke-white stroke-[#699FC9]  "
                            : location.pathname === "/modifyinsurance"
                            ? "group-focus:stroke-[#699FC9]  group-hover:stroke-white stroke-[#699FC9]  "
                            : "group-focus:stroke-[#699FC9]  group-hover:stroke-white text-white"
                          } `}   height="22" width="22"  color="white" />

            
                       

                        <p 
                        className={`${
                          location.pathname === "/GetInsurance"
                          ? "text-[#699FC9]"
                          : location.pathname === "/bookinsurance"
                          ? "text-[#699FC9]"
                          : location.pathname === "/contactDetail"
                          ? "text-[#699FC9]"
                          : location.pathname === "/modifyinsurance"
                          ? "text-[#699FC9]"
                          : "text-white ml-1"
                           } 
                           mx-1  md:mx-2 text-[0.65rem]   md:text-[0.70rem] lg:text-[12.5px] group-focus:text-[#699FC9] group-hover:text-white `                          }
                        >
                          Get Insurance
                        </p>



                      </button>
                    </li>

                    <li className=" items-center flex  h-[30px] text-center">
                    <button
                        onClick={goDeals}
                        className={`${
                          location.pathname === "/dealoffer"
                            ? "text-[#699FC9] px-2 py-1.5 rounded-br-[200px] w-full  rounded-tr-[200px]  bg-white md:w-[100%]   "
                            : location.pathname === "/dealoffer/flightinformation"
                            ? "text-[#699FC9] px-2 py-1.5 rounded-br-[200px] w-full  rounded-tr-[200px]  bg-white md:w-[100%]   "
                            : location.pathname === "/dealoffer/flightinformation"
                            ? "text-[#699FC9] px-2 py-1.5 rounded-br-[200px] w-full  rounded-tr-[200px]  bg-white md:w-[100%]   "
                           
                            : ""
                        } items-center px-2 py-1.5 flex md:hover:w-[100%]   group    md:focus:w-[100%]   focus:mx:auto hover:bg-[#bae6fd] focus:bg-white  hover:rounded-tr-[200px] hover:rounded-br-[200px]  focus:rounded-tr-[200px] focus:rounded-br-[200px] `}
                      >
                         <Icon icon="mynaui:percentage-circle"    className={`${
                            location.pathname === "/dealoffer"
                            ? "group-focus:text-[#699FC9]  group-hover:text-white text-[#699FC9]   "
                            : location.pathname === "/dealoffer/flightinformation"
                            ? "group-focus:text-[#699FC9]  group-hover:text-white text-[#699FC9]  "
                            : location.pathname === "/dealoffer/flightinformation"
                            ? "group-focus:text-[#699FC9]  group-hover:text-white text-[#699FC9]  "
                           : "group-focus:text-[#699FC9]  group-hover:text-white text-white"
                          } `}   height="26" width="26"   />
                       

                       

                        <p
                          className={`${
                            location.pathname === "/dealoffer"
                              ? "text-[#699FC9]"
                              :  location.pathname === "/dealoffer/flightinformation"
                              ? "text-[#699FC9]"
                              : location.pathname === "/dealoffer/flightinformation"
                              ? "text-[#699FC9]"
                              : "text-white"
                          }  mx-1  md:mx-2 text-[0.65rem]  group md:text-[0.70rem] lg:text-[12.5px] group-focus:text-[#699FC9] group-hover:text-white `}
                        >
                          Deals
                        </p>
                      </button>
                    </li>

               <li className=" items-center flex text-center h-[30px] ">
               <button
                        onClick={goGetVisa}
                        className={`${
                          location.pathname === "/GetVisa"
                            ? "text-[#699FC9] p-2  rounded-br-[200px] rounded-tr-[200px] bg-white md:w-[100%]    "
                            : location.pathname === "/bookvisa"
                            ? "text-[#699FC9] p-2  rounded-br-[200px] rounded-tr-[200px] bg-white md:w-[100%]    "
                            : location.pathname === "/visa/contactdetail"
                            ? "text-[#699FC9] p-2  rounded-br-[200px] rounded-tr-[200px] bg-white md:w-[100%]    "
                            : location.pathname === "/modifyvisa"
                            ? "text-[#699FC9] p-2  rounded-br-[200px] rounded-tr-[200px] bg-white md:w-[100%]    "
                            
                            : ""
                        } items-center flex px-2 py-2 md:hover:w-[100%]    group    md:focus:w-[100%] w-full    hover:bg-[#bae6fd] focus:bg-white  hover:rounded-tr-[200px] hover:rounded-br-[200px]  focus:rounded-tr-[200px] focus:rounded-br-[200px] `}                 
                      >

<Icon icon="solar:upload-square-linear"  height="22" width="22"  className={`${
                            location.pathname === "/GetVisa"
                            ? "group-focus:stroke-[#699FC9]  group-hover:stroke-white stroke-[#699FC9]   "
                            : location.pathname === "/bookvisa"
                            ? "group-focus:stroke-[#699FC9]  group-hover:stroke-white stroke-[#699FC9]  "
                            : location.pathname === "/visa/contactdetail"
                            ? "group-focus:stroke-[#699FC9]  group-hover:stroke-white stroke-[#699FC9]  "
                            : location.pathname === "/modifyvisa"
                            ? "group-focus:stroke-[#699FC9]  group-hover:stroke-white stroke-[#699FC9]  "
                           : "group-focus:stroke-[#699FC9]  group-hover:stroke-white text-white"
                          } `}       />

                      
                        

                        <p 
  className={`${
    location.pathname === "/GetVisa"
    ? "text-[#699FC9]"
    : location.pathname === "/bookvisa"
    ? "text-[#699FC9]"
    : location.pathname === "/visa/contactdetail"
    ? "text-[#699FC9]"
    : location.pathname === "/modifyvisa"
    ? "text-[#699FC9]"
    : "text-white "
     } 
      text-[0.65rem] mx-2   md:text-[0.70rem] lg:text-[12.5px] group-focus:text-[#699FC9] group-hover:text-white `                          }
                         
                        >
                          Get Visa
                        </p>
                      </button>
                    </li>

                    <li className=" items-center flex text-center h-[30px] ">
                    <button
                        onClick={goTrip}
                        className={`${
                          location.pathname === "/Trip"
                            ? "text-[#699FC9] px-2 py-1.5  rounded-br-[200px] rounded-tr-[200px] bg-white md:w-[100%]    "
                            : location.pathname === "/booktrip"
                            ? "text-[#699FC9] px-2 py-1.5  rounded-br-[200px] rounded-tr-[200px] bg-white md:w-[100%]    "
                            : location.pathname === "/modifytrip"
                            ? "text-[#699FC9] px-2 py-1.5  rounded-br-[200px] rounded-tr-[200px] bg-white md:w-[100%]    "
                            : location.pathname === "/trip/flightinformation"
                            ? "text-[#699FC9] px-2 py-1.5  rounded-br-[200px] rounded-tr-[200px] bg-white md:w-[100%]    "
                            : ""
                        } items-center flex px-2 py-1.5 md:hover:w-[100%]    group    md:focus:w-[100%] w-full    hover:bg-[#bae6fd] focus:bg-white  hover:rounded-tr-[200px] hover:rounded-br-[200px]  focus:rounded-tr-[200px] focus:rounded-br-[200px] `}                 
                                           >
                        
                        <Icon     icon="material-symbols-light:travel-luggage-and-bags-outline"  className={`${
                            location.pathname === "/Trip"
                            ? "group-focus:stroke-[#699FC9]  group-hover:text-white stroke-[#699FC9]   "
                            : location.pathname === "/booktrip"
                            ? "group-focus:stroke-[#699FC9]  group-hover:text-white stroke-[#699FC9]  "
                            : location.pathname === "/modifytrip"
                            ? "group-focus:stroke-[#699FC9]  group-hover:text-white stroke-[#699FC9]  "
                            : location.pathname === "/trip/flightinformation"
                            ? "group-focus:stroke-[#699FC9]  group-hover:text-white stroke-[#699FC9]  "
                           : "group-focus:stroke-[#699FC9]  group-hover:text-white stroke-white"
                          } `}          height="24" width="24" color="white" />
                        
                  

                       

                        <p 
                        
                        className={`${
                          location.pathname === "/Trip"
                          ? "text-[#699FC9]"
                          : location.pathname === "/booktrip"
                          ? "text-[#699FC9]"
                          : location.pathname === "/modifytrip"
                          ? "text-[#699FC9]"
                          : location.pathname === "/trip/flightinformation"
                          ? "text-[#699FC9]"
                          : "text-white "
                           } 
                            text-[0.65rem] ms-2   md:text-[0.70rem] lg:text-[12.5px] group-focus:text-[#699FC9] group-hover:text-white `                          }                        >
                          Trip
                        </p>
                      </button>

                    </li>


                  </ul>



                </div>
              </div>

              {/* md sidebar end  */}



              {/* sm sidebar start  */}

            
            </>
          ) : (
            <div className=" sticky lg:w-[4%] md:w-[5%] sm:w-[8%] w-[12%]   bg-[#699FC9] z-10   ">
              <div className="lg:w-[4%] md:w-[5%]  pt-5 sm:w-[8%] w-[12%]   fixed lg:hover:w-[18%] md:hover:w-[27%] sm:hover:w-[35%] hover:w-[65%] transition-all ease-in duration-10.50   group   overflow-hidden    h-full   bg-[#699FC9] ">
                <ul className=" space-y-5 md:mt-4 mt-1 md:leading-loose w-[95%]">
                  
                  <li className=" ">
                    <button
                      onClick={() => gosearchumrah()}
                      className={`${
                        location.pathname === "/"
                          ? " md:px-2 md:py-0.5 px-1 md:mr-0 mr-1 py-0.5 w-full  rounded-br-[200px] rounded-tr-[200px]  bg-white lg:w-[100%]  "
                          : location.pathname === "/flight"
                          ? " md:px-2 md:py-0.5 px-1 py-0.5 w-full  rounded-br-[200px] rounded-tr-[200px]  bg-white lg:w-[100%]  "
                          : location.pathname === "/gethotel"
                          ? " md:px-2 md:py-0.5 px-1 py-0.5 w-full  rounded-br-[200px] rounded-tr-[200px]  bg-white lg:w-[100%]  "
                          : location.pathname === "/HotelPreviews"
                          ? " md:px-2 md:py-0.5 px-1 py-0.5 w-full  rounded-br-[200px] rounded-tr-[200px]  bg-white lg:w-[100%]  "
                          : location.pathname === "/MadinaHotel"
                          ? "md:px-2 md:py-0.5 px-1 py-0.5 w-full  rounded-br-[200px] rounded-tr-[200px]  bg-white lg:w-[100%]  "
                          : location.pathname === "/umrahcontactdetail"
                          ? "md:px-2 md:py-0.5 px-1 py-0.5 w-full  rounded-br-[200px] rounded-tr-[200px]  bg-white lg:w-[100%]  "
                          : location.pathname === "/MadinaHotelPre"
                          ? " md:px-2 md:py-0.5 px-1 py-0.5 w-full  rounded-br-[200px] rounded-tr-[200px]  bg-white lg:w-[100%]  "
                          : "md:px-2 md:py-0.5 px-1 py-0.5 hover:bg-[#bae6fd] rounded-br-[200px] rounded-tr-[200px] lg:w-[100%]"
                      } items-center flex    lg:focus:w-[100%] 
                          group-focus:bg-white 
                       focus:rounded-tr-[200px] focus:rounded-br-[200px]`}
                    >
                      <svg
                        width="27"
                        height="27"
                        viewBox="0 0 33 32"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`${
                          location.pathname === "/"
                          ? "focus:fill-[#699FC9]   fill-[#699FC9]"
                         
                          : location.pathname === "/flight"
                          ? "focus:fill-[#699FC9]   fill-[#699FC9]"
                          : location.pathname === "/gethotel"
                          ? "focus:fill-[#699FC9]   fill-[#699FC9]"
                          : location.pathname === "/HotelPreviews"
                          ? "focus:fill-[#699FC9]   fill-[#699FC9]"
                          : location.pathname === "/MadinaHotel"
                          ? "focus:fill-[#699FC9]   fill-[#699FC9]"
                          : location.pathname === "/umrahcontactdetail"
                          ? "focus:fill-[#699FC9]   fill-[#699FC9]"
                          : location.pathname === "/MadinaHotelPre"
                          ? "focus:fill-[#699FC9]   fill-[#699FC9]"
                      
                          : "focus:fill-[#699FC9]  hover:fill-white fill-white"
                        } `}
                
                      >
                        <g id="Frame">
                          <g id="SVGRepo_iconCarrier">
                            <path
                              id="Vector"
                              d="M16 5C15.786 5 15.5722 5.03452 15.3672 5.10352L5.02539 8.55078C4.41239 8.75478 4 9.32666 4 9.97266V22.8906C4 23.5786 4.46872 24.1787 5.13672 24.3457L15.5156 26.9395C15.6746 26.9795 15.837 27 16 27C16.163 27 16.3254 26.9795 16.4844 26.9395L26.8633 24.3457C27.5313 24.1797 28 23.5796 28 22.8906V9.97266C28 9.32666 27.5876 8.75478 26.9746 8.55078L16.6328 5.10352C16.4278 5.03452 16.214 5 16 5ZM16 7L26 10.332V12.877L16.8008 10.1191C16.2758 9.96114 15.7242 9.96114 15.1992 10.1191L6 12.877V10.332L16 7ZM16 11.6328C16.1614 11.6328 16.3239 11.6552 16.4824 11.7012L26 14.5586V22.5L16 25L6 22.5V14.5586L15.5254 11.7012C15.6794 11.6552 15.8386 11.6328 16 11.6328ZM15.2207 13.0059C15.1797 12.9974 15.1355 12.9975 15.0918 13.0098L11.7598 13.918C11.6428 13.952 11.5586 14.0605 11.5586 14.1855V14.7676C11.5586 14.9516 11.7332 15.0772 11.9082 15.0352L15.2422 14.127C15.3592 14.094 15.4414 13.9766 15.4414 13.8516V13.2773C15.4414 13.1401 15.3438 13.0312 15.2207 13.0059ZM16.7812 13.0059C16.6582 13.031 16.5586 13.1401 16.5586 13.2773V13.8535C16.5586 13.9865 16.6428 14.0959 16.7598 14.1289L20.0918 15.0352C20.2668 15.0852 20.4414 14.9525 20.4414 14.7695V14.1855C20.4414 14.0605 20.3582 13.9529 20.2422 13.9199L16.9082 13.0117C16.8645 12.9992 16.8223 12.9975 16.7812 13.0059ZM10.2207 14.3711C10.1797 14.3627 10.1355 14.3645 10.0918 14.377L7.31641 15.1348C7.19141 15.1688 7.10938 15.2773 7.10938 15.4023V15.9766C7.10938 16.1606 7.28398 16.2941 7.45898 16.2441L10.2422 15.4863C10.3592 15.4523 10.4414 15.3438 10.4414 15.2188V14.6445C10.4414 14.5073 10.3438 14.3963 10.2207 14.3711ZM21.7812 14.3711C21.6582 14.3963 21.5586 14.5073 21.5586 14.6445V15.2188C21.5586 15.3438 21.6428 15.4533 21.7598 15.4863L24.543 16.2441C24.718 16.2941 24.8926 16.1596 24.8926 15.9766V15.4023C24.8926 15.2773 24.8076 15.1688 24.6836 15.1348L21.9082 14.377C21.8645 14.3645 21.8223 14.3627 21.7812 14.3711Z"
                              
                            />
                          </g>
                        </g>
                      </svg>

                      <p 
                                            

                      className={`${
                        location.pathname === "/"
                        ? "hidden group-hover:block text-xs text-[#699FC9] ml-1.5 overflow-hidden " 
                        :location.pathname === "/flight"
                        ? "hidden group-hover:block text-xs text-[#699FC9] ml-1.5 overflow-hidden"
                        :location.pathname === "/gethotel"
                        ? "hidden group-hover:block text-xs text-[#699FC9] ml-1.5 overflow-hidden" 
                        :location.pathname === "/HotelPreviews"
                        ? "hidden group-hover:block text-xs text-[#699FC9] ml-1.5 overflow-hidden" 
                        :location.pathname === "/MadinaHotel"
                        ? "hidden group-hover:block text-xs text-[#699FC9] ml-1.5 overflow-hidden" 
                        :location.pathname === "/umrahcontactdetail"
                        ? "hidden group-hover:block text-xs text-[#699FC9] ml-1.5 overflow-hidden" 
                        :location.pathname === "/MadinaHotelPre"
                        ? "hidden group-hover:block text-xs text-[#699FC9] ml-1.5 overflow-hidden" 
                       
                        :"hidden group-hover:block text-xs text-white ml-1.5 overflow-hidden"

                      }`}
                      >
                        Umrah Packages
                      </p>
                    </button>
                  </li>


                  <li className="mx-auto text-center ">
                    <button
                      onClick={() =>goFlight()}
                      className={`${
                        location.pathname === "/flightmain"
                          ? " md:px-2 md:py-1 px-1 py-0.5 w-full  rounded-br-[200px] rounded-tr-[200px]  bg-white lg:w-[100%]  "
                          
                          :  location.pathname === "/bookflight"
                          ? " md:px-2 md:py-1 px-1 py-0.5 w-full  rounded-br-[200px] rounded-tr-[200px]  bg-white lg:w-[100%]  "
                          :  location.pathname === "/modifyflight"
                          ? " md:px-2 md:py-1 px-1 py-0.5 w-full  rounded-br-[200px] rounded-tr-[200px]  bg-white lg:w-[100%]  "
                          :  location.pathname === "/Flightinformation"
                          ? " md:px-2 md:py-1 px-1 py-0.5 w-full  rounded-br-[200px] rounded-tr-[200px]  bg-white lg:w-[100%]  "
                          :    "md:px-2 md:py-1 px-1 py-0.5 hover:bg-[#bae6fd] rounded-br-[200px] rounded-tr-[200px] lg:w-[100%]"
                      } items-center flex    lg:focus:w-[100%] 
                          group-focus:bg-white 
                       focus:rounded-tr-[200px] focus:rounded-br-[200px]`}
                    >
                      



                      <Icon icon="mynaui:aeroplane"  height="22" width="22"  className={`${
                            location.pathname === "/flightmain"
                            ? "group-focus:stroke-[#699FC9]  group-hover:stroke-white text-[#699FC9]"
                           
                              : location.pathname === "/bookflight"
                              ? "group-focus:stroke-[#699FC9]  group-hover:stroke-white text-[#699FC9]"
                              : location.pathname === "/modifyflight"
                              ? "group-focus:stroke-[#699FC9]  group-hover:stroke-white text-[#699FC9]"
                              : location.pathname === "/Flightinformation"
                              ? "group-focus:stroke-[#699FC9]  group-hover:stroke-white text-[#699FC9]"
                              : "group-focus:stroke-[#699FC9]  group-hover:stroke-white text-white"
                          } `}   />

                      <p
                      
                      
                      className={`${
                        location.pathname === "/flightmain"
                        ? "hidden text-xs group-hover:block text-[#699FC9] ml-2.5 " 
                        : location.pathname === "/bookflight"
                        ? "hidden text-xs group-hover:block text-[#699FC9]  ml-2.5" 
                        :location.pathname === "/Flightinformation"
                        ? "hidden text-xs group-hover:block text-[#699FC9]  ml-2.5" 
                        :  "hidden text-xs  group-hover:block text-white ml-2.5"

                      }`}                      
                      
                      >
                        Flights
                      </p>


                     
                    </button>
                  </li>

                  <li className="mx-auto text-center ">
                    <button
                      onClick={() =>gogethotel()}
                      className={`${
                        location.pathname === "/gethotelmain"
                          ? " md:px-2 md:py-1 px-1 py-0.5 w-full  rounded-br-[200px] rounded-tr-[200px]  bg-white lg:w-[100%]  "
                          :location.pathname === "/bookhotel"
                          ? " md:px-2 md:py-1 px-1 py-0.5 w-full  rounded-br-[200px] rounded-tr-[200px]  bg-white lg:w-[100%]  "
                          : location.pathname === "/modifyhotel"
                          ? "md:px-2 md:py-1 px-1 py-0.5 w-full  rounded-br-[200px] rounded-tr-[200px]  bg-white lg:w-[100%]  "
                          : location.pathname === "/bookhotelpreview"
                          ? " md:px-2 md:py-1 px-1 py-0.5 w-full  rounded-br-[200px] rounded-tr-[200px]  bg-white lg:w-[100%]  "
                          : location.pathname === "/Hotelinformation"
                          ? " md:px-2 md:py-1 px-1 py-0.5 w-full  rounded-br-[200px] rounded-tr-[200px]  bg-white lg:w-[100%]  "
                          : "md:px-2 md:py-1 px-1 py-0.5 hover:bg-[#bae6fd] rounded-br-[200px] rounded-tr-[200px] lg:w-[100%]"
                          } items-center flex    lg:focus:w-[100%] 
                          group-focus:bg-white 
                          focus:rounded-tr-[200px] focus:rounded-br-[200px]`}
                    >


<Icon icon="icon-park-outline:hotel" height="22" width="22"  className={`${
                            location.pathname === "/gethotelmain"
                              ? "group-focus:stroke-[#699FC9]  group-hover:stroke-white text-[#699FC9]   "
                             
                              : location.pathname === "/bookhotel"
                              ? " group-focus:stroke-[#699FC9]  group-hover:stroke-white text-[#699FC9] "
                              : location.pathname === "/modifyhotel"
                              ? " group-focus:stroke-[#699FC9]  group-hover:stroke-white text-[#699FC9] "
                              : location.pathname === "/bookhotelpreview"
                              ? " group-focus:stroke-[#699FC9]  group-hover:stroke-white text-[#699FC9]"
                              : location.pathname === "/Hotelinformation"
                              ? "group-focus:stroke-[#699FC9]  group-hover:stroke-white text-[#699FC9]"
                              : "group-focus:stroke-[#699FC9]  group-hover:stroke-white text-white"
                          
                            } `} />
                     
                    
                      <p 
                                            

                      className={`${
                        location.pathname === "/gethotelmain"
                        ? "hidden group-hover:block text-[#699FC9] ml-2 text-xs " 
                        : location.pathname === "/bookhotel"
                        ? "hidden group-hover:block text-[#699FC9] ml-2 text-xs " 
                        : location.pathname === "/modifyhotel"
                        ? "hidden group-hover:block text-[#699FC9]  ml-2 text-xs" 
                        :  location.pathname === "/bookhotelpreview"
                        ? "hidden group-hover:block text-[#699FC9] ml-2 text-xs  " 
                        :  location.pathname === "/Hotelinformation"
                        ? "hidden group-hover:block text-[#699FC9] ml-2 text-xs " 
                      
                        :  "hidden group-hover:block text-white ml-2 text-xs"

                      }`}
                      >
                        Get Hotel
                      </p>
                    </button>
                  </li>
                 
   <li className="mx-auto text-center ">
                    <button
                      onClick={() =>goManageBooking()}
                      className={`${
                        location.pathname === "/manageBooking"
                          ? "md:px-2 md:py-1 px-1 py-0.5 w-full  rounded-br-[200px] rounded-tr-[200px]  bg-white lg:w-[100%]  "
                          : "md:px-2 md:py-1 px-1 py-0.5 hover:bg-[#bae6fd] rounded-br-[200px] rounded-tr-[200px] lg:w-[100%]"
                      } items-center flex    lg:focus:w-[100%] 
                          group-focus:bg-white 
                       focus:rounded-tr-[200px] focus:rounded-br-[200px]`}
                    >

<Icon icon="icon-park-outline:setting-config"  rotate={3} vFlip={true}   className={`${
                          location.pathname === "/manageBooking"
                          ? "focus:fill-[#699FC9]   text-[#699FC9]"
                          : "focus:fill-[#699FC9]  hover:fill-white text-white"
                        } `}   height="22" width="22"   />

                

                      <p 
                                            

                      className={`${
                        location.pathname === "/manageBooking"
                        ? "hidden group-hover:block text-[#699FC9] ml-2  text-xs" 
                        :"hidden group-hover:block text-white ml-2 text-xs"

                      }`}
                      >
                        Manage Booking
                      </p>
                    </button>
                  </li>
              
                  <li className="mx-auto text-center ">
                    <button
                      onClick={() =>goGetInsurance()}
                      className={`${
                        location.pathname === "/GetInsurance"
                          ? "md:px-2 md:py-1 px-1 py-1 w-full  rounded-br-[200px] rounded-tr-[200px]  bg-white lg:w-[100%]  "
                          : location.pathname === "/bookinsurance"
                          ?  " md:px-2 md:py-1 px-1 py-1 w-full  rounded-br-[200px] rounded-tr-[200px]  bg-white lg:w-[100%]  "
                          : location.pathname === "/contactDetail"
                          ?   "md:px-2 md:py-1 px-1 py-1 w-full  rounded-br-[200px] rounded-tr-[200px]  bg-white lg:w-[100%]  "
                          : location.pathname === "/modifyinsurance"
                          ?   "md:px-2 md:py-1 px-1 py-1 w-full  rounded-br-[200px] rounded-tr-[200px]  bg-white lg:w-[100%]  "
                          
                          : "md:px-2 md:py-1 px-1 py-1 hover:bg-[#bae6fd] rounded-br-[200px] rounded-tr-[200px] lg:w-[100%]"
                      }
                      items-center flex    lg:focus:w-[100%] 
                      group-focus:bg-white 
                   focus:rounded-tr-[200px] focus:rounded-br-[200px]`}             >
                 
                 <Icon icon="solar:gallery-download-outline"      className={`${
                          location.pathname === "/GetInsurance"
                          ? "focus:stroke-[#699FC9]   stroke-[#699FC9]"
                          : location.pathname === "/bookinsurance"
                          ? "focus:stroke-[#699FC9]   stroke-[#699FC9]"
                          : location.pathname === "/contactDetail"
                          ?"focus:stroke-[#699FC9]   stroke-[#699FC9]"
                          : location.pathname === "/modifyinsurance"
                          ?"focus:stroke-[#699FC9]   stroke-[#699FC9]"
                          : "focus:stroke-[#699FC9]  hover:stroke-white stroke-white"
                        } `}  height="22" width="22"  color="white" />
                 
                 
                 
                 
                  

                      <p 
         className={`${
          location.pathname === "/GetInsurance"
          ? "hidden group-hover:block text-[#699FC9] ml-2 text-xs  " 
          : location.pathname === "/bookinsurance"
          ? "hidden group-hover:block text-[#699FC9] ml-2 text-xs  " 
          : location.pathname === "/contactDetail"
          ?  "hidden group-hover:block text-[#699FC9] ml-2 text-xs  " 
          : location.pathname === "/modifyinsurance"
          ?  "hidden group-hover:block text-[#699FC9] ml-2 text-xs  "
          : "hidden group-hover:block text-white ml-2 text-xs"
           } 
          `}
                      >
                        Get Insurance
                      </p>
                    </button>
                  </li>
                  

                  <li className="mx-auto text-center ">
                    <button
                      onClick={() => goDeals()}
                      className={`${
                        location.pathname === "/dealoffer"
                          ? " md:px-2 md:py-1 px-1 py-0.5 w-full  rounded-br-[200px] rounded-tr-[200px]  bg-white lg:w-[100%]  "
                          :location.pathname === "/dealoffer/flightinformation"
                          ? " md:px-2 md:py-1 px-1 py-0.5 w-full  rounded-br-[200px] rounded-tr-[200px]  bg-white lg:w-[100%]  "
                          :location.pathname === "/dealoffer/flightinformation"
                          ? " md:px-2 md:py-1 px-1 py-0.5 w-full  rounded-br-[200px] rounded-tr-[200px]  bg-white lg:w-[100%]  "
                          : "md:px-2 md:py-1 px-1 py-0.5 hover:bg-[#bae6fd] rounded-br-[200px] rounded-tr-[200px] lg:w-[100%]"
                      } items-center flex    lg:focus:w-[100%] 
                          group-focus:bg-white 
                       focus:rounded-tr-[200px] focus:rounded-br-[200px]`}
                    >

<Icon icon="mynaui:percentage-circle"    className={`${
                            location.pathname === "/dealoffer"
                            ? "group-focus:stroke-[#699FC9]  group-hover:stroke-white text-[#699FC9]   "
                            : location.pathname === "/dealoffer/flightinformation"
                            ? "group-focus:stroke-[#699FC9]  group-hover:stroke-white text-[#699FC9]  "
                           : "group-focus:stroke-[#699FC9]  group-hover:stroke-white text-white"
                          } `}   height="24" width="24"   />

                  

                      <p 
                                            

                      className={`${
                        location.pathname === "/dealoffer"
                        ? "hidden group-hover:block text-[#699FC9] ml-2  text-xs  " 
                        :  location.pathname === "/dealoffer/flightinformation"
                        ? "hidden group-hover:block text-[#699FC9] ml-2  text-xs  " 
                        :"hidden group-hover:block text-white ml-2 text-xs"

                      }`}
                      >
Deals                      </p>
                    </button>
                  </li>

                  <li className="mx-auto text-center ">
                    <button
                      onClick={() =>goGetVisa()}
                      className={`${
                        location.pathname === "/GetVisa"
                        ?   "md:px-2 md:py-1 px-1 py-0.5 w-full  rounded-br-[200px] rounded-tr-[200px]  bg-white lg:w-[100%]  "
                        : location.pathname === "/bookvisa"
                          ?   "md:px-2 md:py-1 px-1 py-0.5 w-full  rounded-br-[200px] rounded-tr-[200px]  bg-white lg:w-[100%]  "
                          : location.pathname === "/visa/contactdetail"
                          ?   "md:px-2 md:py-1 px-1 py-0.5 w-full  rounded-br-[200px] rounded-tr-[200px]  bg-white lg:w-[100%]  "
                          : location.pathname === "/modifyvisa"
                          ?   "md:px-2 md:py-1 px-1 py-0.5 w-full  rounded-br-[200px] rounded-tr-[200px]  bg-white lg:w-[100%]  "
                          
                          : "md:px-2 md:py-1 px-1 py-0.5 hover:bg-[#bae6fd] rounded-br-[200px] rounded-tr-[200px] lg:w-[100%]"
                      } items-center flex    lg:focus:w-[100%] 
                      group-focus:bg-white 
                   focus:rounded-tr-[200px] focus:rounded-br-[200px]`}                      
                  
                    >


<Icon icon="solar:upload-square-linear"  height="22" width="22"  className={`${
                            location.pathname === "/GetVisa"
                            ? "group-focus:stroke-[#699FC9]  group-hover:stroke-white text-[#699FC9]   "
                            : location.pathname === "/bookvisa"
                            ? "group-focus:stroke-[#699FC9]  group-hover:stroke-white text-[#699FC9]  "
                            : location.pathname === "/visa/contactdetail"
                            ? "group-focus:stroke-[#699FC9]  group-hover:stroke-white text-[#699FC9]  "
                            : location.pathname === "/modifyvisa"
                            ? "group-focus:stroke-[#699FC9]  group-hover:stroke-white text-[#699FC9]  "
                           : "group-focus:stroke-[#699FC9]  group-hover:stroke-white text-white"
                          } `}       />



                     
                      <p 
                   className={`${
                    location.pathname === "/GetVisa"
                    ?  "hidden group-hover:block text-[#699FC9] ml-2 text-xs  " 
                    : location.pathname === "/bookvisa"
                    ?  "hidden group-hover:block text-[#699FC9] ml-2 text-xs  " 
                    : location.pathname === "/visa/contactdetail"
                    ?  "hidden group-hover:block text-[#699FC9] ml-2 text-xs  "
                    : location.pathname === "/modifyvisa"
                    ?  "hidden group-hover:block text-[#699FC9] ml-2 text-xs  "
                    : "hidden group-hover:block text-white ml-2 text-xs"
                     } 
                       `}
                      >
                        Get Visa
                 </p>
                    </button>
            
                  </li>



                  <li className="mx-auto text-center ">
                    <button
                      onClick={() =>goTrip()}
                      className={`${
                        location.pathname === "/Trip"
                        ?   "md:px-2 md:py-1 px-1 py-0.5 w-full  rounded-br-[200px] rounded-tr-[200px]  bg-white lg:w-[100%]  "
                        : location.pathname === "/booktrip"
                          ?   "md:px-2 md:py-1 px-1 py-0.5 w-full  rounded-br-[200px] rounded-tr-[200px]  bg-white lg:w-[100%]  "
                          : location.pathname === "/modifytrip"
                          ?   "md:px-2 md:py-1 px-1 py-0.5 w-full  rounded-br-[200px] rounded-tr-[200px]  bg-white lg:w-[100%]  "
                          : location.pathname === "/trip/flightinformation"
                          ?   "md:px-2 md:py-1 px-1 py-0.5 w-full  rounded-br-[200px] rounded-tr-[200px]  bg-white lg:w-[100%]  "
                          
                          : "md:px-2 md:py-1 px-1 py-0.5 hover:bg-[#bae6fd] rounded-br-[200px] rounded-tr-[200px] lg:w-[100%]"
                      } items-center flex    lg:focus:w-[100%] 
                      group-focus:bg-white 
                   focus:rounded-tr-[200px] focus:rounded-br-[200px]`} 
                    >
                     
                     <Icon  icon="material-symbols:travel-luggage-and-bags-outline"   className={`${
                          location.pathname === "/Trip"
                          ? "focus:stroke-[#699FC9]   text-[#699FC9]"
                          : location.pathname === "/booktrip"
                          ?"focus:stroke-[#699FC9]   text-[#699FC9]"
                          : location.pathname === "/modifytrip"
                          ?"focus:stroke-[#699FC9]   text-[#699FC9]"
                          : location.pathname === "/trip/flightinformation"
                          ?"focus:stroke-[#699FC9]   text-[#699FC9]"
                          : "focus:stroke-[#699FC9]  hover:stroke-white text-white"
                        } `}          height="22" width="22"  />
                     
                     
                     
                   
                      <p 
                                            

                                            className={`${
                                              location.pathname === "/Trip"
                                              ?  "hidden group-hover:block text-[#699FC9] ml-2 text-xs  " 
                                              : location.pathname === "/booktrip"
                                              ?  "hidden group-hover:block text-[#699FC9] ml-2 text-xs  " 
                                              : location.pathname === "/modifytrip"
                                              ?  "hidden group-hover:block text-[#699FC9] ml-2 text-xs  " 
                                              : location.pathname === "/trip/flightinformation"
                                              ?  "hidden group-hover:block text-[#699FC9] ml-2 text-xs  " 
                                              : "hidden group-hover:block text-white ml-2 text-xs"
                                               } 
                                                 `}
                      >
 Trip                    </p>
                    </button>
                  </li>


                 

                 

                  

                  
                </ul>
              </div>
            </div>

            
          )}

              {/* sm sidebar end  */}

          {/* Sidebar Close */}

          {Sidebar ? (
            <>
              <div className=" md:w-5/6 w-[100%] bg-gray-100  ">
                <Navigation />
                <Footer />
              </div>
            </>
          ) : (
            <div className=" lg:w-[96%] md:w-[95%] sm:w-[94] w-[89%] duration-1000  bg-gray-100 ">
              <Navigation />
              <Footer />
            </div>
          )}

          {/* // body content end */}
        </div>
      </div>

 
    </>
  );
}

export default App;
