import React, { Component } from "react";
import CompDisp from "./CompDispClass";
import Compinput from "./CompInputClass";

class CompBodyClass extends Component {
  state = { number: 3, name: "주선", age: 22 }; //state변수를 disp클래스에게 넘겨주기
  // 아래처럼 하면 state를 통째로 담아서 disp에게 넘김
  setStateFunc = (value) => {
    this.setState({ number: value });
  };

  // lifecycle method****
  // 화면을 최초로 렌더링할 때, 중간에 데이터가 변경되었을 때
  // 데이터가 변경되어 재 rendering되었을 때 각 순간순간 내부에서 호출되는 method 들
  // 거의사용안함
  componentDidCatch() {}

  // 첫번째(최초) 렌더링이 수행 된 후 호출되는 method
  // 서버로부터 ajax등을 이용하여 데이터를 가져오는 코드를 작성하는 곳
  // 컴포넌트들이 서로 연결되는 구조일 때 연결이 다 된 후
  componentDidMount() {
    console.log("DidMount");
  }

  //어떤 작업이 실행되기 직전에 호출
  // db를 연결하거나 하는 작업이 중간에 있었을 경우 연결을 종료하거나 하는 리소스를 제거하는 코드를 작성
  componentWillUnmount() {}

  // state변수가 변경되고 호출되는 method
  // preprops, prestate 두개의 매개변수 받을 수 있다
  componentDidUpdate(preProps, preState) {
    // this.props와 preprops를 비교하는 코드를 작성할 수 있는데
    // this.state는 props값을 전달받은 후 저장된 값이다.
    // preprops는 props값 전달받기 전 값이 저장되어 있다.
    // this.state : state 변수가 변경된 후 값이 저장
    // prestate : state 변수가 변경되기 전의 값이 저장되어있음
  }

  // 만약 state변수가 변경되었는데 어떻게 할래? 를 결정하는 method
  shouldComponentUpdate(prePrps, preState) {
    // pre와 this값 비교하여 변경이 이루어졋으면 return true하고
    // 그렇지 않으면 return false 수행할 수 있다.
    return true;
  }

  render() {
    return (
      <div>
        <CompDisp stateVar={this.state} />
        <Compinput setStateFunc={this.setStateFunc} />
      </div>
    );
  }
}

export default CompBodyClass;
