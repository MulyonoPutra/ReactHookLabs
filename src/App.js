import { useState } from "react";

import "./App.css";
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
