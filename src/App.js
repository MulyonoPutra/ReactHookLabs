import { useState } from "react";

import "./App.css";
import Router from "router";
import Header from "views/Header";
import Counter from "state-management/context/use-reducer/Counter";
import UserReducerPageWrapper from "state-management/context/use-reducer/UserReducerPageWrapper";

function App() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => setToggle((currentState) => !currentState);
  return (
    <div className="App">
      <Header />
      <Router/>
      {/* <Counter /> */}
      {/* <UserReducerPageWrapper /> */}
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
