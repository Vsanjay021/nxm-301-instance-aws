const express=require("express");

const app=express();

app.get("/home",(req,res)=>{
    res.send("Welcome to server 1")
})

app.listen(3000,()=>{
    console.log("Connected to server")
})