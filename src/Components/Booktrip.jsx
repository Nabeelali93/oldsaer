import React from 'react'
import { useNavigate } from 'react-router-dom';



function Booktrip() {
    const nav = useNavigate()
   
    const gomodifytrip=()=>{

        window.scrollTo({ top: 0, behavior: 'smooth' });
      
        nav("/modifytrip")
    }


        const gocontactdetail = () => {

            window.scrollTo({ top: 0, behavior: 'smooth' });

            nav("/trip/flightinformation");
          };

      


  return (
    <>

    
<div className="md:mt-0  bg-[#699FC9]">

<div className="flex  flex-wrap p-5 gap-3 lg:justify-start justify-center">

<div className="flex flex-wrap bg-white p-3 rounded-lg lg:w-[80%] w-full">
<h1 className="md:text-sm text-[12px]">Naran valley | 30 Nov, 2023 - 20 Dec, 2023 | 3 Adult(s) | 2 children| 3 Infant(s)</h1>
</div>
<div className="flex justify-center items-center">
<button onClick={gomodifytrip} className="flex rounded-lg text-white border border-white justify-center items-center h-10 w-full px-5">
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





{/* {/ visa card  /} */}



{/* {/ get hotel card  /} */}

<div className='flex md:w-[80%] w-full lg:h-[290px] h-full md:ml-16 ml-2 lg:flex-row flex-col mt-10 rounded-xl border bg-white'>
  <div className='relative lg:w-[35%]  h-[290px] object-contain text-center w-full rounded-xl bg-blue-600 bg-opacity-50'>
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Burj_Al_Arab%2C_Dubai%2C_by_Joi_Ito_Dec2007.jpg/1200px-Burj_Al_Arab%2C_Dubai%2C_by_Joi_Ito_Dec2007.jpg"
    
    alt="" 
    className='h-full w-full object-fill rounded-lg opacity-50 '
    />
    <div className='absolute bottom-0 mb-5 left-5 md:text-[24px] text-[20px] text-black text-center' >
      <h1 className='leading-7'>Dubai Visit visa
        30days </h1>
    </div>
  </div>
  <div className='lg:w-[65%] w-full bg-white rounded-xl '>
  <div className='px-5  mt-5'>
<h1 className='text-[24px]'>NARAN VALLEY 10 DAYS TRIPS</h1>
<div className='flex flex-col gap-y-2'>

<div className='flex text-white items-start gap-3'>
<div className=''>
<p className='bg-[#699FC9] px-3 py-0.5 rounded-full'>1</p>
</div>

<div  className='flex text-black flex-col'>
<h1 className='text-[13px] font-bold'>Day 1: deperature</h1>
<p className='text-[8px] text-gray-500'>Departure from Lahore 10:00pm. Via GT Road / Motorways. Short stay on the way. Pick Member From ISB at 3:30am.</p>
</div>

</div>

<div className='flex text-white items-start gap-3 '>
<div className=''>
<p className='bg-[#699FC9] px-2.5 py-0.5 rounded-full'>2</p>
</div>

<div  className='flex text-black flex-col'>
<h1 className='text-[13px] font-bold'>Day 2: deperature</h1>
<p className='text-[8px] text-gray-500'>Breakfast in Balakot 07:30am. Short Stay at Kewai Waterfall. Transfer to Jeep for Siri Paye.
Arrival at Siri paye & Explore Surroundings. Explore Shogran. Drive back for Kewai. Reached Naran. 
Free Time for River Rafting. Explore Naran Bazar at Night. Dinner at Hotel</p>
</div>

</div>

<div className='flex text-white items-start gap-3 '>
<div className=''>
<p className='bg-[#699FC9] px-2.5 py-0.5 rounded-full'>3</p>
</div>

<div  className='flex text-black flex-col'>
<h1 className='text-[13px] font-bold'>Day 3: deperature</h1>
<p className='text-[8px] text-gray-500'>Breakfast in Balakot 07:30am. Short Stay at Kewai Waterfall. Transfer to Jeep for Siri Paye.
Arrival at Siri paye & Explore Surroundings. Explore Shogran. Drive back for Kewai. Reached Naran. 
Free Time for River Rafting. Explore Naran Bazar at Night. Dinner at Hotel</p>
</div>

</div>

<div className='flex justify-end '>
<button onClick={gocontactdetail} className='w-36 py-2  border-2 md:mt-0 mt-3 border-[#699FC9] bg-[#699FC9] text-white rounded-lg'>RS. 20,000/.</button>

</div>


</div>


   </div>
  
  </div>
  </div>

  <div className='flex md:w-[80%] w-full lg:h-[290px] h-full md:ml-16 ml-2 lg:flex-row flex-col mt-10 rounded-xl border bg-white'>
  <div className='relative lg:w-[35%]  h-[290px] object-contain text-center w-full rounded-xl bg-blue-600 bg-opacity-50'>
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Burj_Al_Arab%2C_Dubai%2C_by_Joi_Ito_Dec2007.jpg/1200px-Burj_Al_Arab%2C_Dubai%2C_by_Joi_Ito_Dec2007.jpg"
    
    alt="" 
    className='h-full w-full object-fill rounded-lg opacity-50 '
    />
    <div className='absolute bottom-0 mb-5 left-5 md:text-[24px] text-[20px] text-black text-center' >
      <h1 className='leading-7'>Dubai Visit visa
        30days </h1>
    </div>
  </div>
  <div className='lg:w-[65%] w-full bg-white rounded-xl '>
  <div className='px-5  mt-5'>
<h1 className='text-[24px]'>NARAN VALLEY 10 DAYS TRIPS</h1>
<div className='flex flex-col gap-y-2'>

<div className='flex text-white items-start gap-3'>
<div className=''>
<p className='bg-[#699FC9] px-3 py-0.5 rounded-full'>1</p>
</div>

<div  className='flex text-black flex-col'>
<h1 className='text-[13px] font-bold'>Day 1: deperature</h1>
<p className='text-[8px] text-gray-500'>Departure from Lahore 10:00pm. Via GT Road / Motorways. Short stay on the way. Pick Member From ISB at 3:30am.</p>
</div>

</div>

<div className='flex text-white items-start gap-3 '>
<div className=''>
<p className='bg-[#699FC9] px-2.5 py-0.5 rounded-full'>2</p>
</div>

<div  className='flex text-black flex-col'>
<h1 className='text-[13px] font-bold'>Day 2: deperature</h1>
<p className='text-[8px] text-gray-500'>Breakfast in Balakot 07:30am. Short Stay at Kewai Waterfall. Transfer to Jeep for Siri Paye.
Arrival at Siri paye & Explore Surroundings. Explore Shogran. Drive back for Kewai. Reached Naran. 
Free Time for River Rafting. Explore Naran Bazar at Night. Dinner at Hotel</p>
</div>

</div>

<div className='flex text-white items-start gap-3 '>
<div className=''>
<p className='bg-[#699FC9] px-2.5 py-0.5 rounded-full'>3</p>
</div>

<div  className='flex text-black flex-col'>
<h1 className='text-[13px] font-bold'>Day 3: deperature</h1>
<p className='text-[8px] text-gray-500'>Breakfast in Balakot 07:30am. Short Stay at Kewai Waterfall. Transfer to Jeep for Siri Paye.
Arrival at Siri paye & Explore Surroundings. Explore Shogran. Drive back for Kewai. Reached Naran. 
Free Time for River Rafting. Explore Naran Bazar at Night. Dinner at Hotel</p>
</div>

</div>

<div className='flex justify-end '>
<button onClick={gocontactdetail} className='w-36 py-2  border-2 md:mt-0 mt-3 border-[#699FC9] bg-[#699FC9] text-white rounded-lg'>RS. 20,000/.</button>

</div>


</div>


   </div>
  
  </div>
  </div>

</div>




    </>
  )
}

export default Booktrip