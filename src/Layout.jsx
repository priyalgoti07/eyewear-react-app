import React, { useEffect } from 'react'
import Header from './Components/Header/Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Components/Footer/Footer'

const Layout = () => {
    console.log("Layout")
    const location = useLocation();
    useEffect(() => {
        // Set document title based on the current route
        switch (location.pathname) {
            case '/':
                document.title = 'NATRAM Experience | NATRAM Eyewear OnlineStore';
                break;
            case '/cart':
                document.title = 'Your Shopping Cart | NATRAM';
                break;
            case '/products':
                document.title = 'Products - My App';
                break;
            case '/products/eyeglasses':
                document.title = 'Eyeglasses - My App';
                break;
            case '/products/sunglasses':
                document.title = 'Sunglasses - My App';
                break;
            case '/about':
                document.title = 'The NATRAM Experience | NATRAM Eyewear OnlineStore';
                break;
            default:
                if (location.pathname.startsWith('/products/')) {
                    document.title = 'Product Details - My App';
                } else {
                    document.title = 'The NATRAM Experience | NATRAM Eyewear OnlineStore';
                }
        }
    }, [location]);
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>

    )
}

export default Layout