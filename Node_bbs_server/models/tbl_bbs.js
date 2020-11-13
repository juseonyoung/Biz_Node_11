const tbl_bbs = (
  sequelize,
  DataTypes //하나면 받으려면 return 빼도됨
) =>
  sequelize.define(
    "tbl_bbs",
    {
      // define함수를 호출하ㅑ여 tbl_bbs 테이블을 만들겠다!

      b_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, //데이터가 증가하면 자동으로 숫자 늘려가면서 추가해라
      },
      b_date_time: { type: DataTypes.STRING(125), allowNull: false },
      b_writer: { type: DataTypes.STRING(25), allowNull: false },
      b_subject: { type: DataTypes.STRING(125), allowNull: false },
      b_content: { type: DataTypes.STRING(1000), allowNull: false },
      b_count: { type: DataTypes.INTEGER, defaultValue: 0 }, //널값허용
    },
    { timestamps: true }
  );

module.exports = tbl_bbs;
