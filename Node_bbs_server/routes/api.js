// es 2015 이상의 문법
// import express from "express"; 현재  노드제이에스가 지원하는 문법!
const express = require("express"); // express이용해 라우터 객체 만들기
const router = express.Router();
const { bbsDao } = require("../models/index");

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

  bbsDao.findAll({ order: ["b_date_time"] }).then((bbsList) => {
    res.json(bbsList);
  });
  //res.json(list);
});

router.get("/insert", (req, res) => {
  //api/insert
  bbsDao
    .create({
      b_writer: req.query.writer || "김하성", //api/insert?writer=값
      b_date_time: Date().toString(),
      b_subject: "게시판작성",
      b_content: "게시판작성 ????",
    })
    .then((result) => {
      //res.json(result);
      res.redirect("/api/bbsList");
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
