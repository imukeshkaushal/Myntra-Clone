import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import "./SideBar.css"
export default function SideBar() {
 const [searchParams,setSearchParams]= useSearchParams();
 const initialState1 = searchParams.getAll("gender");
 const initialState2 = searchParams.getAll("category");
 const initialState3 = searchParams.getAll("brand");


const [gender,setGender]=useState(initialState1 || []);
const [category,setCategory]=useState( initialState2 || []);
const [brand,setBrand]=useState(initialState3 || []);



const handleCheck1=(e)=>{
   const newgender = [...gender]
if(e.target.value=="Men"){
    if(newgender.length==1){
        newgender.pop();
        newgender.push(e.target.value)
    }else{
        newgender.push(e.target.value)
    }
 }
 else{
    if(newgender.length==1){
        newgender.pop();
        newgender.push(e.target.value)
    }else{
        newgender.push(e.target.value)
    }
    
 }

    // if(newgender.includes(e.target.value)){
    //      newgender.splice(newgender.indexOf(e.target.value),1)
    // }
    // else{
    //     newgender.push(e.target.value)
    // }
    setGender(newgender)
}


const handleCheck2=(e)=>{
    const newcategory = [...category]
     if(newcategory.includes(e.target.value)){
          newcategory.splice(newcategory.indexOf(e.target.value),1)
     }
     else{
         newcategory.push(e.target.value)
     }
     setCategory(newcategory)
 }



 const handleCheck3=(e)=>{
    const newbrand = [...brand]
     if(newbrand.includes(e.target.value)){
          newbrand.splice(newbrand.indexOf(e.target.value),1)
     }
     else{
         newbrand.push(e.target.value)
     }
     setBrand(newbrand)
 }



 





useEffect(()=>{
    const params={
        gender,
        category,
        brand}
    setSearchParams(params)
},[category,gender,brand])

// const gen = ["Men","Women"]

  return (
    <div className='sidemain'>
<div className='check1'>
      
        <div>
<input type="radio" name='Gender'  value="Men" onChange={handleCheck1}  checked={gender.includes("Men")}/>
    <label htmlFor="">Men</label></div>

    <div>
<input type="radio" name='Gender' value="Women" onChange={handleCheck1}   checked={gender.includes("Women")}/>
    <label htmlFor="">Women</label></div>
 </div>

<div className='check2'>
<h1 className='sidehead'>CATEGORIES</h1>

    <div>
<input type="checkbox"  value="Shirts" onChange={handleCheck2}   checked={category.includes("Shirts")}/>
    <label htmlFor="">Shirts</label></div>

    <div>
<input type="checkbox" value="Jeans" onChange={handleCheck2}   checked={category.includes("Jeans")}/>
    <label htmlFor="">Jeans</label></div>

    <div>
<input type="checkbox" value="Shoes" onChange={handleCheck2}  checked={category.includes("Shoes")} />
    <label htmlFor="">Shoes</label></div>
    </div>



    <h1 className='sidehead' >BRAND</h1>

    
    <div>
<input type="checkbox"  value="Puma" onChange={handleCheck3}  checked={brand.includes("Puma")}/>
    <label htmlFor="">Puma</label></div>

    <div>
<input type="checkbox" value="Skechers" onChange={handleCheck3}  checked={brand.includes("Skechers")} />
    <label htmlFor="">Skechers</label></div>

    <div>
<input type="checkbox" value="Nike" onChange={handleCheck3}   checked={brand.includes("Nike")}/>
    <label htmlFor="">Nike</label></div>



    <div>
<input type="checkbox"  value="Van Heusen" onChange={handleCheck3}  checked={brand.includes("Van Heusen")}/>
    <label htmlFor="">Van Heusen</label></div>

    <div>
<input type="checkbox" value="Allen Solly" onChange={handleCheck3}  checked={brand.includes("Allen Solly")} />
    <label htmlFor="">Allen Solly</label></div>

    <div>
<input type="checkbox" value="Hancock" onChange={handleCheck3}  checked={brand.includes("Hancock")} />
    <label htmlFor="">Hancock</label></div>


    <div>
<input type="checkbox"  value="Pepe Jeans" onChange={handleCheck3} checked={brand.includes("Pepe Jeans")} />
    <label htmlFor="">Pepe Jeans</label></div>

    <div>
<input type="checkbox" value="Jack & Jones" onChange={handleCheck3}  checked={brand.includes("Jack & Jones")} />
    <label htmlFor="">Jack & Jones</label></div>

    <div>
<input type="checkbox" value="SPYKAR" onChange={handleCheck3}  checked={brand.includes("SPYKAR")} />
    <label htmlFor="">SPYKAR</label></div>

    <div>
<input type="checkbox" value="Louis Philippe" onChange={handleCheck3}  checked={brand.includes("Louis Philippe")} />
    <label htmlFor="">Louis Philippe</label></div>
    <div>
    <input type="checkbox" value="Levis Jeans" onChange={handleCheck3}  checked={brand.includes("Levis Jeans")} />
    <label htmlFor="">Levis Jeans</label></div>







    
    
    </div>
  )
}




// mongoURL=mongodb+srv://charchit:charchit@cluster0.wkxql.mongodb.net/myntra?retryWrites=true&w=majority