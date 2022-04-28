import { createContext, useState } from "react";
import AMultiple from "./AMultiple";
import BMultiple from "./BMultiple";
import ParentMultiple from "./ParentMultiple";

// @ts-ignore
export const ThemeContext = createContext();
// @ts-ignore
export const LanguageContext = createContext();

export const { Provider: LangProvider, Consumer: LangConsumer } = LanguageContext;

// @ts-ignore
export const { Provider: ThemeProvider, Consumer: ThemeConsumer } = ThemeContext;

export const MultipleContext = () => {
  const [lang, setLang] = useState("id");
  const [theme, setTheme] = useState("light");

  const changeLang = (e) => setLang(e.target.value);
  const changeTheme = (e) => setTheme(e.target.value);

  const langState = {
    lang: lang,
    changeLang: changeLang,
  };

  const themeState = {
    theme: theme,
    changeTheme: changeTheme,
  };

  return (
    <div>
      <LangProvider value={langState}>
        <ThemeProvider value={themeState}>
          <ParentMultiple />
          <div className="container mt-4">
            <div className="row">
              <div className="col">
                <AMultiple />
              </div>
              <div className="col">
                <BMultiple />
              </div>
            </div>
          </div>
        </ThemeProvider>
      </LangProvider>
    </div>
  );
};
