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
  });

  return (
    <>
      <div className="container">
        <div className="mt-4 d-flex justify-content-center">
          <div className="card" style={{ width: "18rem", cursor: "pointer" }}>
            <div
              className="card-header"
              style={{ cursor: "pointer", fontWeight: "bold" }}
            >
              Order
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                {products.productName ? products.productName : `Product`}
              </li>
              <li className="list-group-item">
                {products.size ? products.size : "Size"}
              </li>
              <li className="list-group-item">
                {products.color ? products.color : "Color"}
              </li>
              <li>
                <button
                  type="button"
                  className="btn btn-primary m-2"
                  onClick={sendToChild}
                >
                  Send to Child
                </button>
              </li>
            </ul>
          </div>
        </div>
        <ChildComponent products={product} received={productsReceived} />
      </div>
    </>
  );
};

export default ParentComponent;
