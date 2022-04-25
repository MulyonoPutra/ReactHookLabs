import { NavLink } from "react-router-dom";

function Lifecycle() {
  return (
    <div>
      <div className="container">
        <div className="row mt-4">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <NavLink className="nav-link" to="/class">
                  Class Component
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <NavLink className="nav-link" to="/functional">
                  Functional Component
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lifecycle;
