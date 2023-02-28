import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useSearchParams } from 'react-router-dom';

import { getProduct } from '../../../Redux/products/Product.action';
import "./ProductGallary.css";
import { AiFillStar } from 'react-icons/ai';

export default function ProductGallary() {
const [searchParams] = useSearchParams()


    const dispatch= useDispatch();
    const product = useSelector((store)=>store.product);



    useEffect(()=>{
        const paramObj ={
            params: {
                gender:  searchParams.getAll("gender"),
                category: searchParams.getAll("category"),
                brand: searchParams.getAll("brand"),
                rating: searchParams.getAll("rating"),
                pLH: searchParams.getAll("pLH"),
                pHL: searchParams.getAll("pHL")
              }
        }
        dispatch(getProduct(paramObj))
    },[searchParams])

  return (
    <div>
       
     {/* <h1 className='protop'>{product.length} items</h1> */}

    <div className='pgallarymain'>
     {product.length>0 && product.map((el)=>{
        return  <Link to={`/SingleProduct/${el._id}`}><div key={el._id}>
         <img src={el.imageSrc} alt="" />
         <div className='pgalbimg'>
          <div className='pgrate'>
         <span className='pgratetext'>{el.rating}</span>
         <span><AiFillStar className='pgicon' /></span></div><br />
         <h4 className='pgalbrand'>{el.brand}</h4>
         <h4 className='pgldesc'>{el.description}</h4>
         <span className='pgalprice'>Rs.{el.price}</span></div>
         </div></Link>
     })}</div>
    </div>
  )
}
