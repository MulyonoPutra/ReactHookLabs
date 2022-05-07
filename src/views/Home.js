import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <div
            className="alert alert-primary"
            role="alert"
            style={{ width: "18rem" }}
          >
            <NavLink className="nav-link" aria-current="page" to="/context">
              State Management Context
            </NavLink>
          </div>
        </div>
        <div className="col">
          <div
            className="alert alert-primary"
            role="alert"
            style={{ width: "18rem" }}
          >
            <NavLink className="nav-link" to="/redux">
              State Management - Redux
            </NavLink>
          </div>
        </div>
        <div className="col">
          <div
            className="alert alert-secondary"
            role="alert"
            style={{ width: "18rem" }}
          >
            <NavLink className="nav-link" to="/lifecycle">
              Lifecycle
            </NavLink>
          </div>
        </div>
        <div className="col">
          <div
            className="alert alert-success"
            role="alert"
            style={{ width: "18rem" }}
          >
            <NavLink className="nav-link" to="/relation">
              Component Relation
            </NavLink>
          </div>
        </div>
        <div className="col">
          <div
            className="alert alert-danger"
            role="alert"
            style={{ width: "18rem" }}
          >
            <NavLink className="nav-link" to="/custom-hooks">
              Hooks & Custom Hooks
            </NavLink>
          </div>
        </div>
        <div className="col">
          <div
            className="alert alert-warning"
            role="alert"
            style={{ width: "18rem" }}
          >
            <NavLink className="nav-link" to="/case-study">
              Case Study
            </NavLink>
          </div>
        </div>
        <div className="col">
          <div
            className="alert alert-info"
            role="alert"
            style={{ width: "18rem" }}
          >
            <NavLink className="nav-link" to="/async-await-promise">
              Async Await Promise
            </NavLink>
          </div>
        </div>
        <div className="col">
          <div
            className="alert alert-danger"
            role="alert"
            style={{ width: "18rem" }}
          >
            <NavLink className="nav-link" to="/desctructuring">
              Desctructuring
            </NavLink>
          </div>
        </div>
        <div className="col">
          <div
            className="alert alert-dark"
            role="alert"
            style={{ width: "18rem" }}
          >
            <NavLink className="nav-link" to="/custom-hook">
              Custom Hook
            </NavLink>
          </div>
        </div>
        <div className="col">
          <div
            className="alert alert-primary"
            role="alert"
            style={{ width: "18rem" }}
          >
            <NavLink className="nav-link" to="/performance">
              Performance & Optimization
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
