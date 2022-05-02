import useFetch from "custom-hooks/Hooks/UseFetch";
import { useEffect, useState } from "react";

const Colors = () => {
  const { data, error } = useFetch("https://reqres.in/api/unknown");

  useEffect(() => {
    console.log("Coming from Custom Hooks" + data);
  }, []);

  return (
    <div>
      <h1>
        <strong>Colors</strong>
      </h1>
      {data.map((item) => {
        return <p>{item.name}</p>;
      })}
    </div>
  );
};

export default Colors;
