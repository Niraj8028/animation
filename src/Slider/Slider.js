import React from 'react'
import "./Slider.css"
import background from "../Images/4.png"
import Controller from "../Images/3.png"
import Power from "../Images/2.png"
import Headphone from "../Images/1.png"
import mesh from "../Images/6.png"
import blank from "../Images/7.png"
import Mesh from "../Images/5.png"
import Power1 from "../Images/12.png"
import Headphone1 from "../Images/11.png"
import Controller1 from "../Images/13.png"

const colors = [Controller,blank, Power,blank,Headphone,blank,Controller,blank,Power,blank];
const colors1 = [blank,Controller1,blank, Power1,blank, Headphone1,blank,Controller1,blank,Power1];
const delay = 2500;

function Slider() {
  const [index, setIndex] = React.useState(0);
  // const [index1, setIndex1] = React.useState(0);

  React.useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      2500
    );
    return () => { };
  }, [index]);

  // React.useEffect(() => {
  //   setTimeout(
  //     () =>
  //       setIndex1((prevIndex) =>
  //         prevIndex === colors1.length - 1 ? 0 : prevIndex + 1
  //       ),
  //     delay
  //   );
  //   return () => { };
  // }, [index1]);

  return (
    <div>
      <img className='back' src={background} />
        <img className='left-mesh' src={mesh} />
        <img className='right-mesh' src={mesh} />
      <div className="slideshow">
        
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

      <div className='slideshow1'>
        <div
          className="slideshowSlider1"

          style={{ transform: `translate3d(${-index * 34}%, 0, 0)` }}
        >
          {colors1.map((backgroundColor, index) => (
            <img
              className="slide1"
              key={index}
              src={backgroundColor}
            />
          ))}
        </div>
      </div>
    </div>

  )
}
export default Slider;