import React, { useEffect, useState } from "react";
import CompInput from "./CompInput";
import CompDisp from "./CompDisp";

function CompBody(props) {
  const [number, setNumber] = useState(3);

  // 함수형 컴포넌트에서 라이프사이클 대신 사용하는 함수 useEffect!
  // 어떤 효과가 발생했을 때 !
  // 3가지 중 택1하여 사용

  // 1. 수시로 화면이 렌더링되거나 state 변수가 변경될 때 호출
  useEffect = () => {}; //함수 본체만잇는경우

  // 2.number state 변수가 변경되었을 때만 호출되는 함수(어떠한 변경되는 값.. localstorage)
  // state변수 감시하다가 변화 일어났을 때 렌더링
  useEffect(() => {}, number); // 함수 본체와 state 변수가 있는 경우

  // 3. 최초에 한번만 호출(한번만 호출되는 경우)
  useEffect(() => {}, []); // 함수 본체와 빈 배열이 있는 경우
  return (
    <div>
      <CompInput setNumber={setNumber} />
      <CompDisp number={number} />
    </div>
  );
}

export default CompBody;
