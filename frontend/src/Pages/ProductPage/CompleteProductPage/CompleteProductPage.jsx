import { Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

import ProductGallary from '../ProductGallary/ProductGallary'
import SideBar from '../SideBar/SideBar'
import "./CompleteProductPage.css"
export default function CompleteProductPage() {
  const [searchParams,setSearchParams]= useSearchParams();
  const initialState4 = searchParams.getAll("rating");
  const initialState5= searchParams.getAll("pHL");
  const initialState6 = searchParams.getAll("pLH");


const [rating,setRating]=useState(initialState4 || Array[1]);
const [pHL,setPHL]=useState(initialState5 || Array[1]);
const [pLH,setPLH]=useState(initialState6 || Array[1]);
  
const  gender  =  searchParams.getAll("gender");
const category  =  searchParams.getAll("category");
const brand= searchParams.getAll("brand");


const changeHandler=(e)=>{

  var nrate= [...rating];
  var npLH= [...pLH];
  var npHL= [...pHL];
  if(e.target.value=="Customer Rating"){
     nrate.push(-1)
     setRating(nrate)
     npHL.length=0;
     npLH.length=0;
     setPHL(npHL);
     setPLH(npLH)
  }
  else if(e.target.value=="Price: Low to High"){
     npLH.push(1)
     setPLH(npLH)
     nrate.length=0;
     npHL.length=0;
      setRating(nrate);
     setPHL(npHL);
  }
  else if(e.target.value=="Price: High to Low"){
      npHL.push(-1)
      setPHL(npHL);
      nrate.length=0;  
      npLH.length=0;
      setRating(nrate);
      setPLH(npLH)
  }
  else if(e.target.value=="Recommended"){
    nrate.length=0;
    npHL.length=0;
    npLH.length=0;
    setRating(nrate);
    setPHL(npHL);
    setPLH(npLH)
  }
}
// const clearHandler=()=>{
// category.length=0;
// brand.length=0;
// gender.length=0
// const params={category,brand,gender}
// setSearchParams(params)
// }






useEffect(()=>{
  const params={
    rating,pHL,pLH,gender,brand,category }
  setSearchParams(params)
},[rating,pHL,pLH])


  return (
    <div >
      <div className='compmaindiv'>
              <span className='compfilter'>FILTERS</span>
{/* {(gender.length!=0 && category.length!=0 || brand.length!=0)?<button onClick={clearHandler}>CLEAR ALL</button>:""} */}

       <div className='compdiv'>
        
        <div>
        <span>Sort by:</span></div>
        <div>
        <select name="Sort By" onChange={changeHandler} className="compselect">
            <option value="Recommended" className='compopt' > Recommended</option>
            <option   className='compopt' >Price: High to Low</option>
            <option  className='compopt' >Price: Low to High</option>
             <option  className='compopt' >Customer Rating</option>
             {/* <option >Popular</option> */}

        </select></div></div> </div>
   
    <div className='compMain'>
      <div className='sidecomp'>
        <SideBar/></div>
      <div className='prodcomp'>
        <ProductGallary/></div>
    </div> </div>
  )
}
