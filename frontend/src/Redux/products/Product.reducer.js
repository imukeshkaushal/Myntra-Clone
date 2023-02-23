import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./Product.actionType"

const productInitialState= {
product:[],
isLoading:false,
isError:false
}

export const reducer = (state=productInitialState,{type,payload})=>{
    switch(type){
        case GET_PRODUCT_REQUEST:
            return {...state,isLoading:true}
        case GET_PRODUCT_SUCCESS:
            return {...state,isLoading:false,product:payload}
        case GET_PRODUCT_FAILURE:
            return {...state,isLoading:false,isError:true}
        default:
        return state
    }
}