import { useState } from "react";

const TodoCreate = (props) => {
  const [getInputTodo, setInputTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 100) + 1,
      title: getInputTodo,
    };

    props.onCreateTodo(newTodo);
  };

  const handleInputTodo = (event) => {
    setInputTodo(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter todo"
        value={getInputTodo}
        onChange={handleInputTodo}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoCreate;
