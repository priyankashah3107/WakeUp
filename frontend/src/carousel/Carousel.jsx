// import React, { useState } from 'react';
// import "../carousel/Carousel.css";
// import { FaChevronLeft } from "react-icons/fa6";
// import { FaChevronRight } from "react-icons/fa6";
// import { slides} from '../data/carouselData.js';

// function Carousel({ data }) {
  
//  const [currentSlide, setCurrentSlide] = useState(0)

//  const nextSlide = () => {
//   console.log("Next slide clicked");

//    setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1)
//  }

//  const prevSlide = () => {
//   console.log("Previous slide clicked");

//    setCurrentSlide(currentSlide === 0 ? data.length -1 : currentSlide -1)
//  }
//   // console.log(data);
//   return (
//     <div className='car flex'>

//       {data.map((slide, index) => (
        
//         <div key={slide.id} className="carousel-item">
          
     
//           <img src={slide.src} alt={slide.alt} className={`${currentSlide === index ? "slide" : "slide-hidden"} h-screen w-screen flex justify-center items-center`} />

//           <div className={`${currentSlide === index ? "carousel-content" : 'carousel-content'}  items-center flex  flex-col justify-between`} >
//           <FaChevronLeft  className='text-white arrow arrow-left -ml-96 ' 
//           onClick={prevSlide}/>
//             <h2>{slide.head}</h2>
//             <p>{slide.desc}</p>
            
//             <button>Learn More</button>
//             <FaChevronRight  className='arrow arrow-right -mr-96' 
//             onClick={nextSlide}/>
           
//           </div>
          
//           <span className="indicators">
//            {data.map((_, idx) => (
//              <button key={idx} onClick={() => setCurrentSlide(idx)} className={`${currentSlide === idx ? "indi active" : "indi"}`}> 
//               </button>
//             ))}
//           </span>

//         </div>
//       ))}
//     </div>
//   );
// }

// export default Carousel;



import React, { useState } from 'react';
import "../carousel/Carousel.css";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight }  from "react-icons/fa6";
import { Diamond } from '../assets';
import { Button } from '../components';

function Carousel({ data }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    console.log("Next slide clicked");
    setCurrentSlide((prevSlide) => (prevSlide === data.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    console.log("Prev slide clicked");
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? data.length - 1 : prevSlide - 1));
  };

  return (
    <div className="carousel">  

      {data.map((slide, index) => (
        <div key={slide.id} className={`carousel-item ${currentSlide === index ? 'active' : ''}`}>
          <img src={slide.src} alt={slide.alt} className="h-screen w-screen flex justify-center items-center" />

          <div className={`carousel-content flex flex-col justify-between items-center`}>
            <FaChevronLeft className="text-white arrow arrow-left md:-ml-96 -ml-12 size-7 cursor-pointer" onClick={prevSlide}  />  
            
            <h2  className="">{slide.head}</h2>
            <p className='md:text-3xl'>{slide.desc}</p>

            {/* <button>Learn More</button> */}
          {/* <Button value="Read More" /> */}

          <div className='outerDiv w-[180px] h-[35px]'>
            <button className='butt'>Read More</button>
          </div>

            <FaChevronRight className="arrow arrow-right md:-mr-96 -mr-12 h-7 w-7 cursor-pointer" onClick={nextSlide} />
          </div>
          <span className="indicators ">
            {data.map((_, idx) => (
              <button key={idx} onClick={() => setCurrentSlide(idx)} className={`${currentSlide === idx ? "indi active" : "indi"} pri`}> 
              </button>
            ))}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Carousel;


