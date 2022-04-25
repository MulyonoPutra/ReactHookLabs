import { Consumer } from "./SingleContext";

const BComponent = () => {
  return (
    <Consumer>
      {(props) => {
        return (
          <div>
            <div className="card">
              <div className="card-body">
                <p>{props.lang}</p>
              </div>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default BComponent;
