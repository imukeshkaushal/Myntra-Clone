
import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./Product.actionType";
// import * as dotenv from 'dotenv';
// dotenv.config()

import axios from "axios"
import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./Product.actionType"
require('dotenv').config();


const getProductRequestAction = ()=>{
   return {type:GET_PRODUCT_REQUEST}
}

const getProductSuccessAction=(payload)=>{
    return {type:GET_PRODUCT_SUCCESS,payload}
}

const getProductFailureAction=()=>{
    return {type:GET_PRODUCT_FAILURE}
}


export const getProduct =(paramObj)=> (dispatch)=>{
    dispatch(getProductRequestAction())
      axios.get("http://localhost:3004/posts",paramObj)
export const getProduct = (dispatch)=>{
    dispatch(getProductRequestAction())
      axios.get(env.process.getBackendProduct)
      .then((res)=>dispatch(getProductSuccessAction(res.data)))
      .catch((err)=>dispatch(getProductFailureAction()))
}