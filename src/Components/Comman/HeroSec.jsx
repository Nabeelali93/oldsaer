import React,{useState} from 'react'
import booking from "../../assests/booking.png";
import download from "../../assests/download.png";
import help from "../../assests/help.png";
import world from "../../assests/Images/world.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';



function HeroSec() {



    const nav = useNavigate();
  
    const [Qustions, setQustions] = useState(false);
    const [Qustions1, setQustions1] = useState(false);
    const [Qustions2, setQustions2] = useState(false);
    const [Qustions3, setQustions3] = useState(false);
    const [Qustions4, setQustions4] = useState(false);
    const [Qustions5, setQustions5] = useState(false);
    const [Qustions6, setQustions6] = useState(false);
    const [Qustions7, setQustions7] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth);
    const handleResize = () => {
      setIsMobile(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  
    const slides =
      isMobile < 768
        ? 1
        : isMobile < 1024
        ? 2
       
        : isMobile < 1200
        ? 3
        : isMobile < 500
        ? 1
        : 3;

    const QustionTornari = () => {
        if (Qustions == false) {
          setQustions(true);
        } else {
          setQustions(false);
        }
      };
    



    const QustionTornari1 = () => {
        if (Qustions1 == false) {
          setQustions1(true);
        } else {
          setQustions1(false);
        }
      };
    
      const QustionTornari2 = () => {
        if (Qustions2 == false) {
          setQustions2(true);
        } else {
          setQustions2(false);
        }
      };
    
      const QustionTornari3 = () => {
        if (Qustions3 == false) {
          setQustions3(true);
        } else {
          setQustions3(false);
        }
      };
    
      const QustionTornari4 = () => {
        if (Qustions4 == false) {
          setQustions4(true);
        } else {
          setQustions4(false);
        }
      };
    
      const QustionTornari5 = () => {
        if (Qustions5 == false) {
          setQustions5(true);
        } else {
          setQustions5(false);
        }
      };
    
      const QustionTornari6 = () => {
        if (Qustions6 == false) {
          setQustions6(true);
        } else {
          setQustions6(false);
        }
      };
    
      const QustionTornari7 = () => {
        if (Qustions7 == false) {
          setQustions7(true);
        } else {
          setQustions7(false);
        }
      };
    


    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        arrows:false,
        slidesToShow: slides,
        slidesToScroll: 1,
        autoplay: {
          delay: 1000, // Set the delay in milliseconds (e.g., 5000 for 5 seconds)
          disableOnInteraction: false, // Enable autoplay even when user interacts with the slider
        },
      };
    

    const gohelpcenter = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    
        nav("/HelpCenter");
      };
    


    const goManageBooking = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    
        nav("/manageBooking");
      };


  return (
   <>
   
   
   <div  className="">
        <section className="text-gray-600 body-font ">
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-wrap -m-2">


              <div className="p-2 lg:w-1/3 md:w-1/2 w-full cursor-pointer ">

                <div className="h-full flex items-center hover:shadow-md duration-300  border-gray-200 border p-4 rounded-lg bg-white">
                  <div className="bg-[#E4F0FF]  rounded-full h-12 w-12 flex  justify-center mr-4 ">
                    <img
                      alt="team"
                      className=" object-contain h-6 w-6 m-auto"
                      src={download}
                    />
                  </div>{" "}
                  <div className="flex-grow cursor-pointer">
                    <h2 className="text-gray-900 md:text-[16px] text-[14px] title-font font-bold">
                      Download Umrah App
                    </h2>
                    <p className="text-gray-500 md:text-sm text-[11px]">
                      Find the best deals on our mobile app.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center hover:shadow-md duration-300 border-gray-200 border p-4 rounded-lg bg-white">
                  <div className="bg-[#E4F0FF]  rounded-full h-12 w-12 flex justify-center mr-4 ">
                    <img
                      alt="team"
                      className=" object-contain h-6 w-6 m-auto"
                      src={help}
                    />
                  </div>{" "}
                  <div
                    onClick={gohelpcenter}
                    className="flex-grow cursor-pointer"
                  >
                    <h2 className="text-gray-900 md:text-[16px] text-[14px] title-font font-bold">
                      Help Center
                    </h2>
                    <p className="text-gray-500 md:text-sm text-[11px]">
                      Connect with our support team
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center hover:shadow-md duration-300 border-gray-200 border p-4 rounded-lg bg-white">
                  <div className="bg-[#E4F0FF]  rounded-full h-12 w-12 flex justify-center mr-4 ">
                    <img
                      alt="team"
                      className=" object-contain h-6 w-6 m-auto"
                      src={booking}
                    />
                  </div>
                  <div
                    onClick={goManageBooking}
                    className="flex-grow cursor-pointer"
                  >
                    <h2 className="text-gray-900 md:text-[16px] text-[14px] title-font font-bold">
                      Manage Bookings
                    </h2>
                    <p className="text-gray-500 md:text-sm text-[11px]">
                      View and manage your bookings{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Card Section End */}

        {/* Special Deal Start */}

        <div className="md:ml-0 ml-5">
          <h1 className=" md:text-2xl text-[20px] md:mx-5 mx-2">Umrah Special deals</h1>
          <p className=" md:text-[14px] text-[12px] md:mx-5 mx-2">
            We provide the best and most affordable services in Pakistan
          </p>

          {/* slider start  */}

          <div className="w-[98%] mx-auto mt-5 -z-50 ">
            <Slider {...settings} className='gap-2'>
              <div className=" outline-none">
                <img
                  src="https://hotelsplatform.com/uploads/0000/1/2021/11/06/mk-almkrm.jpg"
                  alt=""
                  className="object-cover w-[98%] md:h-[200px] h-[280px] rounded-lg"
                />
              </div>
              <div className=" outline-none">
                <img
                  src="https://thumbs.dreamstime.com/b/madina-almanawarah-beautiful-night-view-holy-mosque-87878137.jpg"
                  alt=""
                  className="object-cover  w-[98%] md:h-[200px] h-[280px] rounded-lg"
                />
              </div>
              <div className=" outline-none">
                <img
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/2f/43/3e/al-marwa-rayhaan-by-rotana.jpg?w=1200&h=-1&s=1"
                  alt=""
                  className="object-cover w-[98%]  md:h-[200px] h-[280px] rounded-lg"
                />
              </div>
              <div className="  outline-none">
                <img
                  src="https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/https://www.cfmedia.vfmleonardo.com/imageRepo/5/0/91/747/497/QCAHD_4178759583_O/Intercontinental-Dar-Al-Tawhid-Makkah-Exterior.jpg?tr=w-780%2Ch-437%2Cfo-auto"
                  alt=""
                  className="object-cover  w-[98%] md:h-[200px] h-[280px] rounded-lg"
                />
              </div>

              <div className=" outline-none">
                <img
                  src="https://www.arabnews.pk/sites/default/files/styles/n_670_395/public/2023/04/14/3771816-70292908.jpg?itok=30hysHxV"
                  alt=""
                  className="object-cover w-[98%] md:h-[200px] h-[280px] rounded-lg"
                />
              </div>

              <div className=" outline-none">
                <img
                  src={world}
                  alt=""
                  className=" object-cover  w-[98%] md:h-[200px] h-[280px] rounded-lg"
                />
              </div>
            </Slider>
          </div>



          {/* slider and  */}
        </div>

        <div className="md:ml-1 cursor-pointer ml-5 mt-5 border-[#699FC9] border-l-8">
          <h1 className="md:text-2xl text-[20px] mx-5">Frequently asked Questions</h1>
          

          <button className="md:text-[18px] text-[14px] mx-5 md:mt-7 mt-4" onClick={() => QustionTornari()}>
            Why saer.pk
          </button>
          {Qustions ? null : (
            <>
              <p className=" mx-5 mt-3 md:text-[15px] text-[12px] font-[400px] text-[#908F8F] flex-wrap flex ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </>
          )}

          

          <hr className=" border-gray-400 w-6/6 mx-5 mt-10" />
          <div className="flex justify-between items-center ">
            <p className="p-5 ml-2 cursor-pointer md:text-[20px] text-[15px] ">
              Can I customize my Umrah package?
            </p>
            <div>
              {Qustions1 ? (
                <svg
                  height="17"
                  viewBox="0 0 56 56"
                  width="17"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-12"
                  onClick={() => QustionTornari1()}
                >
                  <path d="m27.9999 51.9063c13.0547 0 23.9064-10.8282 23.9064-23.9063 0-13.0547-10.8751-23.9063-23.9298-23.9063-13.0782 0-23.8828 10.8516-23.8828 23.9063 0 13.0781 10.8281 23.9063 23.9062 23.9063zm0-3.9844c-11.0625 0-19.8985-8.8594-19.8985-19.9219 0-11.0391 8.8126-19.9219 19.8751-19.9219 11.039 0 19.9218 8.8828 19.9454 19.9219.0235 11.0625-8.8829 19.9219-19.922 19.9219zm-9.4453-17.9297h18.8437c1.3126 0 2.2266-.6797 2.2266-1.9219 0-1.2656-.8437-1.9922-2.2266-1.9922h-18.8437c-1.3594 0-2.25.7266-2.25 1.9922 0 1.2422.9375 1.9219 2.25 1.9219z" />
                </svg>
              ) : (
                <svg
                  fill="none"
                  height="17"
                  viewBox="0 0 24 24"
                  width="17"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-12"
                  onClick={() => QustionTornari1()}
                >
                  <g
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="m12 7v10m-5-5h10" />
                    <circle cx="12" cy="12" r="10" />
                  </g>
                </svg>
              )}
            </div>
          </div>

          {Qustions1 ? (
            <p className=" mx-5 mt-3 mb-5 md:text-[15px] text-[12px] font-[400px] text-[#908F8F] flex-wrap flex">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and!
            </p>
          ) : null}

          <hr className=" border-gray-400 w-6/6 mx-5" />

          <div className="flex justify-between items-center ">
            <p className="p-5 ml-2 cursor-pointer md:text-[20px] text-[15px]">
              What is included in a typical Umrah package?
            </p>
            <div>
              {Qustions2 ? (
                <svg
                  height="17"
                  viewBox="0 0 56 56"
                  width="17"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-12"
                  onClick={() => QustionTornari2()}
                >
                  <path d="m27.9999 51.9063c13.0547 0 23.9064-10.8282 23.9064-23.9063 0-13.0547-10.8751-23.9063-23.9298-23.9063-13.0782 0-23.8828 10.8516-23.8828 23.9063 0 13.0781 10.8281 23.9063 23.9062 23.9063zm0-3.9844c-11.0625 0-19.8985-8.8594-19.8985-19.9219 0-11.0391 8.8126-19.9219 19.8751-19.9219 11.039 0 19.9218 8.8828 19.9454 19.9219.0235 11.0625-8.8829 19.9219-19.922 19.9219zm-9.4453-17.9297h18.8437c1.3126 0 2.2266-.6797 2.2266-1.9219 0-1.2656-.8437-1.9922-2.2266-1.9922h-18.8437c-1.3594 0-2.25.7266-2.25 1.9922 0 1.2422.9375 1.9219 2.25 1.9219z" />
                </svg>
              ) : (
                <svg
                  fill="none"
                  height="17"
                  viewBox="0 0 24 24"
                  width="17"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-12"
                  onClick={() => QustionTornari2()}
                >
                  <g
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="m12 7v10m-5-5h10" />
                    <circle cx="12" cy="12" r="10" />
                  </g>
                </svg>
              )}
            </div>
          </div>

          {Qustions2 ? (
            <p className=" mx-5 mt-3 md:text-[15px] text-[12px] cursor-pointer mb-5 font-[400px] text-[#908F8F] flex-wrap flex">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and!
            </p>
          ) : null}
          <hr className=" border-gray-400 w-6/6 mx-5" />

          <div className="flex justify-between items-center ">
            <p className="p-5 ml-2 cursor-pointer md:text-[20px] text-[15px] ">
              How do I choose the right Umrah package for me?
            </p>
            <div>
              {Qustions3 ? (
                <svg
                  height="17"
                  viewBox="0 0 56 56"
                  width="17"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-12"
                  onClick={() => QustionTornari3()}
                >
                  <path d="m27.9999 51.9063c13.0547 0 23.9064-10.8282 23.9064-23.9063 0-13.0547-10.8751-23.9063-23.9298-23.9063-13.0782 0-23.8828 10.8516-23.8828 23.9063 0 13.0781 10.8281 23.9063 23.9062 23.9063zm0-3.9844c-11.0625 0-19.8985-8.8594-19.8985-19.9219 0-11.0391 8.8126-19.9219 19.8751-19.9219 11.039 0 19.9218 8.8828 19.9454 19.9219.0235 11.0625-8.8829 19.9219-19.922 19.9219zm-9.4453-17.9297h18.8437c1.3126 0 2.2266-.6797 2.2266-1.9219 0-1.2656-.8437-1.9922-2.2266-1.9922h-18.8437c-1.3594 0-2.25.7266-2.25 1.9922 0 1.2422.9375 1.9219 2.25 1.9219z" />
                </svg>
              ) : (
                <svg
                  fill="none"
                  height="17"
                  viewBox="0 0 24 24"
                  width="17"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-12"
                  onClick={() => QustionTornari3()}
                >
                  <g
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="m12 7v10m-5-5h10" />
                    <circle cx="12" cy="12" r="10" />
                  </g>
                </svg>
              )}
            </div>
          </div>

          {Qustions3 ? (
            <p className=" mx-5 mt-3 md:text-[15px] text-[12px] mb-5 font-[400px] text-[#908F8F] flex-wrap flex">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and!
            </p>
          ) : null}
          <hr className=" border-gray-400 w-6/6 mx-5" />

          <div className="flex justify-between items-center ">
            <p className="p-5 ml-2 cursor-pointer md:text-[20px] text-[15px] ">
              What is the best time to book an Umrah package?
            </p>
            <div>
              {Qustions4 ? (
                <svg
                  height="17"
                  viewBox="0 0 56 56"
                  width="17"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-12"
                  onClick={() => QustionTornari4()}
                >
                  <path d="m27.9999 51.9063c13.0547 0 23.9064-10.8282 23.9064-23.9063 0-13.0547-10.8751-23.9063-23.9298-23.9063-13.0782 0-23.8828 10.8516-23.8828 23.9063 0 13.0781 10.8281 23.9063 23.9062 23.9063zm0-3.9844c-11.0625 0-19.8985-8.8594-19.8985-19.9219 0-11.0391 8.8126-19.9219 19.8751-19.9219 11.039 0 19.9218 8.8828 19.9454 19.9219.0235 11.0625-8.8829 19.9219-19.922 19.9219zm-9.4453-17.9297h18.8437c1.3126 0 2.2266-.6797 2.2266-1.9219 0-1.2656-.8437-1.9922-2.2266-1.9922h-18.8437c-1.3594 0-2.25.7266-2.25 1.9922 0 1.2422.9375 1.9219 2.25 1.9219z" />
                </svg>
              ) : (
                <svg
                  fill="none"
                  height="17"
                  viewBox="0 0 24 24"
                  width="17"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-12"
                  onClick={() => QustionTornari4()}
                >
                  <g
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="m12 7v10m-5-5h10" />
                    <circle cx="12" cy="12" r="10" />
                  </g>
                </svg>
              )}
            </div>
          </div>

          {Qustions4 ? (
            <p className=" mx-5 mt-3 md:text-[15px] text-[12px] mb-5 font-[400px] text-[#908F8F] flex-wrap flex">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and!
            </p>
          ) : null}
          <hr className=" border-gray-400 w-6/6 mx-5" />

          <div className="flex justify-between items-center ">
            <p className="p-5 ml-2 cursor-pointer md:text-[20px] text-[15px] ">
              What documents are required for Umrah?
            </p>
            <div>
              {Qustions5 ? (
                <svg
                  height="17"
                  viewBox="0 0 56 56"
                  width="17"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-12 "
                  onClick={() => QustionTornari5()}
                >
                  <path d="m27.9999 51.9063c13.0547 0 23.9064-10.8282 23.9064-23.9063 0-13.0547-10.8751-23.9063-23.9298-23.9063-13.0782 0-23.8828 10.8516-23.8828 23.9063 0 13.0781 10.8281 23.9063 23.9062 23.9063zm0-3.9844c-11.0625 0-19.8985-8.8594-19.8985-19.9219 0-11.0391 8.8126-19.9219 19.8751-19.9219 11.039 0 19.9218 8.8828 19.9454 19.9219.0235 11.0625-8.8829 19.9219-19.922 19.9219zm-9.4453-17.9297h18.8437c1.3126 0 2.2266-.6797 2.2266-1.9219 0-1.2656-.8437-1.9922-2.2266-1.9922h-18.8437c-1.3594 0-2.25.7266-2.25 1.9922 0 1.2422.9375 1.9219 2.25 1.9219z" />
                </svg>
              ) : (
                <svg
                  fill="none"
                  height="17"
                  viewBox="0 0 24 24"
                  width="17"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-12"
                  onClick={() => QustionTornari5()}
                >
                  <g
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="m12 7v10m-5-5h10" />
                    <circle cx="12" cy="12" r="10" />
                  </g>
                </svg>
              )}
            </div>
          </div>

          {Qustions5 ? (
            <p className=" mx-5 mt-3 md:text-[15px] text-[12px] mb-5 font-[400px] text-[#908F8F] flex-wrap flex">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and!
            </p>
          ) : null}

          <hr className=" border-gray-400 w-6/6 mx-5" />

          <div className="flex justify-between items-center ">
            <p className="p-5 ml-2 cursor-pointer md:text-[20px] text-[15px] ">
              Are there any age restrictions for Umrah?
            </p>
            <div>
              {Qustions6 ? (
                <svg
                  height="17"
                  viewBox="0 0 56 56"
                  width="17"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-12 "
                  onClick={() => QustionTornari6()}
                >
                  <path d="m27.9999 51.9063c13.0547 0 23.9064-10.8282 23.9064-23.9063 0-13.0547-10.8751-23.9063-23.9298-23.9063-13.0782 0-23.8828 10.8516-23.8828 23.9063 0 13.0781 10.8281 23.9063 23.9062 23.9063zm0-3.9844c-11.0625 0-19.8985-8.8594-19.8985-19.9219 0-11.0391 8.8126-19.9219 19.8751-19.9219 11.039 0 19.9218 8.8828 19.9454 19.9219.0235 11.0625-8.8829 19.9219-19.922 19.9219zm-9.4453-17.9297h18.8437c1.3126 0 2.2266-.6797 2.2266-1.9219 0-1.2656-.8437-1.9922-2.2266-1.9922h-18.8437c-1.3594 0-2.25.7266-2.25 1.9922 0 1.2422.9375 1.9219 2.25 1.9219z" />
                </svg>
              ) : (
                <svg
                  fill="none"
                  height="17"
                  viewBox="0 0 24 24"
                  width="17"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-12"
                  onClick={() => QustionTornari6()}
                >
                  <g
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="m12 7v10m-5-5h10" />
                    <circle cx="12" cy="12" r="10" />
                  </g>
                </svg>
              )}
            </div>
          </div>

          {Qustions6 ? (
            <p className=" mx-5 mt-3 md:text-[15px] text-[12px] mb-5 font-[400px] text-[#908F8F] flex-wrap flex">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and!
            </p>
          ) : null}
          <hr className=" border-gray-400 w-6/6 mx-5" />

          <div className="flex justify-between items-center ">
            <p className="p-5 ml-2 cursor-pointer md:text-[20px] text-[15px] ">
              What types of Umrah packages are available?
            </p>
            <div>
              {Qustions7 ? (
                <svg
                  height="17"
                  viewBox="0 0 56 56"
                  width="17"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-12 "
                  onClick={() => QustionTornari7()}
                >
                  <path d="m27.9999 51.9063c13.0547 0 23.9064-10.8282 23.9064-23.9063 0-13.0547-10.8751-23.9063-23.9298-23.9063-13.0782 0-23.8828 10.8516-23.8828 23.9063 0 13.0781 10.8281 23.9063 23.9062 23.9063zm0-3.9844c-11.0625 0-19.8985-8.8594-19.8985-19.9219 0-11.0391 8.8126-19.9219 19.8751-19.9219 11.039 0 19.9218 8.8828 19.9454 19.9219.0235 11.0625-8.8829 19.9219-19.922 19.9219zm-9.4453-17.9297h18.8437c1.3126 0 2.2266-.6797 2.2266-1.9219 0-1.2656-.8437-1.9922-2.2266-1.9922h-18.8437c-1.3594 0-2.25.7266-2.25 1.9922 0 1.2422.9375 1.9219 2.25 1.9219z" />
                </svg>
              ) : (
                <svg
                  fill="none"
                  height="17"
                  viewBox="0 0 24 24"
                  width="17"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-12"
                  onClick={() => QustionTornari7()}
                >
                  <g
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="m12 7v10m-5-5h10" />
                    <circle cx="12" cy="12" r="10" />
                  </g>
                </svg>
              )}
            </div>
          </div>

          {Qustions7 ? (
            <p className=" mx-5 mt-3 md:text-[15px] text-[12px] mb-5 font-[400px] text-[#908F8F] flex-wrap flex">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and!
            </p>
          ) : null}

          <br />
          <br />
          <br />
        </div>
      </div>
   
   
   
   
   
   
   
   
   
   
   
   
   </> 
  )
}

export default HeroSec