import React from 'react';
import { Logo, Diamond } from '../assets';

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

function Navbar() {
  return (
    <>
      <div className="bg-gradient-to-r from-black to-black ">
        <div className="bg-gradient-to-r from-brown-700 to-brown-200 container">

          <nav className="flex text-white items-center justify-between ml-16">
            {/* Logo section */}
            <div className="w-20 h-20 mt-4">
              <a href="/">
                <img src={Logo} alt="logo" className="w-20 h-20" />
              </a>
            </div>

            
            {/* Link Section */}
            <div className="ml-4">
              <ul className="flex items-center space-x-4">
                {Menus.map((data, index) => (
                  <li key={index}>
                    <a href={data.link} className="flex items-center space-x-2">
                    {data.icon && <img src={data.icon} alt="icon" className="w-4 h-4" />}
                      <span>{data.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
