import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero7 from "../../assets/SVG/slider_hero_img/hero-1.jpg";
import hero6 from "../../assets/SVG/slider_hero_img/hero-2.jpg";
import hero3 from "../../assets/SVG/slider_hero_img/hero-3.jpg";
import hero1 from "../../assets/SVG/slider_hero_img/hero-4.jpg";
import hero4 from "../../assets/SVG/slider_hero_img/hero-5.jpg";
import hero5 from "../../assets/SVG/slider_hero_img/hero-6.jpg";
import hero2 from "../../assets/SVG/slider_hero_img/hero-7.jpg";
import featured1 from "../../assets/SVG/featured_img/ey.jpg";
import featured2 from "../../assets/SVG/featured_img/ad-3-844acc41.jpg"
import "./sliderhero.css"
import { Link } from 'react-router-dom';


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
        const { className, onClick } = props;
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
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
    };
    return (
        <>
            <section className='slider-container'>
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
            </section>
            <section className='featured-coll container m-auto py-16 px-5 flex'>
                <div className='featured-coll__col-1 max-w-[584px] px-10 flex flex-col gap-6'>
                    <div className='flex flex-col gap-4'>
                        <h4 className='tracking-widest font-black text-xl'>AMORA</h4>
                        <p className='text-base text-[#423c3a]'>Crafted with care, each pair of Amora glasses is a unique statement piece that combines contemporary design with classic elegance.
                            The collection features a range of frames in various colors and styles, all made from high-quality materials that are built to last.</p>
                        <Link className='text-[#423c3a] tracking-widest text-sm font-semibold underline underline-offset-[5px]' to='#'>BROWSE AMORA</Link>
                    </div>
                    <div className='about-img1'>
                        <img src={featured1} className='brightness-110 saturate-[80%] contrast-100' />
                    </div>
                </div>
                <div className='featured-coll__col-2 flex flex-col justify-center gap-7'>
                    <div className='about-img1'>
                        <img src={featured2} className='brightness-105 contrast-[105%]  outline outline-2' />
                    </div>
                    <a className='shope-collection'>SEE THE COLLECTION</a>
                </div>
            </section>

        </>

    )
}

export default SliderHero