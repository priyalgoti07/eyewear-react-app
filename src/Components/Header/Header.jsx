import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Bag from '../../assets/SVG/bag.svg'
import Search from '../../assets/SVG/search.svg'
import getCategory from '../../utils/getCategory'
import { Drawer, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import BagWhite from '../../assets/SVG/bagwhite.svg'
import { allProductData } from '../../data/productData'
import searchWhite from '../../assets/SVG/searchwhite.svg'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Header = () => {
    const carts = useSelector(state => state);
    const [isFixed, setIsFixed] = useState(false); // Track if the second header is fixed
    const [inputValue, setInputValue] = useState('');
    const [isDraWerOpen, setIsDraWerOpen] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);

    useEffect(() => {
        const handleScroll = () => {
            // Detect when the user has scrolled past the first header
            const scrollPosition = window.scrollY;
            if (scrollPosition > 150) {
                // Adjust this value based on the height of the first header
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
            <header className='w-full  bg-[#ffc038] p-6 flex justify-between'>
                {/* Free shipping on orders above 10000 */}
                <p className='text-transparent'>Free shipping</p>
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

            {/* <nav className='fixed top-0 left-0 w-full z-50 bg-black'> */}
            <nav
                className={`w-full bg-black  justify-between z-50 ${isFixed ? 'fixed top-0 left-0 py-4 px-6 flex' : 'relative'}`}
                style={{ transition: 'all 0.3s ease-in-out' }} // Optional: Smooth transition
            >
                {isFixed && <Link to='/'>
                    <div className='hover: cursor-pointer text-center text-white'>
                        <h1 className='text-2xl font-bold tracking-widest'>NETRAM</h1>
                        <h3 className='text-[10px] tracking-[0.9em] '>EYEWEAR</h3>
                    </div>
                </Link>}

                <ul className={`flex gap-10 justify-center bg-black text-[#f2f5ff] text-xs p-5 ${!isFixed && 'justify-center'}`}>
                    <Link to='/products'>
                        <li className='hover:underline  hover:underline-offset-[4px]'>COLLECTION</li>
                    </Link>
                    <Link to='/products/eyeglasses'>
                        <li className='hover:underline  hover:underline-offset-[4px]'>EYEGLASSES</li>
                    </Link>
                    <Link to='/products/sunglasses'>
                        <li className='hover:underline  hover:underline-offset-[4px]'>SUNGLASSES</li>
                    </Link>
                    <Link to='/about'>
                        <li className='hover:underline  hover:underline-offset-[4px]'>ABOUT US</li>
                    </Link>
                </ul>
                {
                    (isFixed) &&
                    <div className='flex gap-5 items-center'>
                        <div><img src={searchWhite} alt='Search' onClick={() => setIsDraWerOpen(!isDraWerOpen)} /></div>
                        <Link to='/cart'>
                            <div className='relative'><img src={BagWhite} alt='Bag' className='' />
                                <span className='absolute top-5 left-3 w-5 h-5 bg-white text-black text-center rounded-full text-sm border-2 border-white flex justify-center items-center'>{carts.carts.length}</span></div>
                        </Link>
                    </div>

                }

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