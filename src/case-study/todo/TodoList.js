/**
 * Child Component
 */
const TodoListItem = (props) => {
  return (
    <div className="container d-flex justify-content-center">
      <div>
          {props.todo.map((todo) => {
            return (
              <div
                className="alert alert-info"
                role="alert"
                key={todo.id}
                style={{ width: "22rem" }}
              >
                {todo.title}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TodoListItem;
