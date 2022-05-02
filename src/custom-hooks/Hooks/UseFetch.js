import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((object) => {
        setData(object.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return {
    data,
    error,
  };
};

export default useFetch;
