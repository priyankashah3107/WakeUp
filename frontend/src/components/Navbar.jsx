import React from 'react'
import { Logo } from '../assets'

function Navbar() {
  return (
    <>
   <div class="bg-gradient-to-r from-black to-black">
  <div class="bg-gradient-to-r from-brown-700 to-brown-200">
      
    <nav>
       {/* Logo section  */}
    <div className='w-20 h-20'>
      <img src={Logo} alt="logo" className="w-20 h-20"/>
    </div>
    </nav>
     
    

  </div>
</div>
    </>
  )
}

export default Navbar