import { createContext, useState } from "react";
import AComponent from "./AComponent";
import BComponent from "./BComponent";
import Parent from "./Parent";

// @ts-ignore
export const { Provider, Consumer } = createContext();

function SingleContext() {
  const [lang, setLang] = useState("id");

  const changeLang = (e) => setLang(e.target.value);

  const langState = {
    lang: lang,
    changeLang: changeLang,
  };

  return (
    <div>
      <Provider value={langState}>
        <Parent/>
        <div className="container mt-4">
          <div className="row">
            <div className="col">
              <AComponent />
            </div>
            <div className="col">
              <BComponent />
            </div>
          </div>
        </div>
      </Provider>
    </div>
  );
}

export default SingleContext;
