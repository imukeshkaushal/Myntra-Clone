
const mongoose=require("mongoose")

const productSchema = mongoose.Schema({
    category:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    imageSrc:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
},{
    versionKey:false,
})

const ProductModel = mongoose.model("product",productSchema)

module.exports={ProductModel}