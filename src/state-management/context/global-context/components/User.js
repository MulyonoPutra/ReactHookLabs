import { useAppContext } from "../UserContext";

const User = () => {
  const context = useAppContext();
  return (
    <>
      <div className="container mt-4">
        <div className="input-group flex-nowrap">
          <input
            type="text"
            className="form-control"
            onChange={(e) =>
              context.setUser({ ...context.user, name: e.target.value })
            }
            style={{ width: "22rem", height: "3rem", borderRadius: "0.5rem" }}
            placeholder="Enter your value here..."
          />
        </div>
      </div>
    </>
  );
};

export default User;
