const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const api = require("./routes/api.js"); // api라는 라우터 사용하기 위해 import함

// nodejs 를 express 프레임워크로 감싼 서버 프로젝트를 생성하는 코드

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// use.. 슬래쉬로 리퀘스트 요청하면 indexrouter에게 제어권을 넘겨서 처리하게 하겟다
app.use("/", indexRouter);
// http://localhost:3000/api/* 라고 요청을 하면!
app.use("/api", api);
//
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {}; // 메시지와 에러를 세팅

  // render the error page
  res.status(err.status || 500);
  res.render("error"); // error.ejs파일을 읽어서 ..
});

module.exports = app;
