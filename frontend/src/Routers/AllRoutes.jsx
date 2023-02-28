import React from 'react'
import {Route, Routes} from "react-router-dom";
import Cart from "../Pages/SingleProudct/Cart";
import SingleProduct from "../Pages/SingleProudct/Singleproduct";
import Checkout from "./../Pages/SingleProudct/CheckoutPage";
import Home from '../Pages/Home'
import CompleteProductPage from '../Pages/ProductPage/CompleteProductPage/CompleteProductPage'
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import PrivateRoute from '../Context/PrivateRoute';
import Wishlist from '../Pages/Wishlist/Wishlist';


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/products' element={<CompleteProductPage/>} ></Route>
        <Route path="/cart" element={<Cart />} />;
        <Route path="/SingleProduct/:id" element={<PrivateRoute><SingleProduct /></PrivateRoute>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path='/login' element = {<Login/>}></Route>
        <Route path='/wishlist' element = {<Wishlist/>}></Route>
        <Route path='/register' element = {<Register/>}></Route>
        <Route path='*' element = {<h1 style={{textAlign:"center",fontSize:"30px",fontWeight:"900"}} >404 Not Found</h1>}></Route>
    </Routes>
  );
}


export default AllRoutes
