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
    <>
      <div className="container d-flex justify-content-center">
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3" style={{ width: "22rem" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Enter TODO"
              aria-label="TODO"
              value={getInputTodo}
              onChange={handleInputTodo}
            />
            <button className="btn btn-outline-primary" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TodoCreate;
