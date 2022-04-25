/**
 * Child Component
 */
const TodoListItem = (props) => {
  return (
    <div className="container d-flex justify-content-center">
      <div>
        <ul>
          {props.todo.map((todo) => {
            return <li key={todo.id}>{todo.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoListItem;
