import { useContext } from "react";
import { LanguageContext, ThemeContext } from "./MultipleContext";

const ParentMultiple = () => {
  const langProps = useContext(LanguageContext);
  const themeProps = useContext(ThemeContext);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          {" "}
          <select
            value={langProps.lang}
            onChange={langProps.changeLang}
            style={{ width: "22rem", height: "3rem", borderRadius: "0.5rem" }}
          >
            <option value="English"> 🇬🇧 English </option>
            <option value="Indonesia"> 🇮🇩 Indonesia </option>
          </select>
        </div>
        <div className="col">
          {" "}
          <select
            value={themeProps.theme}
            onChange={themeProps.changeTheme}
            style={{ width: "22rem", height: "3rem", borderRadius: "0.5rem" }}
          >
            <option value="Light"> Light </option>
            <option value="Dark"> Dark </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ParentMultiple;
