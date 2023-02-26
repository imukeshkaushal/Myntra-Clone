
import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./Product.actionType";


import axios from "axios"




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
      axios.get("https://periwinkle-centipede-garb.cyclic.app/products",paramObj)
      .then((res)=>dispatch(getProductSuccessAction(res.data)))
      .catch((err)=>dispatch(getProductFailureAction()))
}