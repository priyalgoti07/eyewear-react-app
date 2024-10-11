import React from 'react'

const Footer = () => {
    return (
        <div>

            <section className='bg-black py-10 px-4'>
                <div className=' max-w-[1200px] text-white flex justify-between m-auto items-center'>
                    <h3 className='mx-5 text-2xl uppercase font-bold w-[20%]'>Be a part of the Savants</h3>
                    <span className='font-CourierPrime leading-5 w-[25%] text-sm'>Enjoy 10% off your first purchase when you sign up!</span>
                    <form onSubmit={(e)=>e.preventDefault()}>
                        <input type='email' name='email' className='bg-black border-[1px] border-yellow-400 p-4 flex-grow placeholder-yellow-500  focus:outline-none  focus:border-white' placeholder='Enter your email here' />
                        <button className='bg-yellow-400 p-4 text-black  border-[3px] border-yellow-400 text-sm font-bold'>SUBSCRIBE</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Footer