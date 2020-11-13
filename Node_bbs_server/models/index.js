const path = require("path");
const Sequelize = require("sequelize");

// .. 누르면 상위로
// *.json 파일로 설정값 만들어두고 불러와서 사용하는 방법

const configPath = "../config/config.json";

const mysqlConfig = require(configPath)["mysql"];

const seqDB = new Sequelize(
  mysqlConfig.database,
  mysqlConfig.username,
  mysqlConfig.password,
  mysqlConfig
);

const db = {};
db.sequelize = seqDB;
db.DataTypes = Sequelize;
db.bbsDao = require("./tbl_bbs")(seqDB, Sequelize);

module.exports = db;
