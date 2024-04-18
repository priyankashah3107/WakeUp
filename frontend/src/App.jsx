import React, { useEffect } from 'react';
import styles from './style.js';
import { Button, CoffeeProduct, Footer, History, Home, LatestNews, Navbar, NewsLetter, OurMenu, QualityCoffee, States ,  StatesTwo} from './components'
import { Logo, Main } from './assets/index.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "aos/dist/aos.js";
import Carousel from './carousel/Carousel.jsx';
import  { slides, contentInfo}  from './data/carouselData.js';
import {stats, menus, latestNews} from './contants/index.js'
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
function App() {
  
  // useEffect(() => {
  //   AOS.init({
  //     offset: 100,
  //     duration: 700,
  //     easing: 'ease-in',
  //     delay: 100,
  //   });
  // });
 
  const user = false;
  // const user = true;

  return (

   <>
   <div className="bg-[#232323] w-full  overflow-hidden">


    {user ? (
      <> 
      <div className='bg-[#232323] w-full  overflow-hidden'>  
      <div><Navbar /></div>
      <Carousel data={slides} />
     </div>
      
     
     <div className='text-white'>
     <QualityCoffee  info={contentInfo}/></div>

     <States  items={stats}/>
   
   <History />
   <OurMenu data={menus}/>
   <NewsLetter />
   <CoffeeProduct />
   <LatestNews info={latestNews} />
   <StatesTwo />
   <Footer />
      </>
    ) : (<SignupPage />)}
    
    
    
    
       
   </div>


   
   </>
  )
}

export default App
