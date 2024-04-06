import React from 'react';
import "../carousel/Carousel.css";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

function Carousel({ data }) {
  // console.log(data);
  return (
    <div className='carousel '>
     <FaChevronLeft  className='text-white arrow arrow-left '/>

      {data.map((slide) => (
        <div key={slide.id} className="carousel-item">
          <img src={slide.src} alt={slide.alt} className='slide' />
          <div className="carousel-content">
            <h2>{slide.head}</h2>
            <p>{slide.desc}</p>
            <button>Learn More</button>
          </div>
          <FaChevronRight  className='arrow arrow-right'/>
          
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

