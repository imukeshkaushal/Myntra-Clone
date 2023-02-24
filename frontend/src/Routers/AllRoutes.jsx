import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CompleteProductPage from '../Pages/ProductPage/CompleteProductPage/CompleteProductPage'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/products' element={<CompleteProductPage/>} ></Route>
    </Routes>
  )
}

export default AllRoutes