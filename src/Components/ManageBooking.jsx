import React from 'react'
import qatar from '../assests/flight/qatar.png'

function ManageBooking() {
  return (
    <>
      <div className='p-5'>


<div className='flex justify-between w-full md:flex-row flex-col md:gap-y-0 gap-y-5'>


<div className='flex md:w-[250px] md:h-[45px] w-full  flex-shrink-0 border-2 rounded-lg bg-white mt-6'>
<input
                    type="text"
                    className="outline-none bg-transparent px-2 h-9  md:w-72 w-full placeholder-[#A5A5A5] "
                    placeholder="Search with order id"
                    name=""
                    id=""
                  />
</div>


<div className='flex justify-end flex-col md:w-[300px] w-full md:py-0 '>
<div className='mx-1 md:py-0 py-2'>
<h1>Booking type</h1>
</div>
<div className="flex-grow text-[0.995rem] md:w-[250px] w-full  p-2 h-[45px] cursor-pointer flex-shrink-0 border-2 rounded-lg bg-white">
                    <select required className="outline-none bg-transparent w-full">
                      <option value="" selected disabled>
                        Choose your city
                      </option>

                      <option value="">Karachi</option>
                      <option value="a-value-here">Lahore</option>
                      <option value="a-value-here">Islamabad</option>
                      <option value="a-value-here">Sialkot</option>
                      <option value="a-value-here">Multan</option>
                      <option value="a-value-here">Peshawar</option>
                    </select>{" "}
                  </div>
</div>







</div>





<div className='flex w-full mt-20 flex-col '>

<div className='flex w-full'>
<span className='text-2xl'>
Booking Details
</span>
</div>

<div className='flex w-full bg-white mt-5 flex-col rounded-2xl'>





<div className='flex w-full bg-[#C6DAEA] md:flex-row flex-wrap  justify-between md:px-5 px-3 py-2 rounded-tl-2xl rounded-tr-2xl'>






<div className='flex md:text-lg text-sm justify-start items-center gap-2'>
 <img src="https://s3-alpha-sig.figma.com/img/cfab/34d7/15715eebd827d68b35fb1214e669c26c?Expires=1703462400&Signature=k1f1GYnL-~~sTGOXmJnm2EHz9CGlP~ldMC9H-~FD5QKt-ZM1elfOPAzlCjKEu6lejJDY3R4xDig0FM~4qEbw0LsZQieCl6aQ1j0fCRZoyWbxC-4EUJA9zSL309XSAlh0Fb7mUomq5QnAMLNO8dV70Siq9oEr8hZTS95iMcDe-ildyvnWACw9GeJFwl90CQAkKj610fW1qDUc9I9M-Q1xxvl47xbRdGJPPNU4E0mocTd3yKy45UT9Y1NFNjObHkJs9lh5tX2m5O1PbBiDjzJTTOtClTpbnW8MCAlwJ~8n6yS0RXdg3ofmzTAOHLPKqv54FhxBwoRShD2bxKQQQd3Ytw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
  alt="" className='w-7 h-7'/>
  <span>Umrah package</span>
</div>

<div className='flex justify-end'>
<span className='md:text-lg text-sm'>
Order iD: 767676
</span>
</div>

</div>


<div className='flex md:flex-row flex-col  flex-wrap w-full'>
<div className=' md:w-[25%] w-full flex-row flex py-10 lg:pl-8 pl-3  '>

<div className='flex flex-col w-full gap-y-6 '>

<div className='flex'>
<span className='text-lg'> 
  Passenger
  </span>
</div> 


<div className='flex border rounded-full w-full  items-center '>
  <div>
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="ic:baseline-account-circle">
<path id="Vector" d="M12.5 2.08325C6.75004 2.08325 2.08337 6.74992 2.08337 12.4999C2.08337 18.2499 6.75004 22.9166 12.5 22.9166C18.25 22.9166 22.9167 18.2499 22.9167 12.4999C22.9167 6.74992 18.25 2.08325 12.5 2.08325ZM12.5 6.24992C14.5105 6.24992 16.1459 7.88534 16.1459 9.89575C16.1459 11.9062 14.5105 13.5416 12.5 13.5416C10.4896 13.5416 8.85421 11.9062 8.85421 9.89575C8.85421 7.88534 10.4896 6.24992 12.5 6.24992ZM12.5 20.8333C10.3855 20.8333 7.88546 19.9791 6.10421 17.8333C7.9288 16.4017 10.1809 15.6237 12.5 15.6237C14.8192 15.6237 17.0713 16.4017 18.8959 17.8333C17.1146 19.9791 14.6146 20.8333 12.5 20.8333Z" fill="#699FC9"/>
</g>
</svg>
  </div> 
  <div className='flex px-2  w-full'>
    <span className='text-[10px] ' >Mrs.Malik Nadia-Adult</span>
  </div>
</div>



<div className='flex border rounded-full w-full  items-center'>



  <div>
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="ic:baseline-account-circle">
<path id="Vector" d="M12.5 2.08325C6.75004 2.08325 2.08337 6.74992 2.08337 12.4999C2.08337 18.2499 6.75004 22.9166 12.5 22.9166C18.25 22.9166 22.9167 18.2499 22.9167 12.4999C22.9167 6.74992 18.25 2.08325 12.5 2.08325ZM12.5 6.24992C14.5105 6.24992 16.1459 7.88534 16.1459 9.89575C16.1459 11.9062 14.5105 13.5416 12.5 13.5416C10.4896 13.5416 8.85421 11.9062 8.85421 9.89575C8.85421 7.88534 10.4896 6.24992 12.5 6.24992ZM12.5 20.8333C10.3855 20.8333 7.88546 19.9791 6.10421 17.8333C7.9288 16.4017 10.1809 15.6237 12.5 15.6237C14.8192 15.6237 17.0713 16.4017 18.8959 17.8333C17.1146 19.9791 14.6146 20.8333 12.5 20.8333Z" fill="#699FC9"/>
</g>
</svg>
  </div> 





  <div className='flex px-2 w-full text-[10px]'>
    <span>Mrs.Malik Nadia-Adult</span>
  </div>
</div>





<div className='flex border rounded-full w-full  items-center'>
  <div>
  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="ic:baseline-account-circle">
<path id="Vector" d="M12.5 2.08325C6.75004 2.08325 2.08337 6.74992 2.08337 12.4999C2.08337 18.2499 6.75004 22.9166 12.5 22.9166C18.25 22.9166 22.9167 18.2499 22.9167 12.4999C22.9167 6.74992 18.25 2.08325 12.5 2.08325ZM12.5 6.24992C14.5105 6.24992 16.1459 7.88534 16.1459 9.89575C16.1459 11.9062 14.5105 13.5416 12.5 13.5416C10.4896 13.5416 8.85421 11.9062 8.85421 9.89575C8.85421 7.88534 10.4896 6.24992 12.5 6.24992ZM12.5 20.8333C10.3855 20.8333 7.88546 19.9791 6.10421 17.8333C7.9288 16.4017 10.1809 15.6237 12.5 15.6237C14.8192 15.6237 17.0713 16.4017 18.8959 17.8333C17.1146 19.9791 14.6146 20.8333 12.5 20.8333Z" fill="#699FC9"/>
</g>
</svg>
  </div> 
  <div className='flex px-2 text-[10px]'>
    <span>Mrs.Malik Nadia-Adult</span>
  </div>
</div>





</div>

<div className=' flex-col  md:block hidden mx-2'>
<svg xmlns="http://www.w3.org/2000/svg" className='rotate-180' width="16" height="158" viewBox="0 0 16 158" fill="none">
<path d="M8 142C3.58172 142 0 145.582 0 150C0 154.418 3.58172 158 8 158C12.4183 158 16 154.418 16 150C16 145.582 12.4183 142 8 142ZM6.5 0L6.5 150H9.5L9.5 0L6.5 0Z" fill="#699FC9"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" className='rotate-180' width="16" height="158" viewBox="0 0 16 158" fill="none">
<path d="M8 142C3.58172 142 0 145.582 0 150C0 154.418 3.58172 158 8 158C12.4183 158 16 154.418 16 150C16 145.582 12.4183 142 8 142ZM6.5 0L6.5 150H9.5L9.5 0L6.5 0Z" fill="#699FC9"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg"  width="16" height="158" viewBox="0 0 16 158" fill="none">
<path d="M8 142C3.58172 142 0 145.582 0 150C0 154.418 3.58172 158 8 158C12.4183 158 16 154.418 16 150C16 145.582 12.4183 142 8 142ZM6.5 0L6.5 150H9.5L9.5 0L6.5 0Z" fill="#699FC9"/>
</svg>
</div>

</div>

<div className='flex md:w-[75%] w-full flex-col py-10 '>

<div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4  '>


<div className='flex flex-col w-full  '>


<div className='flex flex-row justify-center '>
<div className='flex '>
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="32" viewBox="0 0 36 36" fill="none">
<path d="M24.5881 15.1442H20.5881V10.4749C20.5876 8.49387 18.9831 6.88935 17.0021 6.88892H11.412C9.43104 6.88935 7.82653 8.49387 7.82605 10.4749V29.1112H9.43234V10.4749C9.43278 9.92581 9.65283 9.43597 10.0123 9.07516C10.3732 8.71561 10.863 8.4956 11.412 8.49512H17.0021C17.5512 8.49556 18.041 8.71561 18.4018 9.07516C18.7613 9.43597 18.9814 9.92581 18.9818 10.4749V29.1112H20.5881V16.7505H24.5881C25.1371 16.7509 25.6269 16.971 25.9878 17.3305C26.3473 17.6913 26.5673 18.1812 26.5678 18.7302V29.1112H28.174V18.7302C28.1736 16.7492 26.569 15.1447 24.5881 15.1442Z" fill="black" stroke="black" stroke-width="0.00058642"/>
<path d="M13.1011 12.6006H11.7206V14.9433H13.1011V12.6006Z" fill="black" stroke="black" stroke-width="0.00058642"/>
<path d="M16.515 12.6006H15.1344V14.9433H16.515V12.6006Z" fill="black" stroke="black" stroke-width="0.00058642"/>
<path d="M13.1011 17.9553H11.7206V20.298H13.1011V17.9553Z" fill="black" stroke="black" stroke-width="0.00058642"/>
<path d="M16.515 17.9553H15.1344V20.298H16.515V17.9553Z" fill="black" stroke="black" stroke-width="0.00058642"/>
<path d="M13.1011 23.3101H11.7206V25.6528H13.1011V23.3101Z" fill="black" stroke="black" stroke-width="0.00058642"/>
<path d="M16.515 23.3101H15.1344V25.6528H16.515V23.3101Z" fill="black" stroke="black" stroke-width="0.00058642"/>
<path d="M24.0451 19.4614H22.6646V21.8041H24.0451V19.4614Z" fill="black" stroke="black" stroke-width="0.00058642"/>
<path d="M24.0451 24.593H22.6646V26.9357H24.0451V24.593Z" fill="black" stroke="black" stroke-width="0.00058642"/>
</svg>
  </div> 
  <div className='flex flex-col'>
    <span className='lg:text-2xl md:text-lg'>
    Hotel
    </span> 
    <span className='text-[8px] text-right'>in Makkah</span>
  </div>
</div>

<div className='flex flex-col border-2 border-[#699FC9] rounded  justify-center items-center'>
<div>
  <span className='text-[12px]'> Al Faris Hotel </span>
</div> 
<div>
  <span className='text-[9px]'>10 nights : 15000pkr</span>
</div> 
<div>
  <span className='text-[9px]'>Date:25Sep to 30Sep</span>
</div>
</div>

</div>


<div className='flex flex-col w-full '>


<div className='flex flex-row justify-center'>
<div className='flex'>
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="32" viewBox="0 0 36 36" fill="none">
<path d="M24.5881 15.1442H20.5881V10.4749C20.5876 8.49387 18.9831 6.88935 17.0021 6.88892H11.412C9.43104 6.88935 7.82653 8.49387 7.82605 10.4749V29.1112H9.43234V10.4749C9.43278 9.92581 9.65283 9.43597 10.0123 9.07516C10.3732 8.71561 10.863 8.4956 11.412 8.49512H17.0021C17.5512 8.49556 18.041 8.71561 18.4018 9.07516C18.7613 9.43597 18.9814 9.92581 18.9818 10.4749V29.1112H20.5881V16.7505H24.5881C25.1371 16.7509 25.6269 16.971 25.9878 17.3305C26.3473 17.6913 26.5673 18.1812 26.5678 18.7302V29.1112H28.174V18.7302C28.1736 16.7492 26.569 15.1447 24.5881 15.1442Z" fill="black" stroke="black" stroke-width="0.00058642"/>
<path d="M13.1011 12.6006H11.7206V14.9433H13.1011V12.6006Z" fill="black" stroke="black" stroke-width="0.00058642"/>
<path d="M16.515 12.6006H15.1344V14.9433H16.515V12.6006Z" fill="black" stroke="black" stroke-width="0.00058642"/>
<path d="M13.1011 17.9553H11.7206V20.298H13.1011V17.9553Z" fill="black" stroke="black" stroke-width="0.00058642"/>
<path d="M16.515 17.9553H15.1344V20.298H16.515V17.9553Z" fill="black" stroke="black" stroke-width="0.00058642"/>
<path d="M13.1011 23.3101H11.7206V25.6528H13.1011V23.3101Z" fill="black" stroke="black" stroke-width="0.00058642"/>
<path d="M16.515 23.3101H15.1344V25.6528H16.515V23.3101Z" fill="black" stroke="black" stroke-width="0.00058642"/>
<path d="M24.0451 19.4614H22.6646V21.8041H24.0451V19.4614Z" fill="black" stroke="black" stroke-width="0.00058642"/>
<path d="M24.0451 24.593H22.6646V26.9357H24.0451V24.593Z" fill="black" stroke="black" stroke-width="0.00058642"/>
</svg>
  </div> 
  <div className='flex flex-col'>
    <span className='lg:text-2xl md:text-lg'>
    Hotel
    </span>
    <span className='text-[8px] text-right'>in Madina</span>

  </div>
</div>

<div className='flex flex-col border-2 border-[#699FC9] rounded  justify-center items-center'>
<div>
  <span className='text-[12px]'> Al Faris Hotel </span>
</div> 
<div>
  <span className='text-[9px]'>10 nights : 15000pkr</span>
</div> 
<div>
  <span className='text-[9px]'>Date:25Sep to 30Sep</span>
</div>
</div>

</div>


<div className='flex flex-col w-full '>


<div className='flex flex-row justify-center pb-3 gap-1'>
<div className='flex justify-center items-center'>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="15" viewBox="0 0 24 15" fill="none">
<path d="M4.22222 7.50007C4.22222 6.29547 3.29466 5.27063 2 4.89083V3.44211C2 2.92562 2 2.66737 2.1211 2.4701C2.22763 2.29657 2.39761 2.15549 2.60668 2.06707C2.84436 1.96655 3.1555 1.96655 3.77778 1.96655H20.2222C20.8446 1.96655 21.1557 1.96655 21.3933 2.06707C21.6024 2.15549 21.7723 2.29657 21.8789 2.4701C22 2.66737 22 2.92562 22 3.44211V4.89065C20.7053 5.27045 19.7778 6.29547 19.7778 7.50007C19.7778 8.70468 20.7053 9.72936 22 10.1091V11.5577C22 12.0742 22 12.3324 21.8789 12.5297C21.7723 12.7033 21.6024 12.8443 21.3933 12.9327C21.1557 13.0332 20.8446 13.0332 20.2222 13.0332H3.77778C3.1555 13.0332 2.84436 13.0332 2.60668 12.9327C2.39761 12.8443 2.22763 12.7033 2.1211 12.5297C2 12.3324 2 12.0742 2 11.5577V10.1093C3.29466 9.72954 4.22222 8.70468 4.22222 7.50007Z" stroke="black" stroke-opacity="0.96" stroke-width="2.11" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  </div> 
  <div className='flex'>
    <span className='lg:text-2xl md:text-lg   '>
    visa
    </span>
  </div>
</div>

<div className='flex flex-col border-2 border-[#699FC9] rounded  justify-center items-center'>
<div>
  <span className='text-[12px]'> Al Faris Hotel </span>
</div> 
<div>
  <span className='text-[9px]'>10 nights : 15000pkr</span>
</div> 
<div>
  <span className='text-[9px]'>Date:25Sep to 30Sep</span>
</div>
</div>

</div>


<div className='flex flex-col w-full '>


<div className='flex flex-row justify-center items-center gap-1 pb-3'>
<div className='flex'>
<svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="25" height="21" fill="#7E7676"/>
<g id="Search Packages">
<g clip-path="url(#clip0_0_1)">
<g id="Desktop - 10" clip-path="url(#clip1_0_1)">
<rect width="1384" height="2686" transform="translate(-969 -828)" fill="#F4F6F7"/>
<g id="Frame 1000005654">
<rect x="-626" y="-89" width="925" height="518" rx="12" fill="white"/>
<g id="Frame 1000005678">
<g id="Frame 1000005664">
<g id="SVGRepo_iconCarrier">
<g id="Group">
<path id="Vector" d="M19.4556 0.514543C19.6275 0.360261 19.9153 0.350308 20.1012 0.492976C20.2871 0.635645 20.2991 0.874532 20.1272 1.02881L16.3856 4.38982L16.3796 4.39646C15.9219 4.85598 15.6081 5.28067 15.4682 5.66886C15.3443 6.01226 15.3623 6.32414 15.5461 6.59621C15.6441 6.74219 15.6121 6.92136 15.4822 7.03914L13.7053 8.63504C13.5314 8.47744 13.3935 8.3497 13.3016 8.26676C13.2596 8.22031 13.2116 8.17552 13.1617 8.13238L13.1577 8.1357C13.1337 8.11414 13.1077 8.09423 13.0817 8.07432L14.6007 6.70902C14.4229 6.31419 14.4249 5.89448 14.5888 5.44822C14.7646 4.96381 15.1384 4.44788 15.6761 3.91039C15.688 3.89712 15.698 3.88384 15.712 3.87223L19.4516 0.511225L19.4556 0.514543ZM11.4188 9.5176C11.2509 9.36166 11.2669 9.12111 11.4548 8.98176C11.6426 8.84241 11.9325 8.85568 12.1003 9.01162C13.9811 10.7601 19.7954 15.9344 21.4064 17.8687C23.531 20.3654 20.2411 21.1517 19.1498 20.2426C16.4236 18.0545 10.6353 12.4755 8.09091 10.1098C7.1755 10.4317 6.28607 10.4814 5.39264 10.2691C4.43126 10.0418 3.48986 9.5093 2.53447 8.69145L2.52248 8.68149C1.79494 8.04446 1.22531 7.41572 0.813572 6.79362C0.391841 6.15327 0.134006 5.51956 0.0420653 4.89082C-0.0558721 4.21397 0.0200793 3.58358 0.239939 3.02451C0.497774 2.36758 0.955481 1.81183 1.5551 1.39876C2.15871 0.984022 2.90024 0.715274 3.72771 0.632327C4.41527 0.564311 5.16479 0.622374 5.94029 0.833059C7.0136 1.12337 8.2648 1.84501 9.30214 2.7707C10.0676 3.45252 10.7232 4.25047 11.113 5.07164C11.5187 5.92766 11.6426 6.81353 11.3168 7.643C11.125 8.13404 10.7772 8.59523 10.2375 9.01162C10.0517 9.15429 9.76384 9.14433 9.59195 8.99171C9.42006 8.83743 9.43205 8.59855 9.61594 8.45588C10.0337 8.13238 10.3015 7.77903 10.4474 7.40577C10.6992 6.76376 10.5933 6.05208 10.2615 5.352C9.91375 4.61875 9.32412 3.90209 8.63257 3.28663C7.69717 2.45384 6.58788 1.80851 5.65247 1.5547C5.01088 1.38217 4.39728 1.3324 3.83564 1.3888C3.18405 1.45516 2.60043 1.66253 2.13473 1.98602C1.66703 2.30951 1.30925 2.74581 1.10339 3.26506C0.9255 3.71795 0.863539 4.23886 0.945487 4.80124C1.02344 5.3321 1.2453 5.87457 1.60906 6.42865C1.99082 6.99767 2.51448 7.57332 3.18805 8.16224L3.19205 8.16722C4.03551 8.88886 4.84499 9.35336 5.64648 9.54248C6.40399 9.72165 7.1755 9.65197 7.98098 9.31852C8.16487 9.2306 8.40271 9.26046 8.54862 9.39649C11.031 11.7041 17.0692 17.512 19.7435 19.6637C20.9047 20.0568 21.5483 19.5724 20.9927 18.7181C20.1272 17.3843 12.692 10.7054 11.4188 9.5176ZM9.00833 12.8537L3.18006 18.0877C3.16806 18.0976 3.15807 18.1076 3.14408 18.1175C2.29262 18.8806 3.79966 19.9921 4.73506 19.2489L10.3954 14.1643L11.003 14.7366L5.38664 19.7814C5.37465 19.7931 5.36266 19.803 5.34667 19.8146C5.01088 20.0485 4.6731 20.2012 4.33132 20.2642C3.97955 20.3306 3.63377 20.3007 3.30198 20.1713C3.24601 20.153 3.19405 20.1298 3.14808 20.095L2.34259 19.4762C2.3306 19.4662 2.31861 19.4579 2.30662 19.4463C1.99482 19.1477 1.84691 18.8292 1.88688 18.4924C1.92486 18.1739 2.12873 17.8637 2.51448 17.5651L8.39872 12.2797L9.00833 12.8537ZM15.1164 9.92404L15.4622 9.61381C15.6341 9.45953 15.9239 9.44958 16.1078 9.59225C16.2917 9.73492 16.3057 9.9738 16.1338 10.1281L15.734 10.4864L15.1164 9.92404ZM20.8767 1.62437C21.0486 1.47009 21.3364 1.46014 21.5223 1.60281C21.7082 1.74547 21.7202 1.98436 21.5483 2.13864L18.2684 5.08657C18.0965 5.24086 17.8087 5.25081 17.6228 5.10814C17.4369 4.96547 17.4249 4.72658 17.5968 4.5723L20.8767 1.62437ZM22.2958 2.71429C22.4677 2.56001 22.7555 2.55006 22.9414 2.69273C23.1273 2.8354 23.1393 3.07428 22.9674 3.22856L19.6895 6.17484C19.5176 6.32912 19.2298 6.33907 19.0439 6.1964C18.858 6.05373 18.846 5.81485 19.0179 5.66057L22.2958 2.71429ZM23.7669 3.84735C23.9388 3.69307 24.2266 3.68311 24.4125 3.82578C24.5983 3.96845 24.6103 4.209 24.4384 4.36162L20.6968 7.72428C20.6829 7.7359 20.6689 7.74585 20.6549 7.75746C19.8034 8.43763 18.9899 8.8308 18.2124 8.94195C17.369 9.06305 16.5955 8.86397 15.8859 8.3497C15.696 8.21201 15.6781 7.97147 15.842 7.81553C16.0078 7.65793 16.2977 7.643 16.4855 7.77903C16.9752 8.13404 17.4989 8.27339 18.0525 8.19211C18.6482 8.1075 19.3037 7.78069 20.0193 7.20835L20.0233 7.20504L23.7629 3.84569L23.7669 3.84735Z" fill="black" stroke="black" stroke-width="0.000695629"/>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
</g>
<defs>
<clipPath id="clip0_0_1">
<rect x="-1027" y="-850" width="1440" height="2686" rx="12" fill="white"/>
</clipPath>
<clipPath id="clip1_0_1">
<rect width="1384" height="2686" fill="white" transform="translate(-969 -828)"/>
</clipPath>
</defs>
</svg>

  </div> 
  <div className='flex'>
    <span className='lg:text-2xl md:text-lg'>
    Food
    </span>
  </div>
</div>

<div className='flex flex-col border-2 border-[#699FC9] rounded justify-center items-center'>
<div>
  <span className='text-[12px]'> Al Faris Hotel </span>
</div> 
<div>
  <span className='text-[9px]'>10 nights : 15000pkr</span>
</div> 
<div>
  <span className='text-[9px]'>Date:25Sep to 30Sep</span>
</div>
</div>

</div>

<div className='flex flex-col  w-full py-2 pr-2 '>
<div className='flex bg-[#699FC9] justify-center border-2 text-white rounded py-1 px-1 w-full my-5'>
<button className=' text-[12px]'> re-price</button>
</div> 
<div className='flex border-2 border-[#79aacf] rounded-2xl py-1 px-1 justify-center bg-[#e7eff6]'>
<span className='text-[12px]'>Order expired</span>
</div>
</div>

</div>



  
  <div className="bg-white flex flex-col  lg:w-[90%] md:w-full mt-5 rounded-tr-xl rounded-tl-xl border ">
    <div className='flex flex-row justify-between w-full rounded-tr-xl rounded-tl-xl bg-[#C6DAEA] py-3 px-5'>
<div className='flex items-center gap-1'>
<div>

<svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="SVGRepo_iconCarrier">
<g id="Page-1">
<g id="Airplane">
<path id="Shape" d="M11.4235 6.19298L13.0627 10.4666C13.0627 10.4666 13.2579 10.9935 13.0627 11.1887L12.3017 11.9497C12.1065 12.1449 11.7748 12.1449 11.5796 11.9497L8.82811 8.45665L8.78908 8.43714C7.98898 9.04209 7.11083 9.66655 6.31074 10.1739L7.22792 12.2034C7.22792 12.2034 7.34501 12.4961 7.22792 12.5937L6.70103 13.1011C6.58394 13.2182 6.40831 13.2182 6.31074 13.1011L4.71055 11.0326C3.96901 11.3643 3.4226 11.5009 3.18843 11.2667C2.95425 11.0326 3.07134 10.4666 3.4226 9.74461L1.37358 8.16394C1.25649 8.04685 1.25649 7.87122 1.37358 7.77365L1.72484 7.42239C1.84193 7.3053 2.11513 7.42239 2.11513 7.42239L4.26172 8.24199C4.78861 7.40287 5.41308 6.50521 6.03754 5.6856V5.62706L2.56396 2.856C2.36882 2.66086 2.36882 2.32911 2.56396 2.13397L2.99328 1.70465C3.18843 1.50951 3.71532 1.70465 3.71532 1.70465L8.18413 3.14872" stroke="#3C3C3C" stroke-width="1.7"/>
<path id="Shape_2" d="M10.8575 6.73945C11.0722 6.5443 11.2673 6.36867 11.4235 6.19304C13.1017 4.5148 13.6286 2.56335 12.77 1.70472C11.8918 0.826568 9.95988 1.35346 8.28163 3.05122C8.12552 3.20733 7.93037 3.40248 7.73523 3.61714" stroke="#3C3C3C" stroke-width="1.7"/>
</g>
</g>
</g>
</svg>
</div>

<div>
<span className='sm:text-lg text-xs'>
Flight
</span>
</div>
</div> 
<div className='flex items-center'>
<span className='sm:text-lg text-xs'>Pnr : xv8jpl</span>
</div>
    </div>
      <div className="self-stretch  flex flex-col  lg:p-5 md:p-2 max-md:max-w-full">
        <div className="w-full max-w-full   max-md:mr-2.5">
          <div className="gap-2 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0">
              <div className=" flex grow flex-col w-full max-md:max-w-full max-md:mt-10">
             
   
              <div className=" self-stretch flex w-full items-start md:flex-row flex-col justify-between max-md:flex-wrap max-md:justify-center">



<div className=" flex md:w-[30%] w-full max-w-full items-start justify-between md:flex-row flex-col  self-start">
<div className="flex flex-col md:w-full w-[20%] md:self-start self-center gap-1">
    <img
      loading="lazy"
      src={qatar}
      className="aspect-[2.25] md:self-start  self-center rounded-lg border-gray-200 border object-center w-16 h-10 justify-center items-center overflow-hidden "
    />
    <div className="text-black md:text-[8px] text-[8px] font-light md:self-start self-center ">
      QATAR airways
    </div>
  </div>
  <div className="md:items-start md:flex-col  items-center w-full flex flex-row justify-center   self-start">
    <div className="text-black text-sm  self-center mx-2">
      09:45 AM{" "}
    </div>
    <div className="text-neutral-400 text-[10px] self-center">
      12 sep
    </div>
    <div className="text-neutral-400 text-[10px]  self-center">
      {" "}
      Lahore (LHE)
    </div>
  </div>
</div>



<div className=" flex flex-col md:w-[30%] justify-center items-center w-full text-center ">
  <div className="text-zinc-500 text-xs self-stretch pb-2">
    1h 50m
  </div>

  <div className="text-zinc-500 text-xs self-center border-t md:w-full w-40 pt-2">
    KHI
  </div>
</div>



<div className="md:w-[20%] w-full flex md:flex-col flex-row md:py-0 py-3 justify-center items-center self-start">
  <div className="text-black text-sm  self-center mx-2" >
    09:10 PM
  </div>
  <div className="text-neutral-400 text-[10px]  self-center">
    12 sep
  </div>
  <div className="text-neutral-400 text-[10px] uppercase self-center">
    Jeddah (Jed)
  </div>
</div>

<div className="justify-center  md:w-[20%] w-full items-center flex lg-py-0 md:py-0 py-3  max-w-full flex-col self-start ">
<div className="text-black flex justify-center items-center text-sm self-stretch ">
  07h 50m
</div>
<div className="text-slate-400 text-[10px] uppercase self-center ">
  1 stop
</div>
<div className=" text-red-400  text-[9px] text-center font-light  rounded w-full max-w-full md:mt-6 mt-3  border-none  md:border-[0.5px] md:border-solid md:border-red-100">
3 seats available
</div>
</div>


</div>




               


                         <div className=" self-stretch flex w-full items-start md:flex-row flex-col justify-between max-md:flex-wrap max-md:justify-center mt-5">



<div className=" flex md:w-[30%] w-full max-w-full items-start justify-between md:flex-row flex-col  self-start">
<div className="flex flex-col md:w-full w-[20%] md:self-start self-center gap-1">
    <img
      loading="lazy"
      src={qatar}
      className="aspect-[2.25] md:self-start  self-center rounded-lg border-gray-200 border object-center w-16 h-10 justify-center items-center overflow-hidden "
    />
    <div className="text-black md:text-[8px] text-[8px] font-light md:self-start self-center ">
      QATAR airways
    </div>
  </div>
  <div className="md:items-start md:flex-col  items-center w-full flex flex-row justify-center   self-start">
    <div className="text-black text-sm  self-center mx-2">
      09:45 AM{" "}
    </div>
    <div className="text-neutral-400 text-[10px] self-center">
      12 sep
    </div>
    <div className="text-neutral-400 text-[10px]  self-center">
      {" "}
      Lahore (LHE)
    </div>
  </div>
</div>



<div className=" flex flex-col md:w-[30%] justify-center items-center w-full text-center ">
  <div className="text-zinc-500 text-xs self-stretch pb-2">
    1h 50m
  </div>

  <div className="text-zinc-500 text-xs self-center border-t w-full pt-2">
    KHI
  </div>
</div>



<div className="md:w-[20%] w-full flex md:flex-col flex-row md:py-0 py-3 justify-center items-center self-start">
  <div className="text-black text-sm  self-center mx-2" >
    09:10 PM
  </div>
  <div className="text-neutral-400 text-[10px]  self-center">
    12 sep
  </div>
  <div className="text-neutral-400 text-[10px] uppercase self-center">
    Jeddah (Jed)
  </div>
</div>

<div className="justify-center  md:w-[20%] w-full items-center flex lg-py-0 md:py-0 py-3  max-w-full flex-col self-start ">
<div className="text-black flex justify-center items-center text-sm self-stretch ">
  07h 50m
</div>
<div className="text-slate-400 text-[10px] uppercase self-center ">
  1 stop
</div>
<div className=" text-red-400  text-[9px] text-center font-light  rounded w-full max-w-full md:mt-6 mt-3  border-none  md:border-[0.5px] md:border-solid md:border-red-100">
3 seats available
</div>
</div>


</div>





              </div>
            </div>



            



          </div>
        </div>


        
        <div className="items-start flex sm:flex-row flex-col w-full max-w-full  sm:justify-between justify-center md:px-0 px-5 gap-5 mr-3 mt-5 max-md:mr-2.5">
          <div className='flex sm:justify-start justify-center items-center w-full my-auto'>
          <div className="items-start self-stretch flex md:justify-between justify-start mr-3 gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/514f4e9b-8a49-40a6-8525-a6e35b7dd9d1?"
              className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center max-w-full my-auto"
            />
            <div className="text-slate-400 text-center text-[10px] self-stretch whitespace-nowrap">
              Total: 30 kg psc: 2
            </div>
          </div>
          <div className="items-start self-stretch flex justify-between gap-1.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc1f24b2-addf-4cd2-9604-d6ae2e0bf9e9?"
              className="aspect-square object-contain object-center w-full overflow-hidden flex-1 my-auto"
            />
            <div className="text-slate-400 text-center text-[10px] self-stretch whitespace-nowrap">
              Meal
            </div>
          </div> 
          </div>
          <div className="text-neutral-700 w-full sm:text-right text-center text-base my-auto">
            <span className="font-semibold text-[10px] text-black text-opacity-90">
              PKR 2,28000
            </span>
            <span className=" text-black text-opacity-90 text-[10px]">/</span>
            <span className=" text-neutral-700 text-[10px]"> 1 Person</span>
          </div>
        </div>
      
      </div>
    </div>  















   
    

<div className='flex w-full mt-10  md:p-0'>
<div className='flex border-2 lg:w-[70%] md:w-[80%] w-full   rounded-lg border-[#699FC9] '>

<div className='flex w-full border-r-4 justify-center items-center md:px-0 px-2 py-2'>
<span className='text-[10px]'>Booking creation date: 12-08-2024</span>
</div>
<div className='flex w-full justify-center items-center md:px-0 px-2 py-2'>
  <span className='text-[10px]'>Booking expiry date: 12-08-2024</span>
</div>


</div>
</div>





</div>
</div>




</div>


</div>
      </div>
    </>
  )
}

export default ManageBooking