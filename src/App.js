import "./App.css";
// import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// 导入组件
import Home from "./pages/Home";
import CityList from "./pages/CityList";
// import logo from './logo.svg';
function App() {
  return (
    <Router>
      <div className="App">
        项目根组件-test
        {/* 配置导航菜单 */}
        <link to="/home">首页</link>
        <link to="/cityList">城市选择</link>
        {/* 配置路由 */}
        <Route path="/home" component={Home}></Route>
        <Route path="/cityList" component={CityList}></Route>
        {/* <Home></Home>
        <header className="App-header">
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
    </Router>
  );
}

export default App;
