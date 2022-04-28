import { useReducer } from "react";

const initialState = { count: 0 };

function countReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return { count: state.count };
  }
}

const Counter = () => {
  /**
   * State: get value
   * Dispatch: set value
   */
  const [state, dispatch] = useReducer(countReducer, initialState);

  return (
    <>
      <button
        type="button"
        className="btn btn-warning"
        // @ts-ignore
        onClick={() => dispatch({ type: "decrement" })}
      >
        -
      </button>
      <span>{state.count}</span>
      <button
        type="button"
        className="btn btn-primary"
        // @ts-ignore
        onClick={() => dispatch({ type: "increment" })}
      >
        +
      </button>
    </>
  );
};

export default Counter;
