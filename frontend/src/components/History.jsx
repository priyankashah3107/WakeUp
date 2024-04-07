import React from 'react'
import { history, underLine } from '../assets'
import Button from './Button'
function History() {
  return (
    <>
    <div className='text-white  sm:w-[1280px] sm:h-[800px] w-[650px] flex justify-center items-center text-center sm:flex-row flex-col sm:ml-32 mt-4'>

      <img src={history} alt="img" />    

      <div className='bg-[#1E1E1E] sm:w-[500px] sm:h-[500px] '>

         <div className='flex justify-center sm:flex-col flex-col items-left sm:mt-10 bg-[#1E1E1E] text-center ml-20 gap-2 '>

         <h1 className="text-[#A5886D] mt-28 text-left text-[31px] font-bold font-['Monda'] leading-10 ">Our History</h1>
        <img src={underLine} alt="underline" className="w-56 " />
         </div>

        <p className="text-justify ml-20 w-[420px] mt-5 text-white text-base font-normal font-['Monda'] leading-normal">
        Step into the enchanting world of our luxury coffee <br />
        shop, where history and indulgence blend seamlessly <br />
         to create an extraordinary experience for coffee lovers. <br />
          As you enter, you'll be greeted by an ambiance that <br />
          exudes elegance, with soft lighting, plush seating, and <br />
          the aroma of freshly brewed coffee lingering in the air.</p>
          
          <div className="w-[147px] h-11 px-8 py-2.5 bg-gradient-to-b from-stone-600 to-stone-400 rounded-tl-[150px] rounded-br-[150px] justify-center items-center inline-flex mt-4 sm:-ml-44 -ml-44">
         <button className="text-center text-white text-base font-bold font-['Monda'] leading-normal ">Read More</button>
         </div>
      </div>
 
    </div>
    </>
  )
}

export default History