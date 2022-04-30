/* eslint-disable no-undef */
// @ts-nocheck
import { useState, createContext } from "react";
export const LangContext = createContext();
export const ThemeContext = createContext();

const AppContext = () => {
  const LangProvider = (props) => {
    const [lang, setLang] = useState("id");
    const changeLang = (e) => setLang(e.target.value);
    const langState = {
      lang,
      changeLang,
    };

    return (
      <LangContext.Provider value={langState}>
        {props.children}
      </LangContext.Provider>
    );
  };

  const ThemeProvider = (props) => {
    const [theme, setTheme] = useState("light");
    const changeTheme = (e) => setTheme(e.target.value);
    const themeState = {
      theme: theme,
      changeTheme: changeTheme,
    };

    return (
      <ThemeContext.Provider value={themeState}>
        {props.children}
      </ThemeContext.Provider>
    );
  };

  return {
    LangContext,
    LangProvider,
    ThemeContext,
    ThemeProvider,
  };
};

export default AppContext;
