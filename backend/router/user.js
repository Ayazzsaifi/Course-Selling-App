const express=require("express");
const router=express.Router();
const bcrypt=require("bcrypt");
const {userModel} =require("../db")
const {purchaseModel}= require("../db")



router.post("/signup",async function(req,res){
    const name =req.body.name
    const email=req.body.email
    const password=req.body.password
    const hashedPassword=await bcrypt.hash(password,(10))

})



router.post("/signin",function(req,res){
    const email=req.body.email
    const password=req.body.password
    const validPassword=bcrypt.compare(password)
})


router.get("/Courses",function(req,res){})


router.post("/purchase",function(req,res){})

router.get("/preview",function(req,res){})

module.exports=router;