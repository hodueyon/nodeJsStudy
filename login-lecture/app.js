// //2. non exporess 프레임웍으로 서버띄우기
// //http -> 한글 파싱도 하고 코드는 더러워용
// const http = require("http"); //내장모듈이라 npm안해도댐
// const app = http.createServer((req, res)=>{
//     //한글설정
//     res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});

//     if(req.url === "/"){
//         res.end("여기는 루트입니둥");
//     }else if(req.url === "/login"){
//         res.end("여기는로그인입니둥");
//     }
// });

// app.listen(3001, ()=>{
//     console.log("http로 구동된 서버랍니당");
// });



//1.익스프레스로 서버띄우기 - 깔끔
//모듈
const express = require('express');
const app = express();
//라우팅
const home = require("./routes/home");

//express -> 서버모듈

//앱세팅
app.set("views", "./views");
app.set("view engine", "ejs"); //html과 비슷한 뷰 엔진 ejs //쓰려면 npm install ejs -s해줘야함

//!!!!! 이 아래 코드는 router로 이동합니당
// app.get("/", (req,res)=>{
//     //1)하드코딩 
//     //res.send(`<!DOCTYPE html>
//         // <html lang="ko">
//         // <head>
//         //     <meta charset="UTF-8">
//         //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         //     <title>Document</title>
//         // </head>
//         // <body>
//         //     여기는 루트입니두.
//         // </body>
//         // </html>`);

//         //2)페이지 경로로 보내기
//         res.render("home/index");
// });

// app.get("/login",(req, res)=>{
//     res.render("home/index");
// });

//라우터에서 받아온거 꺼내기

app.use("/", home); //use -> 미들웨어를 등록해주는 메서드

///서버띄우기 3000번 포트로 열어달라 -> 두번쨰 파라메터는 콜백함수
// npm install express -s or express --save 이건 룰임

module.exports = app;
//npm init  //npm init -y //npm js 홈페이지 참고
