import "./App.css";
import CarMain from "./main/CarMain";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>MY CAR MANAGER</h3>
        <p>프로젝트:React-CAR</p>
      </header>
      <CarMain />
      <footer className="footer">
        <address>CopyRight &copy; ssyy0622@gmail.com</address>
      </footer>
    </div>
  );
}

export default App;
