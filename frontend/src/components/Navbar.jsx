import React, { useState } from 'react';
import { Logo, Diamond, close, menu } from '../assets';

const Menus = [
  {
    id: 1,
    name: "Home",
    link: "/",
    icon: null
  },
  {
    id: 2,
    name: "About",
    link: "/about",
    icon: Diamond
  },
  {
    id: 3,
    name: "Menus",
    link: "/menus",
    icon: Diamond
  },
  {
    id: 4,
    name: "Pages",
    link: "/pages",
    icon: Diamond
  },
  {
    id: 5,
    name: "Shop",
    link: "/shop",
    icon: Diamond
  },
  {
    id: 6,
    name: "Contact",
    link: "/contact",
    icon: Diamond
  }
];

// function Navbar() {
//   const [toggle, setToggle] = useState(false)
//   return (
//     <>
//       <div className="bg-gradient-to-r from-black to-black ">
//         <div className="bg-gradient-to-r from-brown-700 to-brown-200 container">

//           <nav className="flex items-center justify-between ml-16  text-center text-neutral-100 text-base font-normal font-['Monda'] leading-normal hover:text-white duration-200">
//             {/* Logo section */}
//             <div className="w-20 h-20 mt-4">
//               <a href="/">
//                 <img src={Logo} alt="logo" className="w-20 h-20" />
//               </a>
//             </div>

            
//             {/* Link Section */}
//             <div className="ml-10 ">
//               <ul className="hidden sm:flex   items-center space-x-4  ">
//                 {Menus.map((data, index) => (
//                   <li key={index}>
//                     <a href={data.link} className="flex items-center space-x-6">
//                     {data.icon && <img src={data.icon} alt="icon" className="w-4 h-4" />}
//                       <span>{data.name}</span>
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//              {/* mobile Design */}
//             <div className="sm:hidden flex flex-1 justify-center items-center">
//                  <img src={toggle ? close : menu} alt="img" 
//                  onClick={() => setToggle((prev) => !prev)} />

//                  <div className={`${toggle ? 'flex' : 'hidden'} p-20 text-center absolute top-20 right-20 mx-4 my-2 min-w-[140px] rounded-lg bg-black opacity-70 justify-between items-center`}>
                     
//                      <ul className='list-none justify-end  flex flex-col items-center 
//       flex-1 space-y-4'>
//                       {Menus.map((data, index) => (
//                         <li key={index} className={`cursor-pointer text-center text-neutral-100 text-base font-normal leading-normal ${index === Menus.length -1 ? 'mr-0': 'mr-1'}`}>
//                           <a href={data.link} className='flex items-center space-x-6'>
//                               <span>{data.name}</span>
//                           </a>
//                         </li>
//                       ))}
//                      </ul>
//                  </div>
//             </div>

//           </nav>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;







function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-r from-black to-black">
        <div className="bg-gradient-to-r from-brown-700 to-brown-200 container">
          <nav className="flex items-center justify-between ml-16 text-base font-['Monda']">
            {/* Logo section */}
            <div className=" mt-4">
              <a href="/">
                <img src={Logo} alt="logo" className="size-[52px] " />
              </a>
            </div>

            {/* Link Section (Desktop) */}
            <ul className="hidden sm:flex items-center space-x-4 text-white">
              {Menus.map((data, index) => (
                <li key={index}>
                  <a href={data.link} className="flex items-center space-x-6">
                    {data.icon && <img src={data.icon} alt="icon" className="w-4 h-4" />}
                    <span>{data.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Toggle */}
            <div className="sm:hidden flex flex-1 justify-center items-center">
              <img
                src={toggle ? close : menu}
                alt="menu"
                onClick={() => setToggle(!toggle)} 
                className='ml-44'
              />
            </div>
          </nav>

          {/* Mobile Menu (Conditional Rendering) */}
          {toggle && (
            <div className="p-20 text-center absolute top-20 right-20 mx-4 my-2 min-w-[140px] rounded-lg bg-black opacity-70 text-white z-10  justify-between items-center">
              <ul className="list-none justify-end flex flex-col items-center space-y-4">
                {Menus.map((data, index) => (
                  <li
                    key={index}
                    className={`cursor-pointer text-center text-base font-normal leading-normal ${
                      index === Menus.length - 1 ? '' : 'mr-1'
                    }`}
                  >
                    <a href={data.link} className="flex items-center space-x-6">
                      <span>{data.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
