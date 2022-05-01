import React from "react";

const ArrayDesctructuring = () => {
  const lang = ["php", "js", "python", "ruby", "scala", "java"];

  const [one, two, three, four, five, six] = lang;

  return (
      <div>
        Array Desctructuring value: <strong>{one}</strong>
      </div>
  );
};

export default ArrayDesctructuring;
