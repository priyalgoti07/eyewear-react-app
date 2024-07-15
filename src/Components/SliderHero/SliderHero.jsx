import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero1 from "../../assets/SVG/hero-1.jpg";
import hero2 from "../../assets/SVG/hero-2.jpg";
import hero3 from "../../assets/SVG/hero-3.jpg";
import hero4 from "../../assets/SVG/hero-4.jpg";
import hero5 from "../../assets/SVG/hero-5.jpg";
import hero6 from "../../assets/SVG/hero-6.jpg";
import hero7 from "../../assets/SVG/hero-7.jpg";
import "./sliderhero.css"


const SliderHero = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className='slider-container'>
            <Slider {...settings}>
                <div className='carousel-slide'>
                    <img src={hero1} alt="Slide 1" className="carousel-image" />
                </div>
                <div className='carousel-slide'>
                    <img src={hero2} alt="Slide 2" className="carousel-image" />
                </div>
                <div className='carousel-slide'>
                    <img src={hero3} alt="Slide 3" className="carousel-image" />
                </div>
                <div className='carousel-slide'>
                    <img src={hero4} alt="Slide 4" className="carousel-image" />
                </div>
                <div className='carousel-slide'>
                    <img src={hero5} alt="Slide 5" className="carousel-image" />
                </div>
                <div className='carousel-slide'>
                    <img src={hero6} alt="Slide 6" className="carousel-image" />
                </div >
                <div className='carousel-slide'>
                    <img src={hero7} alt="Slide 7" className="carousel-image"/>
                </div>
            </Slider>
        </div>

    )
}

export default SliderHero