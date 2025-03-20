import React from 'react'
import img1 from './image/aimg001.jpg'

import img3 from './image/aimg003.jpg'
import img4 from './image/aimg004.jpg'
import img5 from './image/aimg005.jpg'
import img6 from './image/aimg006.jpg'


import img9 from './image/aimg009.png'
import img10 from './image/aimg010.png'
import img11 from './image/aimg011.png'
import img12 from './image/aimg012.png'
import './hero.css'
const Hero = () => {
  return <>
 <div className='laptop '>
 <div> <img src={img1} alt="" style= {{width: '100%'}} className="px-5"/></div>

<div className="container">
 <div className="row"   >
     <div className="col-md-3">
  <img src={img4} alt="" className="img-fluid" />
     </div>
     <div className="col-md-3">
         <img src={img3} alt="" className="img-fluid"/>
     </div>
     <div className="col-md-3">
         <img src={img5} alt="" className="img-fluid"/>
     </div>
 </div>
</div>

 </div>
<div className="container">
 <div className="row mt-3">
    <div className='image_header'>Snacks & Drinks</div>
     <div className="col d-flex justify-content-around">
         <img src={img10} alt=""  height="200px" className='image-section'/>
         <img src={img9} alt="" height="200px" className='image-section'/>
         <img src={img11} alt="" height="200px"className='image-section'/>
         <img src={img12} alt="" height="200px"className='image-section'/>
       
     </div>
     <div className="col d-flex justify-content-around">
         <img src={img10} alt=""  height="200px" className='image-section'/>
         <img src={img9} alt="" height="200px" className='image-section'/>
         <img src={img11} alt="" height="200px"className='image-section'/>
         <img src={img12} alt="" height="200px"className='image-section'/>
       
     </div>
 </div>
</div>
  
  </>
}

export default Hero
