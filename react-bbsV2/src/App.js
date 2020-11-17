import BackImg from "./Bgimg.jpg";
import "./App.css";
import BBsMain from "./main/BBsMain";
import BBsAdmin from "./main/BBsAdmin";

// react-router-dom을 이용한 singlepage
//한화면에서 여러 컴포넌트를 번갈아 보여주기 위해 사용하는 메뉴시스템
// 사용자가 선택한 메뉴에 따라 컴포넌트를 번갈아 보여주지만, 전체적인 화면은 렌더링 되지 않기 때문에
// static(정적) 페이지를 구성할 때도 서버에 request를 보내고 서버가 반응하는 것에 따라 전체화면이 refresh되는
// 전통적인 웹 서버 구성보다 통신적인 비용발생이 매우 적다.
// 실제 데이터에 따라 렌더링되도록 설계된 react이지만 , 일반적인 html과 같은 화면을 구성할때도 react의 가상돔, 부분렌더링이 적용된다.

import { BrowserRouter as Router, Route } from "react-router-dom";
import BBsNav from "./main/BBsNav";

function App() {
  const background = {
    backgroundImage: `url(${BackImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "scroll",
  };
  return (
    <div className="App">
      <header className="App-header" style={background}>
        <h3>REACT BBS 2020</h3>
        <p>React로 구현하는 BBS Project</p>
      </header>
      <input placeholder="input"></input>
      <Router>
        <BBsNav />
        <Route exact path="/" component={BBsMain} />
        <Route path="/notice" component={BBsAdmin} />
      </Router>
      <footer className="footer">
        <address>CopyRight &copy; 주선영</address>
      </footer>
    </div>
  );
}

export default App;
