import { connect } from "react-redux";

const AComponent = (props) => {
  return (
    <div>
      <div className="container mt-4">
        <div className="card">
          <div className="card-header">
            Child Component 1
          </div>
          <div className="card-body">{props.totalOrder}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    totalOrder: state.totalOrder,
  };
};
export default connect(mapStateToProps)(AComponent);
