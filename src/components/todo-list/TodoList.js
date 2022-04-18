
/**
 * Child Component
 */
const TodoListItem = (props) => {
    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {
                    props.todo.map(todo => {
                        return <li key={todo.id}>{todo.title}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default TodoListItem