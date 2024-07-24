import React, { useState } from 'react'
import { allProductData } from '../../data/productData'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProgressiveImage from 'react-progressive-graceful-image';
import "./featuredProducts.css"

const FeaturedProducts = () => {
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
  }
  return (
    <section className='container m-auto'>
      <h3 className='tracking-widest font-bold text-2xl text-center'>NEW ARRIVALS</h3>
      <Slider {...productSettings}>
        {featured.map((item, index) => (
          <div key={index} >
            <div className='m-10 text-center '>
              <ProgressiveImage src={item.images.main} placeholder={item.compressedImages.main}>
                {(src, loading) =>
                  <div className='featured-pro-img'>
                    <img src={src} alt={item.title} />
                  </div>}
              </ProgressiveImage>
              <div className='flex flex-col gap-2 hover:bg-[#f2efee] p-2'>
                <h3>{item.title}</h3>
                <p>{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  )
}

export default FeaturedProducts