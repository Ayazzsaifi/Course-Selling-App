const {Router} =require("express")
const{adminModel, courseModel}= require("../db")
const bcrypt=require("bcrypt")
const zod=require("zod")
const jwt=require("jsonwebtoken")
const adminMiddleware = require("../middleware/authAdmin")
const JWT_ADMIN_PASSWORD=process.env.JWT_ADMIN_PASSWORD

const router = Router();
router.post("/signUp",async function(req,res){
    const firstName= req.body.firstname
    const lastName= req.body.lastname
    const email= req.body.email
    const password= req.body.password
    const userExist=await adminModel.findOne({email})
    if(!userExist){
        const hashedPassword=await bcrypt.hash(password,10);
        const newUser=await adminModel({firstName:firstName, lastName:lastName, password:hashedPassword, email:email})
        newUser.save()
        res.json({message:"Signup successful"})
    }
    
    else{
        return res.json({error:"User already exists"})
    }
})

router.post("/signin",async function(req,res){
    const email=req.body.email;
    const password= req.body.password;
    const UserExist=await adminModel.findOne({email})
    if(!UserExist){
        res.json({error:"User not found"});
    }
    else{
        const passwordValid=await bcrypt.compare(password,UserExist.password)
        if(!passwordValid){
            res.json("incorrect password")
        }
        else{
            const token=jwt.sign({id:UserExist._id},JWT_ADMIN_PASSWORD,{expiresIn:"7d"})
            res.json({token:token})
        }
    }
})


router.post("/course",adminMiddleware,async function(req,res){
    const adminId=req.adminId
    const {title,description,price,imageUrl} = req.body
    const newCourse= await courseModel({title:title,description:description,price:price,imageUrl:imageUrl,creatorId:adminId})
    newCourse.save();
    res.json({message:"Course Created",
        courseId:newCourse._id
    })
})

router.put("/course",adminMiddleware,async function(req,res){
    const adminId = req.adminId;
    const { title, description, price, imageUrl, courseId } = req.body;
    
    try{
        const updatedCourse=await courseModel.findOneAndUpdate(
            {_id:courseId,creatorId:adminId},
            { title, description, price, imageUrl },
            {new:true}
        );
        if(!updatedCourse){
            return res.status(404).json({error:"Course not found"});
        }
        res.json({message:"course Updated",
            courseId:updatedCourse._id
        })
    }
    catch(error){
        res.status(500).json({error:"Internal server Error"})
    }
})

router.get("/course/bulk",adminMiddleware,async function(req,res){
    const adminId=req.userId
    const courses=await courseModel.findOne({CretorId:adminId})
    res.json({courses})
})

module.exports=router;