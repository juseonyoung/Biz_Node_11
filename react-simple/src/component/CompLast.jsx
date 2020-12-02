import React, { useState } from "react";

// function CompLast(props) : ES6이전의 함수 선언방식
// const CompLast = function(props) :방법2
// const CompLast = (props) => : 최신의 화살표 함수 방식

// 이건 컴포넌트 선언
// 컴포넌트 이름을 대문자로 첫글자로 작성한다!
// react나 3rd party comp들의 이름과 충돌하는 것을 예방하고 개발자가 임의로 작성한 컴포넌트다 라는 것을 의미

const CompLast = (props) => {
  // 컴포넌트가 할일들

  // 1. state변수를 선언하기!
  // state변수란 상태변화 감지. 리액트가 변수 값의 변화를 감시하고 있다가 상태 변화가 일어나면
  // 변화된 값을 화면에 렌더링 하여 보여준다
  // useState(0) : state변수의 초기값을 0으로 세팅하여 생성하라 문자열 세팅은 ""안에
  // 하거나 객체 {id:0} 이런식으로도 생성가능

  // useState( {id:0, name:"홍길동" }) : 초기값을 id와 name속성으로 갖는 JSON객체로 하는 객체변수선언
  // useState ( [] ) : 초기값을 비어있는(내용이 없는) 배열형 변수로 선언
  const [count, setCount] = useState(0);

  // count state변값을 1씩 증가시키는 코드
  // state변수는 절대 직적 값을 변경해서는 안된다.
  // count++ 형식으로 절대 작성금지
  const increment = () => {
    // count 변수에 담긴 값에 +1을 수행하고 count state 변수를 교체하라
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  // state 변수를 render code에서 사용할 때
  // {변수명} 형식으로 사용한다.
  // 그런데 class 방식의 컴포넌트에서는
  // {this.state.변수명} 형식으로 사용을 해야 한다.
  // const {변수명} = this.state로 비규격화하여 변수를 별도로 선언하고
  // {변수명} 형식으로 사용해야 한다.
  return (
    <div>
      <h3>카운트 : {count}</h3>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
    </div>
  );
};
// 생성된 컴포넌트를 다른 컴포넌트에서 import하여 사용할수있도록 선언
export default CompLast;
