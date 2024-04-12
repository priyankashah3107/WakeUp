import React from 'react';
import { Time, underLine } from '../assets/index.js';
import { contentInfo } from '../data/carouselData.js'; 

function QualityCoffee() {
  return (
    <div>

      <div className="flex flex-col justify-center items-center mt-28">
                <h4 className="text-[#A5886D] md:text-[39px] text-[26px] font-bold font-['Monda'] leading-[48px]">#1 in Quality Coffee</h4>
           <img src={underLine}  alt="underline" className='md:w-56 md:mt-6 ' />

         <p className="md:w-[1111px] md:text-center ml-2 text-white text-base font-normal font-['Monda'] leading-normal mb-4 mt-8">Our coffee connoisseurs have meticulously sourced beans from exotic locations, ensuring each sip takes you on a journey of flavors. The opulent ambiance of our café, adorned with plush furnishings and elegant décor, sets the stage for an unforgettable experience.</p>

      </div>
      
      <div className="mt-10 flex justify-center sm:flex-row flex-col gap-24 ">

        <div className='grid sm:grid-cols-2 m-4  items-center  gap-24'>

          {contentInfo.map(info => (
            <div key={info.id} className='min-h-[100px] flex flex-col justify-center items-center text-center '>
              <img src={info.src} alt="img" className="md:w-[295px] md:h-[261px] w-[295px] "/>

              <h4 className="md:text-white text-primary text-xl font-bold font-['Monda'] leading-loose mt-2">{info.head}</h4>  
              <p className="w-[303px] text-white text-base font-normal font-['Monda'] leading-normal mt-2">{info.para}</p>
              {/* <Button  /> */}

              <div className='outerDiv leading-8 mt-5'>
                <button className='butt'>Read More</button>
              </div>

            </div> 

          ))}

        </div>
        
        <div>
           <img src={Time} alt="timing"  className=' md:-ml-10 ml-9'/>
         </div>

      </div>
    </div>
  )
}

export default QualityCoffee;
