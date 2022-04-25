import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/context">
                  State Management Context
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/lifecycle">
                  Lifecycle
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/relation">
                  Component Relation
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/custom-hooks">
                  Hooks & Custom Hooks
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/case-study">
                  Case Study
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
