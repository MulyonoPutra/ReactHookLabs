import { useAppContext } from "../UserContext";

const UserTitle2 = () => {
  const context = useAppContext();
  return (
    <div className="container mt-4">
      <div className="alert alert-primary" role="alert">
        <span>hi, {context.user.name}</span>
      </div>
    </div>
  );
};

export default UserTitle2;
