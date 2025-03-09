import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './autoplay_slide.css';
function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ]
  };
  return (
    <div className="slider-container" style={{ width: "100%", margin: "auto" }}>
      <Slider {...settings}>
        <div>
          <button className="sliderbutton">Dairy,Bread & Eggs</button>
        </div>
        <div>
         <button className="sliderbutton">Fruits & Vegetables</button>
        </div>
        <div>
          <button className="sliderbutton">Cold Drinks & Juices</button>
        </div>
        <div>
          <button className="sliderbutton">Snacks and Munchies</button>
        </div>
        <div>
          <button className="sliderbutton ">Breakfast</button>
        </div>

        <div>
          <button className="sliderbutton">Sweet Tooth</button>
        </div>
        <div>
         <button className="sliderbutton">Bakery & Biscuits</button>
        </div>
        <div>
          <button className="sliderbutton">Tea &Coffee</button>
        </div>
        <div>
          <button className="sliderbutton">Atta, Rice & Dal</button>
        </div>
        <div>
          <button className="sliderbutton">Masala,Oil & More</button>
        </div>

        <div>
          <button className="sliderbutton">Sauces & Spreads</button>
        </div>
        
      </Slider>
    </div>
  );
}

export default AutoPlay;
