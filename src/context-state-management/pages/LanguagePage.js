import { createContext, useState, useContext } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";

// @ts-ignore
export const LangContext = createContext();
// @ts-ignore
export const ThemeContext = createContext();
// @ts-ignore
export const { Provider: LangProvider, Consumer: LangConsumer } = LangContext;
// @ts-ignore
export const { Provider: ThemeProvider, Consumer: ThemeConsumer } =
  ThemeContext;

function LanguagePage() {
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
    <LangProvider value={langState}>
      <ThemeProvider value={themeState}>
        <Header />
        <Menu />
        <Content />
        <Footer />
      </ThemeProvider>
    </LangProvider>
  );
}

export default LanguagePage;
