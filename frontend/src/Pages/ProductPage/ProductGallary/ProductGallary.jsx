import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import { getProduct } from '../../../Redux/products/Product.action';

export default function ProductGallary() {
const [searchParams] = useSearchParams()
// const [pricehl,setPricehl] = useState("");
// const [pricelh,setPricelh] = useState("");

    const dispatch= useDispatch();
    const product = useSelector((store)=>store.product);



    useEffect(()=>{
        const paramObj ={
            params: {
                gender:  searchParams.getAll("gender"),
                category: searchParams.getAll("category"),
                brand: searchParams.getAll("brand"),
                rating: searchParams.getAll("rating")
            //  pricehl,
            //   pricelh,
              }
        }
        dispatch(getProduct(paramObj))
    },[searchParams])

  return (
    <div>
       
        
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
     {product.length>0 && product.map((el)=>{
        return <div key={el._id}>
         <img src={el.imageSrc} alt="" width="250px" />
         <span>{el.rating}</span>
         <span>{el.brand}</span>
         <span>{el.description}</span>
         <span>{el.price}</span>
         </div>
     })}</div>
    </div>
  )
}
