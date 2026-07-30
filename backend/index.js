const dotenv=require("dotenv");
const express= require("express");
const { JsonWebTokenError } = require("jsonwebtoken");
const app=express();
app.use(express.json());
const jwt=require("JsonWebToken");
const bcrypt=require("bcrypt");




// auth middleware for User



// USER ROUTES

app.post("/register",function(req,res){
    const name =req.body.name
    const email=req.body.email
    const password=req.body.password
    const hashedPassword=bcrypt.hash(password,(10))

})



app.post("/signUp",function(req,res){
    const email=req.body.email
    const password=req.body.password
    const validPassword=bcrypt.compare(password)
})

app.get("/purchase",function(req,res){})

app.get("/courses",function(req,res){})



//auth middleware for Admin


// ADMIN ROUTES

app.post("/signUp/admin",function(req,res){})

app.post("/register/admin",function(req,res){})

app.put("create/admin",function(req,res){})

app.delete("delete/admin",function(req,res){})

app.post("addCourse/admin",function(req,res){})





app.listen(3000);