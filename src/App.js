import "./App.css";
// import Home from "./pages/Home"
// import { render } from "react-dom";
import { Outlet, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import CityList from "./pages/CityList";

// import logo from './logo.svg';
function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
