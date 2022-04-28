import { useAppContext } from "./UserReducer";

const UserReducerPage = () => {
  const [state, dispatch] = useAppContext();
  return (
    <>
      <div className="container mt-4">
        <div className="card">
          <div className="card-header">Parent Component</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="container mt-4">
                <div className="input-group flex-nowrap mb-4">
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) =>
                      dispatch({
                        type: "UPDATE_USER",
                        payload: { ...state.user, name: e.target.value },
                      })
                    }
                    style={{
                      width: "22rem",
                      height: "3rem",
                      borderRadius: "0.5rem",
                    }}
                    placeholder="Change value here.."
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserReducerPage;
