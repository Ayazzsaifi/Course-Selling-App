const {Router} =require("express")
const{adminModel}= require("../db")

const router = Router();
router.post("/signUp",function(req,res){})

router.post("/signin",function(req,res){})

router.post("/Course",function(req,res){})

router.put("/course",function(req,res){})

router.get("/course/bulk",function(req,res){})

router.delete("/course",function(req,res){})



module.exports=router;