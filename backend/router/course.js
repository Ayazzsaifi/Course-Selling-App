const express= require("express");
const router=express.Router()
const{courseModel, purchaseModel} =require("../db");
const { route } = require("./user");
const UserMiddleware = require("../middleware/authUser");

router.post("/purchase", UserMiddleware, async function(req,res){
     const userId=req.userID;
        const courseId=req.body.courseId
        // add to check duplicate courses 
        // check user has actually paid or not 
        try{
        const purchaseCourse= await purchaseModel.create({
            userId:req.userID,
            courseId
        })
        res.json({message:"you have successfuly bought the course"})
    }
    catch(error){
        res.json({error:"Server problem"})
    }
})

router.get("/preview",async function(req,res){
    try{
       const courses= await courseModel.find({})
       res.json({courses})
    }
    catch(error){
        res.json({error})
    }
})

module.exports=router;



