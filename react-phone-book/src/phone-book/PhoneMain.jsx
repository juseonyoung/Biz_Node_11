import React, { useState } from "react";
import PhoneInsert from "./PhoneInsert";
import PhoneList from "./PhoneList";

const PhoneMain = () => {
  const [phoneBook, setPhoneBook] = useState([
    { id: 1, name: "몽룡 :", number: "010-2323" },
    { id: 2, name: "문빈 :", number: "010-9595" },
    { id: 3, name: "무 :", number: "010-0000" },
  ]);
  return (
    <>
      <PhoneInsert />
      <PhoneList phoneBook={phoneBook} />
    </>
  );
};

export default PhoneMain;
