import React from 'react'
import { Route, Routes } from "react-router-dom";
import Cart from "../Pages/SingleProudct/Cart";
import SingleProduct from "../Pages/SingleProudct/Singleproduct";
import Checkout from "./../Pages/SingleProudct/CheckoutPage";
import Home from '../Pages/Home'
import CompleteProductPage from '../Pages/ProductPage/CompleteProductPage/CompleteProductPage'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/products' element={<CompleteProductPage/>} ></Route>
        <Route path="/cart" element={<Cart />} />;
        <Route path="/SingleProduct/:id" element={<SingleProduct />} />
        <Route path="/checkout" element={<Checkout />} />
    </Routes>
  )
}


export default AllRoutes