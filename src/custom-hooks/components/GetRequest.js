import useFetch from "custom-hooks/Hooks/UseFetch";
import React, { useEffect } from "react";

const GetRequest = () => {
  const { data, error } = useFetch("https://reqres.in/api/unknown");

  useEffect(() => {
    console.log("Coming from Custom Hooks" + data);
  }, []);

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h5>
            <strong>Example GET Request: List Of Colors</strong>
          </h5>
        </div>
        <ul className="list-group list-group-flush">
          {data.map((item) => {
            return <li className="list-group-item">{item.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default GetRequest;
