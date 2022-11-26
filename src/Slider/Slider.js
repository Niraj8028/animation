import React from 'react'
import "./Slider.css"
import background from "../Images/4.png"
import Controller from "../Images/1.png"
import Power from "../Images/2.png"
import Headphone from "../Images/3.png"
import mesh from "../Images/6.png"
import blank from "../Images/7.png"
import Mesh from "../Images/5.png"
import Power1 from "../Images/11.png"
import Headphone1 from "../Images/12.png"
import Controller1 from "../Images/13.png"

const colors = [Controller1,Controller,Power1, Power, Headphone1,Headphone];
const delay = 2500;

function Slider() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length-1 ? 0 : prevIndex+1
        ),
      delay
    );
    return () => {};
  }, [index]);

  return (
    <div className="slideshow">
        <img className='back' src={background}/>
        <img className='left-mesh' src={mesh}/>
        <img className='right-mesh' src={mesh}/>
      <div
        className="slideshowSlider"
        
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <img
            className="slide"
            key={index}
            src={backgroundColor}
          />
        ))}
      </div>
      
    </div>
  )
}
export default Slider;