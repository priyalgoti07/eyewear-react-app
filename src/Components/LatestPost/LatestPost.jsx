import React from 'react';
import bolg1 from "../../assets/SVG/blog_img/frame-16-2fd8cb53.jpg";
import  bolg2 from "../../assets/SVG/blog_img/store-5-3c2c8f0a.jpg"
import blog3 from "../../assets/SVG/blog_img/frame-2-d688b801.jpg";

const LatestPost = () => {
  return (
    <div className='container m-auto'>
      <div className='my-10 text-center uppercase font-semibold tracking-widest text-[#423c3a] text-xl'>Latest Posts</div>
      <div className='w-[33%]'>
        <img src={bolg1} className='' />
      </div>
    </div>
  )
}

export default LatestPost