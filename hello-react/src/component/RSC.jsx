import React from "react";

function myfunc1() {
  return <div></div>;
}

function myfunc2() {
  return <div></div>;
}

// react에서 기본적으로 제공하는 여러 컴포넌트와 충돌 방지 위해
// 사용자가 정의하는 컴퓨넌트는 첫글자를 대문자로 작성한다
const RSC = () => {
  return <div></div>;
};

export default RSC;
