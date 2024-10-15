import React from 'react'

const Footer = () => {
    return (
        <div>
            <section className='bg-black py-10 px-4'>
                <div className=' max-w-[1200px] text-white flex justify-between m-auto items-center'>
                    <h3 className='mx-5 text-2xl uppercase font-bold w-[20%]'>Be a part of the Savants</h3>
                    <span className='font-CourierPrime leading-5 w-[25%] text-sm'>Enjoy 10% off your first purchase when you sign up!</span>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input type='email' name='email' className='bg-black border-[1px] border-yellow-400 p-4 flex-grow placeholder-yellow-500  focus:outline-none  focus:border-white' placeholder='Enter your email here' />
                        <button className='bg-yellow-400 p-4 text-black  border-[3px] border-yellow-400 text-sm font-bold'>SUBSCRIBE</button>
                    </form>
                </div>
            </section>
            <div className='w-[100%] bg-[#FFC038]'>
                <div className='w-[1500px] m-auto flex py-14'>
                    <section className='flex justify-between gap-28'>
                        <ul>
                            <h5 className='text-[16px] mb-1 uppercase tracking-widest font-bold'>Company</h5>
                            <li className='font-CourierPrime text-xs'>Our Story</li>
                            <li className='font-CourierPrime text-xs'>Shop Locations</li>
                            <li className='font-CourierPrime text-xs'>Virtual</li>
                            <li className='font-CourierPrime text-xs'>Eyecare</li>
                            <li className='font-CourierPrime text-xs'>Philanthropy</li>
                        </ul>
                        <ul>
                            <h5 className='text-[16px] mb-1 uppercase tracking-widest font-bold'>Brand</h5>
                            <li className='font-CourierPrime text-xs'>Style & Fit</li>
                            <li className='font-CourierPrime text-xs'>Craftsmanship</li>
                            <li className='font-CourierPrime text-xs'>Reviews</li>
                            <li className='font-CourierPrime text-xs'>Blog</li>
                            <li className='font-CourierPrime text-xs'>Press</li>
                        </ul>
                        <ul>
                            <h5 className='text-[16px] mb-1 uppercase tracking-widest font-bold'>Help</h5>
                            <li className='font-CourierPrime text-xs'>Shipping & Returns</li>
                            <li className='font-CourierPrime text-xs'>Repairs</li>
                            <li className='font-CourierPrime text-xs'>Warranty</li>
                            <li className='font-CourierPrime text-xs'>FAQ</li>
                            <li className='font-CourierPrime text-xs'>Contact Us</li>
                        </ul>
                    </section>
                    <section>Second</section>
                </div>
            </div>
        </div>
    )
}

export default Footer