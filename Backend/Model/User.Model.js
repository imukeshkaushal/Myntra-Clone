
const mongoose=require("mongoose")

const userSchema = mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    gender: {
        type: String,
        enum: ["male", "female", "others"],
        required: true,
      },
    password:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    }
},{
    versionKey:false,
})

const UserModel = mongoose.model("User",userSchema)

module.exports={UserModel}