import { useState } from "react";
import { CopyBlock } from "react-code-blocks";
import { PromiseSnippets } from "utils/code-snippets/PromiseSnippets";
import { tomorrow } from "react-code-blocks";

const profiles = {
  firstName: "Maryam ",
  lastName: "Jameela",
  age: 2,
};

const PromiseComponent = () => {
  const [text, setText] = useState("");

  const [profile, setProfile] = useState(profiles);

  const { firstName, lastName } = profile;

  const callFirstName = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(firstName);
      }, 2000);
    });
  };

  const callLastName = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(lastName);
      }, 2000);
    });
  };

  const onSubmit = () => {
    Promise.all([callFirstName(), callLastName()]).then(
      ([firstName, lastName]) => {
        setText(`${firstName} ${lastName}`);
      }
    );
  };

  return (
    <div>
      {" "}
      <div>
        <div className="container mt-4">
          <h4>Wait for 2 seconds</h4>
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
        <div className="container mt-4 d-flex justify-content-center text-center">
          <div className="card" style={{ width: "48rem" }}>
            <div className="card-body">
              <h5 className="card-title">Promise code snippets</h5>
              <p className="card-text text-start">
                <CopyBlock
                  text={PromiseSnippets}
                  language="javascript"
                  showLineNumbers={true}
                  startingLineNumber={1}
                  theme={tomorrow}
                  wrapLines
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromiseComponent;
