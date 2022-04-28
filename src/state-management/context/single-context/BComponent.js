import { Consumer } from "./SingleContext";

const BComponent = () => {
  return (
    <Consumer>
      {(props) => {
        return (
          <div>
            <div className="alert alert-warning" role="alert">
              <span>Component B</span>
              <p>{props.lang}</p>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default BComponent;
