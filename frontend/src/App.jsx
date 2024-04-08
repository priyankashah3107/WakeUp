import React, { useEffect } from 'react';
import styles from './style.js';
import { Button, CoffeeProduct, Footer, History, Home, LatestNews, Navbar, NewsLetter, OurMenu, QualityCoffee, States ,  StatesTwo} from './components'
import { Logo, Main } from './assets/index.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "aos/dist/aos.js";
import Carousel from './carousel/Carousel.jsx';
import  { slides, contentInfo}  from './data/carouselData.js';
import {stats, menus} from './contants/index.js'
function App() {
  
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: 'ease-in',
      delay: 100,
    });
  });

  return (
   <>
   <div className="bg-[#232323] w-full  overflow-hidden">
    
   <div>  
      <div><Navbar /></div>
      {/* <img src={Main} alt="IMG"  className='w-full h-full img '/>  */}
      <Carousel data={slides} />
     </div>
      
     {/* QualityCoffee  */}
     <div className='text-white'>
     <QualityCoffee  info={contentInfo}/>
     </div>

    <States  items={stats}/>
   
    <History />
    <OurMenu data={menus}/>
    <NewsLetter />
       
   </div>


   
   </>
  )
}

export default App
