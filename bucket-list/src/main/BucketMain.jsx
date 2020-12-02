import React, { Component } from "react";
import BucketInsert from "./BucketInsert";
import BucketList from "./BucketList";

class BucketMain extends Component {
  // id변수는 state가 아닌 일반형 변수
  // 코드내에서 자유롭게 값을 변경하여 사용할 수 있고 여기에서는
  // 버킷리스트의 b_id값의 PK값을 만들기 위해 사용한다.

  id = 1;
  // 리액트에서 state형 변수는 직접 변경하지 않는다
  state = {
    bucketList: [
      {
        b_id: 0,
        b_flag: 0,
        b_start_date: "2020-11-12",
        b_title: "리액트 정복!",
        b_end_date: "",
        b_end_check: false,
        b_cancle: false,
      },
      {
        b_id: 1,
        b_flag: 1,
        b_start_date: "2020-10-12",
        b_title: "제주도여행",
        b_end_date: "2021-01-02",
        b_end_check: true,
        b_cancle: true,
      },
      {
        b_id: 2,
        b_flag: 1,
        b_start_date: "2020-11-24",
        b_title: "세계여행",
        b_end_date: "",
        b_end_check: true,
        b_cancle: true,
      },
    ],
  };

  // Life cycle method~!~!~!~!
  // ㄹㅣ액트의 class type component에는 여러가지 내장 method가 있다.
  // 데이터의 변화가 발생하면 정해진 순서에 따라 내장 method가 실행되면서 화면을 렌더링한다
  // 이러한 method들을 life cycle method라고 한다
  // 렌더링이란.. 데이터가 있으면 사용자에게 보여주기 위해서 그리는 것!
  // 스프링에서는 jsp파일을 읽어서 el tag에 데이터를 끼워넣음 (resolver..)
  // 프록시.. 어떤 데이터를 감시하고 있다가 데이터 변화가 있으면 변화를 감지

  // 컴포넌트가 업데이트 된 후
  // 렌더링 이후 호출되는 메서드
  // 실제 DB와 연동하면 이 ㅣ 메서드에서 ajax로 서버에 데이터를 전송하고 서버에서는 crud를 수행
  // 이 메서드가 리액트에 의해 호출될 때 state변수의 변화를 감지할 수 있다.
  // 변화 이전 데이터는 pre**  매개변수에 담겨서 전달된다
  // 이 데이터와 현재 데이터를 비교하여
  componentDidUpdate(preProps, preState) {
    const preString = JSON.stringify(preState.bucketList);
    const thisString = JSON.stringify(this.state.bucketList);
    if (preString !== thisString) {
      localStorage.setItem("bucketList", thisString);
    }
  }

  // 현재 컴포넌트가 마운트
  // 렌더링이 되기 바로직전에 호출되는 메서드
  // 서버로부터 데이터를 요청하여 가져오는 코드를 추가
  componentDidMount() {
    const loadBucketList = localStorage.getItem("bucketList");
    // 문자열일 경우 null, ""이 아니면 논리적으로 true가 된다.
    if (loadBucketList) {
      const jsonBucketList = JSON.parse(loadBucketList);
      this.setState({ bucketList: jsonBucketList });
      this.id = jsonBucketList.length;
    }
  }

  bucketInsert = (bucket_title) => {
    const date = new Date(); //현재 날짜값 가져오는 함수
    const bucket = {
      b_id: ++this.id, //얘는 2부터 시작
      b_flag: 9,
      b_start_date: date.toString(), // 문자열로 바꿈
      b_title: bucket_title,
      b_end_date: "",
      b_end_check: false,
      b_cancle: false,
    };

    // bucketList.push(bucket) 일반적인js코드는 이렇게 추가
    // 하지만 리액트는!
    // 절대 state형 변수는 직접 변경하지 못한다(선언적 철학)
    this.setState({ bucketList: this.state.bucketList.concat({ ...bucket }) }); // concat은 bucketList를 건드리지 않고 내용바꾸는 메서드

    // 전개연산자를 사용하는 방법
    this.setState({ bucketList: [...this.state.bucketList, bucket] });
  };

  handleFlagClick = (id) => {
    const flagBucketList = this.state.bucketList.map((bucket) => {
      if (bucket.b_id === Number(id)) {
        const flag = bucket.b_flag + 1;
        return {
          ...bucket,
          b_flag: flag,
        };
      } else {
        return bucket;
      }
    });
    this.setState({ bucketList: flagBucketList });
  };

  updateBucket = (id, title) => {
    const updateBucketList = this.state.bucketList.map((bucket) => {
      if (bucket.b_id === Number(id)) {
        return {
          ...bucket,
          b_title: title,
        };
      } else {
        return bucket;
      }
    });
    this.setState({ bucketList: updateBucketList });
  };

  handleCancel = (id) => {
    const cancleBucketList = this.state.bucketList.map((bucket) => {
      if (bucket.b_id === Number(id)) {
        return {
          ...bucket,
          b_cancle: !bucket.b_cancle,
        };
      } else {
        return bucket;
      }
    });
    this.setState({ bucketList: cancleBucketList });
  };
  // class component에서 child component에 state형 변수를 보낼 때는
  // 보낼 변수명={this.state.변수} 라고 한다.
  // 함수를 보낼 때 보낼함수명 ={this.함수명}

  handleComplete = (id) => {
    const date = Date();
    const compBucketList = this.state.bucketList.map((bucket) => {
      if (bucket.b_id === Number(id)) {
        return {
          ...bucket,
          b_end_date: date.toString(),
          b_end_check: !bucket.b_end_check,
        };
      } else {
        return bucket;
      }
    });
    this.setState({ bucketList: compBucketList });
  };

  render() {
    return (
      <div>
        <p>
          <BucketInsert bucketInsert={this.bucketInsert} />
        </p>
        <p>
          <BucketList
            bucketList={this.state.bucketList}
            handleFlagClick={this.handleFlagClick}
            updateBucket={this.updateBucket}
            handleCancel={this.handleCancel}
            handleComplete={this.handleComplete}
          />
        </p>
      </div>
    );
  }
}

export default BucketMain;
