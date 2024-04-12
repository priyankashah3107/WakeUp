import React from 'react'
import { Product, underLine } from '../assets'
function CoffeeProduct() {
  return (
    <> 
      <div className=" relative bg-[#232323] sm:w-screen w-screen h-[340px] mt-10">
          <img src={Product} alt="img" className='sm:w-screen sm:h-[300px] h-[250px] sm:mt-32  '/>

          <div className='absolute sm:top-0 top-7 sm:left-80  text-white justify-center text-center items-center sm:p-10  '>
              <h3 className="text-[#A5886D] md:text-[39px] text-[30px] font-bold font-['Monda'] leading-[48px]">Coffee Products</h3>
              <img src={underLine} alt="img" className='mx-auto sm:mt-2 mt-2 ' />
              <p className="text-center text-white sm:text-xl text-[10px] text-base font-normal font-['Monda'] leading-normal sm:ml-5 ml-7 sm:mt-6 mt-2">Here you will discover a tempting array of coffee-related delights to satisfy your caffeine cravings.</p> 

              <div className="outerDiv mt-10">
                <div className="butt">Discover Products</div>
              </div>

            </div>
      </div>  
    </> 
  )
}

export default CoffeeProduct