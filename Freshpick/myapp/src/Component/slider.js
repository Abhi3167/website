import React from 'react'
import imgs from './112.jpg'
import imgs1 from './113.jpg'
import imgs2 from './114.jpg'
import './slider.css'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  }
  return <>
  
  <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
             <img src={imgs} alt="First slide" className='img' />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img src={imgs1} alt="First slide" className='img' />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img src={imgs2} alt="First slide" className='img' />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  </>
}

export default Slider;
