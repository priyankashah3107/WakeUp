import React from 'react'
import { footer, logo2 } from '../assets'
import { IoLocation } from "react-icons/io5";
import { foo1,foo2 } from '../contants';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { twitter, linkedin, facebook, instagram } from '../assets';

function Footer() {
  // console.log(foo1)
  // console.log(foo2)
  return (
    <>
    <div className='w-screen sm:h-[400px] h-[600px] relative flex sm:flex-row flex-col sm:mt-0 mt-10 '>

      <img src={footer} alt="img" className='w-full sm:h-[400px] h-[600px]  ' />

       
       <div className='grid sm:grid-cols-3 text-white absolute sm:top-20 left-0 w-full text-center cursor-pointer '>
            
            <div className='flex flex-col items-center justify-center sm:gap-2 sm:mt-0 mt-5 cursor-pointer'>
               <div className='flex sm:flex-row  sm:items-center  items-center justify-center '>

              <IoLocation  className='w-[25px] h-[30px] text-[#A5886D] '/>
              <p className="w-[283px]  text-center text-white sm:text-[14px] sm:font-normal font-['Monda'] leading-none text hover:text-[#A5886D]">12 Rue de la Fontaine, Vannes, 56000, France</p>

               </div>

                 {foo1.map((info, idx) => (
                  <div key={idx} className="flex sm:flex-row  sm:gap-5 gap-5 items-left  justify-start relative sm:top-20 top-10 sm:w-[200px] sm:h-[20px] text-[#A5886D] text-[14px] font-normal font-['Monda'] leading-none cursor-pointer sm:text sm:hover:text-white text hover:text-white ">
                   <p className=''>{info.day}</p>
                   <p className=''>{info.time}</p>
                   </div>
                    ))}
               
              
            </div>

            <div className="flex flex-col cursor-pointer">

            <div className='flex flex-row justify-center text-center sm:gap-2 relative sm:top-0 top-20 '>
            <FaPhoneAlt  className=' w-[25px] h-[30px] text-[#A5886D] '/>

            <p className="w-[119px] h-[15px] text-center text-white text-[16px] font-normal font-['Monda'] leading-none sm:mt-1">+3333-444-99-11</p>
            </div>    

             <div className='relative sm:left-52 left-80 sm:top-20 top-24 cursor-pointer'> 
              <img src={logo2} alt="img" />
            </div>    
            </div>


             <div className='cursor-pointer sm:mr-20'>

                <div className='flex flex-row items-center justify-center sm:gap-2 relative sm:top-0 top-28 '> 
                <IoMailOutline className='w-[25px] h-[30px] text-[#A5886D] sm:mt-1 sm:mr-2' />
                 <p className="w-[119px] h-[15px] text-center text-white text-[16px] font-normal font-['Monda'] leading-none sm:mt-0 ">reservations@restaurant.com</p>
                </div>

                <div className='flex sm:flex-row items-center text-center justify-center sm:gap-6 gap-6 sm:ml-20 ml-10 sm:mt-8 relative sm:top-20 top-40'>
                   {foo2.map((info, index) => (
                  <div className="flex sm:flex-row" key={index}>
      
                   <img src={info.icon} alt="icons" className="w-[25px] h-[30px] "/>
     
                  </div>
                   ))}
                   </div>

             </div>
           
            <div>


            </div>
       </div>
    </div>
    </>
  )
}

export default Footer