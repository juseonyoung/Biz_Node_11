import { updateLocale } from "moment";
import React, { Component } from "react";
import Moment from "react-moment";

class BucketItem extends Component {
  b_flag_text = ["일반", "중요", "매우중요", "긴급"];
  cursorStyle = { cursor: "pointer" };

  state = {
    title: "",
    isEdit: false,
  };

  render() {
    const { bucket, handleFlagClick, updateBucket } = this.props; //선언부
    // 이벤트 핸들러 등록 주의
    // ㅇㅣ벤트 핸들러 등록할 때 아래와 같이 등록을 해 버리면 이 코드는 이벤트 핸들러 등록이 아니라
    // 즉시 실행하는 코드가 된다
    // onClick={handleClick(값)}
    // 데이터가 렌더링이 될 때 데이터의 개수만큼 반복적으로 함수가 즉시 호출되어 문제가 발생한다
    // 이벤트 핸들러에게 어떤 값을 전달하고 싶을 때는 callback 방식으로 전달해야 한다.
    // onClick=>{()={ handleClick(값)}} 이렇게 내부에서 한번 더 호출
    return (
      <tr>
        <td
          style={this.cursorStyle}
          onClick={() => {
            handleFlagClick(bucket.b_id);
          }}
        >
          {this.b_flag_text[bucket.b_flag % 4]}
        </td>
        <td style={{ color: "gray" }}>
          <Moment format="YYYY-MM-DD HH:mm:ss">{bucket.b_start_date}</Moment>
        </td>

        {this.state.isEdit ? ( //isEdit이 트루이면 input 보여주고 아니면 텍스트 보여라
          <td>
            <input
              value={this.state.title}
              onChange={(e) => {
                this.setState({ title: e.target.value });
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  updateBucket(bucket.b_id, this.state.title);
                  this.setState({ isEdit: false });
                }
              }}
            />
          </td>
        ) : (
          <td
            onClick={(e) => {
              if (bucket.b_cancle) alert("취소된 버킷은 수정불가!");
              return false;
              this.setState({ isEdit: true });
              this.setState({ title: bucket.b_title }); //타이특변수에 원래 값 넣어서 input박스에 보여라..
            }}
            style={
              bucket.b_cancle
                ? {
                    cursor: "not-allowed",
                    color: "black",
                    textDecoration: "line-through",
                  }
                : { cursor: "pointer", color: "blue" }
            }
          >
            {bucket.b_title}
          </td>
        )}
        <td
          style={{ cursor: "pointer" }}
          onClick={(e) => {
            if (window.confirm("버킷을 완성하셨나요~?")) {
              this.props.handleComplete(bucket.b_id);
            }
          }}
        >
          {bucket.b_end_check ? ( //endcheck가 true이면 끝난날짜체크아고 아니면 O 표시해라
            <Moment format="YYYY-MM-DD HH:mm:ss">{bucket.b_end_date}</Moment>
          ) : (
            "완료하면 누르기"
          )}
        </td>

        <td>
          <input
            type="checkbox"
            Checked={bucket.b_cancle}
            // value={bucket.b_cancle}
            onChange={(e) => {
              this.props.handleCancel(bucket.b_id);
            }}
          />
        </td>
      </tr>
    );
  }
}

export default BucketItem;
