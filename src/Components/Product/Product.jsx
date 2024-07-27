import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { allProductData } from '../../data/productData'
import "./product.css"
import { useDispatch } from 'react-redux'
import { addCart } from '../../cartData/cartSlice'

const Product = () => {
    const dispatch = useDispatch()
    const { catagory, id } = useParams()
    const [productData] = useState([
        allProductData[11],
        allProductData[50],
        allProductData[75],
        allProductData[54],
        allProductData[23],
        allProductData[40],
    ])
    const [quantity, setQuantity] = useState(1)
    const displayItem = productData.find((item) => item.id === id)
    const [toggleImg, setToggleImg] = useState(displayItem.images?.main || '')
    const handleaddTocart = (e) => {
        console.log("i am productsData", displayItem);
        e.preventDefault()
        if (quantity) {
            dispatch(addCart({ id: displayItem.id, displayItem, quantity }))
        }
    }
    return (
        <div className='container m-auto '>
            <div className='flex px-10 py-12 gap-10'>
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
                    <div className='max-w-[786px] transition-transform product-img'>
                        <img src={toggleImg} className='w-[786px] max-h-[500px]' />
                    </div>
                    <div className='flex justify-center gap-5'>
                        <img src={displayItem.images?.main} className={`max-w-[90px] border-2 ${toggleImg === displayItem.images?.main ? 'border-[#C8651B]' : ''}`} onClick={() => setToggleImg(displayItem.images?.main)} />
                        <img src={displayItem.images?.side} className={`max-w-[90px] border-2 ${toggleImg === displayItem.images?.side ? 'border-[#C8651B]' : ''}`} onClick={() => setToggleImg(displayItem.images?.side)} />
                    </div>
                </div>
                <div className='mt-11 p-5 w-[450px]'>
                    <h1 className='uppercase text-[#C8651B] text-2xl font-semibold'>{displayItem?.title}</h1>
                    <div className='flex text-xl gap-5 font-[Montserrat] font-medium border-b-2 border-[#d3c7c3] pb-5'>
                        <h3>{displayItem?.price}</h3>
                        <h3 className='text-[#423c3ab7] line-through'>{displayItem?.originalPrice}</h3>
                    </div>
                    <div className='mt-8 text-[#423c3a]'>
                        <p className='font-[Raleway] text-[14.25px] tracking-[0.75px] leading-[1.65em] font-medium'>{displayItem?.description}</p>
                        <ul className='flex flex-col gap-3 my-9'>
                            {displayItem?.technicalDetails.map((item, index) => (
                                <li key={index} className='list-disc ml-8 leading-4'>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <form >
                            <label className='block'>Quantity:</label>
                            <input className='w-10  h-10 border-2 text-center' type='text' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                            <button onClick={handleaddTocart}>ADD TO CART</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product