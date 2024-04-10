import React from 'react'
import "./App.css"
import "./Carousel/Carousel.css"
import Carousel from './Carousel/Carousel'
import SlideData from './SlideData'
function App() {
  return (
    <>
       <div>
          <h1>Navbar</h1>
        <Carousel  data={SlideData}/>
       </div>
    </>
  )
}

export default App