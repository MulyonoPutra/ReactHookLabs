import React, { useState } from "react";

const ReactMemo = () => {
  return (
    <div>
      <Parent />
    </div>
  );
};

/**
 * Parent Component
 */
const Parent = () => {
  console.log("Parent");
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: "jhon" });
  const likeAction = () => setCount((current) => current + 1);

  return (
    <div>
      <p>
        <i> -- Parent Component -- </i>
      </p>
      <button className="btn btn-primary" onClick={likeAction}>
        Like {count}{" "}
      </button>
      <MemoizedChildComponent title="Hello" user={user} />
    </div>
  );
};

/**
 * Child Component
 */
const Child = ({ title, user }) => {
  console.log("Child");
  sleep(2000);
  return (
    <div className="container">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <p>
            <i> -- Child Component -- </i>
          </p>
          <p>{title}</p>
          <p>{user.name}</p>
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

export default ReactMemo;

/**
 * Note: Description for React.memo
 * React Memo akan merender ulang component jika ada perubahan pada Props.
 * React Memo tidak akan berfungsi pada Object atau Array. Solusinya:
 * 1. Pindahkan variable ke luar function (global variable)
 * 2. Buat Custom function komparasi antara prevProps dan nextProps
 * 3. Gunakan useState
 */
