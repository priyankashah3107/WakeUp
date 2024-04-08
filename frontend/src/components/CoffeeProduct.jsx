import React from 'react'
import { Product, underLine } from '../assets'
function CoffeeProduct() {
  return (
    <> 
      <div className=" relative bg-[#232323] sm:w-screen w-screen">
          <img src={Product} alt="img" className='sm:w-screen sm:h-[300px] sm:mt-32  '/>

          <div className='absolute sm:top-0 top-7 sm:left-80  text-white justify-center text-center items-center sm:p-10  '>
              <h3 className="text-[#A5886D] text-[39px] font-bold font-['Monda'] leading-[48px]">Coffee Products</h3>
              <img src={underLine} alt="img" className='mx-auto sm:mt-2 mt-2' />
              <p className="text-center text-white sm:text-xl text-base font-normal font-['Monda'] leading-normal sm:ml-5 ml-7 sm:mt-6 mt-2">Here you will discover a tempting array of coffee-related delights to satisfy your caffeine cravings.</p> 

              <div className="sm:w-[202px] w-[200px] sm:h-11 h-11 px-8 py-2.5 bg-gradient-to-b from-[#A5886D] to-stone-400 rounded-tl-[150px] rounded-br-[150px] justify-center items-center inline-flex mt-5">
                  <button className="text-center text-white text-base font-bold font-['Monda'] leading-normal">Discover Products</button>
                  </div>

            </div>
      </div>  
    </> 
  )
}

export default CoffeeProduct