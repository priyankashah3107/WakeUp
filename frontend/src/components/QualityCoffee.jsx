import React from 'react';
import { contentInfo } from '../data/carouselData.js'; 
import { Time, underLine } from '../assets/index.js';
import Button from './Button';

function QualityCoffee() {
  return (
    <div>

      <div className="flex flex-col justify-center items-center mt-28">
                <h4 className="text-[#A5886D] text-[39px] font-bold font-['Monda'] leading-[48px]">#1 in Quality Coffee</h4>
           <img src={underLine}  alt="underline" className='w-56 mt-6' />

         <p className="w-[1111px] text-center text-white text-base font-normal font-['Monda'] leading-normal mb-4 mt-8">Our coffee connoisseurs have meticulously sourced beans from exotic locations, ensuring each sip takes you on a journey of flavors. The opulent ambiance of our café, adorned with plush furnishings and elegant décor, sets the stage for an unforgettable experience.</p>

      </div>
      
      <div className="mt-10 flex justify-center sm:flex-row flex-col gap-24 ">

        <div className='grid sm:grid-cols-2 m-4  items-center  gap-24'>

          {contentInfo.map(info => (
            <div key={info.id} className='min-h-[100px] '>
              <img src={info.src} alt="img" className="w-[295px] h-[261px]"/>

              <h4 className="text-white text-xl font-bold font-['Monda'] leading-loose mt-2">{info.head}</h4>  
              <p className="w-[303px] text-white text-base font-normal font-['Monda'] leading-normal mt-2">{info.para}</p>
              {/* <Button  /> */}

              <div className="w-[147px] h-11 px-8 py-2.5 bg-gradient-to-b from-stone-600 to-stone-400 rounded-tl-[150px] rounded-br-[150px] justify-center items-center inline-flex mt-2 ">
    <button className="text-center text-white text-base font-bold font-['Monda'] leading-normal ">Read More</button>
      </div>

            </div>

          ))}

        </div>
        
        <div>
           <img src={Time} alt="timing"  className=' sm:-ml-10 ml-4'/>
         </div>

      </div>
    </div>
  )
}

export default QualityCoffee;
