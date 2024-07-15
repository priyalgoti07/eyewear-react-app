import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero7 from "../../assets/SVG/hero-1.jpg";
import hero6 from "../../assets/SVG/hero-2.jpg";
import hero3 from "../../assets/SVG/hero-3.jpg";
import hero1 from "../../assets/SVG/hero-4.jpg";
import hero4 from "../../assets/SVG/hero-5.jpg";
import hero5 from "../../assets/SVG/hero-6.jpg";
import hero2 from "../../assets/SVG/hero-7.jpg";
import "./sliderhero.css"


const SliderHero = () => {
    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} custom-arrow next-arrow`}
                // style={{ ...style, display: 'block' }}
                onClick={onClick}
            >
                <span className="arrow">›</span>
            </div>
        );
    };

    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} custom-arrow prev-arrow`}
                // style={{ ...style, display: 'block' }}
                onClick={onClick}
            >
                <span className="arrow">‹</span>
            </div>
        );
    };

    var settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        fade: true,
        infinite: true,
    };
    return (
        <div className='slider-container'>
            <Slider {...settings}>
                <div className='carousel-slide'>
                    <img src={hero1} alt="Slide 1" className="carousel-image" />
                    <div className='main-container'>
                        <div className='inner-content'>
                            <h3 className='heading-slider'>SOLARI</h3>
                            <p className='para-content'>Based in the heart of Los Angeles, this eyewear brand is on a mission to create durable and stylish sunglasses that are
                                environmentally friendly. Each pair is handmade from plant-based cellulose acetate, ensuring a sleek and sustainable accessory for any outfit.</p>
                        </div>
                        <div className='inner-content-two'>
                            <p className='shope-btn' ><a href='/cart'>SHOP NOW</a></p>
                        </div>
                    </div>
                </div>
                <div className='carousel-slide'>
                    <img src={hero2} alt="Slide 2" className="carousel-image" />
                    <div className='main-container'>
                        <div className='inner-content'>
                            <h3 className='heading-slider'>AMORA</h3>
                            <p className='para-content'>Hailing from New York City, this modern eyewear brand is dedicated to crafting handmade unisex sunglasses from eco-friendly plant-based
                                cellulose acetate. With a focus on durability and sustainability, their eyewear is designed to last and make a statement.</p>
                        </div>
                        <div className='inner-content-two'>
                            <p className='shope-btn' ><a href='/cart'>SHOP NOW</a></p>
                        </div>
                    </div>
                </div>
                <div className='carousel-slide'>
                    <img src={hero3} alt="Slide 3" className="carousel-image" />
                    <div className='main-container'>
                        <div className='inner-content'>
                            <h3 className='heading-slider'>VALTI</h3>
                            <p className='para-content'>Based in Geneva, this brand merges world-class craftsmanship with advanced production techniques to create
                                small-batch statement pieces that push eyewear aesthetics into the future while paying homage to the past
                            </p>
                        </div>
                        <div className='inner-content-two'>
                            <p className='shope-btn' ><a href='/cart'>SHOP NOW</a></p>
                        </div>
                    </div>
                </div>
                <div className='carousel-slide'>
                    <img src={hero4} alt="Slide 4" className="carousel-image" />
                    <div className='main-container'>
                        <div className='inner-content'>
                            <h3 className='heading-slider'>AVARA</h3>
                            <p className='para-content'>This modern eyewear concept hails from London and produces handmade unisex sunglasses crafted from eco-friendly plant-based
                                cellulose acetate. Their focus on durability and sustainability ensures that each pair of sunglasses is designed to last.</p>
                        </div>
                        <div className='inner-content-two'>
                            <p className='shope-btn' ><a href='/cart'>SHOP NOW</a></p>
                        </div>
                    </div>
                </div>
                <div className='carousel-slide'>
                    <img src={hero5} alt="Slide 5" className="carousel-image" />
                    <div className='main-container'>
                        <div className='inner-content'>
                            <h3 className='heading-slider'>CALDO</h3>
                            <p className='para-content'>This modern eyewear brand is based in Melbourne and produces handmade unisex sunglasses that are designed to last. Crafted
                                from eco-friendly plant-based cellulose acetate, their eyewear is both stylish and sustainable.</p>
                        </div>
                        <div className='inner-content-two'>
                            <p className='shope-btn' ><a href='/cart'>SHOP NOW</a></p>
                        </div>
                    </div>
                </div>
                <div className='carousel-slide'>
                    <img src={hero6} alt="Slide 6" className="carousel-image" />
                    <div className='main-container'>
                        <div className='inner-content'>
                            <h3 className='heading-slider'>HELIX</h3>
                            <p className='para-content'>From Barcelona comes a modern eyewear concept that focuses on crafting handmade unisex sunglasses. Their eyewear is designed to
                                last and crafted from eco-friendly plant-based cellulose acetate, making a statement while being responsible.</p>
                        </div>
                        <div className='inner-content-two'>
                            <p className='shope-btn' ><a href='/cart'>SHOP NOW</a></p>
                        </div>
                    </div>
                </div >
                <div className='carousel-slide'>
                    <img src={hero7} alt="Slide 7" className="carousel-image" />
                    <div className='main-container'>
                        <div className='inner-content'>
                            <h3 className='heading-slider'>Galla</h3>
                            <p className='para-content'>Berlin-based brand merges world-class craftsmanship with advanced production methods
                                to create small-batch statement eyewear that pushes the boundaries of style. Each piece pays homage to the past while looking towards the future.</p>
                        </div>
                        <div className='inner-content-two'>
                            <p className='shope-btn' ><a href='/cart'>SHOP NOW</a></p>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>

    )
}

export default SliderHero