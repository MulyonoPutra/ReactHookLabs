import React from "react";
import { NavLink } from "react-router-dom";

const PerformanceWrapperPages = () => {
  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <NavLink className="nav-link" to="/use-memo">
                  useMemo
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                {" "}
                <NavLink className="nav-link" to="/use-callback">
                  useCallback
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceWrapperPages;
