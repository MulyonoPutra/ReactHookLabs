import { useAppContext } from "./UserReducer";

const BUserComponent = () => {
  const [state] = useAppContext();
  return (
    <div className="container mt-4">
      <div className="alert alert-primary" role="alert">
        <span>Component B: {state?.user?.name}</span>
      </div>
    </div>
  );
};

export default BUserComponent;
