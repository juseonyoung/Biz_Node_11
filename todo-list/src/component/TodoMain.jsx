import React, { Component } from "react";
import "../css/TodoMain.css"; //부모
import "./TodoInsert"; //형제
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

// ㅋ클래스 방식의 component
// 반드시 react component 클래스를 상속받아야 한다/.
// render() method를 사용하여 실제 view를 구현하도록 되어있다. .....
//  함수방식에서 바로 나타나던 return문이 render() method 내부에 위치한다.

class TodoMain extends Component {
  // class 방식에서 state 변수 선언하기
  id = 3; //insert할 때 key 값
  state = {
    //렌더링 하는 용도의 state변수.. 내부에 변화가 있으면 데이터가 변하는 영역만 자동 렌더링 그래서 빠른 장점
    // state변수
    todoList: [
      { id: 0, text: "오늘은 빼빼로데이", isComplete: false },
      { id: 1, text: "오늘은 수요일", isComplete: true },
      { id: 2, text: "집에 가기", isComplete: false },
    ],
  };

  // 클래스 방식의 main에서 이벤트 함수를 선언하는 ㅏ방법 이때는 const 못쓴다
  // const없이 함수 선언하라
  onToggle = (id) => {
    // id값 기준으로 todoList 변수의 isComplete를 변경
    // 1. this.state 에서 todoList 변수를 추출
    const { todoList } = this.state;
    const compTodoList = todoList.map((todo) => {
      if (todo.id === Number(id))
        return { ...todo, isComplete: !todo.isComplete };
      else return todo;
    });
    // 클래스방식 component에서는 state변수를 setting하기 위한 setter를 별도로 만들지 않는다.
    // state변수를 setting하기 위해서는 this.setState()라는 공통함수를 사용한다.
    // this.setState( {state변수 : 새로운 값}) 형식으로 setting한다.

    this.setState({ todoList: compTodoList });
  };

  onCreate = (todo) => {
    const newTodoList = [
      ...this.state.todoList,
      { id: this.id++, text: todo, isComplete: false },
    ];
    this.setState({ todoList: newTodoList });
  };

  onDeleteItem = (id) => {
    const deleteTodoList = this.state.todoList.filter((todo) => {
      if (todo.id !== Number(id)) return todo;
    });
    this.setState({ todoList: deleteTodoList });
  };

  render() {
    // 바로 return하는게 아니라 render() 함수 통한다 몸체 안에서 컴포넌트를 리턴
    // 현재 클래스에서 state 형태로 만든 todoList 를 붙여
    // this.state가 따라다님
    return (
      <main className="todo-main">
        <h3>TODO-LIST</h3>
        <TodoInsert onCreate={this.onCreate} />
        <TodoList
          todoList={this.state.todoList}
          onToggle={this.onToggle}
          onDeleteItem={this.onDeleteItem}
        />
      </main>
    );
  }
}

export default TodoMain;
