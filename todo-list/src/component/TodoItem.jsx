import React, { Component } from "react";
import "../css/TodoItem.css";

class TodoItem extends Component {
  render() {
    const { todo, onToggle, onDeleteItem } = this.props; //다 받아옴
    const onClick = (e, id) => {
      if (e.target.className === "delete-item") {
        if (window.confirm("삭제할까요?")) {
          //window.confirm
          alert("삭제됨");
          onDeleteItem(id);
          return false;
        }
      } else {
        onToggle(id);
      }
    };

    // onClick ={onToggle} :매개변수 전달이 필요없는 event 핸들러
    // onClick={()=>onToggle(id)} :매개변수 전달이 필요한 event 핸들러
    return (
      <div className="todo-item" onClick={(e) => onClick(e, todo.id)}>
        <div className="delete-item">&times;</div>
        <div className={`todo-text ${todo.isComplete ? "checked" : ""}`}>
          {todo.text}
        </div>

        {todo.isComplete && <div className="check-mark">&#x2713;</div>}
      </div>
    );
    // {todo.isComplete && <div></div>}
    // {} 중괄호로 묶인 부분은 내부의 연산 결과에 따라 rendering을 수행하는 코드
    // todo.isComplete값이 true일 경우만 <div></div>를 렌더링하여 화면에 보이라는 조건부 렌더링이다 .
  }
}

export default TodoItem;
