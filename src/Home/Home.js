import React from 'react'
import background from "../Images/4.png"
import Controller from "../Images/1.png"
import Power from "../Images/2.png"
import Headphone from "../Images/3.png"
import "./Home.css"

function Home() {
    const pages = 
    [{
      index: 1,
      src:Controller
      
    }
    ,{
      index: 2,
      src:Power      
    }
    ,{
      index: 3,
      src:Headphone
      
    }]
  return (
    <div>
      <img className='background' src={background} />
      {/* <img src={pages[0].src} /> */}

      {/* {pages.map((page)=>(
        <img className='images' src={page.src}/>
      ))} */}
    </div>
  )
}

export default Home
