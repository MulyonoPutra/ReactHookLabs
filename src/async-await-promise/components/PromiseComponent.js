import { useState } from "react";

const PromiseComponent = () => {
  const [text, setText] = useState("");

  const onSubmit = () => {
    alert(text);
  };

  return (
    <div>
      {" "}
      <div>
        <div className="container mt-4">
          <div className="card">
            <div className="card-body">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  onSubmit();
                }}
              >
                Primary
              </button>
              <div className="card-body">{text}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromiseComponent;
