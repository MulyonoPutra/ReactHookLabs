import { useContext } from "react";
import { LangContext, ThemeContext } from "./LanguagePage";
// @ts-ignore
function Menu() {
  const props = useContext(LangContext);
  const themeProps = useContext(ThemeContext);
  return (
    <div>
      <ul>
        <li>
          Languages
          <select value={props.lang} onChange={props.changeLang}>
            <option value="🇬🇧"> 🇬🇧 English </option>
            <option value="🇮🇩"> 🇮🇩 Indonesia </option>
          </select>
        </li>
        <li>
          Theme
          <select value={themeProps.theme} onChange={themeProps.changeTheme}>
            <option value="light"> 🇬🇧 Light </option>
            <option value="dark"> 🇮🇩 Dark </option>
          </select>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
