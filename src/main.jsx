import React, { createElement } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Cart from './Components/Cart/Cart.jsx'
import Product from './Components/Product/Product.jsx'
import { Provider } from 'react-redux'
import { persist, store } from './app/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import ProductGallery from './Components/ProductGallery.jsx'
import About from './Components/About/index.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route path='' element={<Home />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/products' element={<ProductGallery />} />
    <Route path='/products/eyeglasses' element={<ProductGallery />} />
    <Route path='/products/sunglasses' element={<ProductGallery />} />
    <Route path='/products/:category/:id' element={<Product />} />
    <Route path='/about' element={<About />} />
  </Route>
))
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persist}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>,
)
