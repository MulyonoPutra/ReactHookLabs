import { NavLink } from "react-router-dom";
import logo from '../Logo.svg';
function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Learn Fundamental React Hook</h1>
      </header>
    </div>
  );
}

export default Header;
