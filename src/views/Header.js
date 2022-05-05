import { NavLink } from "react-router-dom";
import logo from "../Logo.svg";

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <NavLink className="nav-link text-light" to="/">
          <h1>Learn Fundamental React Hooks</h1>
        </NavLink>
      </header>
    </div>
  );
}

export default Header;
