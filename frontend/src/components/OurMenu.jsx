import React from 'react'
import { underLine } from '../assets'
import { menus } from '../contants'

function OurMenu() {
  console.log(menus)
  return (
     <> 
      <div className='text-white w-full sm:h-[943px] px-36 py-20 bg-neutral-900 flex-col sm:mt-4 mt-5   inline-flex '>

        <div className='items'>
            
             <div className="">

               <h2 className="text-[#A5886D] sm:text-[44px] font-bold font-['Monda'] leading-[48px] text-[38px]  text-center">Our Menu</h2>
               <img src={underLine} alt="underLine" className='sm:ml-96 sm:w-96 ml-20 '/>

               <p className=" text-center text-stone-300 text-base font-normal font-['Monda'] leading-normal mt-5 sm:text-xl">Our menu showcases a diverse selection of sushi creations, expertly crafted by our skilled sushi chefs.</p>

              </div>  
               
                {menus.map(data => (
                    
                 <div className='flex justify-around '>
                   
                   <div className=' flex ' key={data.id} >
                     <div className='flex'>
                     <img src={data.src} alt="imagses" />
                     <h1>{data.title}</h1>
                     <p>{data.paise}</p>
                     </div>
                    

                   </div>


                 </div>  

                ))}
              
        </div>
      </div>
     </>
  )
}

export default OurMenu