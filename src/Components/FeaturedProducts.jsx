import React from 'react'
import {allProductData} from '../data/productData'
import Slider from 'react-slick';

const FeaturedProducts = () => {
    console.log("allProductData----------->",allProductData);

    const productSettings ={
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

    </Slider>
    </section>
  )
}

export default FeaturedProducts