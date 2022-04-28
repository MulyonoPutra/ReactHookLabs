import { useContext } from "react";
import { LanguageContext, ThemeContext } from "./MultipleContext";

const BMultiple = () => {
  const langProps = useContext(LanguageContext);
  const themeProps = useContext(ThemeContext);
  return (
    <div>
      <div className="alert alert-primary" role="alert">
        <span>Component B</span>
        <p>Language: {langProps.lang}</p>
        <p>Theme: {themeProps.theme}</p>
      </div>
    </div>
  );
};

export default BMultiple;
