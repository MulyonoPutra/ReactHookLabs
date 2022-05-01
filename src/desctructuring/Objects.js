import { useEffect } from "react";

const Objects = () => {
  const user = {
    name: "John",
    age: 30,
  };

  const { name, age } = user;

  useEffect(() => {
    console.log(`${name} is ${age} years old!`);
  });

  return (
    <div>
      Object value: <strong>{name}</strong> is <strong>{age}</strong> years old!
    </div>
  );
};

export default Objects;
