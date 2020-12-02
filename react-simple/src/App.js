import "./App.css";
// 아래 컴포넌트를 import하고 compLast 라는 이름으로 사용하겠다.
import CompLast from "./component/CompLast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CompLast />
      </header>
    </div>
  );
}

export default App;
