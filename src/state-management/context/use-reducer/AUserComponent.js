import { useAppContext } from "./UserReducer";

const AUserComponent = () => {
  const [state] = useAppContext();
  return (
    <div className="container mt-4">
      <div className="alert alert-primary" role="alert">
        <span>Component A: {state?.user?.name}</span>
      </div>
    </div>
  );
};

export default AUserComponent;
