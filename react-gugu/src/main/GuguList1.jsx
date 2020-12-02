import React from "react";

function GuguList1({ number }) {
  // 배열 수만큼 컴포넌트 생성
  const gugus = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const guguMaps = gugus.map((item, index) => {
    return (
      <div>
        {number} * {item} = {number * item}
      </div>
    );
  });

  return <div>{guguMaps}</div>;
}

export default GuguList1;
