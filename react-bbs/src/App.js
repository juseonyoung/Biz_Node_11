import BackImg from "./Bgimg.jpg";
import "./App.css";
import BBsMain from "./main/BBsMain";

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
      <BBsMain />
      <footer className="footer">
        <address>CopyRight &copy; ssyy0622@gmail.com</address>
      </footer>
    </div>
  );
}

export default App;
