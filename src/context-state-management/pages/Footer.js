import { useContext } from "react";
import { LangContext, ThemeContext } from "./LanguagePage";

function Footer() {
  const langProps = useContext(LangContext);
  const themeProps = useContext(ThemeContext);
  return (
    <div>
      <i>-- Footer --</i>
      <div>Languange : {langProps.lang} </div>
      <p>Theme : {themeProps.theme} </p>
    </div>
  );
}

export default Footer;
