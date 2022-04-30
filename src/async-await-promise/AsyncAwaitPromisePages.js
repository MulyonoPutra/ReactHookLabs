import { NavLink } from "react-router-dom";

const AsyncAwaitPromisePages = () => {
  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <div className="alert alert-primary" role="alert">
              <NavLink className="nav-link" to="/async-await">
                Example: Async Await
              </NavLink>
            </div>
          </div>
          <div className="col">
            <div className="alert alert-info" role="alert">
              <NavLink className="nav-link" to="/promise">
                Example: Promise
              </NavLink>
            </div>
          </div>
          <div className="col">
            <div className="alert alert-warning" role="alert">
              <NavLink className="nav-link" to="/callback">
                Example: Callback
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsyncAwaitPromisePages;
