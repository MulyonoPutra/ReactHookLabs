const ChildComponent = (props) => {
  const sendPackage = () => {
    props.received({
      id: Math.floor(Math.random() * 100) + 1,
      productName: props.products,
      size: 34,
      color: "Green Army",
    });
  };

  return (
    <>
      <div className="container mt-4 d-flex justify-content-center">
        <div className="card" style={{ width: "18rem" }}>
          <div
            className="card-header"
            style={{ cursor: "pointer", fontWeight: "bold" }}
          >
            Child Component
          </div>
          <div className="card-body">
            <p className="card-text">{props.products}</p>
            <button
              type="button"
              className="btn btn-primary m-2"
              onClick={sendPackage}
            >
              Send to Parent
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChildComponent;
