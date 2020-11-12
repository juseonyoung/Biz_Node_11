import React, { Component } from "react";

class BuckInsert extends Component {
  /*
  input box에서 사용자의 입력을 받아 저장할 state 변수를 선언

  */
  state = {
    bucket_title: "",
  };

  handleOnChange = (e) => {
    this.setState({ bucket_title: e.target.value });
    // input 박스가 여러개 일 경우
    // input box에 state변수명을 name 속성으로 지정하라
    // <input name ="bucket_title"/>
    // 아래와 같이 변수값을 세팅한다 이렇게 쓰려면
    // 밑에 input 밑에 name="bucket_title" 넣어줘야함
    // this.setState({ [e.target.name] : e.target.value })
  };

  // 키보드로 문자열을 입력하는 도중 enter키를 누르면
  //
  handleKeyPress = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      // const { bucketInsert } = this.props;

      // props, state를 분해하지 않고 직접 핸들링 하는 방법
      //this.props.bucketInsert(this.state.bucket_title);

      const { bucketInsert } = this.props;
      const { bucket_title } = this.state;
      bucketInsert(bucket_title);
    }
  };

  render() {
    return (
      <section className="w3-container-fluid">
        <div className="w3-form-control w3-margin">
          <input
            value={this.state.bucket_title}
            onChange={this.handleOnChange}
            onKeyPress={this.handleKeyPress}
            className="w3-input w3-border w3-hover-gray w3-round"
            placeholder="버킷을 추가해 주세요"
          />
        </div>
      </section>
    );
  }
}

export default BuckInsert;
