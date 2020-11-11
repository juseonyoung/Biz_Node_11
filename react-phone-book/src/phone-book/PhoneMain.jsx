import React, { useState, useRef } from "react";
import PhoneInsert from "./PhoneInsert";
import PhoneList from "./PhoneList";

const PhoneMain = () => {
  const [phoneBook, setPhoneBook] = useState([
    { id: 1, name: "몽룡 :", number: "010-2323" },
    { id: 2, name: "문빈 :", number: "010-9595" },
    { id: 3, name: "무 :", number: "010-0000" },
  ]);

  // onclicksave 함수
  const onClickSave = () => {
    //window.alert("저장버튼이 클릭됨");
    setPhoneBook([
      ...phoneBook,
      { id: phoneId.current++, name: { name } },
      { number: { number } },
    ]);
  };
  /*
  useRef(초기값) 함수를 사용하여 Ref 객체를 선언하면 current 라는 속성이 자동으로 생성되고
  초기화된다. 
  변수.current 속성은 state 변수와 달리 아무곳에서나 변수의 값을 수정할 수 있다.
  Ref 객체는 값이 변경되더라도 react 에서 재 렌더링을 하지 않는다. 

  */

  const phoneId = useRef(4);

  /*
  child component 에 변수와 함수 전달하기 
  변수와 함수를 전달하는 방법은 같은방법으로 하면 전달할 변수=[값] , 전달할 이름=[함수이름]

  parent component에서 선언된 state 변수를 child로 전달을 하게 되면
  child에서는 readonly 상태가 되어 변수를 변경할 수 없게 된다. 
  변수를 변경하려면 변경하는 함수를 전달하고 그 함수를 실행하도록 코딩한다. 
  React 패턴, facade 패턴

  */
  return (
    <>
      <PhoneInsert onClickSave={onClickSave} />
      <PhoneList phoneBook={phoneBook} />
    </>
  );
};

export default PhoneMain;
