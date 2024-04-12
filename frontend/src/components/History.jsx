import React from 'react'
import { history, underLine } from '../assets'
import Button from './Button'

function History() {
  return (
    <>
    <div className='text-white  md:w-[1280px] md:h-[800px] w-[650px]  flex md:justify-center md:items-center text-center sm:flex-row flex-col md:ml-32 md:mt-4 ml-5 mt-16 rounded-md'>

      <img src={history} alt="img"  className='w-[380px] h-[200px] md:w-[700px] md:h-[498px]'/>    

      <div className='bg-[#1E1E1E] md:w-[500px] md:h-[500px] h-[370px]  '>

         <div className='flex justify-center sm:flex-col flex-col items-left sm:mt-10 bg-[#1E1E1E] text-center ml-20 gap-2 '>

         <h1 className="text-[#A5886D] md:mt-28 mt-10 text-left text-[31px] font-bold font-['Monda'] leading-10 ">Our History</h1>
        <img src={underLine} alt="underline" className="md:w-56 w-36" />
         </div>

        <p className="text-justify md:ml-20 ml-7 md:w-[420px] mt-5 text-white text-base font-normal font-['Monda'] leading-normal">
        Step into the enchanting world of our luxury coffee <br />
        shop, where history and indulgence blend seamlessly <br />
         to create an extraordinary experience for coffee lovers. <br />
          As you enter, you'll be greeted by an ambiance that <br />
          exudes elegance, with soft lighting, plush seating, and <br />
          the aroma of freshly brewed coffee lingering in the air.</p>
          
           <div className="outerDiv mt-7 mr-60 md:mr-28">
            <button>Read More</button>
           </div>

      </div>
 
    </div>
    </>
  )
}

export default History