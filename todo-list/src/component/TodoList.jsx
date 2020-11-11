import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    /*
    클래스방식에 부모 component로부터 받은 변수(데이터)는 
    this.props에 일괄적으로 받게 된다 .
    // 함수에서는 (props)=>{} ({tidiList})=>{} 같은 방식으로 바로 매개변수로 받을 수 있는데
    // 클래스 방식에서는 this.props로부터 필요한 데이터를 분해해야 한다. 아래가 분해하는 코드

    */
    const { todoList, onToggle, onDeleteItem } = this.props; //위에서 받은 데이터 props는 state에서 만든 함수 전달받음
    // rcc는 이렇게 쪼개서 받음.. render랑 리턴 사이에 써줘야함

    const viewTodoList = todoList.map((todo) => {
      return (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDeleteItem={onDeleteItem} // props로 받은 변수는 this.가 붙지 않는다 map으로 받으면 this. 붙여야함
        />
      );
    });

    return <div>{viewTodoList}</div>;
  }
}

export default TodoList;
