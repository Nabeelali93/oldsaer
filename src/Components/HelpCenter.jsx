import React,{useState} from 'react'

function HelpCenter() {


  const [Qustions1, setQustions1] = useState(false);
  const [Qustions2, setQustions2] = useState(false);
  const [Qustions3, setQustions3] = useState(false);
  const [Qustions4, setQustions4] = useState(false);
  const [Qustions5, setQustions5] = useState(false);
  const [Qustions6, setQustions6] = useState(false);
  const [Qustions7, setQustions7] = useState(false);


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
  

  return (

    <div>

<div className='flex flex-col '>
    <div className='flex justify-center '>
        <h1 className=' text-2xl md:text-6xl font-medium p-12'>HELP CENTER</h1>
    </div>

    <div className="flex items-center justify-center ">
    <div className="flex  rounded-lg bg-white h-12 md:h-12 md:ml-5 md:w-[35%] w-[60%]">
        <input type="text" className="px-4 py-2   rounded-lg outline-none  w-[100%]" placeholder="Any search question..."/>
        <button className="flex items-center justify-center px-4 border-l">
            <svg className="w-6 h-6 text-gray-600" fill="#d1d5db" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
            
        </button>
    </div>
</div>
</div>

{/* Qustions work start */}

<div className='mx-auto w-[90%] mt-10 border-2 border-solid bg-white    '>

          <div className="flex justify-between items-center ">
          <p
            className="p-5 ml-2 md:text-[20px] text-[13px] "
            
          >
            Can I customize my Umrah package?
          </p>
          <div >
{
  Qustions1 != false ?




<svg xmlns="http://www.w3.org/2000/svg" height="17" viewBox="0 0 24 24" width="20"
className='mr-5 '
onClick={()=>QustionTornari1()}


>
  <path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/>
<path d="M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"  fill="#A5A5A5" /></svg>

 
  :
<svg width="16" height="10" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"
className='mr-5'
onClick={()=>QustionTornari1()}
>
<path id="Vector" d="M2.115 0.442505L9 7.31251L15.885 0.442505L18 2.5575L9 11.5575L0 2.5575L2.115 0.442505Z" fill="#A5A5A5"/>
</svg>
}

          
          </div>
        
          </div>
         
          {Qustions1 != true ? (
           <>
            <p className=" mx-5 mt-3 mb-5 md:text-[15px] text-[10px] font-[400px] text-[#908F8F] flex-wrap flex">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and!
            </p>
            <hr className=" border-gray-400 w-[94%] mx-5" />
           </>
          ) : null}

          {/* qustion 02 */}
          <div className="flex justify-between items-center ">
          <p
            className="p-5 ml-2 md:text-[20px] text-[13px] "
            
          >
What is included in a typical Umrah package?        </p>
          <div >
{
  Qustions2 != false ?




<svg xmlns="http://www.w3.org/2000/svg" height="17" viewBox="0 0 24 24" width="20"
className='mr-5 '
onClick={()=>QustionTornari2()}


>
  <path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/>
<path d="M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"  fill="#A5A5A5" /></svg>

 
  :
<svg width="16" height="10" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"
className='mr-5'
onClick={()=>QustionTornari2()}
>
<path id="Vector" d="M2.115 0.442505L9 7.31251L15.885 0.442505L18 2.5575L9 11.5575L0 2.5575L2.115 0.442505Z" fill="#A5A5A5"/>
</svg>
}

          
          </div>
        
          </div>
         
          {Qustions2 != true ? (
           <>
            <p className=" mx-5 mt-3 mb-5 md:text-[15px] text-[10px] font-[400px] text-[#908F8F] flex-wrap flex">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and!
            </p>
            <hr className=" border-gray-400 w-[94%] mx-5" />
           </>
          ) : null}
          

{/* Qustion 03 */}


<div className="flex justify-between items-center ">
          <p
            className="p-5 ml-2 md:text-[20px] text-[13px] "
            
          >
How do I choose the right Umrah package for me?
     </p>
          <div >
{
  Qustions3 != false ?




<svg xmlns="http://www.w3.org/2000/svg" height="17" viewBox="0 0 24 24" width="20"
className='mr-5 '
onClick={()=>QustionTornari3()}


>
  <path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/>
<path d="M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"  fill="#A5A5A5" /></svg>

 
  :
<svg width="16" height="10" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"
className='mr-5'
onClick={()=>QustionTornari3()}
>
<path id="Vector" d="M2.115 0.442505L9 7.31251L15.885 0.442505L18 2.5575L9 11.5575L0 2.5575L2.115 0.442505Z" fill="#A5A5A5"/>
</svg>
}

          
          </div>
        
          </div>
         
          {Qustions3 != true ? (
           <>
            <p className=" mx-5 mt-3 mb-5 md:text-[15px] text-[10px] font-[400px] text-[#908F8F] flex-wrap flex">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and!
            </p>
            <hr className=" border-gray-400 w-[94%] mx-5" />
           </>
          ) : null}



{/* Qustion 04 */}

<div className="flex justify-between items-center ">
          <p
            className="p-5 ml-2 md:text-[20px] text-[13px] "
            
          >
What is the best time to book an Umrah package?     </p>
          <div >
{
  Qustions4 != false ?




<svg xmlns="http://www.w3.org/2000/svg" height="17" viewBox="0 0 24 24" width="20"
className='mr-5 '
onClick={()=>QustionTornari4()}


>
  <path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/>
<path d="M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"  fill="#A5A5A5" /></svg>

 
  :
<svg width="16" height="10" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"
className='mr-5'
onClick={()=>QustionTornari4()}
>
<path id="Vector" d="M2.115 0.442505L9 7.31251L15.885 0.442505L18 2.5575L9 11.5575L0 2.5575L2.115 0.442505Z" fill="#A5A5A5"/>
</svg>
}

          
          </div>
        
          </div>
         
          {Qustions4 != true ? (
           <>
            <p className=" mx-5 mt-3 mb-5 md:text-[15px] text-[10px] font-[400px] text-[#908F8F] flex-wrap flex">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and!
            </p>
            <hr className=" border-gray-400 w-[94%] mx-5" />
           </>
          ) : null}

{/* Qustion 05 */}
 
<div className="flex justify-between items-center ">
          <p
            className="p-5 ml-2 md:text-[20px] text-[13px] "
            
          >
What documents are required for Umrah?         </p>
          <div >
{
  Qustions5 != false ?




<svg xmlns="http://www.w3.org/2000/svg" height="17" viewBox="0 0 24 24" width="20"
className='mr-5 '
onClick={()=>QustionTornari5()}


>
  <path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/>
<path d="M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"  fill="#A5A5A5" /></svg>

 
  :
<svg width="16" height="10" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"
className='mr-5'
onClick={()=>QustionTornari5()}
>
<path id="Vector" d="M2.115 0.442505L9 7.31251L15.885 0.442505L18 2.5575L9 11.5575L0 2.5575L2.115 0.442505Z" fill="#A5A5A5"/>
</svg>
}

          
          </div>
        
          </div>
         
          {Qustions5 != true ? (
           <>
            <p className=" mx-5 mt-3 mb-5 md:text-[15px] text-[10px] font-[400px] text-[#908F8F] flex-wrap flex">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and!
            </p>
            <hr className=" border-gray-400 w-[94%] mx-5" />
           </>
          ) : null}
  
{/* Qustion 06 */}

<div className="flex justify-between items-center ">
          <p
            className="p-5 ml-2 md:text-[20px] text-[13px] "
            
          >
Are there any age restrictions for Umrah?          </p>
          <div >
{
  Qustions6 != false ?




<svg xmlns="http://www.w3.org/2000/svg" height="17" viewBox="0 0 24 24" width="20"
className='mr-5 '
onClick={()=>QustionTornari6()}


>
  <path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/>
<path d="M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"  fill="#A5A5A5" /></svg>

 
  :
<svg width="16" height="10" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"
className='mr-5'
onClick={()=>QustionTornari6()}
>
<path id="Vector" d="M2.115 0.442505L9 7.31251L15.885 0.442505L18 2.5575L9 11.5575L0 2.5575L2.115 0.442505Z" fill="#A5A5A5"/>
</svg>
}

          
          </div>
        
          </div>
         
          {Qustions6 != true ? (
           <>
            <p className=" mx-5 mt-3 mb-5 md:text-[15px] text-[10px] font-[400px] text-[#908F8F] flex-wrap flex">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and!
            </p>
            <hr className=" border-gray-400 w-[94%] mx-5" />
           </>
          ) : null}

{/* Qustion 07 */}

<div className="flex justify-between items-center ">
          <p
            className="p-5 ml-2 md:text-[20px] text-[13px] "
            
          >
What types of Umrah packages are available?      </p>
          <div >
{
  Qustions7 != false ?




<svg xmlns="http://www.w3.org/2000/svg" height="17" viewBox="0 0 24 24" width="20"
className='mr-5 '
onClick={()=>QustionTornari7()}


>
  <path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/>
<path d="M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"  fill="#A5A5A5" /></svg>

 
  :
<svg width="16" height="10" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"
className='mr-5'
onClick={()=>QustionTornari7()}
>
<path id="Vector" d="M2.115 0.442505L9 7.31251L15.885 0.442505L18 2.5575L9 11.5575L0 2.5575L2.115 0.442505Z" fill="#A5A5A5"/>
</svg>
}

          
          </div>
        
          </div>
         
          {Qustions7 != true ? (
           <>
            <p className=" mx-5 mt-3 mb-5 md:text-[15px] text-[10px] font-[400px] text-[#908F8F] flex-wrap flex">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and!
            </p>
            <hr className=" border-gray-400 w-[94%] mx-5" />
           </>
          ) : null}


             
</div>

{/* Qustions work  and */}
<div className='p-5 lg:mx-5 md:mx-3 mx-1 '>

<div className="flex flex-wrap   ">
      {/* Large screens (lg): 4 columns */}
      <div className="lg:w-[25%] md:w-1/3 sm:w-1/2 p-4">
<div className='flex flex-row bg-white rounded-lg'>

<div className='p-3 '>
  <div className='bg-[#1278F0]  w-[40px] h-[40px] rounded-lg flex justify-center items-center ' >
    
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="ic:baseline-mail-outline">
<path id="Vector" d="M16.666 3.33337H3.33268C2.41602 3.33337 1.67435 4.08337 1.67435 5.00004L1.66602 15C1.66602 15.9167 2.41602 16.6667 3.33268 16.6667H16.666C17.5827 16.6667 18.3327 15.9167 18.3327 15V5.00004C18.3327 4.08337 17.5827 3.33337 16.666 3.33337ZM16.666 15H3.33268V6.66671L9.99935 10.8334L16.666 6.66671V15ZM9.99935 9.16671L3.33268 5.00004H16.666L9.99935 9.16671Z" fill="white"/>
</g>
</svg>

  </div>

</div>

<div>

<div className='p-1'>
<h1 className='text-[17px] text-[#699FC9]'>Email Us</h1>
<p className='text-[10px] text-[#699FC9]'>AHSAN@SAER.PK</p>
<p className='text-[10px] text-[#699FC9]'>Contact@saer.pk</p>

</div>




</div>

</div>
  
    </div>
      <div className="lg:w-[25%] md:w-1/3 sm:w-1/2 p-4">
      <div className='flex flex-row bg-white rounded-lg'>

<div className='p-3 '>
  <div className='bg-[#1278F0]  w-[40px] h-[40px] rounded-lg flex justify-center items-center ' >
    
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="ic:outline-location-on">
<path id="Vector" d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM7 9C7 6.24 9.24 4 12 4C14.76 4 17 6.24 17 9C17 11.88 14.12 16.19 12 18.88C9.92 16.21 7 11.85 7 9Z" fill="white"/>
<path id="Vector_2" d="M12 11.5C13.3807 11.5 14.5 10.3807 14.5 9C14.5 7.61929 13.3807 6.5 12 6.5C10.6193 6.5 9.5 7.61929 9.5 9C9.5 10.3807 10.6193 11.5 12 11.5Z" fill="white"/>
</g>
</svg>

  </div>

</div>

<div>

<div className='p-1'>
<h1 className='text-[17px] text-[#699FC9]'>Visit Us</h1>
<p className='text-[8px] text-[#699FC9]'>Our team is here to serve you</p>
<p className='text-[6px] text-[#699FC985] overflow-hidden'>1st floor,Mall 1 main Boulevard,
Gulberg lll,Lahore ,Punjab 5460 
Pakistan</p>

</div>




</div>

</div>
   
  </div>
      <div className="lg:w-[25%] md:w-1/3 sm:w-1/2 p-4">
      <div className='flex flex-row bg-white rounded-lg'>

<div className='p-3 '>
  <div className='bg-[#1278F0]  w-[40px] h-[40px] rounded-lg flex justify-center items-center ' >
    
  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="ic:outline-call">
<path id="Vector" d="M5.45 4.66667C5.5 5.40833 5.625 6.13333 5.825 6.825L4.825 7.825C4.48333 6.825 4.26667 5.76667 4.19167 4.66667H5.45ZM13.6667 14.6833C14.375 14.8833 15.1 15.0083 15.8333 15.0583V16.3C14.7333 16.225 13.675 16.0083 12.6667 15.675L13.6667 14.6833ZM6.25 3H3.33333C2.875 3 2.5 3.375 2.5 3.83333C2.5 11.6583 8.84167 18 16.6667 18C17.125 18 17.5 17.625 17.5 17.1667V14.2583C17.5 13.8 17.125 13.425 16.6667 13.425C15.6333 13.425 14.625 13.2583 13.6917 12.95C13.6089 12.92 13.5213 12.9059 13.4333 12.9083C13.2167 12.9083 13.0083 12.9917 12.8417 13.15L11.0083 14.9833C8.64619 13.7753 6.72467 11.8538 5.51667 9.49167L7.35 7.65833C7.58333 7.425 7.65 7.1 7.55833 6.80833C7.24221 5.84838 7.08185 4.844 7.08333 3.83333C7.08333 3.375 6.70833 3 6.25 3Z" fill="white"/>
</g>
</svg>

  </div>

</div>

<div>

<div className='p-1'>
<h1 className='text-[17px] text-[#699FC9]'>Call Us</h1>
<p className='text-[10px] text-[#699FC9]'>+923000709017</p>
<p className='text-[10px] text-[#699FC9]'>042-111-Saer.pk</p>

</div>




</div>

</div>
     </div>
      <div className="lg:w-[25%] md:w-1/3 sm:w-1/2 p-4">
      <div className='flex flex-row bg-white rounded-lg'>

<div className='p-3 '>
  <div className='bg-[#1278F0]  w-[40px] h-[40px] rounded-lg flex justify-center items-center ' >
    
  <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group">
<path id="Path" d="M13.9993 23.3334L10.4993 19.8334H8.16602C6.23302 19.8334 4.66602 18.2664 4.66602 16.3334V9.33337C4.66602 7.40038 6.23302 5.83337 8.16602 5.83337H19.8327C21.7657 5.83337 23.3327 7.40038 23.3327 9.33337V16.3334C23.3327 18.2664 21.7657 19.8334 19.8327 19.8334H17.4993L13.9993 23.3334" stroke="white" stroke-opacity="0.99" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Path_2" d="M9.33398 10.5H18.6673" stroke="white" stroke-opacity="0.99" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path id="Path_3" d="M9.33398 15.1667H16.334" stroke="white" stroke-opacity="0.99" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>

  </div>

</div>

<div>

<div className='p-1'>
<h1 className='text-[17px] text-[#699FC9]'>Live Chat</h1>
<p className='text-[10px] text-[#699FC9]'>+923000709017</p>
<p className='text-[10px] text-[#699FC9]'>042-111-Saer.pk</p>

</div>




</div>

</div>  
   </div>

      {/* Medium screens (md): 3 columns */}
      {/* ... (similar structure as above) */}

      {/* Small screens (sm): 2 columns */}
      {/* ... (similar structure as above) */}
    </div>

    </div>
<br />
<br />
<br />

       

       









        
    </div>
  )
}

export default HelpCenter