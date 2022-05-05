import React from "react";
import Colors from "./components/Colors";
import GetRequest from "./components/GetRequest";
import PostRequest from "./components/PostRequest";

const CustomHookWrapperPages = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            {" "}
            <GetRequest />
          </div>
          <div className="col">
            <PostRequest />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomHookWrapperPages;
