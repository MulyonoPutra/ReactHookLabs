import React, { useCallback, useMemo } from "react";
import { useState } from "react";

/**
 * Case: Send function to Child Component without re-render Child Component
 * Using useCallback
 */

const ReactUseCallback = () => {
  return (
    <div>
      <Parent />
    </div>
  );
};

const Parent = () => {
  console.log("Parent Rendered");
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: "jhon" });
  const likeAction = () => setCount((current) => current + 1);

  /**
   * description: useCallback is used to memoize the function, and avoid child component re-render
   */
  const memoizeLikeActions = useCallback(likeAction, []);

  /// Simulation Heavy Process: example request to API with delay of 2 seconds
  const heavyProcess = (u) => {
    sleep(2000);
    return u;
  };

  /**
   * description: Using useMemo to avoid heavy process
   * useMemo will return value, will execute if only triggered
   */
  const userProps = useMemo(() => heavyProcess(user), [user]);
  console.log("useMemo", userProps);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <p>
                <i> -- Parent Component -- </i>
              </p>
              <button className="btn btn-primary" onClick={likeAction}>
                Like {count}
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <MemoizedChildComponent
            title="Hello"
            user={userProps}
            action={memoizeLikeActions}
          />
        </div>
      </div>
    </div>
  );
};

const Child = ({ title, user, action }) => {
  console.log("Child Rendered");
  return (
    <div className="container">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <p>
            <i> -- Child Component -- </i>
          </p>
          <p>{title}</p>
          <p>{user.name}</p>
          <button className="btn btn-primary" onClick={action}>
            {" "}
            Like{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

const MemoizedChildComponent = React.memo(Child);
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

export default ReactUseCallback;
