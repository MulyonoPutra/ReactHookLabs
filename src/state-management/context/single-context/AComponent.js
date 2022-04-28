import { Consumer } from "./SingleContext";

const AComponent = () => {
  return (
    <Consumer>
      {(props) => {
        return (
          <div>
            <div className="alert alert-primary" role="alert">
              <span>Component A</span>
              <p>{props.lang}</p>
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default AComponent;
