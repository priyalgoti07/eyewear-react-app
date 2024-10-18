import React, { useEffect, useState } from 'react'
import Search from '../../assets/SVG/search.svg'
import Bag from '../../assets/SVG/bag.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Drawer, IconButton } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CloseIcon from '@mui/icons-material/Close';
import { allProductData } from '../../data/productData'
import getCategory from '../../utils/getCategory'

const Header = () => {
    const carts = useSelector(state => state);
    const [isDraWerOpen, setIsDraWerOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [filterProducts, setFilterProducts] = useState([]);

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            if (inputValue) {
                handleInput()
            } else {
                clearInput()
            }

        }, 300)
        return () => clearTimeout(timeOutId)
    }, [inputValue])

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsDraWerOpen(open);
        clearInput()
    };
    const clearInput = () => {
        setInputValue('')
        setFilterProducts([])
    }

    const handleInput = () => {
        if (inputValue) {
            const serachResult = allProductData.filter(product => product.title.toLowerCase().includes(inputValue.toLowerCase()))
            setFilterProducts(serachResult)
        }
    }

    return (
        <div>
            <header className='w-full  bg-[#ffc038] flex justify-between p-6'>
                <p className=''></p>
                {/* Free shipping on orders above 10000 */}
                <Link to='/'>
                    <div className='hover: cursor-pointer text-center'>
                        <h1 className='text-5xl font-extrabold tracking-widest'>NETRAM</h1>
                        <h3 className=' font-semibold text-xl tracking-[0.9em] '>EYEWEAR</h3>
                    </div>
                </Link>

                <div className='flex gap-5 items-center'>
                    <div><img src={Search} alt='Search' onClick={() => setIsDraWerOpen(!isDraWerOpen)} /></div>
                    <Link to='/cart'>
                        <div className='relative'><img src={Bag} alt='Bag' className='' />
                            <span className='absolute top-5 left-5 w-5 h-5 bg-black text-white text-center rounded-full text-sm border-2 border-black flex justify-center items-center'>{carts.carts.length}</span></div>
                    </Link>
                </div>
            </header>
            <nav style={{ position: "sticky", top: "0", zIndex: 50 }}>
                <ul className='flex gap-10 justify-center bg-black text-[#f2f5ff] text-xs p-5'>
                    <Link to='/products'>
                        <li className='hover:underline  hover:underline-offset-[4px]'>COLLECTION</li>
                    </Link>
                    <Link to='/products/eyeglasses'>
                        <li className='hover:underline  hover:underline-offset-[4px]'>EYEGLASSES</li>
                    </Link>
                    <Link to='/products/sunglasses'>
                        <li className='hover:underline  hover:underline-offset-[4px]'>SUNGLASSES</li>
                    </Link>
                    <li className='hover:underline  hover:underline-offset-[4px]'>ABOUT US</li>
                </ul>
            </nav>
            <Drawer anchor='right'
                open={isDraWerOpen}
                onClose={toggleDrawer(false)}
                transitionDuration={{ enter: 900, exit: 900 }}>
                <div className='w-[800px] p-5'>
                    {/* Close Button inside the Drawer */}
                    <div className='my-5'>
                        <IconButton onClick={toggleDrawer(false)}>
                            <ArrowBackIosNewIcon />
                        </IconButton>
                    </div>

                    {/* Drawer Content */}
                    <h2 className='my-2 text-2xl'>Search Our Collection</h2>
                    <div className="flex items-center w-[95%]">
                        <div className="relative w-full">
                            <input
                                name="inputValue"
                                type="text"
                                placeholder="Search for products..."
                                className="border-2 w-full py-4 px-6 bg-[#e6f0ff] focus:outline-none focus:border-gray-400 transition-all duration-300"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                autoComplete="on"
                            />
                            {inputValue && (
                                <button
                                    onClick={clearInput}
                                    className="absolute top-1/2 right-4 transform -translate-y-1/2 text-blue-600 cursor-pointer"
                                    style={{ background: 'none', border: 'none', fontSize: '16px', fontWeight: '900' }}
                                >
                                    &#x2715;
                                </button>
                            )}
                        </div>
                        <button
                            className="bg-[#c8651b] py-4 px-10 border-2 border-[#c8651b] ml-2 text-white hover:bg-black hover:border-black"
                            onClick={handleInput}
                        >
                            GO
                        </button>
                    </div>
                </div>
                <div className='px-5'>
                    {
                        filterProducts.length > 0 ?
                            (
                                <ul>
                                    {
                                        filterProducts.map((item, index) => (
                                            <Link to={`/products/${getCategory(item.type)}/${item.id}`} key={item.id} onClick={toggleDrawer(false)}>
                                                <li key={index} className='py-10 border-b-[1px] border-solid hover:underline hover:bg-[rgb(247,247,247)] underline-offset-2' style={{ borderColor: 'rgb(228, 228, 228)' }}>
                                                    <div className='flex gap-6'>
                                                        <img src={item.images.main} className='w-[50px] h-[50px] border-[1px] border-solid' style={{ borderColor: 'rgb(177, 177, 177)' }} />
                                                        <div className='text-[17px]'>
                                                            <span className='uppercase tracking-[1.1px] font-bold'>{item.title}</span>
                                                            <p className='text-[#4d4d4d]'>{item.price}</p>
                                                        </div>
                                                    </div>

                                                </li>
                                            </Link>

                                        ))
                                    }
                                </ul>
                            )
                            :
                            (
                                inputValue && <p className='italic'>No products founds.</p>
                            )
                    }
                </div>
            </Drawer>
        </div>

    )
}

export default Header