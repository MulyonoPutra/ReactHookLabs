import TodoCreate from "case-study/todo-create/TodoCreate";
import TodoListItem from "case-study/todo-list/TodoList";
import { useState } from "react";
/**
 * Parent Component
 */
const Todo = () => {
  const [getTodo, setTodo] = useState([
    { id: 1, title: "eat" },
    { id: 2, title: "sleep" },
    { id: 3, title: "code" },
  ]);

  const eventCreateTodo = (todo) => {
    setTodo(getTodo.concat(todo));
  };

  return (
    <div>
      <h3>Todo List</h3>
      <TodoCreate onCreateTodo={eventCreateTodo} />
      <TodoListItem todo={getTodo} />
    </div>
  );
};

export default Todo;