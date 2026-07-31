const {Router} =require("express")
const{adminModel}= require("../db")
const bcrypt=require("bcrypt")
const zod=require("zod")
const jwt=require("jsonwebtoken")
const JWT_SECRET=process.env.JWT_SECRET

const router = Router();
router.post("/signUp",async function(req,res){
    const firstName= req.body.firstname
    const lastName= req.body.lastname
    const email= req.body.email
    const password= req.body.password
    const UserExist=await adminModel.findOne({email})
    if(email){
        res.json({error:"User Exist with this email"})
    }
    
    else{
        const hashedPassword=await bcrypt.hash(password);
        const newUser=await adminModel({firstName:firstName, lastName:lastName, password:hashedPassword, email:email})
        newUser.save()
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
        const passwordValid=bcrypt.compare(password,UserExist.password)
        if(!passwordValid){
            res.json("incorrect password")
        }
        else{
            const token=jwt.sign({id:UserExist._id},JWT_SECRET,{expiresIn:"7d"})
            res.json({token:token})
        }
    }
})


router.post("/course",function(req,res){})

router.put("/course",function(req,res){})

router.get("/course/bulk",function(req,res){})


module.exports=router;