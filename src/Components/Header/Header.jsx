import React from 'react'
import Search from '../../assets/SVG/search.svg'
import Bag from '../../assets/SVG/bag.svg'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <header className='w-full  bg-[#ffc038] flex justify-between p-6'>
                <p className=''></p>
                {/* Free shipping on orders above 10000 */}
                <div className='hover: cursor-pointer'>
                    <h1 className='text-5xl font-extrabold tracking-widest'>SAVANT</h1>
                    <h3 className=' font-semibold text-xl tracking-[0.9em]'>EYEWEAR</h3>
                </div>
                <div className='flex gap-5 items-center'>
                    <div><img src={Search} alt='Search' /></div>
                    <Link to='/cart'>
                        <div><img src={Bag} alt='Bag' /></div>
                    </Link>
                </div>
            </header>
            <na>
                <ul className='flex gap-10 justify-center bg-black text-[#f2f5ff] text-xs p-5'>
                    <li>COLLECTION</li>
                    <li>EYEGLASSES</li>
                    <li>SUNGLASSES</li>
                    <li>ABOUT US</li>
                </ul>
            </na>
        </div>

    )
}

export default Header