import ClassComponent from "lifecycle/ClassComponent";
import ParentComponent from "hooks/component-relation/Parent";
import SubscribeBox from "hooks/component-state/SubscribeBox";
import { useState } from "react";

import "./App.css";
import FunctionalComponent from "lifecycle/FunctionalComponent";
import NewsFeed from "case-study/NewsFeed";
import LanguagePage from "context-state-management/pages/LanguagePage";

function App() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => setToggle((currentState) => !currentState);
  return (
    <div className="App">
      {/*  <ParentComponent /> */}
      {/* <SubscribeBox/> */}
      {/* <NewsFeed /> */}
      <LanguagePage />
      {/*       <div>
        <button onClick={handleToggle}>Toggle</button>
        {toggle && <FunctionalComponent />}
      </div> */}
    </div>
  );
}

export default App;
