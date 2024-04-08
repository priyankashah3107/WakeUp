import React from 'react'
import { underLine } from '../assets'

function LatestNews() {
  return (
    <>
    <div className='text-white w-screen sm:h-[800px] h-[500px] sm:mt-44 mt-36'>

        <div className=' flex flex-col justify-center text-center items-center'>

          <h1 className=" text-[#A5886D] text-[31px] font-bold font-['Monda'] leading-10">Latest News</h1>
           <img src={underLine} alt="img" className='w-[302.56px] h-[15px] '  />
        </div>
        
        <div className="grid grid-cols-3 justify-center text-center sm:mt-28">


          <div className='sm:w-[291px] sm:h-[367px]  h-[367px] w-[291px] border-2 relative -z-3  border-[#A5886D] justify-center items-center text-center sm:top-10 top-10  sm:left-60 left-48 gap-4'> 
            outer div 

            <div className='sm:w-[291px] sm:h-[367px] h-[367px] w-[291px] border-2 sm:z-44 relative border-[#A5886D] sm:top-0 top-0  sm:right-6 right-6'>inner Div</div>
          </div>


          {/* <div>2</div>
          <div>3</div> */}
        </div>

    </div>
    </>
  )
}

export default LatestNews