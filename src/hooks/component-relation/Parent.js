import { useEffect, useState } from "react";
import ChildComponent from "./Child";

const ParentComponent = () => {
  
  const items = {
    id: Math.floor(Math.random() * 100) + 1,
    productName: "",
    size: 0,
    color: "",
  };

  const [product, setProduct] = useState("");
  const [products, setProducts] = useState(items);

  const sendToChild = () => {
    setProduct("Cargo Pants");
  };

  const productsReceived = (data) => {
    setProducts({
      id: data.id,
      productName: data.productName,
      size: data.size,
      color: data.color,
    });
  };

  useEffect(() => {
    // axios.get
  })

  return (
    <>
      <div>
        <h4>Mulyono Putra want to buy Cargo Pants</h4>
        <button onClick={sendToChild}> Order </button>
        <br />
        Receive from Seller:
        <ul>
          <li>Product Name: {products.productName}</li>
          <li>Size: {products.size}</li>
          <li>Color: {products.color}</li>
        </ul>
        <br />
        <hr />
        <ChildComponent products={product} received={productsReceived} />
      </div>
    </>
  );
};

export default ParentComponent;
