import React from 'react'

import chicken from '../assests/Chicken.png'
import beef from "../assests/beef.png"
import platter from "../assests/platter.png"

import { useNavigate } from 'react-router-dom'



function FoodPreview() {
const nav =useNavigate()
const GoContact=()=>{
  window.scrollTo({ top: 0, behavior: 'smooth' });

nav("/contactDetail")
}

  return (
    <>


{/* card 01 start */}

<div className='md:mt-10 mt-7 '>
  <p className='text-[#699FC9] md:text-[21px] text-[16px] md:ml-11 ml-6'>Pakistani Food</p>
</div>


<div className='flex md:flex-row flex-col mx-10  bg-white  md:justify-start justify-center items-center rounded-lg mt-2'>


<div className=' lg:w-[30%]  lg:p-5 md:p-4 p-4  '>
 
 <img src={chicken} alt="" className='object-contain lg:w-[350px] md:w-[250px] mx-auto ' />
</div>



<div className=' md:w-[70%] w-full lg:p-5 md:p-4 p-4'>
<div className=' '>

<button className='w-full h-[50px] text-white text-[20px] bg-[#699FC9] mx-auto'>
Chicken Biryani
</button>
{/* card under work */}
<div className='flex md:flex-row flex-col mt-5'>

<div className=' md:w-[50%]  '>

<h1 className='text-left text-[19px]'>About</h1>
<p className='text-[15px] w-[80%] text-gray-400'>
  <span className='text-[19px] text-black'>Flavorful one pot-Dish </span>
  Biryani is a beloved dish in many regions, and it
   has various regional variations in India, 
   Pakistan, and other South Asian countries. 
</p>
</div>

<div className='md:w-[50%] border-gray-400 border-l-2 md:mt-0 mt-5'>

<div className='flex flex-row justify-between mx-5'>
  <p className=' lg:text-[14px]  md:text-[12px] text-[14px] '>Available Food </p>
  <p className='text-[#699FC9] lg:text-[14px]  md:text-[12px] text-[14px] text-right'>2 times a day </p>
</div>

<div className='flex flex-row justify-between mx-5 items-center'>
  <p className='lg:text-[14px]  md:text-[12px] text-[14px] '>service how many 
  <br />times </p>
  <p className='text-[#699FC9] lg:text-[14px]  md:text-[12px] text-[14px]'>Unlimited </p>
</div>

<div className='flex flex-row justify-between mx-5'>
  <p className='lg:text-[14px]  md:text-[12px] text-[14px] '>water botel</p>
  <p className='text-[#699FC9] lg:text-[14px]  md:text-[12px] text-[14px]'>Unlimited </p>
</div>

<div className='flex flex-row justify-between mx-5'>
  <p className='lg:text-[14px]  md:text-[12px] text-[14px] '>total dishes</p>
  <p className='text-[#699FC9] lg:text-[14px]  md:text-[12px] text-[14px]'>05</p>
</div>

<div className='flex flex-row justify-between mx-5'>
  <p className='lg:text-[14px]  md:text-[12px] text-[14px] '>fruits</p>
  <p className='text-[#699FC9] lg:text-[14px]  md:text-[12px] text-[14px]'>include</p>
</div>

<div className='flex flex-row justify-between mx-5'>
  <p className='lg:text-[14px]  md:text-[12px] text-[14px]'>soft drink</p>
  <p className='text-[#699FC9] lg:text-[14px]  md:text-[12px] text-[14px]'>include</p>
</div>

<div className='flex flex-row justify-between mx-5'>
  <p className='lg:text-[14px]  md:text-[12px] text-[14px]'>soda drinks</p>
  <p className='text-[#699FC9] lg:text-[14px]  md:text-[12px] text-[14px]'>include</p>
</div>




</div>


</div>
{/* card umder work */}

<button onClick={GoContact} className='bg-[#699FC9] text-white  lg:text-[14px] md:text-[9px]  py-2 px-5 rounded-lg float-right  lg:mr-10 md:mr-4 mt-5'>
20 DAYS MEAL IN RS.12,9999/.
</button>


</div>
</div>


</div>





{/* card 01  and */}

{/* card 02 start  */}

<div className='md:mt-10 mt-7 '>
  <p className='text-[#699FC9] md:text-[21px] text-[16px] md:ml-11 ml-6'>Buffet Pakistani Food</p>
</div>


<div className='flex md:flex-row flex-col mx-10  bg-white  md:justify-start justify-center items-center rounded-lg mt-2'>


<div className=' lg:w-[30%]  lg:p-5 md:p-4 p-4  '>
 
 <img src={platter} alt="" className='object-contain lg:w-[350px] md:w-[250px] mx-auto ' />
</div>



<div className=' md:w-[70%] w-full lg:p-5 md:p-4 p-4'>
<div className=' '>

<button className='w-full h-[50px] text-white text-[20px] bg-[#699FC9] mx-auto'>
Buffet style services
</button>
{/* card under work */}
<div className='flex md:flex-row flex-col mt-5'>

<div className=' md:w-[50%]  '>

<h1 className='text-left text-[19px]'>About</h1>
<p className='text-[15px] w-[80%] text-gray-400'>
  <span className='text-[19px] text-black'>Flavorful one pot-Dish </span>
  Biryani is a beloved dish in many regions, and it
   has various regional variations in India, 
   Pakistan, and other South Asian countries. 
</p>
</div>

<div className='md:w-[50%] border-gray-400 border-l-2 md:mt-0 mt-5'>

<div className='flex flex-row justify-between mx-5'>
  <p className=' lg:text-[14px]  md:text-[12px] text-[14px] '>Available Food </p>
  <p className='text-[#699FC9] lg:text-[14px]  md:text-[12px] text-[14px] text-right'>2 times a day </p>
</div>

<div className='flex flex-row justify-between mx-5 items-center'>
  <p className='lg:text-[14px]  md:text-[12px] text-[14px] '>service how many 
  <br />times </p>
  <p className='text-[#699FC9] lg:text-[14px]  md:text-[12px] text-[14px]'>Unlimited </p>
</div>

<div className='flex flex-row justify-between mx-5'>
  <p className='lg:text-[14px]  md:text-[12px] text-[14px] '>water botel</p>
  <p className='text-[#699FC9] lg:text-[14px]  md:text-[12px] text-[14px]'>Unlimited </p>
</div>

<div className='flex flex-row justify-between mx-5'>
  <p className='lg:text-[14px]  md:text-[12px] text-[14px] '>total dishes</p>
  <p className='text-[#699FC9] lg:text-[14px]  md:text-[12px] text-[14px]'>05</p>
</div>

<div className='flex flex-row justify-between mx-5'>
  <p className='lg:text-[14px]  md:text-[12px] text-[14px] '>fruits</p>
  <p className='text-[#699FC9] lg:text-[14px]  md:text-[12px] text-[14px]'>include</p>
</div>

<div className='flex flex-row justify-between mx-5'>
  <p className='lg:text-[14px]  md:text-[12px] text-[14px]'>soft drink</p>
  <p className='text-[#699FC9] lg:text-[14px]  md:text-[12px] text-[14px]'>include</p>
</div>

<div className='flex flex-row justify-between mx-5'>
  <p className='lg:text-[14px]  md:text-[12px] text-[14px]'>soda drinks</p>
  <p className='text-[#699FC9] lg:text-[14px]  md:text-[12px] text-[14px]'>include</p>
</div>




</div>


</div>
{/* card umder work */}

<button onClick={GoContact} className='bg-[#699FC9] text-white  lg:text-[14px] md:text-[9px]  py-2 px-5 rounded-lg float-right  lg:mr-10 md:mr-4 mt-5'>
20 DAYS MEAL IN RS.12,9999/.
</button>


</div>
</div>


</div>

{/* card 02 and  */}

{/* card 03 start  */}

<div className='md:mt-10 mt-7 '>
  <p className='text-[#699FC9] md:text-[21px] text-[16px] md:ml-11 ml-6'>Arabian Food</p>
</div>


<div className='flex md:flex-row flex-col mx-10  bg-white  md:justify-start justify-center items-center rounded-lg mt-2'>


<div className=' lg:w-[30%]  lg:p-5 md:p-4 p-4  '>
 
 <img src={beef} alt="" className='object-contain lg:w-[350px] md:w-[250px] mx-auto ' />
</div>



<div className=' md:w-[70%] w-full lg:p-5 md:p-4 p-4'>
<div className=' '>

<button  className='w-full h-[50px] text-white text-[20px] bg-[#699FC9] mx-auto'>
Chicken Biryani
</button>
{/* card under work */}
<div className='flex md:flex-row flex-col mt-5'>

<div className=' md:w-[50%]  '>

<h1 className='text-left text-[19px]'>About</h1>
<p className='text-[15px] w-[80%] text-gray-400'>
  <span className='text-[19px] text-black'>Flavorful one pot-Dish </span>
  Biryani is a beloved dish in many regions, and it
   has various regional variations in India, 
   Pakistan, and other South Asian countries. 
</p>
</div>

<div className='md:w-[50%] border-gray-400 border-l-2 md:mt-0 mt-5'>

<div className='flex flex-row justify-between mx-5'>
  <p className=' lg:text-[14px]  md:text-[12px] text-[14px] '>Available Food </p>
  <p className='text-[#699FC9] lg:text-[14px]  md:text-[12px] text-[14px] text-right'>2 times a day </p>
</div>

<div className='flex flex-row justify-between mx-5 items-center'>
  <p className='lg:text-[14px]  md:text-[12px] text-[14px] '>service how many 
  <br />times </p>
  <p className='text-[#699FC9] lg:text-[14px]  md:text-[12px] text-[14px]'>Unlimited </p>
</div>

<div className='flex flex-row justify-between mx-5'>
  <p className='lg:text-[14px]  md:text-[12px] text-[14px] '>water botel</p>
  <p className='text-[#699FC9] lg:text-[14px]  md:text-[12px] text-[14px]'>Unlimited </p>
</div>

<div className='flex flex-row justify-between mx-5'>
  <p className='lg:text-[14px]  md:text-[12px] text-[14px] '>total dishes</p>
  <p className='text-[#699FC9] lg:text-[14px]  md:text-[12px] text-[14px]'>05</p>
</div>

<div className='flex flex-row justify-between mx-5'>
  <p className='lg:text-[14px]  md:text-[12px] text-[14px] '>fruits</p>
  <p className='text-[#699FC9] lg:text-[14px]  md:text-[12px] text-[14px]'>include</p>
</div>

<div className='flex flex-row justify-between mx-5'>
  <p className='lg:text-[14px]  md:text-[12px] text-[14px]'>soft drink</p>
  <p className='text-[#699FC9] lg:text-[14px]  md:text-[12px] text-[14px]'>include</p>
</div>

<div className='flex flex-row justify-between mx-5'>
  <p className='lg:text-[14px]  md:text-[12px] text-[14px]'>soda drinks</p>
  <p className='text-[#699FC9] lg:text-[14px]  md:text-[12px] text-[14px]'>include</p>
</div>




</div>


</div>
{/* card umder work */}

<button onClick={GoContact} className='bg-[#699FC9] text-white  lg:text-[14px] md:text-[9px]  py-2 px-5 rounded-lg float-right  lg:mr-10 md:mr-4 mt-5'>
20 DAYS MEAL IN RS.12,9999/.
</button>


</div>
</div>


</div>
{/* card 03 and */}


<br /><br /><br />

      
    </>
  )
}

export default FoodPreview
