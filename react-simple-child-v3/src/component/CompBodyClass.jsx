import React, { Component } from "react";
import CompButton from "./CompButtonClass";
import CompCount from "./CompCountClass";

class CompBodyClass extends Component {
  // 클래스 타입의 component에서는 state키워드를 사용하여
  // state 변수를 선언한다.

  state = { count: 0 }; //state 변수 초기값 지정하려면 JSON 객체형식으로 작성한다.

  // 카운트라는 state변수 만들고
  // 이 함수를 변화시키는 두개의 함수(증가,감소) 만듦
  setCountIncrement = () => {
    //클래스 타입의 컴포넌트에서는 state변수를 변경할 때
    // this.setState() 라는 내부 method 사용해야 한다.
    this.setState({ count: this.state.count + 1 });
  };

  setCountDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  // 클래스 타입에서 state 변수를 child 컴포넌트에 전달할 때
  // 변수명={this.state.state변수} 이런식으로 보내야 한다.
  render() {
    return (
      <div>
        <CompCount countArg={this.state.count} />
        <CompButton
          incFunc={this.setCountIncrement}
          decFunc={this.setCountDecrement}
        />
      </div>
    );
  }
}

export default CompBodyClass;
