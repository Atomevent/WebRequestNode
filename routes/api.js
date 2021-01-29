
const express = require("express");
const router = express.Router();
let x = "s";
router.get("/f",(req,res)=>{
    x="f";
    console.log("f");
    res.send("forward");
});
router.get("/l",(req,res)=>{
    x="l";
    console.log("l");
    res.send("left");
});
router.get("/r",(req,res)=>{
    x="r";
    console.log("r");
    res.send("right");
});
router.get("/s",(req,res)=>{
    x="s";
    console.log("s");
    res.send("stop");
});
router.get("/state",(req,res)=>{
    console.log("return response")
    res.send(x);
})
module.exports = router;