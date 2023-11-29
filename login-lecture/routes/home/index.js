"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");

//1. 컨트롤러 합쳐져있는거
// router.get("/", (req,res)=>{
//     res.render("home/index");
// });

// router.get("/login",(req, res)=>{
//     res.render("home/login");
// });

//2. 컨트롤러 외부로 분리
router.get("/", ctrl.home);

router.get("/login",ctrl.login);


//외부에서 사용 가능하게 내보내기
module.exports = router;