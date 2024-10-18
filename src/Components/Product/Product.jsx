import "./product.css"
import React, { useEffect, useState } from 'react'
import { addCart } from '../../cartData/cartSlice'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { allProductData } from '../../data/productData'

const Product = () => {
    const dispatch = useDispatch()
    const updateQuantity = useSelector(state => state.carts)
    const { id } = useParams()

    const [error, setError] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [isClicked, setIsClicked] = useState(false);
    const displayItem = allProductData.find((item) => item.id === id);
    const [toggleImg, setToggleImg] = useState(displayItem.images?.main || '');
    console.log("toggleImg", toggleImg, displayItem.images.main)

    // Update toggleImg when displayItem changes
    useEffect(() => {
        if (displayItem) {
            setToggleImg(displayItem.images?.main || '');
        }
    }, [displayItem]);

    const handleaddTocart = (e) => {
        const itemInCart = updateQuantity.find((qt) => qt.id === displayItem.id);

        // Calculate the total quantity after adding the new quantity
        const totalQuantity = itemInCart ? itemInCart.quantity : quantity;
        e.preventDefault()
        setIsClicked(true)

        if (totalQuantity < displayItem.quantity) {
            dispatch(addCart({ id: displayItem.id, displayItem, quantity }))
        }
        else {
            setError("We Do Not Have Enough Stocks For Your Current Order. Contact Us Directly To Get More Information")
        }

    }
    return (
        <>
            <div className='container m-auto'>
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
                        {displayItem.color &&
                            <div className='mt-8 text-[#423c3a]'><span className="uppercase">Color :</span> {displayItem.color}</div>
                        }
                        <div>
                            <form className='flex flex-col gap-7' >
                                <div >
                                    <label className='block'>Quantity:</label>
                                    <input className='w-10  h-10 border-2 text-center' type='text' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                                </div>
                                <button onClick={handleaddTocart}
                                    className={`border-2 p-3 rounded-3xl text-[13px] ${isClicked
                                        ? 'bg-[#C8651B] text-white border-[#C8651B] text-center'
                                        : 'bg-transparent text-[#C8651B] border-[#C8651B] hover:bg-[#C8651B] hover:text-white text-center'
                                        }`}>ADD TO CART
                                </button>
                                {isClicked &&
                                    <button
                                        onClick={(e) => e.preventDefault()}
                                        className='border-2 border-[#c7a374] p-3 rounded-3xl hover:bg-[#c7a374] hover:text-white  text-[#636363] text-[13px] text-center'>
                                        <Link to={'/cart'}>
                                            BUY IT NOW
                                        </Link>
                                    </button>
                                }
                                {
                                    error && <h5 className='text-red-500'>{error}</h5>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-20 m-auto text-center pt-[60px] pb-[70px] text-[#423C3A]" style={{ backgroundColor: 'rgb(247, 237, 225)' }}>
                <h2 className="font-bold text-[21px] tracking-[1px]">Purchase Prescription Lenses</h2>
                <ul className="flex items-center justify-center gap-8 mt-10">
                    <li className="w-[370px]">
                        <span className="text-2xl">1</span>
                        <p className="font-Raleway tracking-[.9px] text-[14px] leading-6">Purchase the frame (Optical or Sunglasses) you wish to have a prescription. Skip this step if you wish to add a prescription to a frame you already have.</p>
                    </li>
                    <li className="w-[370px]">
                        <span className="text-2xl">2</span>
                        <p className="font-Raleway tracking-[.9px] text-[14px] leading-6">Schedule an appointment through our website or contact us through our telephone number. A SAVANT Eyewear representative will reach out to confirm your appointment.</p>
                    </li>
                    <li className="w-[370px]">
                        <span className="text-2xl">3</span>
                        <p className="font-Raleway tracking-[.9px] text-[14px] leading-6" >Attend your scheduled appointment and have your order for prescription lenses finalized. Once finalized, your frame will be delivered to your address.</p>
                    </li>
                </ul>
            </div>
        </>

    )
}

export default Product