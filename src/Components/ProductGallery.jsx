import React, { useState } from 'react'
import { allProductsCategoryData } from '../data/productCategoryData';

const ProductGallery = () => {
    const [categoryData, setCategoryData] = useState(allProductsCategoryData);
    const [filteredProducts, setFilteredProducts] = useState(categoryData.products); // To store filtered products

    const handlefilter = (filterType) => {
        if (filterType === 'all') {
            setFilteredProducts(categoryData.products); // Show all products
        } else {
            const filtered = categoryData.products.filter((item) => {
                if (filterType === 'eyes') {
                    return item.type === 'frames'; // Filter by frames
                } else if (filterType === 'sun') {
                    return item.type === 'sunnies'; // Filter by sunglasses
                }
                return true; // Default to all products
            });
            setFilteredProducts(filtered); // Update state with filtered products
        }
    };
    console.log("filteredProducts----->",filteredProducts)
    return (
        <div className="w-full bg-gray-100">
            <div className="flex justify-between items-center h-[420px]">
                {/* Text section with 30% width */}
                <div className="w-[30%] p-8 text-center text-[#423c3a]">
                    <h1 className="text-4xl font-bold uppercase tracking-wide mb-4">{categoryData.banner.title}</h1>
                    <p className="text-sm font-medium font-CourierPrime tracking-wide">{categoryData.banner.description}</p>
                </div>


                {/* Image section with 70% width */}
                <div className="w-[70%] h-full featured-img1">
                    <img
                        src={categoryData.banner.img}
                        alt={categoryData.banner.title}
                        className="w-full h-full object-cover brightness-110 saturate-[80%] contrast-100"
                    />
                </div>
            </div>
            <div>
                <div><button onClick={() => handlefilter("all")}>All Product</button></div>
                <div><button onClick={() => handlefilter("eyes")}>Eyeglasses</button></div>
                <div><button onClick={() => handlefilter("sun")}>Sunglasse</button></div>

            </div>
        </div>
    )
}

export default ProductGallery