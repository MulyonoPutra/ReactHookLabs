import ArrayDesctructuring from "./ArrayDesctructuring";
import ArrayOfObjects from "./ArrayOfObjects";
import ForLoop from "./ForLoop";
import FunctionParameters from "./FunctionParameters";
import NestedArray from "./NestedArray";
import NestedObjects from "./NestedObjects";
import Objects from "./Objects";

const Desctructuring = () => {
  return (
    <div className="container mt-4">
      <div className="card" style={{ width: "22rem" }}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {" "}
            <ArrayDesctructuring />
          </li>
          <li className="list-group-item">
            {" "}
            <ArrayOfObjects />
          </li>
          <li className="list-group-item">
            <FunctionParameters />
          </li>
          <li className="list-group-item">
            <NestedObjects />
          </li>
          <li className="list-group-item">
            <Objects />
          </li>
          <li className="list-group-item">
            <NestedArray />
          </li>
          <li className="list-group-item">
            <ForLoop />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Desctructuring;
