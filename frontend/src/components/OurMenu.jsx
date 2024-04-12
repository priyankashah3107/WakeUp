import React from 'react'
import { underLine } from '../assets'
import { menus } from '../contants'

function OurMenu() {
  // console.log(menus)
  return (
     <> 
      <div className='text-white w-full sm:h-[943px] px-36 py-20 bg-neutral-900 flex-col sm:mt-4 md:mt-5 mt-28   inline-flex '>

        <div className='items'>
            
             <div className="">

               <h2 className="text-[#A5886D] sm:text-[44px] font-bold font-['Monda'] md:leading-[48px] leading-48 md:text-[38px] text-[24px]  text-center">Our Menu</h2>
               
               <img src={underLine} alt="underLine" className='sm:ml-96 sm:w-96 ml-20 '/>

               <p className=" text-center text-stone-300 text-base font-normal font-['Monda'] leading-normal mt-5 sm:text-xl">Our menu showcases a diverse selection of sushi creations, expertly crafted by our skilled sushi chefs.</p>

              </div>  
               
               <div className='grid grid-cols-2 items-center sm:m-24 m-24 sm:-mr-32 -ml-1 gap-8  '>
                   {menus.map(data => (
                       <div className='grid sm:grid-cols-2 sm:gap-4  ' key={data.id} >
                         <div className='flex sm:flex-row flex-col p-4 sm:m-4 sm:gap-4 sm:ml-10 ml-10 sm:mt-0 mt-10 '>
                          <img src={data.src} alt="images" className="sm:size-[132px] size-[102px] flex" />
                            <div className='text-center flex flex-col justify-center'>

                            <h4 className="text-[#A5886D] sm:text-[31px] text-[24px] font-semibold font-['Monda'] leading-10">{data.title}</h4>

                           <p className="text-stone-300 text-base font-normal font-['Monda'] leading-loose">{data.paise}</p>
                            </div>
                           
                          </div>     
                       </div>
                   ))}
               </div>
              
        </div>
      </div>
     </>
  )
}

export default OurMenu