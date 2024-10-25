import React from 'react';
import bolg1 from "../../assets/SVG/blog_img/frame-16-2fd8cb53.jpg";
import bolg2 from "../../assets/SVG/blog_img/store-5-3c2c8f0a.jpg"
import bolg3 from "../../assets/SVG/blog_img/frame-2-d688b801.jpg";

const LatestPost = () => {
  return (
    <div className='container m-auto'>
      <div className='my-10 text-center uppercase font-semibold tracking-widest text-[#423c3a] text-xl '>Latest Posts</div>
      <div className='flex mb-32'>
        <div className='max-w-[33rem] flex flex-col gap-5 mx-10'>
          <img src={bolg1} className='max-w-[450px] h-[32rem] object-cover' />
          <div className='max-w-[450px] flex flex-col gap-2'>
            <span className='text-xs tracking-widest text-[#423c3ab7] font-semibold'>FEEL GOOD</span>
            <h4 className='font-Playfair-Display font-light text-xl'>Gallery of dogs wearing glasses</h4>
            <p className='font-medium font-Raleway text-[#423c3a]'>From classic aviators to colorful frames, dogs of all breeds and sizes
              are embracing this fun and playful trend, making a bold fashion statement that's impossible to ignore.</p>
            <a className='text-[#423c3a] text-[12px]  font-bold underline underline-offset-4'>READ MORE</a>
          </div>
        </div>

        <div className='max-w-[33%] flex flex-col gap-5 mx-10'>
          <img src={bolg2} className='max-w-[450px] h-[32rem] object-cover' />
          <div className='max-w-[450px] flex flex-col gap-2'>
            <span className='text-xs tracking-widest text-[#423c3ab7] font-semibold'>PROPER EYECARE</span>
            <h4 className='font-Playfair-Display font-light text-xl'>How to take care of your eyes as a teenager</h4>
            <p className='font-medium font-Raleway text-[#423c3a]'>From getting enough sleep to eating a balanced diet, our experts weigh
              in on a range of healthy habits that can help prevent eye strain, maintain healthy vision, and reduce the risk of long-term eye problems.</p>
            <a className='text-[#423c3a] text-[12px]  font-bold underline underline-offset-4'>READ MORE</a>
          </div>
        </div>

        <div className='max-w-[33%] flex flex-col gap-5 mx-10'>
          <img src={bolg3} className='max-w-[450px] h-[32rem] object-cover' />
          <div className='max-w-[450px] flex flex-col gap-2'>
            <span className='text-xs tracking-widest text-[#423c3ab7] font-semibold'>LEGACY</span>
            <h4 className='font-Playfair-Display font-light text-xl'>The eye doctor who traveled across Asia</h4>
            <p className='font-medium font-Raleway text-[#423c3a]'>across Asia to provide much-needed eye care to young children.</p>
            <a className='text-[#423c3a] text-[12px]  font-bold underline underline-offset-4'>READ MORE</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestPost