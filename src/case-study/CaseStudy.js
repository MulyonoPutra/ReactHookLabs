import { NavLink } from "react-router-dom";

function CaseStudy() {
  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <NavLink className="nav-link" aria-current="page" to="/todo">
                  TODO List
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <NavLink className="nav-link" aria-current="page" to="/news-feed">
                  News Feed
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;
