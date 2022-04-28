import { useAppContext } from "../UserContext";

const User = () => {
  const context = useAppContext();
  return (
    <>
      <input
        type="text"
        onChange={(e) =>
          context.setUser({ ...context.user, name: e.target.value })
        }
        style={{ width: "22rem", height: "3rem", borderRadius: "0.5rem" }}
      ></input>
    </>
  );
};

export default User;
