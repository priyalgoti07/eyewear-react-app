import React, { useEffect, useState } from 'react';
import { allProductsCategoryData, eyeglassesCategoryData, sunglassesCategoryData } from '../data/productCategoryData';
import { Link, useLocation, useParams } from 'react-router-dom';
import getCategory from '../utils/getCategory';

const ProductGallery = () => {
    const location = useLocation();
    const { eyeglasses } = useParams();
    const [categoryData, setCategoryData] = useState(allProductsCategoryData);
    const [filteredProducts, setFilteredProducts] = useState(categoryData.products);
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [hoveredProduct, setHoveredProduct] = useState(null);

    const handleFilter = (filterType) => {
        setActiveFilter(filterType); // Set the active filter button
        if (filterType === "/products") {
            setFilteredProducts(categoryData.products); // Show all products
        } else {
            const filtered = categoryData.products.filter((item) => {
                if (filterType === "/products/eyeglasses") {
                    return item.type === 'frames'; // Filter by eyeglasses (frames)
                } else if (filterType === '/products/sunglasses') {
                    return item.type === 'sunnies'; // Filter by sunglasses
                }
                return true; // Default to all products
            });
            setFilteredProducts(filtered); // Update state with filtered products
        }
    };
    // Update Category Banner and Data
    useEffect(() => {
        if (location.pathname === "/products/eyeglasses") {
            setCategoryData(eyeglassesCategoryData);
        } else if (location.pathname === "/products/sunglasses") {
            setCategoryData(sunglassesCategoryData);
        } else {
            setCategoryData(allProductsCategoryData);
        }
    }, [location.pathname]);

    // Handle Product Filtering
    useEffect(() => {
        if (categoryData.products) {
            handleFilter(location.pathname);
        }
    }, [categoryData, location.pathname]);

    const handleProductSelect = (productId) => setSelectedProduct(productId);
    const handleMouseEnter = (productId) => hoveredProduct !== productId && setHoveredProduct(productId);
    const handleMouseLeave = () => setHoveredProduct(null);

    const buttons = [
        { path: '/products', label: 'All Products' },
        { path: '/products/eyeglasses', label: 'Eyeglasses' },
        { path: '/products/sunglasses', label: 'Sunglasses' },
    ];

    return (
        <div className="w-full bg-gray-100">
            {/* Banner Section */}
            <div className="flex flex-col md:flex-row justify-between items-center h-[420px] p-4 md:p-0">
                <div className="w-full md:w-[30%] p-8 text-center text-[#423c3a]">
                    <h1 className="text-4xl font-bold uppercase tracking-wide mb-4">{categoryData.banner.title}</h1>
                    <p className="text-sm font-CourierPrime tracking-wide">{categoryData.banner.description}</p>
                </div>
                <div className="w-full md:w-[70%] h-full featured-img1">
                    <img
                        src={categoryData.banner.img}
                        alt={categoryData.banner.title}
                        className="w-full h-full object-cover brightness-110 saturate-[80%] contrast-100"
                    />
                </div>
            </div>

            {/* Filter Buttons */}
            <div className="my-6 flex justify-center space-x-4">{
                buttons.map(({ path, label }) => (
                    <Link key={path} to={path}>
                        <button
                            onClick={() => handleFilter(path)}
                            className={`px-4 py-2 border uppercase font-bold ${activeFilter === path ? 'bg-[#ffc038] text-white' : 'bg-white text-black'} transition-colors duration-300 hover:bg-yellow-400`}
                        >
                            {label}
                        </button>
                    </Link>
                ))
            }</div>

            {/* Sort Dropdown */}
            <div className="flex justify-end px-6 mb-4">
                <select className="border p-2">
                    <option value="recommended">Sort By: Recommended</option>
                    <option value="priceLow">Sort By: Price (Low to High)</option>
                    <option value="priceHigh">Sort By: Price (High to Low)</option>
                </select>
            </div>
            {console.log("filteredProducts",filteredProducts)}
            
            {/* Product Grid */}
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {filteredProducts?.map((product) => (
                        <Link to={`/products/${getCategory(product.type)}/${product.id}`}>
                            <div key={product.id} className="w-[420px]">
                                <div
                                    onClick={() => handleProductSelect(product.id)}
                                    onMouseEnter={() => handleMouseEnter(product.id)}
                                    onMouseLeave={handleMouseLeave}
                                    className={`p-4 border-[5px] relative group hover:border-[#ffc038] ${selectedProduct === product.id ? 'border-[#ffc038]' : ''}`}
                                >
                                    <img
                                        src={hoveredProduct === product.id ? product.images.side : product.images.main}
                                        alt={product.title}
                                        className="w-full h-60 object-cover mb-4 rounded"
                                    />
                                    <span className="absolute text-[14px] top-4 right-5 bg-gray-500 text-white px-2 py-1 rounded transition-colors duration-300 group-hover:bg-[#380c0f]">SALE</span>
                                </div>
                                <div className="flex justify-center flex-col text-center">
                                    <h2 className="text-lg font-semibold uppercase">{product.title}</h2>
                                    <p className="text-gray-700 mb-2 font-bold">
                                        <div>{product.price}</div>
                                        <div className="line-through text-gray-500">{product.oldPrice}</div>
                                        <div className="line-through text-gray-500 mr-2">{product.originalPrice}</div>
                                    </p>
                                </div>
                            </div>
                        </Link>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductGallery;
