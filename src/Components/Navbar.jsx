import React from 'react'
import "../app.css"
import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react'


function Navbar(props) {

  const nav = useNavigate()

  console.log(props)


  const goHome=()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });


    nav("/")





    
  }


  return (
    <div>


        {/* Navbar Start */}

 
        <div className="text-gray-600   ">
           <div className="w-[100%] overflow-hidden mx-auto flex z-20 bg-[#699FC9] fixed top-0 left-0 flex-wrap justify-between  p-5 flex-row items-center">
              <a className="flex title-font font-medium items-center text-gray-900 md:mb-0">
                <button className='-mx-3' onClick={()=>props.togle()}>
                <Icon icon="eva:menu-fill" color='white' height="30" width="30" />
                </button>

              </a>
              <nav className="md:ml-auto md:mr-auto flex flex-wrap  items-center text-base ">
                <div className=" bg-[#699FC9] flex items-center  ">
                 
                <a onClick={goHome}>
                <span
                  id="logo"
                  className="sm:ml-3 ml-0 px-2 sm:px-3  text-2xl font-bold text-white  cursor-pointer"
                 
                >
                  Saer.<span className="text-sm">pk</span>
                </span>
                </a>
                </div>
              </nav>

              <div className="flex items-center sm:gap-0 gap-3  ">
                <button>
                  <svg
                    className="sm:h-6 sm:w-6 h-5 w-5  md:w-7 md:h-7  "
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 29.5C16.375 29.5 17.5 28.375 17.5 27H12.5C12.5 28.375 13.625 29.5 15 29.5ZM22.5 22V15.75C22.5 11.9125 20.4625 8.7 16.875 7.85V7C16.875 5.9625 16.0375 5.125 15 5.125C13.9625 5.125 13.125 5.9625 13.125 7V7.85C9.55 8.7 7.5 11.9 7.5 15.75V22L5 24.5V25.75H25V24.5L22.5 22ZM20 23.25H10V15.75C10 12.65 11.8875 10.125 15 10.125C18.1125 10.125 20 12.65 20 15.75V23.25Z"
                      fill="white"
                    />
                    <circle cx="21" cy="9" r="4" fill="#B00404" />
                  </svg>
                </button>
                <button className="sm:hidden block items-center bg-white  py-1 px-2 sm:px-3 focus:outline-none text-[#699FC9] hover:bg-gray-200 rounded text-xs sm:text-base ">
                Login
                </button>
                <button className="sm:inline-flex hidden items-center border-0 py-1 sm:px-5  px-2 focus:outline-none text-gray-200 text-xs sm:text-base  ">
                  Login
                </button>
                <button className="sm:inline-flex hidden items-center bg-white  py-1 px-2 sm:px-3 focus:outline-none text-[#699FC9] hover:bg-gray-200 rounded text-xs sm:text-base ">
                  Sign Up
                </button>
              </div>



              
            </div>
          </div>


        {/* Navbar Close */}

    </div>
  )
}

export default Navbar