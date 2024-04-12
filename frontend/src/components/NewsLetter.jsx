import React from 'react'
import { underLine } from '../assets'
import { LuMail } from "react-icons/lu";

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

<div class=" flex sm:h-[500px] h-[380px]  sm:mt-44 md:w-screen w-[500px]  flex-col text-white sm:h-930px bg-[#232323] justify-center items-center">

  <div>
        <div className=" relative -z-3 sm:mt-20   sm:h-96  sm:w-[900px] w-[550px] border-2 border-[#A5886D] sm:top-20 top-28 sm:-left-10 -left-10">
                
            <div className='flex flex-col sm:text-center text-center sm:mt-12 mt-8'>
                
                     <div className='flex flex-col justify-center items-center'>
                      
                      <h3 className=" text-[#A5886D] md:text-[31px] font-bold font-['Monda'] md:leading-10 leading-5">Subscribe Our Newsletter</h3>
                       <img src={underLine} alt="underline" className="md:w-60 w-[150px] text-center sm:mt-2 mt-1" />

                       <p className="sm:w-[585px] w-[400px] h-14 sm:text-center  text-white sm:text-xl text-base font-normal font-['Monda'] leading-normal sm:mt-5 mt-5 sm:block hidden">Stay in the loop with the latest news, events, and exclusive offers from our <br  className='sm:hidden hidden '/>
                        exquisite luxury restaurant.</p>
                     </div>

                     
                     {/* details */}

                     <div className=' flex text-center items-center justify-center flex-col '>  
                           {/* Email */}
                           <div className='flex justify-center mt-5 gap-2  '>
                           <LuMail className='w-[26px] h-[26px] text-[#A5886D]' />
                             <input type="text" placeholder='Enter Your Email Address......' className="text-[#A5886D] text-[13px] font-normal font-['Monda'] leading-none bg-transparent border-[#A5886D] focus:outline-none " />
                           </div>
                            
                            <p className='border-b-2 sm:w-[500px] w-[280px] border-[#A5886D] sm:mt-2 mt-2'></p>
                             
                            {/* term and Con  */}

                            <div className='flex justify-center mt-5 gap-2 items-center text-center  '>

                            <input type="checkbox" className='w-[15px] h-[15px] bg-[#A5886D] ' />
                             <p className="text-white text-[15px] font-normal font-['Monda'] leading-none">I agree to the <span className='text-[#A5886D]'>Privacy Policy.</span></p>
                           </div>
                             {/* button */}
                              
                              <div className="outerDiv w-[130px] md:mt-10 mt-10 mb-5">
                                <div className="butt">Subscribe</div>
                              </div>
                     </div>
            </div>

        </div>

        <div className=" relative z-40 sm:h-96 h-72 sm:w-[900px] w-[500px] border-2 border-[#A5886D] sm:-top-56 -top-32 sm:-mt-10 -mt-6  "></div>
  </div>

</div>

     </>
  )
}

export default NewsLetter