import React from 'react';
import styles from './style.js';
import { Button, CoffeeProduct, Footer, History, Home, LatestNews, Navbar, NewsLetter, OurMenu, QualityCoffee, States ,  StatesTwo} from './components'
function App() {
 

  return (
   <>
   <div className="bg-[#232323] w-full overflow-hidden">

   <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} ${styles.textWhite}`}><Navbar/></div>
      </div>


   </div>
   
   </>
  )
}

export default App
