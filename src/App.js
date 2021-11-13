import "./App.css";
import Home from "./pages/Home";
// import logo from './logo.svg';
function App() {
  return (
    <div className="App">
      项目根组件
      <Home></Home>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
