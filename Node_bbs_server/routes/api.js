// es 2015 이상의 문법
// import express from "express"; 현재  노드제이에스가 지원하는 문법!
const express = require("express"); // express이용해 라우터 객체 만들기
const { route } = require(".");
const router = express.Router();
// 폴더에 index.js 파일이 있을 경우 폴더를 require()하면 index.js파일이 읽히게 된다.
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

  bbsDao
    .findAll({ order: [["b_date_time", "DESC"]] })
    .then((bbsList) => {
      res.json(bbsList);
    })
    .catch((err) => {
      res.json(err);
    });
  //res.json(list);
});

router.post("/insert", (req, res) => {
  //api/insert
  // 웹 브라우저로부터 데이터 전달받기
  // ?변수=값 : req,query.변수
  // /:변수 : req.params.변수
  // form의 input tag에서 name으로 설정된 변수 : req.body.변수
  // ajax를 통해서 전달받은 데이터 : req.body.변수
  bbsDao
    .create({
      b_writer: req.body.b_writer,
      b_date_time: Date().toString(),
      b_subject: req.body.b_subject,
      b_content: req.body.b_content,
    })
    .then((result) => {
      //res.json(result);
      res.redirect("/api/bbsList");
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/view", (req, res) => {
  //view?id=값
  const b_id = req.query.id;
  bbsDao
    .findOne({
      where: { b_id: Number(b_id) },
    })
    .then((result) => {
      res.json(result);
    });
});

router.get("/view/:id", (req, res) => {
  //view/값
  const b_id = req.params.id;
  bbsDao
    .findOne({
      where: { b_id: Number(b_id) },
    })
    .then((result) => {
      res.json(result);
    });
});

router.post("/update/:id", (req, res) => {
  const b_id = req.params.id;
  bbsDao
    .update(
      {
        b_writer: req.body.b_writer,
        b_subject: req.body.b_subject,
        b_content: req.body.b_content,
      },
      { where: { b_id: Number(b_id) } }
    )
    .then((result) => {
      res.redirect("/api/bbsList");
    })
    .catch((err) => {
      res.json(err);
    });
});

router.delete("/delete/:id", (req, res) => {
  const b_id = req.params.id;
  bbsDao
    .destroy({
      where: { b_id: Number(b_id) }, //Number써서 형 맞춰주는 게 좋다
    })
    .then((result) => {
      res.redirect("/api/bbsList");
    });
});

module.exports = router;
