import React from 'react';
import "../carousel/Carousel.css";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

function Carousel({ data }) {
  // console.log(data);
  return (
    <div className='car '>

      {data.map((slide) => (
        
        <div key={slide.id} className="carousel-item">
          
     
          <img src={slide.src} alt={slide.alt} className='slide' />
          <div className="carousel-content items-center flex  flex-col justify-between">
          <FaChevronLeft  className='text-white arrow arrow-left -ml-96 '/>
            <h2>{slide.head}</h2>
            <p>{slide.desc}</p>
            
            <button>Learn More</button>
            <FaChevronRight  className='arrow arrow-right -mr-96'/>
           
          </div>
          {/* <FaChevronRight  className='arrow arrow-right'/> */}
          
          <span className='indicators'>
        {data.map((_, idx) => (
          <button key={idx} onClick={null} className='indi'></button>
        ))}
      </span>

        </div>
      ))}
    </div>
  );
}

export default Carousel;

