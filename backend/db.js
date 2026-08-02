const mongoose = require("mongoose");
const Schema=mongoose.Schema
const onbectId=mongoose.Types.ObjectId;
mongoose.connect(process.env.MONGO_URI)


const userSchema =new  Schema({
    email: { type: String, unique: true },
    password: String,
    firstName:String,
    lastName: String
})

const adminSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName:String,
    lastName: String
})

const courseSchema =new  Schema({
    title:String,
    description:String,
    price:Number,
    imageUrl:String,
    creatorId:{type:mongoose.Schema.Types.ObjectId,ref:'admin'}
})


const purchaseSchema=new Schema({
    courseId:{type:mongoose.Schema.Types.ObjectId,ref:'course'},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'user'}
})

// will add one more table called course table where i will add video 1 and assigment content


const userModel=mongoose.model('user',userSchema)
const adminModel=mongoose.model('admin',adminSchema)
const courseModel=mongoose.model('course',courseSchema)
const purchaseModel=mongoose.model('purchase',purchaseSchema)

module.exports={userModel,adminModel,courseModel,purchaseModel}