import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className=' m-auto text-center text-[#423C3A] py-8 '>
      <section className='flex py-8 flex-col gap-8 justify-center items-center'>
        <h1 className='tracking-[3px] uppercase text-[22px] font-black mt-10'>An Eye for Better Eyewear</h1>
        <p className='max-w-[600px] text-sm font-Raleway tracking-[.5px] leading-6 font-medium'>Our designs are carefully crafted to capture the latest fashion trends while ensuring maximum comfort and functionality.
          With a range of unique styles and color options, we are confident that our collection has something to suit every taste and personality.</p>
        <p className='max-w-[600px] text-sm font-Raleway tracking-[.5px] leading-6 font-medium'>Our frames are crafted with attention to detail, utilizing the latest materials and technology to ensure the highest quality products.
          Elevate your eyewear game with SAVANT frames.</p>
      </section>
      <section className='text-center flex justify-center'>
        <div style={{ margin: '30px' }} className='featured-img1'>
          <img src='../../../src/assets/img/first.png' className='w-[550px] brightness-105 contrast-[105%]  outline outline-2' />
        </div>
        <div className='flex flex-col justify-end gap-9 m-6 text-start'>
          <h2 className='mb-8 tracking-[1px] text-3xl font-black'>About <span className='capitalize'>Us</span></h2>
          <p className='w-[360px] font-Raleway leading-6 text-[15px] font-medium'>SAVANT was born of a simple mission - to create high-quality, stylish glasses that would empower
            people to express themselves with confidence.</p>
          <p className='w-[360px] leading-6 text-[15px] font-Raleway font-medium'>Founded by a group of passionate designers and eyewear enthusiasts, we started our journey with a
            commitment to crafting frames that would stand the test of time, both in terms of durability and style.</p>
          <p className='w-[360px] leading-6 text-[15px] font-Raleway font-medium'>Today, we continue to build on that legacy by designing unique and trendsetting glasses that reflect the
            spirit and creativity of our brand. Join us as we continue to redefine eyewear fashion and bring our vision to life.</p>
          <div>
            <Link to='/products' className='bg-[#272525] px-4 py-3 hover:underline rounded font-semibold hover:bg-[#380c0f] text-white'>Browse Products</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About