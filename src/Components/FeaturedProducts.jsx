import React, { useState } from 'react'
import { allProductData } from '../data/productData'
import Slider from 'react-slick';
import ProgressiveImage from 'react-progressive-graceful-image';

const FeaturedProducts = () => {
  const [featured] = useState([
    allProductData[11],
    // allProductData[50],
    // allProductData[75],
    // allProductData[54],
    // allProductData[23],
    // allProductData[40],
  ])

  const productSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  }
  return (
    <section className='container m-auto'>
      <h3 className='tracking-widest font-bold text-2xl text-center'>NEW ARRIVALS</h3>
      <Slider {...productSettings}>
        <div style={{ backgroundColor: "red", height: "200px" }}>
          {featured.map((item) => {
            console.log("item", item);
            <img/>
            // <div style={{ backgroundColor: "red" }}>
            //   <img src={item.images.main} style={{ maxWidth: "200px" }} />
            //   <h3 className="hero-item__title">{item.title}</h3>
            //   <p className="hero-item__details">{item.details}</p>
            // </div>
          }
          )}
        </div>
      </Slider>
    </section>
  )
}

export default FeaturedProducts