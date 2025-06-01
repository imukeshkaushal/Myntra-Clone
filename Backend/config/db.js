
const mongoose=require("mongoose")

require("dotenv").config()

// const connection= mongoose.connect(process.env.mongoURL)
const connection= mongoose.connect('mongodb+srv://arpitjain2444:arpitjain@cluster0.qxqtwz1.mongodb.net/myntra')
module.exports={connection}
