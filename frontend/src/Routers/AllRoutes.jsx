import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import CompleteProductPage from '../Pages/ProductPage/CompleteProductPage/CompleteProductPage'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/products' element={<CompleteProductPage/>} ></Route>
    </Routes>
  )
}

export default AllRoutes