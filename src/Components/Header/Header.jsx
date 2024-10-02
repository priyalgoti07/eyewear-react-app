import React from 'react'
import Search from '../../assets/SVG/search.svg'
import Bag from '../../assets/SVG/bag.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
    const carts = useSelector(state => state)
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
                    <div><img src={Search} alt='Search' /></div>
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
                    <li className='hover:underline  hover:underline-offset-[4px]'>EYEGLASSES</li>
                    <li className='hover:underline  hover:underline-offset-[4px]'>SUNGLASSES</li>
                    <li className='hover:underline  hover:underline-offset-[4px]'>ABOUT US</li>
                </ul>
            </nav>
        </div>

    )
}

export default Header