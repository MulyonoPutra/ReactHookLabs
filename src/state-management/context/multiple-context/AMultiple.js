import { useContext } from "react";
import { LanguageContext, ThemeContext } from "./MultipleContext";

const AMultiple = () => {
  const langProps = useContext(LanguageContext);
  const themeProps = useContext(ThemeContext);
  return (
    <div>
      <div className="alert alert-primary" role="alert">
        <span>Component A</span>
        <p>Language: {langProps.lang}</p>
        <p>Theme: {themeProps.theme}</p>
      </div>
    </div>
  );
};

export default AMultiple;
