import { useEffect, useState } from "react";

const FunctionParameters = () => {
  const [message, setMessages] = useState("");
  
  const user = {
    name: "John",
    age: 30,
  };

  const { name, age } = user;

  function greetings({ name, age }) {
    setMessages(`Hello ${name} you are ${age} years old`);
  }

  useEffect(() => {
    greetings(user);
  });

  return (
    <div>
      Function Parameters value: <strong>{message}</strong>
    </div>
  );
};

export default FunctionParameters;
