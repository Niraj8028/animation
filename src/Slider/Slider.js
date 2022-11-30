import React,{useEffect,useState} from 'react'
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

// array of images
const images = [blank,Controller,blank, Power,blank,Headphone,blank,Controller,blank,Power,blank];
// array of svgs
const images1 = [blank,blank,Controller1,blank, Power1,blank, Headphone1,blank,Controller1,blank,Power1];

const delay = 2000;

function Slider() {
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(0);

  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length-1 ? 0 : prevIndex + 1
        ),
      2000
    );
    
  }, [index]);

  useEffect(() => {
    setTimeout(
      () =>
        setIndex1((prevIndex) =>
          prevIndex === images1.length - 1 ? 0 : prevIndex + 1
        ),
      2000
    );
    return () => { };
  }, [index1]);

  return (
    <div>
        <img className='mobile' src={background} />
        <img className='left-mesh' src={mesh} />
        <img className='right-mesh' src={mesh} />
        
        <div className="slideshow">       
          <div
          className="slideshowSlider"      
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
          {images.map((image, index) => (
            <img
              className="slide"
              key={index}
              src={image}
            />
          ))}
          </div>
        </div>

      <div className='slideshow1'>
        <div
          className="slideshowSlider1"
          style={{ transform: `translate3d(${-index * 33}%, 0, 0)` }}>
          {images1.map((image, index1) => (
            <img
              className="slide1"
              key={index1}
              src={image}
            />
          ))}
        </div>
      </div>
    </div>

  )
}
export default Slider;