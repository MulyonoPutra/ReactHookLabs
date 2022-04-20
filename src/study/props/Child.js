import { useEffect, useState } from "react";

const ChildComponent = (props) => {
  const [products, setProducts] = useState({});

  useEffect(() => {
    setProducts({
      id: Math.floor(Math.random() * 100) + 1,
      productName: props.products,
      size: 34,
      color: "Green Army",
    });
  }, [props.products]);

  const sendPackage = () => {
    props.received(products);
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
