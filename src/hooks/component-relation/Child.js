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
    <div>
      <h1>Child Components</h1>
      <span>Received from Buyer : {props.products}</span>
      <br />
      <button onClick={sendPackage}>Send package to Buyer </button>
    </div>
  );
};

export default ChildComponent;
