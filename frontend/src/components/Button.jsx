import React from 'react'

function Button({value}) {
  return (
   <>
    <div className="w-[274.93px] h-12 justify-start items-start inline-flex">
    <div className="w-[269px] px-[70px] bg-gradient-to-b from-stone-600 via-stone-400 to-stone-400 rounded-tl-[150px] rounded-br-[150px] justify-center items-center flex">
      
        <button className="text-white text-[25px] font-bold font-['Monda'] leading-loose">{value}</button>
    </div>

    
</div>
   </>
  )
}

export default Button