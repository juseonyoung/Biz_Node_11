import React, { useState } from "react";
import "../css/Phoneinsert.css";

const Phoneinsert = ({ insertPhoneBook }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const save = (e) => {
    insertPhoneBook(name, number); // 보내고 나서 입력박스를 클리어 시킴
    setName("");
    setNumber("");
  };
  const inputName = (e) => {
    setName(e.target.value);
  };
  const inputNumber = (e) => {
    setNumber(e.target.value);
  };

  return (
    <form className="Phoneinsert">
      <input
        placeholder="이름을 입력하세요"
        value={name}
        onChange={inputName}
      ></input>

      <input
        placeholder="전화번호를 입력하세요"
        value={number}
        onChange={inputNumber}
      ></input>
      <button onClick={save} type="button">
        {" "}
        저장
      </button>
    </form>
  );
};

export default Phoneinsert;
