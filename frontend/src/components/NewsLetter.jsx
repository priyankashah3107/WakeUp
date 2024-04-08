import React from 'react'

function NewsLetter() {
  return (
     <> 

    {/* <div class="absolute  flex h-[full] w-screen flex-col text-white  sm:h-[930px]  bg-[#232323] ">

      <div className=''>
      <div class="relative top-24 -z-10 mt-20 h-72 w-[600px] border-2 border-[#A5886D] ">
        <div class="relative z-40 ml-10 mt-8 h-72 w-[600px] border-2 border-[#A5886D]">elemensts</div>
     </div>
      </div>
 
</div> */}

<div class="absolute flex h-full w-screen flex-col text-white sm:h-930px bg-[#232323] justify-center items-center">

  <div>
        <div className=" relative -z-3 sm:mt-20  sm:h-72 h-60 sm:w-[700px] w-[500px] border-2 border-[#A5886D] sm:top-20 top-28 sm:-left-10 -left-10">outer dive</div>

        <div className=" relative z-40 sm:h-72 h-60 sm:w-[700px] w-[500px] border-2 border-[#A5886D] sm:-top-44 -top-28  ">inner div</div>
  </div>

</div>

     </>
  )
}

export default NewsLetter