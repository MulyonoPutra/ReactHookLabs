import { useContext, useEffect } from "react";
import { createContext } from "react";
import { useReducer } from "react";

// @ts-ignore
export const UserContext = createContext();

export function useAppContext() {
  return useContext(UserContext);
}

const initialState = { user: {} };

function userReducer(state, action) {
  switch (action.type) {
    case "UPDATE_USER":
      return { ...state, user: action.payload };
    default:
      return new Error(`Unhandled action type: ${action.type}`);
  }
}

const UserReducerProviders = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    const user = {
      name: "John",
      age: 30,
    };

    // @ts-ignore
    dispatch({
      type: "UPDATE_USER",
      payload: user,
    });
  }, []);

  const appContextValue = [state, dispatch];

  return (
    <UserContext.Provider value={appContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserReducerProviders;
