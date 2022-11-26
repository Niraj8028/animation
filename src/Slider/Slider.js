import React from 'react'
import "./Slider.css"
import background from "../Images/4.png"
import Controller from "../Images/1.png"
import Power from "../Images/2.png"
import Headphone from "../Images/3.png"

const colors = [,,Controller, Power, Headphone, Controller, Power, Headphone];
const delay = 2000;

function Slider() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex !== colors.length +1 ? prevIndex+1 : 0
        ),
      delay
    );
    return () => {};
  }, [index]);

  return (
    <div className="slideshow">
        <img className='back' src={background}/>
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