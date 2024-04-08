import React from 'react'
import { footer } from '../assets'
import { IoLocation } from "react-icons/io5";
import { foo1 } from '../contants';

function Footer() {
  // console.log(foo1)
  return (
    <>
    <div className='w-screen relative'>
      <img src={footer} alt="img" className='w-full sm:h-[400px]  ' />
       
       <div className='grid sm:grid-cols-3 text-white absolute sm:top-20 left-0 w-full text-center '>
            
            <div className='flex flex-col items-center justify-center sm:gap-2'>
               <div className='flex flex-row items-center '>
              <IoLocation  className='w-[25px] h-[30px] text-[#A5886D]'/>
              <p className="w-[283px]  text-center text-white sm:text-[14px] sm:font-bold font-['Monda'] leading-none text hover:text-[#A5886D]">12 Rue de la Fontaine, Vannes, 56000, France</p>
               </div>

                 {foo1.map((info, idx) => (
                  <div key={idx} className="flex flex-row gap-5 items-left  justify-start relative sm:top-20 sm:w-[200px] sm:h-[20px] text-[#A5886D] text-[14px] font-normal font-['Monda'] leading-none cursor-pointer text hover:text-white">
                   <p className=''>{info.day}</p>
                   <p className=''>{info.time}</p>
                   </div>
                    ))}
               
              
            </div>


            <div>2akjfhakfjakf</div>
            <div>3kajfhkjfakdfjadkfj</div>
       </div>
    </div>
    </>
  )
}

export default Footer