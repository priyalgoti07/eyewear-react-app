import React from 'react'
import SliderHero from '../SliderHero/SliderHero'
import LatestPost from '../LatestPost/LatestPost'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'

const Home = () => {
    return (
        <>
            <SliderHero />
            <LatestPost />
            <FeaturedProducts/>
        </>
    )
}

export default Home