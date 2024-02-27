import React from 'react'
import { useNavigate } from 'react-router-dom'



function Bookvisa() {

    const nav = useNavigate()



    const gocontactdetails = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      nav("/visa/contactdetail");
    };
  


   const gomodifyvisa=()=>{

    window.scrollTo({ top: 0, behavior: 'smooth' });
  
    nav("/modifyvisa")
  }
    
  return (
    <>



<div className="md:mt-0  bg-[#699FC9]">

<div className="flex  flex-wrap p-5 gap-3 lg:justify-start justify-center">

<div className="flex flex-wrap bg-white p-3 rounded-lg lg:w-[80%] w-full">
<h1 className="md:text-sm text-[12px]">DUBAI | 30ays | 3 Adult(s) | 2 children| 3 Infant(s)</h1>
</div>
<div className="flex justify-center items-center">
<button onClick={gomodifyvisa}  className="flex rounded-lg text-white border border-white justify-center items-center h-10 w-full px-5">
Modify
</button>
</div>
         </div>
</div>
    

<div className=' px-7 py-5 flex-col flex-wrap '>

<div className='flex justify-between mt-5 items-center md:flex-row flex-col'>
  <p className='text-[15px] '>Deals <span className='text-gray-400'>12Found</span> </p>
  <div className='md:text-[13px] text-[8px] md:mt-0 mt-3 text-gray-400 border-gray-300 border p-2'>Sort by : Price - low to high</div>
</div>

{/* {/ deal card  /} */}

<div className='flex md:w-[80%] w-full lg:h-[280px] h-full md:ml-16 ml-2 lg:flex-row flex-col mt-10 rounded-xl border bg-white'>
  <div className='relative lg:w-[35%]  h-[280px] object-contain text-center w-full rounded-xl bg-blue-600 bg-opacity-50'>
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Burj_Al_Arab%2C_Dubai%2C_by_Joi_Ito_Dec2007.jpg/1200px-Burj_Al_Arab%2C_Dubai%2C_by_Joi_Ito_Dec2007.jpg"
    
    alt="" 
    className='h-full w-full object-fill rounded-lg opacity-50 '
    />
    <div className='absolute bottom-0 mb-5 left-5 md:text-[24px] text-[20px] text-black text-center' >
      <h1 className='leading-7'>Dubai Visit visa
        30days </h1>
    </div>
  </div>
  <div className='lg:w-[65%] w-full bg-white rounded-xl'>
  <div className='px-5 mt-5'>
  <h1 className='text-[24px]'>Dubai 30 days visit visa</h1>
  <h1 className='text-[20px] mt-5 mx-2'>Document required</h1>
   <ul className='list-disc text-gray-500 ml-7 mt-4 text-[15px]'>
    <li>Passport</li>
    <li>Cnic</li>
   </ul>
   <div className='flex justify-between sm:flex-row flex-col items-baseline'>
   <p className='text-[20px] mx-2 mt-5 '>Time: 5 Working days</p>
   <button onClick={gocontactdetails} className='px-5 py-2 border-2 md:mt-0 mt-3 border-[#699FC9] bg-[#699FC9] text-white rounded-lg'>RS. 20,000/.</button>
   </div>
  
  </div>
  </div>

</div>



{/* {/ visa card  /} */}

<div className='flex md:w-[80%] w-full lg:h-[280px] h-full md:ml-16 ml-2 lg:flex-row flex-col mt-10 rounded-xl border bg-white'>
  <div className='relative lg:w-[35%]  h-[280px] object-contain text-center w-full rounded-xl bg-blue-600 bg-opacity-50'>
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Burj_Al_Arab%2C_Dubai%2C_by_Joi_Ito_Dec2007.jpg/1200px-Burj_Al_Arab%2C_Dubai%2C_by_Joi_Ito_Dec2007.jpg"
    
    alt="" 
    className='h-full w-full object-fill rounded-lg opacity-50 '
    />
    <div className='absolute bottom-0 mb-5 left-5 md:text-[24px] text-[20px] text-black text-center' >
      <h1 className='leading-7'>Dubai Visit visa
        30days </h1>
    </div>
  </div>
  <div className='lg:w-[65%] w-full bg-white rounded-xl'>
  <div className='px-5 mt-5'>
  <h1 className='text-[24px]'>Dubai 30 days visit visa</h1>
  <h1 className='text-[20px] mt-5 mx-2'>Document required</h1>
   <ul className='list-disc text-gray-500 ml-7 mt-4 text-[15px]'>
    <li>Passport</li>
    <li>Cnic</li>
   </ul>
   <div className='flex justify-between sm:flex-row flex-col items-baseline'>
   <p className='text-[20px] mx-2 mt-5 '>Time: 5 Working days</p>
   <button onClick={gocontactdetails} className='px-5 py-2 border-2 md:mt-0 mt-3 border-[#699FC9] bg-[#699FC9] text-white rounded-lg'>RS. 20,000/.</button>
   </div>
  
  </div>
  </div>

</div>

{/* {/ get hotel card  /} */}


<div className='flex md:w-[80%] w-full lg:h-[280px] h-full md:ml-16 ml-2 lg:flex-row flex-col mt-10 rounded-xl border bg-white'>
  <div className='relative lg:w-[35%]  h-[280px] object-contain text-center w-full rounded-xl bg-blue-600 bg-opacity-50'>
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Burj_Al_Arab%2C_Dubai%2C_by_Joi_Ito_Dec2007.jpg/1200px-Burj_Al_Arab%2C_Dubai%2C_by_Joi_Ito_Dec2007.jpg"
    
    alt="" 
    className='h-full w-full object-fill rounded-lg opacity-50 '
    />
    <div className='absolute bottom-0 mb-5 left-5 md:text-[24px] text-[20px] text-black text-center' >
      <h1 className='leading-7'>Dubai Visit visa
        30days </h1>
    </div>
  </div>
  <div className='lg:w-[65%] w-full bg-white rounded-xl'>
  <div className='px-5 mt-5'>
  <h1 className='text-[24px]'>Dubai 30 days visit visa</h1>
  <h1 className='text-[20px] mt-5 mx-2'>Document required</h1>
   <ul className='list-disc text-gray-500 ml-7 mt-4 text-[15px]'>
    <li>Passport</li>
    <li>Cnic</li>
   </ul>
   <div className='flex justify-between sm:flex-row flex-col items-baseline'>
   <p className='text-[20px] mx-2 mt-5 '>Time: 5 Working days</p>
   <button onClick={gocontactdetails} className='px-5 py-2 border-2 md:mt-0 mt-3 border-[#699FC9] bg-[#699FC9] text-white rounded-lg'>RS. 20,000/.</button>
   </div>
  
  </div>
  </div>

</div>
</div>




    </>
  )
}

export default Bookvisa