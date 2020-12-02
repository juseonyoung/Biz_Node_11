import React, { Component } from "react";

class CompDispClass extends Component {
  render() {
    const { stateVar } = this.props; //props로부터 state변수꺼내고
    const { number } = stateVar; //그 state에서 number라는 개별변수 추출
    const { age } = stateVar;
    const { name } = stateVar;
    return (
      <div>
        <h3>
          {name}
          {number}와 20 합 :{number + 20}
        </h3>

        <h3>
          {number}와 나이{age}의 합 :{number + age}
        </h3>

        <h3>
          {number}의 제곱 : {number * number}
        </h3>
      </div>
    );
  }
}

export default CompDispClass;
