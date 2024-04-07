import React from 'react'
import { underLine, conte, content, Time} from '../assets'
import Button from './Button'
 
const data = [

]

function QualityCoffee({info}) {
  return (
     <> 
     <div>
         
         <div className="flex flex-col justify-center items-center mt-28">
           <h4 className="text-[#A5886D] text-[39px] font-bold font-['Monda'] leading-[48px]">#1 in Quality Coffee</h4>
           <img src={underLine}  alt="underline" className='w-56 mt-6' />

           <p className="w-[1111px] text-center text-white text-base font-normal font-['Monda'] leading-normal mb-4 mt-8">Our coffee connoisseurs have meticulously sourced beans from exotic locations, ensuring each sip takes you on a journey of flavors. The opulent ambiance of our café, adorned with plush furnishings and elegant décor, sets the stage for an unforgettable experience.</p>

         </div>
           
         <div className="grid sm:grid-cols-3">

              <div className='flex flex-col '>
                <img src={content} alt="img"  className="w-[295px] h-[261px]"/>
                 <h4>Welcome to Exquisite Beans</h4>
                 <p>Step into a world of indulgence as you savor the finest handcrafted brews from around the globe.</p>
                 <Button  value="Read More"/>
              </div>


              <div className='flex flex-col '>
                <img src={content} alt="img"  className="w-[295px] h-[261px]"/>
                 <h4>Welcome to Exquisite Beans</h4>
                 <p>Step into a world of indulgence as you savor the finest handcrafted brews from around the globe.</p>
                 <Button  value="Read More"/>
              </div>

              <div>
                <img src={Time} alt="timing" />
              </div>
          </div>  

     </div>
     </>
  )
}

export default QualityCoffee