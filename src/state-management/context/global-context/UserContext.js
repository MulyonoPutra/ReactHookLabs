import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

// @ts-ignore
export const UserContext = createContext();

export function useAppContext() {
  return useContext(UserContext);
}

const AppProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const user = {
      name: "John",
      age: 30,
    };
    setUser(user);
  }, []);

  const appContextValue = {
    user,
    setUser,
  };
  return (
    <UserContext.Provider value={appContextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default AppProvider;
