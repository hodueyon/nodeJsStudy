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
const express = require('express');
const app = express();

//express -> 서버모듈

app.get("/", (req,res)=>{
    //기능
    res.send("여기는 루트입니둥");
});

app.get("/login",(req, res)=>{
    res.send("여기는 로그인화면입니듕ㅋ");
})
///서버띄우기 3000번 포트로 열어달라 -> 두번쨰 파라메터는 콜백함수
// npm install express -s or express --save 이건 룰임
app.listen(3000, function(){
    console.log("서버가동");
});