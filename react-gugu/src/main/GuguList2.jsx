import React from "react";

function GuguList2({ number }) {
  // 숫자 0으로 초기화된 10개 배열생성
  // map 이용하여 반복문 구현하려면 반드시 fill() 사용!
  // 각 요소를 초기화 해 준다.

  const gugus = Array(9).fill(0);

  // index이용
  // index는 0부터 시작하므로 +1해준다
  const guguMaps = gugus.map((item, index) => {
    return (
      <div>
        {number} * {index + 1} = {number * (index + 1)}
      </div>
    );
  });
  return <div>{guguMaps}</div>;
}

export default GuguList2;
