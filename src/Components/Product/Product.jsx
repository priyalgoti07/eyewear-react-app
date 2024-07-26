import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
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
    return (
        <div className='container m-auto '>
            <div className='flex px-10 py-12'>
                <div className='flex flex-col gap-2'>
                    <ul className='flex gap-2 text-[#777777] uppercase text-[13px] font-semibold'>
                        <li className='underline underline-offset-[3px]'>Home</li><span>/</span>
                        <li className='underline underline-offset-[3px]'>Sunglasses</li><span>/</span>
                        <li>{displayItem?.brand}</li>
                    </ul>
                    <div>
                        <img src={toggleImg} className='max-w-[550px] border-2' />
                    </div>
                    <div className='flex justify-center gap-5'>
                        <img src={displayItem.images?.main} className='max-w-[90px] border-2' onClick={() => setToggleImg(displayItem.images?.main)} />
                        <img src={displayItem.images?.side} className='max-w-[90px] border-2' onClick={() => setToggleImg(displayItem.images?.side)} />
                    </div>
                </div>
                <div>Content</div>
            </div>
        </div>
    )
}

export default Product