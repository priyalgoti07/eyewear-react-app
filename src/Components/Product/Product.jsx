import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { allProductData } from '../../data/productData'

const Product = () => {
    // console.log("allProductData", allProductData);
    const { catagory, id } = useParams()
    const [productData] = useState([
        allProductData[11],
        allProductData[50],
        allProductData[75],
        allProductData[54],
        allProductData[23],
        allProductData[40],
    ])
    console.log("i am productsData", productData);
    const displayItem = productData.find((item) => item.id === id)
    console.log("displayItem", displayItem);
    const [toggleImg, setToggleImg] = useState(displayItem.images?.main)

    console.log("setToggleImg", setToggleImg);
    return (
        <div className='container m-auto '>
            <div className='flex px-10 py-12'>
                <div className='flex flex-col gap-2'>
                    <ul className='flex gap-2 text-[#777777] uppercase text-[13px] font-semibold'>
                        <Link to="/">
                            <li className='underline underline-offset-[3px] inline-block'>Home</li> {" /"}
                        </Link>
                        <Link>
                            <li className='underline underline-offset-[3px] inline-block'>Sunglasses</li> {" /"}
                        </Link>
                        <li>{displayItem?.brand}</li>
                    </ul>
                    <div className='max-w-[786px] transition-transform duration-300 ease-linear'>
                        <img src={toggleImg} className='border-2 w-[786px] max-h-[500px] object-cover hover: transform scale-105 cursor-pointer' />
                    </div>
                    <div className='flex justify-center gap-5'>
                        <img src={displayItem.images?.main} className={`max-w-[90px] border-2 ${toggleImg === displayItem.images?.main ? 'border-[#C8651B]' : ''}`} onClick={() => setToggleImg(displayItem.images?.main)} />
                        <img src={displayItem.images?.side} className={`max-w-[90px] border-2 ${toggleImg === displayItem.images?.side ? 'border-[#C8651B]' : ''}`} onClick={() => setToggleImg(displayItem.images?.side)} />
                    </div>
                </div>
                <div>Content</div>
            </div>
        </div>
    )
}

export default Product