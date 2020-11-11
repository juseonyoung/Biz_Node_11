import React, { useState } from "react";

// onClickSave 라는 함수의 실제 사용은
// insert 컴포넌트에서 실행하기 (파사드함수..)
const PhoneInsert = ({ onClickSave }) => {
  const [phone, setPhone] = useState({ id: "", name: "", number: "" });
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  /*
  React 에서 input box의 처리
  HTML에서는 input box에 name(path) 속성을 지정하여 변수를 만들고 
  키보드로 문자열을 입력하면 입력된 문자열을 변수에 저장하고 저장버튼을 클릭하면 서버로 데이터를 전송하는 형식이엇다
  하지만 리액트에서는 키보드에서 입력한 문자열을 이미 선언된 state 변수에 담아서 
  어디론가 필요한 곳으로 이동하는방식을 사용한다 일반적으로 변수(state)를 직접 수정 ,변경 하지 못한다
  
  React에선 input box에 onChange 이벤트 설정하여 그 이벤트가 발생할 때 사용자가 키보드로 입력한 문자열을
  State변수에 저장해주는 코드를 작성해야 한다. 

  input box에 클릭을 하고 키보드로 문자를 입력하면 한 글자마다 (e)매개변수의 e.target.value 값에 일단 저장된다
  e.target.value 값에 저장된 문자열을 setName() 함수를 통하여 name state변수에 저장을 해 준다.

  */
  const nameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const numberChange = (e) => {
    setNumber(e.target.number);
  };

  /*
  onClick(또는 여러가지 이벤트) 핸들러 함수를 parents 컴포넌트로부터 전달받아 사용할 때 그냥
  단순한 이벤트 핸들러라면 onclick={onclick} 처럼 사용하면 된다
  이벤트 핸들러에 어떤 값을 전달하여 그 값으로 무언가 연산을 수행하도록 하려면 
  ({전달하고자 하는 변수}) => onClick(전달하고자 하는 변수) 형식으로 사용해야 한다. 

  만약 이벤트핸들러를 사용할 때 onclick={onclicksave(name, number)} 와 같이 사용하면
  화면이 렌더링될 때 수시로 onclicksave() 함수가 실행되어 리액트가 폭주하는 현상이 발생한다. 
  함수를 만들고 그 함수 내에서 다시 이벤트 핸들러 호출하는 2중함수 방식으로 코딩을 해야 한다. 
  
  */
  return (
    <form>
      <input placeholder="이름" value={name} onChange={nameChange} />
      <input placeholder="전화번호" value={number} onChange={numberChange} />
      <button
        onClick={({ name }, { number }) => onClickSave(name, number)}
        type="button"
      >
        저장
      </button>
    </form>
  );
};

export default PhoneInsert;
