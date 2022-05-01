import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
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
                <NavLink
                  className="nav-link text-light"
                  aria-current="page"
                  to="/context"
                >
                  State Management Context
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/lifecycle">
                  Lifecycle
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/relation">
                  Component Relation
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/custom-hooks">
                  Hooks & Custom Hooks
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/case-study">
                  Case Study
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/async-await-promise">
                  Async Await Promise
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/desctructuring">
                  Desctructuring
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
