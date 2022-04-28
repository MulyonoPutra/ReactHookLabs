import { Consumer } from "./SingleContext";

const Parent = () => {
  return (
    <Consumer>
      {(props) => (
        <div className="container mt-4">
          <select
            value={props.lang}
            onChange={props.changeLang}
            style={{ width: "22rem", height: "3rem", borderRadius: "0.5rem" }}>
            <option value="🇬🇧"> 🇬🇧 English </option>
            <option value="🇮🇩"> 🇮🇩 Indonesia </option>
          </select>
        </div>
        
      )}
    </Consumer>
  );
};

export default Parent;
