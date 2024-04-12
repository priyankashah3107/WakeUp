import React, { useState } from 'react'
import "../Carousel/Carousel.css"

function Carousel({data}) {
  const[current, setCurrent] = useState(0);
  const  prevSlide = () => {
     setCurrent((prev) => prev === 0 ? data.length -1 : prev -1)
  }
  
   const nextSlide  = () => {
    setCurrent((prev) => prev === data.length -1 ? 0 : prev + 1)
  }

  console.log(data)
  return (
    <div className="carousell">
      <div className="carousel_Wrapper">

        {data.map((info, index) => (
          <div key={index} className={index == current ? "carouserl_Card carouserl_Card-active" : "carouserl_Card"}>
             <img src={info.img} alt="img" className='photo' 
              />
             <div className="card_overlay">
               <h4 className='card_title'>{info.head}</h4>
               <p className='card_para'>{info.para}</p>
             </div>
          </div>
        ))}

        <div className="carousel_arrow_left" onClick={prevSlide}>&lsaquo;</div>
        <div className="carousel_arrow_right" onClick={nextSlide}>&rsaquo;</div>

        <div className="carousel_pagination">
          {data.map((_, index) => (
             <div key={index}
             className={index == 1 ? "pagination_dot pagination_dot-active" : "pagination_dot"}>
               
             </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel