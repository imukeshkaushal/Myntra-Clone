import React from 'react'
import { Route, Routes } from "react-router-dom";
import Cart from "../Pages/SingleProudct/Cart";
import SingleProduct from "../Pages/SingleProudct/Singleproduct";
import Checkout from "./../Pages/SingleProudct/CheckoutPage";

const AllRoutes = () => {
  return (
    <div>
      AllRoutes
      <Routes>
        <Route path="/cart" element={<Cart />} />;
        <Route path="/SingleProduct" element={<SingleProduct />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
};

export default AllRoutes