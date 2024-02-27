import React from 'react'
import { useNavigate } from 'react-router-dom';



function Bookdeal() {
  const nav = useNavigate();

  const gocontactdetails = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    nav("/dealoffer/flightinformation");
  };

    
  return (
    <>

<div className=' px-7 py-5 flex-col flex-wrap '>

<div className='flex justify-between mt-5 items-center md:flex-row flex-col'>
  <p className='text-[15px] '>Deals <span className='text-gray-400'>12Found</span> </p>
  <div className='md:text-[13px] text-[8px] md:mt-0 mt-3 text-gray-400 border-gray-300 border p-2'>Sort by : Price - low to high</div>
</div>

{/* {/ deal card  /} */}

<div className='flex md:w-[80%] w-full lg:h-[280px] h-full  md:ml-16 ml-2 lg:flex-row flex-col mt-5 rounded-xl border bg-white'>
  <div className='relative lg:w-[35%] sm:h-full h-[250px] w-full  bg-blue-600 bg-opacity-50 rounded-xl'>
    <img src="https://media.istockphoto.com/id/480114468/photo/macca-kabe.webp?b=1&s=170667a&w=0&k=20&c=B8iXTxwj4GD_mCHYJcFVjomDdkVujzugPaWNaBwcK40="
    
    alt="" 
    className='h-full w-full object-cover rounded-lg opacity-50 '
    />
    <div className='absolute top-10 left-5 sm:text-[24px]   text-white' >
      <h1>Best deals offer</h1>
      <h1 className='ml-14'>14% discount</h1>
    </div>
  </div>
  <div className='lg:w-[65%] w-full bg-white rounded-xl'>
    <div className='px-5 py-3 mt-2'>
    <div className='flex justify-between lg:flex-row flex-col'> 
    <div>
    <p>21 days Umrah packages</p>
<ul className='list-disc ml-4 text-[13px] leading-7 mt-2 text-gray-500' >
  <li >Umrah Visa</li>
  <li>Transport</li>
  <li>Hotel in mecca</li>
  <li>Hotel in Medina</li>
  <li>Return tickets</li>
  <p className='-mt-4 text-[7px] ml-5 text-[#699FC9]'>Saudia airlines</p>
  <li>Weight: 30kg</li>
</ul>
    </div>
    <div>
    <p className=''>Document required</p>

    <ul className='list-disc ml-4 text-[13px] leading-7 mt-2 text-gray-500' >
  <li >Passport</li>
  <li>Cnic</li>
  <div className='flex gap-5 mt-16 mr-5 flex-wrap lg:leading-none md:leading-6'>
    <button className='px-5 h-[38px] border-2 border-[#699FC9] rounded-lg'>RS.232,000/.</button>
    <button onClick={gocontactdetails} className='px-5 h-[38px] border-2 border-[#699FC9] bg-[#699FC9] text-white rounded-lg'>Get offer</button>
  </div>
</ul>

    </div>
    </div>
    </div>
  </div>

</div>




{/* {/ visa card  /} */}

<div className='flex md:w-[80%] w-full lg:h-[280px] h-full  md:ml-16 ml-2 lg:flex-row flex-col mt-5 rounded-xl border bg-white'>
  <div className='relative lg:w-[35%] sm:h-full h-[250px] w-full  bg-blue-600 bg-opacity-50 rounded-xl'>
    <img src="https://media.istockphoto.com/id/480114468/photo/macca-kabe.webp?b=1&s=170667a&w=0&k=20&c=B8iXTxwj4GD_mCHYJcFVjomDdkVujzugPaWNaBwcK40="
    
    alt="" 
    className='h-full w-full object-cover rounded-lg opacity-50 '
    />
    <div className='absolute top-10 left-5 sm:text-[24px]   text-white' >
      <h1>Best deals offer</h1>
      <h1 className='ml-14'>14% discount</h1>
    </div>
  </div>
  <div className='lg:w-[65%] w-full bg-white rounded-xl'>
    <div className='px-5 py-3 mt-2'>
    <div className='flex justify-between lg:flex-row flex-col'> 
    <div>
    <p>21 days Umrah packages</p>
<ul className='list-disc ml-4 text-[13px] leading-7 mt-2 text-gray-500' >
  <li >Umrah Visa</li>
  <li>Transport</li>
  <li>Hotel in mecca</li>
  <li>Hotel in Medina</li>
  <li>Return tickets</li>
  <p className='-mt-4 text-[7px] ml-5 text-[#699FC9]'>Saudia airlines</p>
  <li>Weight: 30kg</li>
</ul>
    </div>
    <div>
    <p className=''>Document required</p>

    <ul className='list-disc ml-4 text-[13px] leading-7 mt-2 text-gray-500' >
  <li >Passport</li>
  <li>Cnic</li>
  <div className='flex gap-5 mt-16 mr-5 flex-wrap lg:leading-none md:leading-6'>
    <button className='px-5 h-[38px] border-2 border-[#699FC9] rounded-lg'>RS.232,000/.</button>
    <button onClick={gocontactdetails} className='px-5 h-[38px] border-2 border-[#699FC9] bg-[#699FC9] text-white rounded-lg'>Get offer</button>
  </div>
</ul>

    </div>
    </div>
    </div>
  </div>

</div>

{/* {/ get hotel card  /} */}

<div className='flex md:w-[80%] w-full lg:h-[280px] h-full  md:ml-16 ml-2 lg:flex-row flex-col mt-5 rounded-xl border bg-white'>
  <div className='relative lg:w-[35%] sm:h-full h-[250px] w-full  bg-blue-600 bg-opacity-50 rounded-xl'>
    <img src="https://media.istockphoto.com/id/480114468/photo/macca-kabe.webp?b=1&s=170667a&w=0&k=20&c=B8iXTxwj4GD_mCHYJcFVjomDdkVujzugPaWNaBwcK40="
    
    alt="" 
    className='h-full w-full object-cover rounded-lg opacity-50 '
    />
    <div className='absolute top-10 left-5 sm:text-[24px]   text-white' >
      <h1>Best deals offer</h1>
      <h1 className='ml-14'>14% discount</h1>
    </div>
  </div>
  <div className='lg:w-[65%] w-full bg-white rounded-xl'>
    <div className='px-5 py-3 mt-2'>
    <div className='flex justify-between lg:flex-row flex-col'> 
    <div>
    <p>21 days Umrah packages</p>
<ul className='list-disc ml-4 text-[13px] leading-7 mt-2 text-gray-500' >
  <li >Umrah Visa</li>
  <li>Transport</li>
  <li>Hotel in mecca</li>
  <li>Hotel in Medina</li>
  <li>Return tickets</li>
  <p className='-mt-4 text-[7px] ml-5 text-[#699FC9]'>Saudia airlines</p>
  <li>Weight: 30kg</li>
</ul>
    </div>
    <div>
    <p className=''>Document required</p>

    <ul className='list-disc ml-4 text-[13px] leading-7 mt-2 text-gray-500' >
  <li >Passport</li>
  <li>Cnic</li>
  <div className='flex gap-5 mt-16 mr-5 flex-wrap lg:leading-none md:leading-6'>
    <button className='px-5 h-[38px] border-2 border-[#699FC9] rounded-lg'>RS.232,000/.</button>
    <button onClick={gocontactdetails} className='px-5 h-[38px] border-2 border-[#699FC9] bg-[#699FC9] text-white rounded-lg'>Get offer</button>
  </div>
</ul>

    </div>
    </div>
    </div>
  </div>

</div>
</div>




    </>
  )
}

export default Bookdeal