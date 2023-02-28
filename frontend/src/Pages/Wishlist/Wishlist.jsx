import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { AiFillStar } from 'react-icons/ai';
import "./Wishlist.css";

export default function Wishlist() {
const [data,setData] = useState([])


const abc=(id1,id2)=>{
  movetoBag(id1);
           deleteWish(id2);
}


const getwish = ()=>{

        axios.get("https://calm-cyan-octopus-wear.cyclic.app/wishlist", {
            headers: {
              Authorization: localStorage.getItem("token")
            }
          })
          .then(res => setData(res.data));
      
}

const movetoBag=(_id)=>{
    fetch("https://calm-cyan-octopus-wear.cyclic.app/carts/add", {
        method: "POST",
        body: JSON.stringify({_id}),
        headers: {
          "Content-type": "application/json",
          Authorization: localStorage.getItem("token")
        }
      })

}
const deleteWish= async(id)=>{
    await fetch(`https://calm-cyan-octopus-wear.cyclic.app/wishlist/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: localStorage.getItem("token")
        }
      });
      getwish();

}

useEffect(()=>{
getwish()
},[data])

  return (
    <div>
      <h1 className='wishtop'>My Wishlist {data.length} items</h1>
        <div className='wishmain'>
     {data.length>0 && data.map((el)=>{
        return  <div key={el.productId._id} className="wishmap">
          <button onClick={()=>deleteWish(el._id)} className='wishfirstbtn'>X</button>
         <div className='wishaboveimg'>
         <img src={el.productId.imageSrc} alt="" />
         <div className='wishlistlbimg'>
          <div className='wishlistrate'>
         <span className='wishlisttetext'>{el.productId.rating}</span>
         <span><AiFillStar className='wishlisticon' /></span></div>
         <br /> 
         <h4 className='wishlistbrand'>{el.productId.brand}</h4>
         <h4 className='wishlistdesc'>{el.productId.description}</h4>
         <span className='wishlistprice'>Rs.{el.productId.price}</span></div>
         <button   onClick={() => abc(el.productId._id,el._id)} className='wishbtn'>Move to Bag</button></div>
         </div>})}</div>
    </div>
  )
}
