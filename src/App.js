import ClassComponent from "lifecycle/ClassComponent";
import ParentComponent from "hooks/component-relation/Parent";
import SubscribeBox from "hooks/component-state/SubscribeBox";
import { useState } from "react";

import "./App.css";
import FunctionalComponent from "lifecycle/FunctionalComponent";
import NewsFeed from "case-study/NewsFeed";
import LanguagePage from "state-management/pages/LanguagePage";
import Router from "router";
import Header from "views/Header";

function App() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => setToggle((currentState) => !currentState);
  return (
    <div className="App">
      <Header/>
      <Router/>
      {/*  <ParentComponent /> */}
      {/* <SubscribeBox/> */}
      {/* <NewsFeed /> */}
      {/* <LanguagePage /> */}
      {/*       <div>
        <button onClick={handleToggle}>Toggle</button>
        {toggle && <FunctionalComponent />}
      </div> */}
    </div>
  );
}

export default App;
