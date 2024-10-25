import React from 'react'
import GitIcon from '../../../src/assets/img/github-icon.png';
import Telephone from '../../../src/assets/img/icon-phone-9153a34f.avif';
import Doenload from '../../../src/assets/img/download.webp';
import chartUs from '../../../src/assets/img/chartUs.webp'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='text-[#423C3A]'>
            <section className='bg-black py-10 px-4'>
                <div className=' max-w-[1200px] text-white flex justify-between m-auto items-center'>
                    <h3 className='mx-5 text-2xl uppercase font-bold w-[20%]'>Be a part of the Netrams</h3>
                    <span className='font-CourierPrime leading-5 w-[25%] text-sm'>Enjoy 10% off your first purchase when you sign up!</span>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input type='email' name='email' className='bg-black border-[1px] border-yellow-400 p-4 flex-grow placeholder-yellow-500  focus:outline-none  focus:border-white' placeholder='Enter your email here' />
                        <button className='bg-yellow-400 p-4 text-black  border-[3px] border-yellow-400 text-sm font-bold'>SUBSCRIBE</button>
                    </form>
                </div>
            </section>

            <div className='w-[100%] bg-[#FFC038]'>
                <div className='w-[1500px] m-auto flex py-14'>
                    <section className='flex gap-40 w-[50%] px-10 border-r border-black'>
                        <ul className='flex flex-col gap-2'>
                            <h5 className='text-[16px] mb-1 uppercase tracking-widest font-bold'>Company</h5>
                            <li className='font-CourierPrime text-xs'>Our Story</li>
                            <li className='font-CourierPrime text-xs'>Shop Locations</li>
                            <li className='font-CourierPrime text-xs'>Virtual</li>
                            <li className='font-CourierPrime text-xs'>Eyecare</li>
                            <li className='font-CourierPrime text-xs'>Philanthropy</li>
                        </ul>
                        <ul className='flex flex-col gap-2'>
                            <h5 className='text-[16px] mb-1 uppercase tracking-widest font-bold'>Brand</h5>
                            <li className='font-CourierPrime text-xs'>Style & Fit</li>
                            <li className='font-CourierPrime text-xs'>Craftsmanship</li>
                            <li className='font-CourierPrime text-xs'>Reviews</li>
                            <li className='font-CourierPrime text-xs'>Blog</li>
                            <li className='font-CourierPrime text-xs'>Press</li>
                        </ul>
                        <ul className='flex flex-col gap-2'>
                            <h5 className='text-[16px] mb-1 uppercase tracking-widest font-bold'>Help</h5>
                            <li className='font-CourierPrime text-xs'>Shipping & Returns</li>
                            <li className='font-CourierPrime text-xs'>Repairs</li>
                            <li className='font-CourierPrime text-xs'>Warranty</li>
                            <li className='font-CourierPrime text-xs'>FAQ</li>
                            <li className='font-CourierPrime text-xs'>Contact Us</li>
                        </ul>
                    </section>
                    <section className='flex justify-center flex-col items-center px-10 w-[50%]'>
                        <h1 className='uppercase tracking-[3px] mb-3 font-black'>Ask a Netram Specialist</h1>
                        <p className='mb-3'>Whether you're a collector or visiting for the first time, we're here to assist!</p>
                        <ul className='flex gap-[25px]'>
                            <li className='flex flex-col items-center gap-3'>
                                <img src={Telephone} className='w-[30px]' />
                                <span className='text-[12px] font-bold tracking-wider'>(000)-NETRAM</span>
                            </li>
                            <li className='flex flex-col items-center gap-3'>
                                <img src={Doenload} className='w-[30px]' />
                                <span className='text-[12px] font-bold tracking-widest'>support@netram.xyz</span>
                            </li>
                            <li className='flex flex-col items-center gap-3'>
                                <img src={chartUs} className='w-[30px]' />
                                <span className='text-[12px] font-bold tracking-wider'>Chat with Us</span>
                            </li>
                        </ul>
                    </section>
                </div>
                <div className='w-[1500px] m-auto flex justify-center text-[12px] font-bold py-7'>
                    <ul className='flex gap-7'>
                        <span>© 2023 NETRAM</span>
                        <a href='/' className='underline font-CourierPrime'>Privacy</a>
                        <a href='/' className='underline font-CourierPrime'>Accessibility</a>
                        <a href='/' className='underline font-CourierPrime'>Terms of Service</a>
                        <a href='/' className='underline font-CourierPrime'>Refund Policy</a>
                        <a href='/' className='underline font-CourierPrime'>Conformity</a>
                    </ul>
                </div>
            </div>

            <div className='bg-black flex justify-center py-4 text-[#f2f5ff] flex-col items-center'>
                <a href='https://github.com/priyalgoti07' className='flex gap-2' target='_blank'>
                    <img src={GitIcon} width={18} />
                    <p className='text-[12px] '>Developed by Priyal Goti</p>
                </a>
                <small className='text-[10px] tracking-[1px]'>© Copyright {currentYear} Priyal Goti. All rights reserved.</small>
            </div>
        </div>
    )
}

export default Footer