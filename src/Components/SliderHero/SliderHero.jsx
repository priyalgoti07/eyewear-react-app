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


const SliderHero = () => {
    const Arrow = ({ className, style, onClick, direction }) => (
        <div
            className={className}
            style={{ ...style, display: 'block', background: direction === 'next' ? 'red' : 'green' }}
            onClick={onClick}
        />
    );
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <Arrow direction="next" />,
        prevArrow: <Arrow direction="prev" />
    };
    return (
        <Slider {...settings}>
            {/* Add your slide content here */}
            <div>
                <img src={hero1} alt="Slide 1" />
            </div>
            <div>
                <img src={hero2} alt="Slide 2" />
            </div>
            <div>
                <img src={hero3} alt="Slide 3" />
            </div>
            <div>
                <img src={hero4} alt="Slide 4" />
            </div>
            <div>
                <img src={hero5} alt="Slide 5" />
            </div>
            <div>
                <img src={hero6} alt="Slide 6" />
            </div>
            <div>
                <img src={hero7} alt="Slide 7" />
            </div>
        </Slider>
    )
}

export default SliderHero