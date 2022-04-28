import AppProvider from "../global-context/UserContext";
import AUserComponent from "./AUserComponent";
import BUserComponent from "./BUserComponent";
import UserReducerProviders from "./UserReducer";
import UserReducerPage from "./UserReducerPage";

const UserReducerPageWrapper = () => {
  return (
    <UserReducerProviders>
      <h2>
        {" "}
        <strong> Global Context using useReducer</strong>
      </h2>
      <UserReducerPage />
      <div className="container">
        <div className="row">
          <div className="col">
            {" "}
            <AUserComponent />
          </div>
          <div className="col">
            {" "}
            <BUserComponent />
          </div>
        </div>
      </div>
    </UserReducerProviders>
  );
};

export default UserReducerPageWrapper;
