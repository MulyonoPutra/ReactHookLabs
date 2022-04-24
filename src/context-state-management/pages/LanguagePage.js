import GlobalContext from "context-state-management/context/GlobalContext";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";

// @ts-ignore
export const { LangContext, LangProvider, ThemeContext, ThemeProvider } =
  GlobalContext;
function LanguagePage() {
  return (
      <LangProvider>
        <ThemeProvider>
          <Header />
          <Menu />
          <Footer />
        </ThemeProvider>
      </LangProvider>
  );
}

export default LanguagePage;
