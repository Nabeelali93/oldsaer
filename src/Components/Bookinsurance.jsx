import React from 'react'
import { useNavigate } from 'react-router-dom';

function Insurance() {

    const nav = useNavigate()

    const gomodifyinsurance=()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
      
        nav("/modifyinsurance")
      
        
      }



      const goinsuranceinfo=()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
      
        nav("/contactDetail")
      
        
      }

  return (
    <>



<div className="   bg-[#699FC9]">

       











<section className=" body-font ">
         
         
         <div className="flex  flex-wrap p-5 gap-3 lg:justify-start justify-center">

<div className="flex flex-wrap bg-white p-3 rounded-lg lg:w-[80%] w-full">
<h1 className="md:text-sm text-[12px]">(LHE) - (JED) | Dep 2023-11-25-| Economy | 1 adult | 0 Children | 1 Infant | Oneway</h1>
</div>
<div className="flex justify-center items-center">
<button onClick={gomodifyinsurance} className="flex rounded-lg text-white border boder-white justify-center items-center h-10 w-full px-5">
Modify
</button>
</div>
         </div>


        </section>





 





           
       

        {/* Button Section End */}
        </div>
      <div className='flex flex-row flex-wrap md:p-10 p-5 ' >




<div className='flex flex-wrap  w-full justify-between'>

<div className='flex justify-center items-center'>
<h1 className=''>Insurance <span className='text-[#B3B3B3]'>12Found</span></h1>

</div>


<div className='flex '>
<div className='flex border border-[#DADADA] px-5 py-2 cursor-pointer rounded-lg'>
<h1 className='text-sm text-[#A5A5A5]'>Sort by : Price - low to high</h1>
</div>
</div>

</div>

<div className='flex flex-col justify-center items-center  w-full'>

  <div className='flex lg:w-[90%] w-full lg:flex-row flex-col mt-20 bg-white card border border-gray-300 '>

<div className='flex flex-col '>
<div className='flex bg-[#699FC9] w-full px-12 py-16 justify-center rounded-t-lg items-center'>
<h1 className='text-2xl text-white'>Saer.pk Insurance</h1>
</div>

<div className='flex justify-center items-center bg-white p-10 lg:border-r-2 border-r-0 lg:border-b-0 border-b-2'>
<h1 className='text-2xl '>Thailand</h1>
</div>

</div>

<div className='flex flex-col lg:justify-start justify-center items-center  p-7 '>
<ul>
  <li className='my-3 text-[#699FC9] lg:text-start text-center'>See more benefit</li>
  <li className='my-3 text-[#A5A5A5] lg:text-start text-center'>Coverage Upto</li>
  <li className='my-3 lg:text-start text-center'>25.000 (Excess $50)</li>
  <li className='my-3 text-[#A5A5A5] lg:text-start text-center'>Covid 19</li>
  <li className='my-3 text-[#A5A5A5] lg:text-start text-center'>Covered</li>
  <li className='my-3 lg:text-start text-center'>Premium</li>
</ul>
</div>


<div className='flex justify-center items-end p-5 '>

<div onClick={goinsuranceinfo} className=' bg-[#699FC9] w-full flex-wrap cursor-pointer px-4 flex justify-center items-center  h-10'>
<span className='text-white sm:text-sm text-xs'>Buy Instant policy with rs. 2808.</span>
</div>

</div>


  </div>



  <div className='flex lg:w-[90%] w-full lg:flex-row flex-col mt-20 bg-white card border border-gray-300 '>

<div className='flex flex-col '>
<div className='flex bg-[#699FC9] w-full px-12 py-16 justify-center rounded-t-lg items-center'>
<h1 className='text-2xl text-white'>Saer.pk Insurance</h1>
</div>

<div className='flex justify-center items-center bg-white p-10 lg:border-r-2 border-r-0 lg:border-b-0 border-b-2'>
<h1 className='text-2xl '>Thailand</h1>
</div>

</div>

<div className='flex flex-col lg:justify-start justify-center items-center  p-7 '>
<ul>
  <li className='my-3 text-[#699FC9] lg:text-start text-center'>See more benefit</li>
  <li className='my-3 text-[#A5A5A5] lg:text-start text-center'>Coverage Upto</li>
  <li className='my-3 lg:text-start text-center'>25.000 (Excess $50)</li>
  <li className='my-3 text-[#A5A5A5] lg:text-start text-center'>Covid 19</li>
  <li className='my-3 text-[#A5A5A5] lg:text-start text-center'>Covered</li>
  <li className='my-3 lg:text-start text-center'>Premium</li>
</ul>
</div>


<div className='flex justify-center items-end p-5 '>

<div onClick={goinsuranceinfo} className=' bg-[#699FC9] w-full flex-wrap px-4 cursor-pointer flex justify-center items-center  h-10'>
<span className='text-white sm:text-sm text-xs'>Buy Instant policy with rs. 2808.</span>
</div>

</div>


  </div>

</div>


      </div>


    </>
  )
}

export default Insurance