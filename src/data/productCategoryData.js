import imgAllProducts from '../assets/img/unsplash/frame-9.jpg';
import imgSunglasses from '../assets/img/unsplash/sun-1.jpg';
import imgEyeglasses from '../assets/img/unsplash/frame-7.jpg';

import imgCompressedAllProducts from '../assets/img/unsplash-compressed/frame-9.jpg';
import imgCompressedSunglasses from '../assets/img/unsplash-compressed/sun-1.jpg';
import imgCompressedEyeglasses from '../assets/img/unsplash-compressed/frame-7.jpg';

import { allProductData, sunglassesData, eyeglassesData } from './productData';

export const allProductsCategoryData = {
  documentTitle: 'COLLECTION | Shop all products - NETRAM Eyewear Store',
  banner: {
    title: 'All Products',
    description:
      'Featuring our iconic frames, this collection draws inspiration from the unique DNA of downtown living. The frames are designed to evoke the energy, creativity, and excitement that are synonymous with urban life, while also offering the comfort and functionality',
    img: imgAllProducts,
    imgCompressed: imgCompressedAllProducts,
    imgAlt: 'Female model wearing glasses',
  },
  products: allProductData,
};

export const eyeglassesCategoryData = {
  documentTitle: 'OPTICAL | Trendy Frames & Styles - NETRAM Eyewear Store',
  banner: {
    title: 'Optical Shop',
    description:
      'Introducing our latest line of eyeglass frames, designed to elevate your everyday look with style and sophistication. From classic and timeless designs to bold and daring styles, these frames have something for every taste and preference. Explore the collection and find the perfect frames to reflect your personal style and elevate your eyewear game.',
    img: imgEyeglasses,
    imgCompressed: imgCompressedEyeglasses,
    imgAlt: 'Male model wearing glasses',
  },
  products: eyeglassesData,
};

export const sunglassesCategoryData = {
  documentTitle: 'SUNGLASSES | Trendy Frames & Styles - NETRAM Eyewear Store',
  banner: {
    title: 'Sunnies Store',
    description:
      "Our latest line of sunglasses is the perfect combination of fashion and function. Designed with both style and comfort in mind, these frames are the ultimate accessory for any adventure.  With high-quality materials and attention to detail, these frames are not only stylish but also durable enough to withstand whatever your day throws your way. So whether you're lounging by the pool or exploring the great outdoors, our sunglasses will keep you looking and feeling your best.",
    img: imgSunglasses,
    imgCompressed: imgCompressedSunglasses,
    imgAlt: 'Female model on boat wearing sunglasses',
  },
  products: sunglassesData,
};