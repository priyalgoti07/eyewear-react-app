import React, { useState } from 'react';
import { allProductsCategoryData } from '../data/productCategoryData';

const ProductGallery = () => {
    const [categoryData, setCategoryData] = useState(allProductsCategoryData);
    const [filteredProducts, setFilteredProducts] = useState(categoryData.products); // To store filtered products
    const [activeFilter, setActiveFilter] = useState('all'); // For tracking the active filter
    const [selectedProduct, setSelectedProduct] = useState(null); // For tracking selected product (for the yellow border)

    const handleFilter = (filterType) => {
        setActiveFilter(filterType); // Set the active filter button
        if (filterType === 'all') {
            setFilteredProducts(categoryData.products); // Show all products
        } else {
            const filtered = categoryData.products.filter((item) => {
                if (filterType === 'eyes') {
                    return item.type === 'frames'; // Filter by eyeglasses (frames)
                } else if (filterType === 'sun') {
                    return item.type === 'sunnies'; // Filter by sunglasses
                }
                return true; // Default to all products
            });
            setFilteredProducts(filtered); // Update state with filtered products
        }
    };

    const handleProductSelect = (productId) => {
        setSelectedProduct(productId); // Set the selected product for the yellow border
    };
    console.log("filteredProducts",filteredProducts)
    return (
        <div className="w-full bg-gray-100">
            {/* Banner section */}
            <div className="flex flex-col md:flex-row justify-between items-center h-[420px] p-4 md:p-0">
                {/* Text section */}
                <div className="w-full md:w-[30%] p-8 text-center text-[#423c3a]">
                    <h1 className="text-4xl font-bold uppercase tracking-wide mb-4">{categoryData.banner.title}</h1>
                    <p className="text-sm font-medium tracking-wide">{categoryData.banner.description}</p>
                </div>

                {/* Image section */}
                <div className="w-full md:w-[70%] h-full featured-img1">
                    <img
                        src={categoryData.banner.img}
                        alt={categoryData.banner.title}
                        className="w-full h-full object-cover brightness-110 saturate-[80%] contrast-100"
                    />
                </div>
            </div>

            {/* Filter buttons */}
            <div className="my-6 flex justify-center space-x-4">
                <button
                    onClick={() => handleFilter('all')}
                    className={`px-4 py-2 border uppercase font-bold ${activeFilter === 'all' ? 'bg-yellow-500 text-white' : 'bg-white text-black'} transition-colors duration-300 hover:bg-yellow-400`}
                >
                    All Products
                </button>
                <button
                    onClick={() => handleFilter('eyes')}
                    className={`px-4 py-2 border uppercase font-bold ${activeFilter === 'eyes' ? 'bg-yellow-500 text-white' : 'bg-white text-black'} transition-colors duration-300 hover:bg-yellow-400`}
                >
                    Eyeglasses
                </button>
                <button
                    onClick={() => handleFilter('sun')}
                    className={`px-4 py-2 border uppercase font-bold ${activeFilter === 'sun' ? 'bg-yellow-500 text-white' : 'bg-white text-black'} transition-colors duration-300 hover:bg-yellow-400`}
                >
                    Sunglasses
                </button>
            </div>

            {/* Sort Dropdown */}
            <div className="flex justify-end px-6 mb-4">
                <select className="border p-2">
                    <option value="recommended">Sort By: Recommended</option>
                    <option value="priceLow">Sort By: Price (Low to High)</option>
                    <option value="priceHigh">Sort By: Price (High to Low)</option>
                </select>
            </div>

            {/* Product Grid */}
            <div className="max-w-[1500px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ">
                    {filteredProducts.map((product) => (
                        <div>
                            <div
                                key={product.id}
                                onClick={() => handleProductSelect(product.id)}
                                className={`p-4  hover:border-yellow-500 border-[5px] relative group`}
                            // className={`p-4 border bg-white rounded shadow-md relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${selectedProduct === product.id ? 'border-4 border-yellow-500' : ''}`}
                            >
                                <img
                                    src={product.images.main}
                                    alt={product.title}
                                    className="w-full h-60 object-cover mb-4 rounded"
                                />
                                <span className="absolute text-[14px] top-4 right-5 bg-gray-500 text-white  px-2 py-1 rounded transition-colors duration-300 group-hover:bg-[#380c0f]">
                                    SALE
                                </span>
                            </div>
                            <div className='flex justify-center flex-col text-center'>
                                <h2 className="text-lg font-semibold">{product.title}</h2>
                                <p className="text-gray-700 mb-2 ">
                                    <div className="line-through text-gray-500 mr-2">{product.originalPrice}</div>
                                    <div className="text-red-500">{product.price}</div>
                                </p>
                            </div>
                        </div>


                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductGallery;
