// es 2015 이상의 문법
// import express from "express"; 현재  노드제이에스가 지원하는 문법!
const express = require("express"); // express이용해 라우터 객체 만들기
const router = express.Router();

router.get("/", (req, res) => {
  //res.send("반갑습니다");

  res.render("index", { data: "data" }); //이렇게 실어서 보낼수도 잇음 /index 보내면 데이터에 "데이터" 문자 실어서 보내기
}); // 누군가가 슬래시로 요청하면

router.get("/bbsList", (req, res) => {
  //api/bbsList
  // req 리퀘스트객체에 리스트에 담긴 모든것이 담겨잇음
  const list = [
    { id: 0, write: "김하성", subject: "게시판" },
    { id: 1, write: "이마크", subject: "게시판" },
    { id: 2, write: "정재현", subject: "게시판" },
  ];
  res.json(list);
});

module.exports = router;
