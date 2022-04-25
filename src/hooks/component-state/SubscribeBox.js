import React, { useState } from "react";
import useCounter from "./UseCounter";

function SubscribeBox() {
  const [state, setState] = useState({
    subscribe: false,
  });

  const [like, handleLike, handleTripleLike] = useCounter(0);
  const [dislike, handleDislike] = useCounter(0);

  const handleSubscribe = () => {
    setState({
      ...state,
      subscribe: !state.subscribe,
    });
  };

  return (
    <>
      <div className="container mt-4 d-flex justify-content-center">
        <div className="row">
          <div className="col">
            {" "}
            <div>
              <button className="btn btn-primary" onClick={handleSubscribe}>
                Subscribe
              </button>{" "}
              <br />
              <span>
                {JSON.stringify(state.subscribe)}
              </span>
            </div>
          </div>
          <div className="col">
            {" "}
            <div>
              <button className="btn btn-primary" onClick={handleLike}>
                Like
              </button>
              <br />
              <span>{like}</span>
            </div>
          </div>
          <div className="col">
            {" "}
            <div>
              <button className="btn btn-danger" onClick={handleDislike}>
                Dislike
              </button>
              <br />
              <span>{dislike}</span>
            </div>
          </div>
          <div className="col">
            <div>
              <button
                className="btn btn-warning"
                style={{ width: "7rem" }}
                onClick={handleTripleLike}
              >
                Triple Like
              </button>
              <br />
              <span>{like}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubscribeBox;
