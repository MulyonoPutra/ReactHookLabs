import { useState } from "react";

const profiles = {
  firstName: "Maryam",
  lastName: "Jameela",
  age: 2,
};

const CallbackComponent = () => {
  const [text, setText] = useState("");
  const [profile, setProfile] = useState(profiles);

  const { firstName, lastName } = profile;

  const callFirstName = (callback) => {
    setTimeout(() => {
      callback(firstName);
    }, 2000);
  };

  const callLastName = (callback) => {
    setTimeout(() => {
      callback(lastName);
    }, 2000);
  };

  const onSubmit = () => {
    callFirstName((result) => {
      callLastName((results) => {
        const first = result;
        const last = results;
        const fullname = first + " " + last;
        setText(fullname);
      });
    });
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
      </div>
    </div>
  );
};

export default CallbackComponent;
