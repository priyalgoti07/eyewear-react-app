import "./featuredProducts.css"
import Slider from 'react-slick';
import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick-theme.css";
import getCategory from '../../utils/getCategory';
import { allProductData } from '../../data/productData';
import ProgressiveImage from 'react-progressive-graceful-image';
import left from "../../assets/SVG/arrows/left-arrow-svgrepo-com.svg";
import right from "../../assets/SVG/arrows/right-arrow-svgrepo-com.svg";

const FeaturedProducts = () => {

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-arrow next-arrow" onClick={onClick}>
        <img src={right} />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-arrow prev-arrow" onClick={onClick}>
        <img src={left} />
      </div>
    );
  };

  const [featured] = useState([
    allProductData[11],
    allProductData[50],
    allProductData[75],
    allProductData[54],
    allProductData[23],
    allProductData[40],
  ])

  const productSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  return (
    <section className='container m-auto container-products'>
      <h3 className='tracking-widest font-bold text-2xl text-center'>NEW ARRIVALS</h3>
      <Slider {...productSettings}>
        {featured.map((item, index) => (
          <Link to={`/products/${getCategory(item.type)}/${item.id}`} key={item.id}>
            <div key={index} >
              <div className='m-5 text-center '>
                <ProgressiveImage src={item.images.main} placeholder={item.compressedImages.main}>
                  {(src, loading) =>
                    <div className='featured-pro-img'>
                      <img src={src} alt={item.title} />
                    </div>}
                </ProgressiveImage>
                <div className='flex flex-col gap-2 hover:bg-[#f2efee] p-2'>
                  <h3 className='text-lg font-semibold tracking-widest uppercase text-[#423c3a]'>{item.title}</h3>
                  <p>{item.price}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </section>
  )
}

export default FeaturedProducts