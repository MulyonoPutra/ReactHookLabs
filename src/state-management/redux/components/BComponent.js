import { connect } from "react-redux";

const BComponent = (props) => {
  return (
    <div>
      {" "}
      <div>
        <div className="container mt-4">
          <div className="card">
            <div className="card-header">Child Component 2</div>
            <div className="card-body">{props.totalOrder}</div>
          </div>
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
export default connect(mapStateToProps)(BComponent);
