import { NavLink } from "react-router-dom";

function StateManagementContext() {
  return (
    <div>
      <div className="container">
        <div className="row mt-4">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <NavLink className="nav-link" to="/single-context">
                  Single Context
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <NavLink className="nav-link" to="/multiple-context">
                  Multiple Context
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <NavLink className="nav-link" to="/global-context">
                  Global Context
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StateManagementContext;
