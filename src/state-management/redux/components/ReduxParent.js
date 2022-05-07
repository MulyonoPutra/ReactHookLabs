import { connect } from "react-redux";

const ReduxParent = (props) => {
  console.log("ReduxParent init", props.totalOrder);
  return (
    <>
      <div className="container mt-4">
        <p>
          <button className="btn btn-primary" onClick={() => props.plusOrder()}>
            +
          </button>{" "}
          &nbsp;
          <strong> {props.totalOrder}</strong>
          &nbsp;
          <button className="btn btn-danger" onClick={() => props.minusOrder()}>
            -
          </button>{" "}
          <br />
        </p>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    totalOrder: state.totalOrder,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    plusOrder: () => dispatch({ type: "PLUS_ORDER" }),
    minusOrder: () => dispatch({ type: "MINUS_ORDER" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxParent);
